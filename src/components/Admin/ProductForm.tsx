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
}

interface ProductFormProps {
    product: Product | null;
    onClose: () => void;
}

const categories = [
    "T-Shirts",
    "Hoodies",
    "Shorts",
    "Pants",
    "Vintage-Jacket",
    "Frock",
    "Blouse",
    "Accessories",
    "Oversized-Fits",
    "Full-Kits",
];

export default function ProductForm({ product, onClose }: ProductFormProps) {
    const [formData, setFormData] = useState<Product>({
        name: "",
        description: "",
        price: 0,
        category: "T-Shirts",
        size: "",
        color: "",
        stock: 0,
        image_url: "",
        is_active: true,
        featured: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (product) {
            setFormData(product);
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const token = localStorage.getItem("adminToken");
            const url = product
                ? `http://localhost:5000/api/v1/products/${product.id}`
                : "http://localhost:5000/api/v1/products";

            const response = await fetch(url, {
                method: product ? "PUT" : "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
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
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Size</label>
                        <input
                            type="text"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="e.g., S, M, L, XL"
                        />
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Color</label>
                        <input
                            type="text"
                            name="color"
                            value={formData.color}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="e.g., Black, White, Blue"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label}>Image URL</label>
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
