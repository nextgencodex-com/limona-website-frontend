"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/Admin/AdminLayout";
import ProductForm from "@/components/Admin/ProductForm";
import ProductList from "@/components/Admin/ProductList";
import Notification from "@/components/Admin/Notification";
import styles from "./dashboard.module.css";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    price_sml?: number;
    price_xl_2xl?: number;
    category: string;
    size?: string;
    color?: string;
    stock: number;
    image_url?: string;
    is_active: boolean;
    featured: boolean;
}

const API_BASE = 'https://backend.srilankawildsafari.com';

export default function AdminDashboard() {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
    const [notification, setNotification] = useState<{
        show: boolean;
        message: string;
        type: "success" | "error" | "info";
    }>({ show: false, message: "", type: "success" });
    const [stats, setStats] = useState({
        totalProducts: 0,
        activeProducts: 0,
        totalStock: 0,
        categories: 0,
    });

    useEffect(() => {
        // Check authentication
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/Admin/Login");
            return;
        }

        fetchProducts();
    }, [router]);

    const fetchProducts = async () => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE}/api/v1/products`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            if (data.success) {
                setProducts(data.data);
                calculateStats(data.data);
            }
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    const calculateStats = (products: Product[]) => {
        const activeProducts = products.filter((p) => p.is_active).length;
        const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
        const categories = new Set(products.map((p) => p.category)).size;

        setStats({
            totalProducts: products.length,
            activeProducts,
            totalStock,
            categories,
        });
    };

    const showNotification = (message: string, type: "success" | "error" | "info") => {
        setNotification({ show: true, message, type });
    };

    const closeNotification = () => {
        setNotification({ show: false, message: "", type: "success" });
    };

    const handleAddProduct = () => {
        setEditingProduct(null);
        setShowForm(true);
    };

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
        setShowForm(true);
    };

    const handleToggleActive = async (product: Product) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE}/api/v1/products/${product.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ...product,
                    is_active: !product.is_active,
                }),
            });

            const data = await response.json();
            if (data.success) {
                showNotification(
                    `Product ${!product.is_active ? "activated" : "deactivated"} successfully!`,
                    "success"
                );
                fetchProducts();
            } else {
                showNotification("Failed to update product status", "error");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            showNotification("Error updating product status", "error");
        }
    };

    const handleToggleStock = async (product: Product) => {
        try {
            const token = localStorage.getItem("token");
            const newStock = product.stock === 0 ? 1 : 0;
            const response = await fetch(`${API_BASE}/api/v1/products/${product.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ...product,
                    stock: newStock,
                }),
            });

            const data = await response.json();
            if (data.success) {
                showNotification(
                    `Product marked as ${newStock === 0 ? "out of stock" : "in stock"}!`,
                    "success"
                );
                fetchProducts();
            } else {
                showNotification("Failed to update stock status", "error");
            }
        } catch (error) {
            console.error("Error updating stock:", error);
            showNotification("Error updating stock status", "error");
        }
    };

    const handleDeleteProduct = async (id: number) => {
        if (!confirm("Are you sure you want to delete this product?")) {
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${API_BASE}/api/v1/products/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            if (data.success) {
                showNotification("Product deleted successfully!", "success");
                fetchProducts();
            } else {
                showNotification("Failed to delete product", "error");
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            showNotification("Error deleting product", "error");
        }
    };

    const handleFormClose = (saved?: boolean, isEdit?: boolean) => {
        setShowForm(false);
        setEditingProduct(null);
        if (saved) {
            const message = isEdit 
                ? "Product updated successfully!" 
                : "Product added successfully!";
            showNotification(message, "success");
        }
        fetchProducts();
    };

    if (loading) {
        return (
            <AdminLayout>
                <div className={styles.loading}>Loading...</div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            {notification.show && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={closeNotification}
                />
            )}
            <div className={styles.dashboard}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Product Management</h1>
                    <button onClick={handleAddProduct} className={styles.addButton}>
                        + Add New Product
                    </button>
                </div>

                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>📦</div>
                        <div className={styles.statContent}>
                            <div className={styles.statValue}>{stats.totalProducts}</div>
                            <div className={styles.statLabel}>Total Products</div>
                        </div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>✓</div>
                        <div className={styles.statContent}>
                            <div className={styles.statValue}>{stats.activeProducts}</div>
                            <div className={styles.statLabel}>Active Products</div>
                        </div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>📊</div>
                        <div className={styles.statContent}>
                            <div className={styles.statValue}>{stats.totalStock}</div>
                            <div className={styles.statLabel}>Total Stock</div>
                        </div>
                    </div>
                    <div className={styles.statCard}>
                        <div className={styles.statIcon}>🏷️</div>
                        <div className={styles.statContent}>
                            <div className={styles.statValue}>{stats.categories}</div>
                            <div className={styles.statLabel}>Categories</div>
                        </div>
                    </div>
                </div>

                {showForm && (
                    <div className={styles.formModal}>
                        <ProductForm
                            product={editingProduct}
                            onClose={handleFormClose}
                            onSuccess={fetchProducts}
                        />
                    </div>
                )}

                <ProductList
                    products={products}
                    onEdit={handleEditProduct}
                    onDelete={handleDeleteProduct}
                    onToggleActive={handleToggleActive}
                    onToggleStock={handleToggleStock}
                />
            </div>
        </AdminLayout>
    );
}
