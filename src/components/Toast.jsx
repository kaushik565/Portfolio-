import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Toast = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose()
        }, 3000)
        return () => clearTimeout(timer)
    }, [onClose])

    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
    }

    const colors = {
        success: 'from-green-500 to-emerald-500',
        error: 'from-red-500 to-rose-500',
        info: 'from-blue-500 to-cyan-500'
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className={`fixed top-24 right-4 md:right-8 z-[100] bg-gradient-to-r ${colors[type]} text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 max-w-md`}
        >
            <span className="text-2xl font-bold">{icons[type]}</span>
            <p className="font-medium">{message}</p>
            <button
                onClick={onClose}
                className="ml-auto text-white/80 hover:text-white transition-colors"
            >
                ✕
            </button>
        </motion.div>
    )
}

export const ToastContainer = () => {
    const [toasts, setToasts] = useState([])

    useEffect(() => {
        // Listen for custom toast events
        const handleToast = (event) => {
            const { message, type } = event.detail
            const id = Date.now()
            setToasts(prev => [...prev, { id, message, type }])
        }

        window.addEventListener('show-toast', handleToast)
        return () => window.removeEventListener('show-toast', handleToast)
    }, [])

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id))
    }

    return (
        <div className="fixed top-0 right-0 z-[100] pointer-events-none">
            <AnimatePresence>
                {toasts.map((toast) => (
                    <div key={toast.id} className="pointer-events-auto mb-4">
                        <Toast
                            message={toast.message}
                            type={toast.type}
                            onClose={() => removeToast(toast.id)}
                        />
                    </div>
                ))}
            </AnimatePresence>
        </div>
    )
}

// Helper function to show toast
export const showToast = (message, type = 'success') => {
    window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message, type }
    }))
}

export default Toast
