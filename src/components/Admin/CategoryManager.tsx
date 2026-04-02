"use client";
import { useState, useEffect } from 'react';
import Notification from './Notification';
import styles from './CategoryManager.module.css';

interface Subcategory {
    id: number;
    name: string;
    coming_soon?: boolean;
    display_order: number;
    is_active: boolean;
}

interface Category {
    id: number;
    name: string;
    coming_soon: boolean;
    display_order: number;
    is_active: boolean;
    subcategories: Subcategory[];
}

export default function CategoryManager() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [notification, setNotification] = useState<{
        show: boolean;
        message: string;
        type: "success" | "error" | "info";
    }>({ show: false, message: "", type: "success" });
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [showSubcategoryModal, setShowSubcategoryModal] = useState(false);
    const [editingCategory, setEditingCategory] = useState<Category | null>(null);
    const [editingSubcategory, setEditingSubcategory] = useState<Subcategory | null>(null);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

    const [categoryForm, setCategoryForm] = useState({
        name: '',
        coming_soon: false,
        display_order: 0,
        is_active: true
    });

    const [subcategoryForm, setSubcategoryForm] = useState({
        name: '',
        coming_soon: false,
        display_order: 0,
        is_active: true
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const API_BASE = 'https://backend.srilankawildsafari.com';

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/v1/categories');
            if (!response.ok) throw new Error('Failed to fetch categories');
            const data = await response.json();
            setCategories(data);
            setError('');
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const showNotification = (message: string, type: "success" | "error" | "info") => {
        setNotification({ show: true, message, type });
    };

    const closeNotification = () => {
        setNotification({ show: false, message: "", type: "success" });
    };

    const handleCreateCategory = () => {
        setCategoryForm({ name: '', coming_soon: false, display_order: 0, is_active: true });
        setEditingCategory(null);
        setShowCategoryModal(true);
    };

    const handleEditCategory = (category: Category) => {
        setCategoryForm({
            name: category.name,
            coming_soon: category.coming_soon,
            display_order: category.display_order,
            is_active: category.is_active
        });
        setEditingCategory(category);
        setShowCategoryModal(true);
    };

    const handleSaveCategory = async () => {
        try {
            const url = editingCategory
                ? `${API_BASE}/api/v1/categories/${editingCategory.id}`
                : `${API_BASE}/api/v1/categories`;

            const method = editingCategory ? 'PUT' : 'POST';

            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(categoryForm)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to save category');
            }

            await fetchCategories();
            setShowCategoryModal(false);
            showNotification(
                editingCategory ? 'Category updated successfully!' : 'Category created successfully!',
                'success'
            );
        } catch (err: any) {
            showNotification(err.message || 'Failed to save category', 'error');
        }
    };

    const handleDeleteCategory = async (id: number) => {
        if (!confirm('Are you sure you want to delete this category?')) return;

        try {
            const response = await fetch(`${API_BASE}/api/v1/categories/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) throw new Error('Failed to delete category');

            await fetchCategories();
            showNotification('Category deleted successfully!', 'success');
        } catch (err: any) {
            showNotification(err.message || 'Failed to delete category', 'error');
        }
    };

    const handleAddSubcategory = (categoryId: number) => {
        setSelectedCategoryId(categoryId);
        setEditingSubcategory(null);
        setSubcategoryForm({ name: '', coming_soon: false, display_order: 0, is_active: true });
        setShowSubcategoryModal(true);
    };

    const handleEditSubcategory = (categoryId: number, subcategory: Subcategory) => {
        setSelectedCategoryId(categoryId);
        setEditingSubcategory(subcategory);
        setSubcategoryForm({
            name: subcategory.name,
            coming_soon: subcategory.coming_soon || false,
            display_order: subcategory.display_order,
            is_active: subcategory.is_active
        });
        setShowSubcategoryModal(true);
    };

    const handleSaveSubcategory = async () => {
        if (!selectedCategoryId) return;

        try {
            const url = editingSubcategory
                ? `${API_BASE}/api/v1/categories/subcategories/${editingSubcategory.id}`
                : `${API_BASE}/api/v1/categories/subcategories`;
            
            const method = editingSubcategory ? 'PUT' : 'POST';
            
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    editingSubcategory
                        ? subcategoryForm
                        : { category_id: selectedCategoryId, ...subcategoryForm }
                )
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to save subcategory');
            }

            await fetchCategories();
            setShowSubcategoryModal(false);
            showNotification(
                editingSubcategory ? 'Subcategory updated successfully!' : 'Subcategory created successfully!',
                'success'
            );
        } catch (err: any) {
            showNotification(err.message || 'Failed to save subcategory', 'error');
        }
    };

    const handleDeleteSubcategory = async (id: number) => {
        if (!confirm('Are you sure you want to delete this subcategory?')) return;

        try {
            const response = await fetch(`${API_BASE}/api/v1/categories/subcategories/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) throw new Error('Failed to delete subcategory');

            await fetchCategories();
            showNotification('Subcategory deleted successfully!', 'success');
        } catch (err: any) {
            showNotification(err.message || 'Failed to delete subcategory', 'error');
        }
    };

    if (loading) {
        return <div className={styles.loading}>Loading categories...</div>;
    }

    return (
        <div className={styles.categoryManager}>
            {notification.show && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onClose={closeNotification}
                />
            )}
            <div className={styles.header}>
                <h1 className={styles.title}>Categories & Subcategories</h1>
                <button className={styles.addButton} onClick={handleCreateCategory}>
                    + Add Category
                </button>
            </div>

            {error && <div className={styles.error}>{error}</div>}

            {categories.length === 0 ? (
                <div className={styles.emptyState}>
                    <p>No categories found. Create your first category!</p>
                    <button className={styles.addButton} onClick={handleCreateCategory}>
                        + Add Category
                    </button>
                </div>
            ) : (
                <div className={styles.categoriesGrid}>
                    {categories.filter(cat => cat.name !== 'All Products').map(category => (
                        <div key={category.id} className={styles.categoryCard}>
                            <div className={styles.categoryHeader}>
                                <div className={styles.categoryInfo}>
                                    <h3 className={styles.categoryName}>{category.name}</h3>
                                    <div className={styles.categoryBadges}>
                                        {category.coming_soon && (
                                            <span className={`${styles.badge} ${styles.comingSoonBadge}`}>
                                                Coming Soon
                                            </span>
                                        )}
                                        <span className={`${styles.badge} ${category.is_active ? styles.activeBadge : styles.inactiveBadge}`}>
                                            {category.is_active ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.categoryActions}>
                                    <button
                                        className={styles.iconButton}
                                        onClick={() => handleEditCategory(category)}
                                        title="Edit category"
                                    >
                                        ✏️
                                    </button>
                                    <button
                                        className={`${styles.iconButton} ${styles.deleteButton}`}
                                        onClick={() => handleDeleteCategory(category.id)}
                                        title="Delete category"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>

                            {category.subcategories && category.subcategories.length > 0 && (
                                <div className={styles.subcategoriesList}>
                                    <h4 className={styles.subcategoriesTitle}>Subcategories:</h4>
                                    {category.subcategories.map(sub => (
                                        <div key={sub.id} className={styles.subcategoryItem}>
                                            <span className={styles.subcategoryName}>
                                                {sub.name}
                                                <span className={`${styles.badge} ${sub.is_active ? styles.activeBadge : styles.inactiveBadge}`} style={{ marginLeft: '8px' }}>
                                                    {sub.is_active ? 'Active' : 'Inactive'}
                                                </span>
                                                {sub.coming_soon === true && (
                                                    <span className={`${styles.badge} ${styles.comingSoonBadge}`} style={{ marginLeft: '8px' }}>
                                                        Coming Soon
                                                    </span>
                                                )}
                                            </span>
                                            <div className={styles.subcategoryActions}>
                                                <button
                                                    className={styles.smallIconButton}
                                                    onClick={() => handleEditSubcategory(category.id, sub)}
                                                    title="Edit subcategory"
                                                >
                                                    ✏️
                                                </button>
                                                <button
                                                    className={styles.smallIconButton}
                                                    onClick={() => handleDeleteSubcategory(sub.id)}
                                                    title="Delete subcategory"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {category.name !== 'All Products' && (
                                <button
                                    className={styles.addSubcategoryButton}
                                    onClick={() => handleAddSubcategory(category.id)}
                                >
                                    + Add Subcategory
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Category Modal */}
            {showCategoryModal && (
                <div className={styles.modalOverlay} onClick={() => setShowCategoryModal(false)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <h2 className={styles.modalTitle}>
                            {editingCategory ? 'Edit Category' : 'Add New Category'}
                        </h2>
                        <div className={styles.form}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Category Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={categoryForm.name}
                                    onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                                    placeholder="Enter category name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Display Order</label>
                                <input
                                    type="number"
                                    className={styles.input}
                                    value={categoryForm.display_order}
                                    onChange={(e) => setCategoryForm({ ...categoryForm, display_order: parseInt(e.target.value) })}
                                />
                            </div>

                            <div className={styles.checkboxGroup}>
                                <input
                                    type="checkbox"
                                    id="comingSoon"
                                    className={styles.checkbox}
                                    checked={categoryForm.coming_soon}
                                    onChange={(e) => setCategoryForm({ ...categoryForm, coming_soon: e.target.checked })}
                                />
                                <label htmlFor="comingSoon" className={styles.label}>
                                    Coming Soon (Show coming soon message)
                                </label>
                            </div>

                            <div className={styles.checkboxGroup}>
                                <input
                                    type="checkbox"
                                    id="categoryIsActive"
                                    className={styles.checkbox}
                                    checked={categoryForm.is_active}
                                    onChange={(e) => setCategoryForm({ ...categoryForm, is_active: e.target.checked })}
                                />
                                <label htmlFor="categoryIsActive" className={styles.label}>
                                    Active (show this category in product forms)
                                </label>
                            </div>

                            <div className={styles.modalActions}>
                                <button
                                    className={styles.cancelButton}
                                    onClick={() => setShowCategoryModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className={styles.submitButton}
                                    onClick={handleSaveCategory}
                                    disabled={!categoryForm.name.trim()}
                                >
                                    {editingCategory ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Subcategory Modal */}
            {showSubcategoryModal && (
                <div className={styles.modalOverlay} onClick={() => setShowSubcategoryModal(false)}>
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <h2 className={styles.modalTitle}>
                            {editingSubcategory ? 'Edit Subcategory' : 'Add Subcategory'}
                        </h2>
                        <div className={styles.form}>
                            <div className={styles.formGroup}>
                                <label className={styles.label}>Subcategory Name</label>
                                <input
                                    type="text"
                                    className={styles.input}
                                    value={subcategoryForm.name}
                                    onChange={(e) => setSubcategoryForm({ ...subcategoryForm, name: e.target.value })}
                                    placeholder="Enter subcategory name"
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label className={styles.label}>Display Order</label>
                                <input
                                    type="number"
                                    className={styles.input}
                                    value={subcategoryForm.display_order}
                                    onChange={(e) => setSubcategoryForm({ ...subcategoryForm, display_order: parseInt(e.target.value) })}
                                />
                            </div>

                            <div className={styles.checkboxGroup}>
                                <input
                                    type="checkbox"
                                    id="subcategoryComingSoon"
                                    className={styles.checkbox}
                                    checked={subcategoryForm.coming_soon}
                                    onChange={(e) => setSubcategoryForm({ ...subcategoryForm, coming_soon: e.target.checked })}
                                />
                                <label htmlFor="subcategoryComingSoon" className={styles.label}>
                                    Coming Soon (Show coming soon message)
                                </label>
                            </div>

                            <div className={styles.checkboxGroup}>
                                <input
                                    type="checkbox"
                                    id="subcategoryIsActive"
                                    className={styles.checkbox}
                                    checked={subcategoryForm.is_active}
                                    onChange={(e) => setSubcategoryForm({ ...subcategoryForm, is_active: e.target.checked })}
                                />
                                <label htmlFor="subcategoryIsActive" className={styles.label}>
                                    Active (show this subcategory in product forms)
                                </label>
                            </div>

                            <div className={styles.modalActions}>
                                <button
                                    className={styles.cancelButton}
                                    onClick={() => setShowSubcategoryModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    className={styles.submitButton}
                                    onClick={handleSaveSubcategory}
                                    disabled={!subcategoryForm.name.trim()}
                                >
                                    {editingSubcategory ? 'Update' : 'Create'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
