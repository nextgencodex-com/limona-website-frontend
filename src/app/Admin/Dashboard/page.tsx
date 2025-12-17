"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "@/components/Admin/AdminLayout";
import ProductForm from "@/components/Admin/ProductForm";
import ProductList from "@/components/Admin/ProductList";
import styles from "./dashboard.module.css";

interface Product {
    id: number;
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

export default function AdminDashboard() {
    const router = useRouter();
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);
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
            const response = await fetch("http://localhost:5000/api/v1/products", {
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

    const handleAddProduct = () => {
        setEditingProduct(null);
        setShowForm(true);
    };

    const handleEditProduct = (product: Product) => {
        setEditingProduct(product);
        setShowForm(true);
    };

    const handleDeleteProduct = async (id: number) => {
        if (!confirm("Are you sure you want to delete this product?")) {
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:5000/api/v1/products/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            if (data.success) {
                fetchProducts();
            }
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    const handleFormClose = () => {
        setShowForm(false);
        setEditingProduct(null);
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
                        />
                    </div>
                )}

                <ProductList
                    products={products}
                    onEdit={handleEditProduct}
                    onDelete={handleDeleteProduct}
                />
            </div>
        </AdminLayout>
    );
}
