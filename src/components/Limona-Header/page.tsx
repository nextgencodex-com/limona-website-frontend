"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import styles from "./header.module.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Still track login state
    
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

    // Handle login success (call this from login page)
    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
        setUserMenuOpen(false);
    };

    // Handle logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        setUserMenuOpen(false);
        // Add your logout logic here (clear tokens, redirect, etc.)
        // router.push('/'); // Redirect to home if needed
    };

    return (
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
                            aria-label="User menu"
                            onClick={() => setUserMenuOpen((s) => !s)}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 20C6 16.6863 8.68629 14 12 14C15.3137 14 18 16.6863 18 20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        {/* User menu popup - ALWAYS SHOWS BOTH BUTTONS */}
                        <div
                            id="user-menu"
                            ref={userMenuRef}
                            className={`${styles.userMenu} ${userMenuOpen ? styles.userMenuOpen : ""}`}
                            role="menu"
                            aria-hidden={!userMenuOpen}
                        >
                            <div className={styles.simpleUserMenu}>
                                <div className={styles.userMenuHeader}>
                                    <span className={styles.userGreeting}>
                                        {isLoggedIn ? "Welcome Back!" : "Hello User!"}
                                    </span>
                                </div>
                                
                                <div className={styles.buttonGroup}>
                                    {/* Always show Login button */}
                                    <Link 
                                        href="/Login-Page" 
                                        className={styles.loginButton}
                                        onClick={() => setUserMenuOpen(false)}
                                    >
                                        Login
                                    </Link>
                                    
                                    {/* Always show Logout button */}
                                    <button 
                                        className={styles.logoutButton}
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                    
                                    {/* Additional links for logged-in users */}
                                    {isLoggedIn && (
                                        <>
                                            <Link 
                                                href="/profile" 
                                                className={styles.menuButtonLink}
                                                onClick={() => setUserMenuOpen(false)}
                                            >
                                                My Profile
                                            </Link>
                                            <Link 
                                                href="/dashboard" 
                                                className={styles.menuButtonLink}
                                                onClick={() => setUserMenuOpen(false)}
                                            >
                                                Dashboard
                                            </Link>
                                            <Link 
                                                href="/orders" 
                                                className={styles.menuButtonLink}
                                                onClick={() => setUserMenuOpen(false)}
                                            >
                                                My Orders
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
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
                        
                        {/* Mobile auth buttons - ALWAYS SHOW BOTH */}
                        <div className={styles.mobileAuthButtons}>
                            <li className={styles.mobileNavItem} role="none">
                                <Link href="/Login-Page" role="menuitem" onClick={() => setMenuOpen(false)}>
                                    Login
                                </Link>
                            </li>
                            <li className={styles.mobileNavItem} role="none">
                                <button 
                                    className={styles.mobileLogoutButton}
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </li>
                            
                            {/* Additional links for logged-in users */}
                            {isLoggedIn && (
                                <>
                                    <li className={styles.mobileNavItem} role="none">
                                        <Link href="/profile" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            My Profile
                                        </Link>
                                    </li>
                                    <li className={styles.mobileNavItem} role="none">
                                        <Link href="/dashboard" role="menuitem" onClick={() => setMenuOpen(false)}>
                                            Dashboard
                                        </Link>
                                    </li>
                                </>
                            )}
                        </div>
                    </ul>
                </div>
            </nav>
        </header>
    );
}