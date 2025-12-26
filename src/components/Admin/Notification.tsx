"use client";
import { useEffect } from "react";
import styles from "./Notification.module.css";

interface NotificationProps {
    message: string;
    type: "success" | "error" | "info";
    onClose: () => void;
    duration?: number;
}

export default function Notification({ message, type, onClose, duration = 3000 }: NotificationProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const getIcon = () => {
        switch (type) {
            case "success":
                return (
                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                );
            case "error":
                return (
                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                );
            case "info":
                return (
                    <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
        }
    };

    return (
        <div className={`${styles.notification} ${styles[type]}`}>
            <div className={styles.content}>
                {getIcon()}
                <span className={styles.message}>{message}</span>
            </div>
            <button onClick={onClose} className={styles.closeButton}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    );
}
