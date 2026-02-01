"use client";
import { ReactNode, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./AdminLayout.module.css";

interface AdminLayoutProps {
    children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [adminUser, setAdminUser] = useState<any>({ username: "Admin" });
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        // Load admin user from localStorage on client side only
        const storedAdmin = localStorage.getItem("admin");
        if (storedAdmin) {
            setAdminUser(JSON.parse(storedAdmin));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        router.push("/");
    };

    return (
        <div className={styles.layout}>
            {sidebarOpen && (
                <div 
                    className={styles.overlay}
                    onClick={() => setSidebarOpen(false)}
                />
            )}
            <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ''}`}>
                <div className={styles.sidebarHeader}>
                    <div className={styles.logo}>
                        <h2 className={styles.brandName}>LIMONA</h2>
                        <p className={styles.adminText}>Admin Panel</p>
                    </div>
                    <button 
                        className={styles.mobileCloseButton}
                        onClick={() => setSidebarOpen(false)}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>

                <nav className={styles.nav}>
                    <Link 
                        href="/Admin/Dashboard" 
                        className={`${styles.navItem} ${pathname === "/Admin/Dashboard" ? styles.active : ""}`}
                    >
                        <span className={styles.navIcon}>📊</span>
                        Dashboard
                    </Link>
                    <Link 
                        href="/Admin/Categories" 
                        className={`${styles.navItem} ${pathname === "/Admin/Categories" ? styles.active : ""}`}
                    >
                        <span className={styles.navIcon}>📂</span>
                        Categories
                    </Link>
                    {/* <Link 
                        href="/Admin/Products" 
                        className={`${styles.navItem} ${pathname === "/Admin/Products" ? styles.active : ""}`}
                    >
                        <span className={styles.navIcon}>📦</span>
                        Products
                    </Link>
                    <Link 
                        href="/Admin/Orders" 
                        className={`${styles.navItem} ${pathname === "/Admin/Orders" ? styles.active : ""}`}
                    >
                        <span className={styles.navIcon}>📝</span>
                        Orders
                    </Link>
                    <Link 
                        href="/Admin/Customers" 
                        className={`${styles.navItem} ${pathname === "/Admin/Customers" ? styles.active : ""}`}
                    >
                        <span className={styles.navIcon}>👥</span>
                        Customers
                    </Link>
                    <Link 
                        href="/Admin/Settings" 
                        className={`${styles.navItem} ${pathname === "/Admin/Settings" ? styles.active : ""}`}
                    >
                        <span className={styles.navIcon}>⚙️</span>
                        Settings
                    </Link> */}
                </nav>
            </aside>

            <div className={styles.main}>
                <header className={styles.header}>
                    <button 
                        className={styles.mobileMenuButton}
                        onClick={() => setSidebarOpen(true)}
                        aria-label="Open menu"
                    >
                        ☰
                    </button>
                    <div className={styles.headerLeft}>
                        <h3 className={styles.greeting}>
                            Welcome back, {adminUser.username}!
                        </h3>
                    </div>
                    <div className={styles.headerRight}>
                        <Link href="/" className={styles.backButton}>
                            <span className={styles.backButtonText}>← Back to Website</span>
                        </Link>
                        <button onClick={handleLogout} className={styles.logoutButton}>
                            <span className={styles.logoutButtonText}>Logout</span>
                        </button>
                    </div>
                </header>

                <main className={styles.content}>{children}</main>
            </div>
        </div>
    );
}
