'use client';

import React, { useEffect } from 'react';
import { X, Plus, Minus, MessageCircle, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import styles from './cartPopup.module.css';

interface CartPopupProps {
  whatsappNumber?: string; // Optional prop for WhatsApp number
}

const CartPopup: React.FC<CartPopupProps> = ({ whatsappNumber = '+94759627589' }) => {
  const {
    items,
    removeItem,
    updateQuantity,
    clearCart,
    getTotalPrice,
    isOpen,
    closeCart,
  } = useCart();

  // Close cart when Escape key is pressed
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeCart();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when cart is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeCart]);

  const formatPrice = (price: number) => {
    return `LKR ${price.toLocaleString('en-US')}.00`;
  };

  const handleWhatsAppOrder = () => {
    if (items.length === 0) return;

    const orderMessage = generateOrderMessage();
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(orderMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const generateOrderMessage = () => {
    let message = `🛍️ *LIMONA ORDER REQUEST*\n\n`;
    message += `📝 *Order Details:*\n\n`;
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   💰 Price: ${formatPrice(item.price)}\n`;
      message += `   📦 Quantity: ${item.quantity}\n`;
      message += `   🏷️ Category: ${item.category}\n`;
      if (item.colors && item.colors.length > 0) {
        message += `   🎨 Colors: ${item.colors.join(', ')}\n`;
      }
      message += `   💵 Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
    });

    message += `💳 *Total Amount: ${formatPrice(getTotalPrice())}*\n\n`;
    message += `📱 Please confirm this order and provide delivery details.\n\n`;
    message += `Thank you for choosing Limona! 🌟`;

    return message;
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeCart();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.cartOverlay} onClick={handleBackdropClick}>
      <div className={styles.cartPopup}>
        {/* Header */}
        <div className={styles.cartHeader}>
          <h2 className={styles.cartTitle}>Cart</h2>
          <button 
            onClick={closeCart}
            className={styles.closeButton}
            aria-label="Close cart"
          >
            <X size={24} />
          </button>
        </div>

        {/* Cart Items */}
        <div className={styles.cartContent}>
          {items.length === 0 ? (
            <div className={styles.emptyCart}>
              <div className={styles.emptyCartIcon}>🛒</div>
              <p className={styles.emptyCartText}>Your cart is empty</p>
              <p className={styles.emptyCartSubtext}>Add some items to get started!</p>
            </div>
          ) : (
            <div className={styles.cartItems}>
              {items.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImageContainer}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className={styles.itemImage}
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/80x80/EEE/31343C?text=${encodeURIComponent(item.name)}`;
                      }}
                    />
                  </div>
                  
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemCategory}>{item.category}</p>
                    <p className={styles.itemPrice}>{formatPrice(item.price)}</p>
                  </div>

                  <div className={styles.itemActions}>
                    {/* Quantity Controls */}
                    <div className={styles.quantityControls}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className={styles.quantityButton}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>
                      <span className={styles.quantityDisplay}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className={styles.quantityButton}
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <p className={styles.itemSubtotal}>
                      {formatPrice(item.price * item.quantity)}
                    </p>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className={styles.removeButton}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className={styles.cartFooter}>
            <div className={styles.totalSection}>
              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Total Amount:</span>
                <span className={styles.totalAmount}>{formatPrice(getTotalPrice())}</span>
              </div>
            </div>

            <div className={styles.actionButtons}>
              <button
                onClick={clearCart}
                className={styles.clearButton}
              >
                Clear Cart
              </button>
              
              <button
                onClick={handleWhatsAppOrder}
                className={styles.whatsappButton}
              >
                <MessageCircle size={20} />
                Order via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPopup;
