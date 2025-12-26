"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "./header.module.css";
import { useCart } from "../../contexts/CartContext";
import CartPopup from "../CartPopup/CartPopup";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminUser, setAdminUser] = useState<any>(null);
    const [loginError, setLoginError] = useState("");
    const [loginLoading, setLoginLoading] = useState(false);
    
    const { getTotalItems, toggleCart } = useCart();
    const navItems = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/Products" },
        { label: "Customize", href: "/Customize-Your-Own" },
        { label: "About", href: "/About" },
        { label: "Contact", href: "/Contact" },
    ];

    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const userMenuRef = useRef<HTMLDivElement | null>(null);
    const userButtonRef = useRef<HTMLButtonElement | null>(null);

    // Close menus when clicking outside or pressing Escape
    useEffect(() => {
        // Check if admin is logged in
        const token = localStorage.getItem("token");
        const admin = localStorage.getItem("admin");
        
        if (token && admin && admin !== "undefined" && admin !== "null") {
            try {
                setIsLoggedIn(true);
                setIsAdmin(true);
                setAdminUser(JSON.parse(admin));
            } catch (error) {
                console.error("Failed to parse admin data:", error);
                // Clear invalid data
                localStorage.removeItem("admin");
                localStorage.removeItem("token");
            }
        }

        function onPointerDown(e: PointerEvent | MouseEvent) {
            if (!menuOpen && !userMenuOpen) return;
            const target = e.target as Node | null;
            if (!target) return;
            
            const clickedInsideMenu = menuRef.current?.contains(target);
            const clickedOnButton = buttonRef.current?.contains(target);
            const clickedInsideUserMenu = userMenuRef.current?.contains(target);
            const clickedOnUserButton = userButtonRef.current?.contains(target);
            
            if (menuOpen && !clickedInsideMenu && !clickedOnButton) {
                setMenuOpen(false);
            }
            
            if (userMenuOpen && !clickedInsideUserMenu && !clickedOnUserButton) {
                setUserMenuOpen(false);
            }
        }

        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") {
                setMenuOpen(false);
                setUserMenuOpen(false);
            }
        }

        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [menuOpen, userMenuOpen]);

    // Handle login form submission
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginError("");
        setLoginLoading(true);

        const form = e.target as HTMLFormElement;
        const emailInput = form.elements.namedItem("email") as HTMLInputElement;
        const passwordInput = form.elements.namedItem("password") as HTMLInputElement;
        
        const email = emailInput?.value || "";
        const password = passwordInput?.value || "";

        console.log("Login attempt:", { email, passwordLength: password.length }); // Debug

        if (!email || !password) {
            setLoginError("Please enter both email and password");
            setLoginLoading(false);
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/v1/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            console.log("Login response:", data); // Debug log

            if (!response.ok) {
                throw new Error(data.error || data.message || "Login failed");
            }

            // Store token and admin data - check the response structure
            const token = data.token || data.data?.token;
            const admin = data.admin || data.data?.admin;

            if (!token || !admin) {
                throw new Error("Invalid response format from server");
            }

            localStorage.setItem("token", token);
            localStorage.setItem("admin", JSON.stringify(admin));

            setIsLoggedIn(true);
            setIsAdmin(true);
            setAdminUser(admin);
            setUserMenuOpen(false);
        } catch (err: any) {
            console.error("Login error:", err); // Debug log
            setLoginError(err.message || "Invalid email or password");
        } finally {
            setLoginLoading(false);
        }
    };

    // Handle sign out
    const handleSignOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("admin");
        setIsLoggedIn(false);
        setIsAdmin(false);
        setAdminUser(null);
        setUserMenuOpen(false);
    };

    const totalItems = getTotalItems();

                {/* Desktop nav - centered */}
                <ul className={styles.navList}>
                    {navItems.map((item) => (
                        <li key={item.label} className={styles.navItem}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>

                {/* Icons container - right side */}
                <div className={styles.iconsContainer}>
                    {/* Cart icon */}
                    <div className={styles.cart}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M6 6H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 6h2l1.6 9.59A2 2 0 008.56 17h6.88a2 2 0 001.96-1.41L19 6H6z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="10" cy="20" r="1" fill="white" />
                            <circle cx="17" cy="20" r="1" fill="white" />
                        </svg>
                    </div>

                    {/* User icon */}
                    <div className={styles.userMenuWrapper}>
                        <button
                            ref={userButtonRef}
                            className={styles.userButton}
                            aria-controls="user-menu"
                            aria-expanded={userMenuOpen}
                            aria-label={isLoggedIn ? "User account menu" : "Login or sign up"}
                            onClick={() => setUserMenuOpen((s) => !s)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 20C6 16.6863 8.68629 14 12 14C15.3137 14 18 16.6863 18 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        {/* User menu popup */}
                        <div
                            id="user-menu"
                            ref={userMenuRef}
                            className={`${styles.userMenu} ${userMenuOpen ? styles.userMenuOpen : ""}`}
                            role="menu"
                            aria-hidden={!userMenuOpen}
                        >
                            {isLoggedIn ? (
                                <>
                                    <div className={styles.userMenuHeader}>
                                        <span className={styles.userGreeting}>
                                            Hello, {adminUser?.username || "User"}!
                                        </span>
                                        {isAdmin && (
                                            <div style={{ fontSize: "0.75rem", color: "#e0b000", marginTop: "0.25rem" }}>
                                                Admin Account
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.userMenuItems}>
                                        {isAdmin && (
                                            <Link href="/Admin/Dashboard" className={styles.userMenuItem} onClick={() => setUserMenuOpen(false)}>
                                                📊 Admin Dashboard
                                            </Link>
                                        )}
                                        <Link href="/profile" className={styles.userMenuItem} onClick={() => setUserMenuOpen(false)}>
                                            My Profile
                                        </Link>
                                        <Link href="/orders" className={styles.userMenuItem} onClick={() => setUserMenuOpen(false)}>
                                            My Orders
                                        </Link>
                                        <Link href="/settings" className={styles.userMenuItem} onClick={() => setUserMenuOpen(false)}>
                                            Settings
                                        </Link>
                                        <button className={styles.userMenuItem} onClick={handleSignOut}>
                                            Sign Out
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <form className={styles.loginForm} onSubmit={handleLogin}>
                                    <h3 className={styles.loginTitle}>Admin Login</h3>
                                    
                                    {loginError && (
                                        <div style={{ 
                                            padding: "0.75rem", 
                                            background: "rgba(239, 68, 68, 0.1)", 
                                            border: "1px solid rgba(239, 68, 68, 0.3)",
                                            borderRadius: "8px",
                                            color: "#ef4444",
                                            fontSize: "0.85rem",
                                            marginBottom: "1rem"
                                        }}>
                                            {loginError}
                                        </div>
                                    )}
                                    
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.formLabel}>Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className={styles.formInput}
                                            placeholder="Enter your email"
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="password" className={styles.formLabel}>Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            className={styles.formInput}
                                            placeholder="Enter your password"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className={styles.loginButton} disabled={loginLoading}>
                                        {loginLoading ? "Signing In..." : "Sign In"}
                                    </button>
                                    <div className={styles.formFooter}>
                                        <span className={styles.formFooterText}>Admin access only</span>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
    return (
        <>
            <header className={styles.navbarWrapper}>
                <nav className={styles.limonaNavbar} aria-label="Main navigation">
                    <div className={styles.logoWrap}>
                        <Image
                            src="/images/Hero/logo.png"
                            alt="Limona logo"
                            width={48}
                            height={48}
                            className={styles.logoImage}
                        />
                        <span className={styles.brandText}>Limona</span>
                    </div>

                    {/* Desktop nav */}
                    <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
                        <ul className={styles.navList}>
                            {navItems.map((item) => (
                                <li key={item.label} className={styles.navItem}>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Icons container */}
                    <div className={styles.iconsContainer}>
                        {/* Cart Button */}
                        <button 
                            className={styles.cart}
                            onClick={toggleCart}
                            aria-label={`Shopping cart with ${totalItems} items`}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 6H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 6h2l1.6 9.59A2 2 0 008.56 17h6.88a2 2 0 001.96-1.41L19 6H6z" stroke="white" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="10" cy="20" r="1" fill="white" />
                                <circle cx="17" cy="20" r="1" fill="white" />
                            </svg>
                            
                            {/* Cart Badge */}
                            {totalItems > 0 && (
                                <span className={styles.cartBadge}>
                                    {totalItems > 99 ? '99+' : totalItems}
                                </span>
                            )}
                        </button>

                        {/* User icon */}
                        <div className={styles.userMenuWrapper}>
                            <button
                                ref={userButtonRef}
                                className={styles.userButton}
                                aria-controls="user-menu"
                                aria-expanded={userMenuOpen}
                                aria-label={isLoggedIn ? "User account menu" : "Login or sign up"}
                                onClick={() => setUserMenuOpen((s) => !s)}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M6 20C6 16.6863 8.68629 14 12 14C15.3137 14 18 16.6863 18 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>

                            {/* User menu popup */}
                            <div
                                id="user-menu"
                                ref={userMenuRef}
                                className={`${styles.userMenu} ${userMenuOpen ? styles.userMenuOpen : ""}`}
                                role="menu"
                                aria-hidden={!userMenuOpen}
                            >
                                {isLoggedIn ? (
                                    <>
                                        <div className={styles.userMenuHeader}>
                                            <span className={styles.userGreeting}>
                                                Hello, {adminUser?.username || "User"}!
                                            </span>
                                            {isAdmin && (
                                                <div style={{ fontSize: "0.75rem", color: "#e0b000", marginTop: "0.25rem" }}>
                                                    Admin Account
                                                </div>
                                            )}
                                        </div>
                                        <div className={styles.userMenuItems}>
                                            {isAdmin && (
                                                <Link href="/Admin/Dashboard" className={styles.userMenuItem} onClick={() => setUserMenuOpen(false)}>
                                                    📊 Admin Dashboard
                                                </Link>
                                            )}
                                            <Link href="/profile" className={styles.userMenuItem} onClick={() => setUserMenuOpen(false)}>
                                                My Profile
                                            </Link>
                                            <Link href="/orders" className={styles.userMenuItem} onClick={() => setUserMenuOpen(false)}>
                                                My Orders
                                            </Link>
                                            <Link href="/settings" className={styles.userMenuItem} onClick={() => setUserMenuOpen(false)}>
                                                Settings
                                            </Link>
                                            <button className={styles.userMenuItem} onClick={handleSignOut}>
                                                Sign Out
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <form className={styles.loginForm} onSubmit={handleLogin}>
                                        <h3 className={styles.loginTitle}>Login</h3>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="email" className={styles.formLabel}>Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className={styles.formInput}
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="password" className={styles.formLabel}>Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                className={styles.formInput}
                                                placeholder="Enter your password"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className={styles.loginButton}>
                                            Sign In
                                        </button>
                                        <div className={styles.formFooter}>
                                            <span className={styles.formFooterText}>Don't have an account?</span>
                                            <button type="button" className={styles.signUpButton}>
                                                Sign Up
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        ref={buttonRef}
                        className={styles.menuButton}
                        aria-controls="mobile-menu"
                        aria-expanded={menuOpen}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMenuOpen((s) => !s)}
                    >
                        <span className={styles.hamburger} aria-hidden>
                            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="1" width="22" height="2" rx="1" fill="white" />
                                <rect y="8" width="22" height="2" rx="1" fill="white" />
                                <rect y="15" width="22" height="2" rx="1" fill="white" />
                            </svg>
                        </span>
                    </button>

                    {/* Mobile menu panel */}
                    <div
                        id="mobile-menu"
                        ref={menuRef}
                        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
                        role="menu"
                        aria-hidden={!menuOpen}
                    >
                        <ul className={styles.mobileNavList}>
                            {navItems.map((item) => (
                                <li key={item.label} className={styles.mobileNavItem} role="none">
                                    <Link href={item.href} role="menuitem" onClick={() => setMenuOpen(false)}>
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </header>
            
            {/* Cart Popup */}
            <CartPopup whatsappNumber="+94759627589" />
        </>
    );
}
