"use client";
import { useState, useEffect } from "react";
import styles from "./ProductForm.module.css";

interface Product {
    id?: number;
    name: string;
    description: string;
    price: number;
    price_sml?: number;
    price_xl_2xl?: number;
    category: string;
    subcategory?: string;
    size?: string;
    color?: string;
    stock: number;
    image_url?: string;
    image_url_2?: string;
    image_url_3?: string;
    size_chart_url?: string;
    is_active: boolean;
    featured: boolean;
    latest_arrival?: boolean;
}

interface ProductFormProps {
    product: Product | null;
    onClose: (saved?: boolean, isEdit?: boolean) => void;
    onSuccess?: () => void;
}

interface CategoryApiResponse {
    id: number;
    name: string;
    is_active: boolean;
    coming_soon: boolean;
    subcategories?: SubcategoryApiResponse[];
}

interface SubcategoryApiResponse {
    id: number;
    name: string;
    is_active: boolean;
    coming_soon: boolean;
}

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
const API_BASE = 'https://backend.srilankawildsafari.com';

const toAbsoluteImageUrl = (url?: string | null) => {
    if (!url) return "";
    try {
        const api = new URL(API_BASE);
        const parsed = new URL(url, API_BASE);
        const isUploads = parsed.pathname.startsWith('/uploads/');
        if (isUploads && parsed.host !== api.host) {
            return `${API_BASE}${parsed.pathname}`;
        }
        return parsed.href;
    } catch {
        return `${API_BASE}${url.startsWith('/') ? url : `/${url}`}`;
    }
};

export default function ProductForm({ product, onClose, onSuccess }: ProductFormProps) {
    const [categoryOptions, setCategoryOptions] = useState<string[]>([]);
    const [categorySubcategories, setCategorySubcategories] = useState<{[key: string]: any[]}>({});
    const [formData, setFormData] = useState<Product>({
        name: "",
        description: "",
        price: 0,
        price_sml: 0,
        price_xl_2xl: 0,
        category: "",
        subcategory: "",
        size: "",
        color: "",
        stock: 0,
        image_url: "",
        image_url_2: "",
        image_url_3: "",
        size_chart_url: "",
        is_active: true,
        featured: false,
        latest_arrival: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [uploading, setUploading] = useState(false);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imageFile2, setImageFile2] = useState<File | null>(null);
    const [imageFile3, setImageFile3] = useState<File | null>(null);
    const [sizeChartFile, setSizeChartFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>("");
    const [imagePreview2, setImagePreview2] = useState<string>("");
    const [imagePreview3, setImagePreview3] = useState<string>("");
    const [sizeChartPreview, setSizeChartPreview] = useState<string>("");
    const [selectedColors, setSelectedColors] = useState<string[]>([]);
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const [customColor, setCustomColor] = useState<string>("");

    // Fetch categories and subcategories for dynamic product classification
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://backend.srilankawildsafari.com/api/v1/categories");
                const data = await response.json();
                
                const categories: CategoryApiResponse[] = data.success ? data.data : data;
                
                if (categories && Array.isArray(categories)) {
                    const availableCategories = categories
                        .filter((category) => category.is_active)
                        .map((category) => category.name);
                    setCategoryOptions(availableCategories);

                    setFormData((prev) => {
                        if (prev.category) return prev;
                        return { ...prev, category: availableCategories[0] || "" };
                    });

                    // Group subcategories by category
                    const subsByCategory: {[key: string]: SubcategoryApiResponse[]} = {};
                    categories.forEach((category) => {
                        if (category.subcategories && category.subcategories.length > 0) {
                            // Keep all active subcategories for the selected category
                            subsByCategory[category.name] = category.subcategories.filter(
                                (sub) => sub.is_active
                            );
                        }
                    });
                    setCategorySubcategories(subsByCategory);
                }
            } catch (error) {
                console.error("Failed to fetch categories:", error);
            }
        };
        fetchCategories();
    }, []);

    const selectableCategories = formData.category && !categoryOptions.includes(formData.category)
        ? [formData.category, ...categoryOptions]
        : categoryOptions;

    useEffect(() => {
        if (product) {
            setFormData({
                ...product,
                price: Number(product.price),
                price_sml: Number((product as any).price_sml ?? product.price),
                price_xl_2xl: Number((product as any).price_xl_2xl ?? product.price),
                stock: Number(product.stock)
            });
            setImagePreview(product.image_url || "");
            setImagePreview2(product.image_url_2 || "");
            setImagePreview3(product.image_url_3 || "");
            setSizeChartPreview(product.size_chart_url || "");
            
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
        } else if (name === "price" || name === "price_sml" || name === "price_xl_2xl" || name === "stock") {
            // Allow empty string during typing, convert to number only if valid
            const numValue = value === '' ? '' : value;
            setFormData({ ...formData, [name]: numValue as any });
        } else {
            // Reset subcategory when category changes
            if (name === "category") {
                setFormData({ ...formData, [name]: value, subcategory: "" });
            } else {
                setFormData({ ...formData, [name]: value });
            }
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

    const addCustomColor = () => {
        if (customColor && !selectedColors.includes(customColor)) {
            const newColors = [...selectedColors, customColor];
            setSelectedColors(newColors);
            setFormData({ ...formData, color: newColors.join(', ') });
            setCustomColor("");
        }
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

    const handleImageChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile2(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview2(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleImageChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile3(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview3(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSizeChartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSizeChartFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setSizeChartPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImage = async (file: File | null, fieldName: string): Promise<string | null> => {
        if (!file) return null;

        setUploading(true);
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("No authentication token found. Please login again.");
                window.location.href = "/";
                throw new Error("No authentication token found");
            }

            const formDataUpload = new FormData();
            formDataUpload.append("image", file);

            const response = await fetch("https://backend.srilankawildsafari.com/api/v1/upload/product-image", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                body: formDataUpload,
            });
            
            if (response.status === 401 || response.status === 403) {
                setError("Session expired. Please login again.");
                localStorage.removeItem("token");
                localStorage.removeItem("admin");
                window.location.href = "/";
                throw new Error("Invalid or expired token");
            }

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || `Upload failed with status ${response.status}`);
            }

            // Handle different response formats from backend
            let imageUrl = null;
            
            if (data.success && data.data && data.data.image_url) {
                imageUrl = data.data.image_url;
            } else if (data.data && typeof data.data === 'string') {
                // Backend might return just the URL as string
                imageUrl = data.data;
            } else if (data.image_url) {
                // Backend might return image_url directly
                imageUrl = data.image_url;
            } else if (data.url) {
                // Backend might return just 'url'
                imageUrl = data.url;
            }

            if (!imageUrl) {
                console.error("No image URL in response:", data);
                throw new Error("No image URL returned from server");
            }

            console.log("Image uploaded successfully:", imageUrl);
            return imageUrl;
        } catch (err: any) {
            console.error(`${fieldName} upload error:`, err);
            setError(`${fieldName} upload failed: ${err.message}`);
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
            // Upload all images
            const imageUrl = imageFile 
                ? await uploadImage(imageFile, "Image 1") 
                : formData.image_url;
            
            const imageUrl2 = imageFile2 
                ? await uploadImage(imageFile2, "Image 2") 
                : formData.image_url_2;
            
            const imageUrl3 = imageFile3 
                ? await uploadImage(imageFile3, "Image 3") 
                : formData.image_url_3;
            
            const sizeChartUrl = sizeChartFile 
                ? await uploadImage(sizeChartFile, "Size Chart") 
                : formData.size_chart_url;

            // Check if any uploads failed
            if ((imageFile && !imageUrl) || 
                (imageFile2 && !imageUrl2) || 
                (imageFile3 && !imageUrl3) || 
                (sizeChartFile && !sizeChartUrl)) {
                setLoading(false);
                return;
            }

            const token = localStorage.getItem("token");
            if (!token) {
                throw new Error("No authentication token found. Please login again.");
            }

            const url = product
                ? `https://backend.srilankawildsafari.com/api/v1/products/${product.id}`
                : "https://backend.srilankawildsafari.com/api/v1/products";

            const productData = {
                ...formData,
                image_url: imageUrl,
                // Ensure required fields have default values
                name: formData.name?.trim() || '',
                category: formData.category || '',
                price: Number(formData.price) || 0,
                stock: Number(formData.stock) || 0,
            };

            console.log("Sending product data:", productData);
            console.log("Image URL to be saved:", imageUrl);

            const response = await fetch(url, {
                method: product ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ...formData,
                    price: formData.price_sml,
                    image_url: imageUrl,
                    image_url_2: imageUrl2,
                    image_url_3: imageUrl3,
                    size_chart_url: sizeChartUrl
                }),
            });

            console.log("Product API response status:", response.status);
            
            const data = await response.json();
            console.log("Product API response data:", data);

            if (!response.ok) {
                const errorMessage = data.error || data.message || `Failed to save product (${response.status})`;
                console.error("Product save failed:", errorMessage, data);
                throw new Error(errorMessage);
            }

            // Verify the saved product has the image URL
            if (data.data && data.data.image_url) {
                console.log("✓ Product saved with image URL:", data.data.image_url);
            } else if (imageUrl) {
                console.warn("⚠ Product saved but response doesn't show image URL. Expected:", imageUrl);
            }

            // Dispatch custom event for real-time updates
            window.dispatchEvent(new CustomEvent('productUpdated', { 
                detail: { product: data.data } 
            }));

            // Call onSuccess callback to refresh parent component
            if (onSuccess) {
                onSuccess();
            }
            onClose(true, !!product);
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
                <button onClick={() => onClose()} className={styles.closeButton}>
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
                        <label className={styles.label}>Price (S, M, L) *</label>
                        <input
                            type="number"
                            name="price_sml"
                            value={formData.price_sml}
                            onChange={handleChange}
                            className={styles.input}
                            step="0.01"
                            min="0"
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Price (XL, 2XL) *</label>
                        <input
                            type="number"
                            name="price_xl_2xl"
                            value={formData.price_xl_2xl}
                            onChange={handleChange}
                            className={styles.input}
                            step="0.01"
                            min="0"
                            required
                        />
                        <small className={styles.helpText}>Used when customer selects XL or 2XL</small>
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Stock *</label>
                        <input
                            type="number"
                            name="stock"
                            value={formData.stock}
                            onChange={handleChange}
                            className={styles.input}
                            min="0"
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
                            <option value="" disabled>
                                Select category
                            </option>
                            {selectableCategories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>
                    </div>
                    {categorySubcategories[formData.category] && categorySubcategories[formData.category].length > 0 && (
                        <div className={styles.formGroup}>
                            <label className={styles.label}>Subcategory</label>
                            <select
                                name="subcategory"
                                value={formData.subcategory || ""}
                                onChange={handleChange}
                                className={styles.select}
                            >
                                <option value="">Select subcategory</option>
                                {categorySubcategories[formData.category].map((sub: any) => (
                                    <option key={sub.id} value={sub.name}>
                                        {sub.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
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
                        
                        <div className={styles.customColorInput}>
                            <input
                                type="text"
                                value={customColor}
                                onChange={(e) => setCustomColor(e.target.value)}
                                placeholder="Add custom color (e.g., #FF5733 or Red)"
                                className={styles.input}
                            />
                            <button
                                type="button"
                                onClick={addCustomColor}
                                className={styles.addColorButton}
                                disabled={!customColor}
                            >
                                Add Color
                            </button>
                            {customColor && customColor.startsWith('#') && (
                                <div 
                                    className={styles.colorPreview}
                                    style={{ backgroundColor: customColor }}
                                    title="Color preview"
                                />
                            )}
                        </div>
                        
                        <small className={styles.helpText}>Selected: {selectedColors.join(', ') || 'None'}</small>
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Product Image 1 *</label>
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
                                <img src={imagePreview} alt="Product preview 1" style={{ maxWidth: '150px', marginTop: '10px', borderRadius: '8px' }} />
                            </div>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Product Image 2</label>
                        <input
                            type="file"
                            id="image2"
                            name="image2"
                            accept="image/*"
                            onChange={handleImageChange2}
                            className={styles.input}
                        />
                        {imagePreview2 && (
                            <div className={styles.imagePreview}>
                                <img src={imagePreview2} alt="Product preview 2" style={{ maxWidth: '150px', marginTop: '10px', borderRadius: '8px' }} />
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Product Image 3</label>
                        <input
                            type="file"
                            id="image3"
                            name="image3"
                            accept="image/*"
                            onChange={handleImageChange3}
                            className={styles.input}
                        />
                        {imagePreview3 && (
                            <div className={styles.imagePreview}>
                                <img src={imagePreview3} alt="Product preview 3" style={{ maxWidth: '150px', marginTop: '10px', borderRadius: '8px' }} />
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Size Chart Image</label>
                        <input
                            type="file"
                            id="sizeChart"
                            name="sizeChart"
                            accept="image/*"
                            onChange={handleSizeChartChange}
                            className={styles.input}
                        />
                        {sizeChartPreview && (
                            <div className={styles.imagePreview}>
                                <img src={sizeChartPreview} alt="Size chart preview" style={{ maxWidth: '150px', marginTop: '10px', borderRadius: '8px' }} />
                            </div>
                        )}
                    </div>
                </div>
                
                {uploading && <p style={{ color: '#666', fontSize: '14px', marginTop: '5px' }}>Uploading images...</p>}

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
                        onClick={() => onClose()}
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
