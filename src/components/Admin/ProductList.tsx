"use client";
import Image from "next/image";
import styles from "./ProductList.module.css";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    subcategory?: string;
    size?: string;
    color?: string;
    stock: number;
    image_url?: string;
    is_active: boolean;
    featured: boolean;
}

interface ProductListProps {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (id: number) => void;
    onToggleActive: (product: Product) => void;
    onToggleStock: (product: Product) => void;
}

export default function ProductList({ products, onEdit, onDelete, onToggleActive, onToggleStock }: ProductListProps) {
    return (
        <div className={styles.productList}>
            <div className={styles.tableContainer}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <div className={styles.imageCell}>
                                        {product.image_url ? (
                                            <Image
                                                src={product.image_url}
                                                alt={product.name}
                                                width={50}
                                                height={50}
                                                className={styles.productImage}
                                            />
                                        ) : (
                                            <div className={styles.noImage}>📦</div>
                                        )}
                                    </div>
                                </td>
                                <td>
                                    <div className={styles.nameCell}>
                                        <div className={styles.productName}>{product.name}</div>
                                        {product.size && (
                                            <div className={styles.meta}>
                                                Size: {product.size}
                                            </div>
                                        )}
                                        {product.color && (
                                            <div className={styles.meta}>
                                                Color: {product.color}
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div>{product.category}</div>
                                        {product.subcategory && (
                                            <div className={styles.meta}>
                                                {product.subcategory}
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className={styles.price}>${Number(product.price).toFixed(2)}</td>
                                <td>
                                    <button
                                        onClick={() => onToggleStock(product)}
                                        className={`${styles.stock} ${
                                            product.stock === 0
                                                ? styles.outOfStock
                                                : product.stock < 10
                                                ? styles.lowStock
                                                : styles.inStock
                                        }`}
                                        title={product.stock === 0 ? "Mark as In Stock" : "Mark as Out of Stock"}
                                    >
                                        {product.stock}
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => onToggleActive(product)}
                                        className={`${styles.badge} ${
                                            product.is_active
                                                ? styles.badgeActive
                                                : styles.badgeInactive
                                        }`}
                                        title={product.is_active ? "Deactivate" : "Activate"}
                                    >
                                        {product.is_active ? "Active" : "Inactive"}
                                    </button>
                                </td>
                                <td>
                                    <div className={styles.actions}>
                                        <button
                                            onClick={() => onEdit(product)}
                                            className={styles.editButton}
                                            title="Edit"
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            onClick={() => onDelete(product.id)}
                                            className={styles.deleteButton}
                                            title="Delete"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {products.length === 0 && (
                <div className={styles.emptyState}>
                    <div className={styles.emptyIcon}>📦</div>
                    <h3>No Products Found</h3>
                    <p>Start by adding your first product</p>
                </div>
            )}
        </div>
    );
}
