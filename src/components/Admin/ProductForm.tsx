"use client";
import { useState, useEffect } from "react";
import styles from "./ProductForm.module.css";

interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    category: string;
    size?: string;
    color?: string;
    stock: number;
    image_url?: string;
    is_active: boolean;
    featured: boolean;
    latest_arrival?: boolean;
}

interface ProductFormProps {
    product: Product | null;
    onClose: () => void;
}

const categories = [
    "Men",
    "Women",
    "Kids",
    "Accessories",
    "Limited Edition",
];

const availableColors = [
    { name: "Black", hex: "#000000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Navy", hex: "#1E3A8A" },
    { name: "Red", hex: "#DC2626" },
    { name: "Blue", hex: "#3B82F6" },
    { name: "Green", hex: "#10B981" },
    { name: "Yellow", hex: "#FCD34D" },
    { name: "Purple", hex: "#8B5CF6" },
    { name: "Pink", hex: "#EC4899" },
    { name: "Orange", hex: "#F97316" },
    { name: "Gray", hex: "#6B7280" },
    { name: "Brown", hex: "#92400E" },
];

const availableSizes = ["S", "M", "L", "XL", "2XL"];

export default function ProductForm({ product, onClose }: ProductFormProps) {
    const [formData, setFormData] = useState<Product>({
        name: "",
        description: "",
        price: 0,
        category: "Men",
        size: "",
        color: "",
        stock: 0,
        image_url: "",
        is_active: true,
        featured: false,
        latest_arrival: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>("");
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    useEffect(() => {
        if (product) {
            setFormData({
                ...product,
                price: Number(product.price),
                stock: Number(product.stock)
            });
            setImagePreview(product.image_url || "");
            
            // Parse existing colors and sizes
            if (product.color) {
                setSelectedColors(product.color.split(',').map(c => c.trim()));
            }
            if (product.size) {
                setSelectedSizes(product.size.split(',').map(s => s.trim()));
            }
        }
    }, [product]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;
        
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData({ ...formData, [name]: checked });
        } else if (name === "price" || name === "stock") {
            setFormData({ ...formData, [name]: parseFloat(value) || 0 });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const toggleColor = (colorName: string) => {
        setSelectedColors(prev => {
            const newColors = prev.includes(colorName)
                ? prev.filter(c => c !== colorName)
                : [...prev, colorName];
            setFormData({ ...formData, color: newColors.join(', ') });
            return newColors;
        });
    };

    const toggleSize = (size: string) => {
        setSelectedSizes(prev => {
            const newSizes = prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size];
            setFormData({ ...formData, size: newSizes.join(', ') });
            return newSizes;
        });
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImage = async (): Promise<string | null> => {
        if (!imageFile) return formData.image_url || null;

        setUploading(true);
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No authentication token found. Please login again.");
            }

            const formDataUpload = new FormData();
            formDataUpload.append("image", imageFile);

            console.log("Uploading image:", imageFile.name);

            const response = await fetch("http://localhost:5000/api/v1/upload/product-image", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formDataUpload,
            });

            console.log("Upload response status:", response.status);
            const data = await response.json();
            console.log("Upload response data:", data);

            if (!response.ok) {
                throw new Error(data.error || `Upload failed with status ${response.status}`);
            }

            if (!data.success || !data.data || !data.data.image_url) {
                throw new Error("Invalid response from server");
            }

            return data.data.image_url;
        } catch (err: any) {
            console.error("Upload error:", err);
            setError(`Image upload failed: ${err.message}`);
            return null;
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            // Upload image first if there's a new one
            let imageUrl = formData.image_url;
            if (imageFile) {
                const uploadedUrl = await uploadImage();
                if (!uploadedUrl) {
                    setLoading(false);
                    return; // Error already set in uploadImage
                }
                imageUrl = uploadedUrl;
            }

            const token = localStorage.getItem("token");
            const url = product
                ? `http://localhost:5000/api/v1/products/${product.id}`
                : "http://localhost:5000/api/v1/products";

            const response = await fetch(url, {
                method: product ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ...formData,
                    image_url: imageUrl
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to save product");
            }

            onClose();
        } catch (err: any) {
            setError(err.message || "Failed to save product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.formContainer}>
            <div className={styles.formHeader}>
                <h2 className={styles.formTitle}>
                    {product ? "Edit Product" : "Add New Product"}
                </h2>
                <button onClick={onClose} className={styles.closeButton}>
                    ✕
                </button>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
                {error && <div className={styles.error}>{error}</div>}

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Product Name *</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className={styles.textarea}
                            rows={4}
                        />
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Price ($) *</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className={styles.input}
                            step="0.01"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Stock *</label>
                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className={styles.input}
                            required
                        />
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Category *</label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className={styles.select}
                            required
                        >
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Available Sizes</label>
                        <div className={styles.sizeSelector}>
                            {availableSizes.map((size) => (
                                <button
                                    key={size}
                                    type="button"
                                    onClick={() => toggleSize(size)}
                                    className={`${styles.sizeButton} ${selectedSizes.includes(size) ? styles.sizeButtonSelected : ''}`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <small className={styles.helpText}>Selected: {selectedSizes.join(', ') || 'None'}</small>
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Available Colors</label>
                        <div className={styles.colorPalette}>
                            {availableColors.map((color) => (
                                <button
                                    key={color.name}
                                    type="button"
                                    onClick={() => toggleColor(color.name)}
                                    className={`${styles.colorButton} ${selectedColors.includes(color.name) ? styles.colorButtonSelected : ''}`}
                                    style={{ backgroundColor: color.hex }}
                                    title={color.name}
                                >
                                    {selectedColors.includes(color.name) && (
                                        <span className={styles.checkmark}>✓</span>
                                    )}
                                </button>
                            ))}
                        </div>
                        <small className={styles.helpText}>Selected: {selectedColors.join(', ') || 'None'}</small>
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Product Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleImageChange}
                            className={styles.input}
                        />
                        {imagePreview && (
                            <div className={styles.imagePreview}>
                                <img src={imagePreview} alt="Product preview" style={{ maxWidth: '200px', marginTop: '10px', borderRadius: '8px' }} />
                            </div>
                        )}
                        {uploading && <p style={{ color: '#666', fontSize: '14px', marginTop: '5px' }}>Uploading image...</p>}
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Image URL (or upload above)</label>
                        <input
                            type="text"
                            name="image_url"
                            value={formData.image_url}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="/images/category/product.jpg"
                        />
                    </div>
                </div>

                <div className={styles.checkboxGroup}>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="is_active"
                            checked={formData.is_active}
                            onChange={handleChange}
                            className={styles.checkbox}
                        />
                        Active (Show on website)
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="featured"
                            checked={formData.featured}
                            onChange={handleChange}
                            className={styles.checkbox}
                        />
                        Featured Product
                    </label>
                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="latest_arrival"
                            checked={formData.latest_arrival || false}
                            onChange={handleChange}
                            className={styles.checkbox}
                        />
                        Latest Arrival
                    </label>
                </div>

                <div className={styles.formActions}>
                    <button
                        type="button"
                        onClick={onClose}
                        className={styles.cancelButton}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={loading}
                    >
                        {loading ? "Saving..." : product ? "Update Product" : "Add Product"}
                    </button>
                </div>
            </form>
        </div>
    );
}
