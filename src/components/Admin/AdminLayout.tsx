"use client";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import styles from "./AdminLayout.module.css";

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");
        router.push("/Admin/Login");
    };

    const adminUser = typeof window !== "undefined" 
        ? JSON.parse(localStorage.getItem("adminUser") || "{}") 
        : {};

    return (
        <div className={styles.layout}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>
                    <h2 className={styles.brandName}>LIMONA</h2>
                    <p className={styles.adminText}>Admin Panel</p>
                </div>

                <nav className={styles.nav}>
                    <a href="/Admin/Dashboard" className={styles.navItem}>
                        <span className={styles.navIcon}>📊</span>
                        Dashboard
                    </a>
                    <a href="/Admin/Dashboard" className={`${styles.navItem} ${styles.active}`}>
                        <span className={styles.navIcon}>📦</span>
                        Products
                    </a>
                    <a href="#" className={styles.navItem}>
                        <span className={styles.navIcon}>📝</span>
                        Orders
                    </a>
                    <a href="#" className={styles.navItem}>
                        <span className={styles.navIcon}>👥</span>
                        Customers
                    </a>
                    <a href="#" className={styles.navItem}>
                        <span className={styles.navIcon}>⚙️</span>
                        Settings
                    </a>
                </nav>
            </aside>

            <div className={styles.main}>
                <header className={styles.header}>
                    <div className={styles.headerLeft}>
                        <h3 className={styles.greeting}>
                            Welcome back, {adminUser.username || "Admin"}!
                        </h3>
                    </div>
                    <div className={styles.headerRight}>
                        <button onClick={handleLogout} className={styles.logoutButton}>
                            Logout
                        </button>
                    </div>
                </header>

                <main className={styles.content}>{children}</main>
            </div>
        </div>
    );
}
