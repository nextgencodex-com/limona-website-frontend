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

  // ⭐ Mobile state (this fixes your error)
  const [isMobile, setIsMobile] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const userMenuRef = useRef<HTMLDivElement>(null);
    const userButtonRef = useRef<HTMLButtonElement>(null);

    const navItems = [
    { label: "Home", href: "/Home" },
    { label: "Products", href: "/Products" },
    { label: "Customize Your Own", href: "/Customize-Your-Own" },
    { label: "Printed T-Shirt", href: "/Printed-T-Shirt" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" },
    ];

  const { getTotalItems, toggleCart } = useCart();

  // Detect mobile
  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Auth + close menus when clicking outside / escape
  useEffect(() => {
    const token = localStorage.getItem("token");
    const admin = localStorage.getItem("admin");

    if (token && admin && admin !== "undefined" && admin !== "null") {
      try {
        setIsLoggedIn(true);
        setIsAdmin(true);
        setAdminUser(JSON.parse(admin));
      } catch {
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

      if (menuOpen && !clickedInsideMenu && !clickedOnButton) setMenuOpen(false);
      if (userMenuOpen && !clickedInsideUserMenu && !clickedOnUserButton)
        setUserMenuOpen(false);
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    const password = (form.elements.namedItem("password") as HTMLInputElement)
      ?.value;

    if (!email || !password) {
      setLoginError("Please enter both email and password");
      setLoginLoading(false);
      return;
    }

    try {
      const res = await fetch(
        'https://backend.srilankawildsafari.com/api/v1/admin/login',
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || data.message || "Login failed");

      const token = data.token || data.data?.token;
      const admin = data.admin || data.data?.admin;
      if (!token || !admin) throw new Error("Invalid response format");

      localStorage.setItem("token", token);
      localStorage.setItem("admin", JSON.stringify(admin));

      setIsLoggedIn(true);
      setIsAdmin(true);
      setAdminUser(admin);
      setUserMenuOpen(false);
    } catch (err: any) {
      setLoginError(err.message || "Invalid email or password");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
    setIsLoggedIn(false);
    setIsAdmin(false);
    setAdminUser(null);
    setUserMenuOpen(false);
  };

  const totalItems = getTotalItems();

  return (
    <>
      <header className={styles.navbarWrapper}>
        <nav className={styles.limonaNavbar}>
          {/* Logo */}
          <div className={styles.logoWrap}>
            <Image
              src="/images/Hero/logo.png"
              alt="Limona logo"
              width={48}
              height={48}
            />
            <span className={styles.brandText}>Limona</span>
          </div>

          {/* Center nav (desktop) */}
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <ul className={styles.navList}>
              {navItems.map((n) => (
                <li key={n.label} className={styles.navItem}>
                  <Link href={n.href}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons (cart + user) */}
          <div className={styles.iconsContainer}>
            {/* Cart */}
            <button
              className={styles.cart}
              onClick={toggleCart}
              aria-label={`Shopping cart with ${totalItems} items`}
            >
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M6 6H4" stroke="white" strokeWidth="1.5" />
                <path
                  d="M3 6h2l1.6 9.59A2 2 0 008.56 17h6.88a2 2 0 001.96-1.41L19 6H6z"
                  stroke="white"
                  strokeWidth="1.25"
                />
                <circle cx="10" cy="20" r="1" fill="white" />
                <circle cx="17" cy="20" r="1" fill="white" />
              </svg>

              {totalItems > 0 && (
                <span className={styles.cartBadge}>
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>

            {/* User */}
            <div className={styles.userMenuWrapper}>
              <button
                ref={userButtonRef}
                className={styles.userButton}
                onClick={() => setUserMenuOpen((s) => !s)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="1.5" />
                  <path
                    d="M6 20C6 16.6863 8.68629 14 12 14C15.3137 14 18 16.6863 18 20"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>

              <div
                ref={userMenuRef}
                className={`${styles.userMenu} ${
                  userMenuOpen ? styles.userMenuOpen : ""
                }`}
              >
                {isLoggedIn ? (
                  <>
                    <div className={styles.userMenuHeader}>
                      <span className={styles.userGreeting}>Hello, Admin 👋</span>
                    </div>

                    <div className={styles.userMenuItems}>
                      {isAdmin && (
                        <Link
                          href="/Admin/Dashboard"
                          className={styles.userMenuItem}
                          onClick={() => setUserMenuOpen(false)}
                        >
                          — Admin Dashboard
                        </Link>
                      )}
                      <button className={styles.userMenuItem} onClick={handleSignOut}>
                        — Sign Out
                      </button>
                    </div>
                  </>
                ) : (
                  <form className={styles.loginForm} onSubmit={handleLogin}>
                    <h3 className={styles.loginTitle}>Admin Login</h3>

                    {loginError && (
                      <div className={styles.loginError}>{loginError}</div>
                    )}

                    <input name="email" type="email" required placeholder="Email" />
                    <input
                      name="password"
                      type="password"
                      required
                      placeholder="Password"
                    />

                    <button disabled={loginLoading} className={styles.loginButton}>
                      {loginLoading ? "Signing In..." : "Sign In"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            ref={buttonRef}
            className={styles.menuButton}
            onClick={() => setMenuOpen((s) => !s)}
          >
            ☰
          </button>

          {/* Mobile dropdown */}
          <div
            id="mobile-menu"
            ref={menuRef}
            className={`${styles.mobileMenu} ${
              menuOpen ? styles.mobileMenuOpen : ""
            }`}
          >
            <ul>
              {navItems.map((n) => (
                <li key={n.label}>
                  <Link href={n.href} onClick={() => setMenuOpen(false)}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <CartPopup whatsappNumber="+94759627589" />
    </>
  );
}
