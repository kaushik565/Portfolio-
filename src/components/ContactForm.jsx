import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { HiPaperAirplane } from 'react-icons/hi'

const ContactForm = () => {
    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        setStatus(null)

        const serviceId = 'YOUR_SERVICE_ID'
        const templateId = 'YOUR_TEMPLATE_ID'
        const publicKey = 'YOUR_PUBLIC_KEY'

        if (serviceId === 'YOUR_SERVICE_ID') {
            setTimeout(() => {
                setLoading(false)
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
                alert("Please configure EmailJS keys in src/components/ContactForm.jsx to send real emails.")
            }, 1000)
            return
        }

        emailjs.send(serviceId, templateId, {
            from_name: form.name,
            to_name: 'Kaushik',
            from_email: form.email,
            to_email: 'lakshmanasaikaushik565@gmail.com',
            message: form.message,
        }, publicKey)
            .then(() => {
                setLoading(false)
                setStatus('success')
                setForm({ name: '', email: '', message: '' })
            }, (error) => {
                setLoading(false)
                setStatus('error')
                console.error(error)
            })
    }

    return (
        <div className="bento-card p-8 w-full">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label className="text-zinc-500 text-sm font-bold uppercase">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="bg-zinc-900 border border-zinc-800 text-white rounded-lg p-3 outline-none focus:border-accent transition-colors"
                        placeholder="John Doe"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-zinc-500 text-sm font-bold uppercase">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="bg-zinc-900 border border-zinc-800 text-white rounded-lg p-3 outline-none focus:border-accent transition-colors"
                        placeholder="john@example.com"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-zinc-500 text-sm font-bold uppercase">Message</label>
                    <textarea
                        rows="4"
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="bg-zinc-900 border border-zinc-800 text-white rounded-lg p-3 outline-none focus:border-accent transition-colors resize-none"
                        placeholder="Hello there..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-2 bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-accent transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {loading ? 'Sending...' : <>Send Message <HiPaperAirplane className="rotate-90" /></>}
                </button>

                {status === 'success' && <p className="text-accent text-center mt-2">Message sent successfully!</p>}
                {status === 'error' && <p className="text-red-500 text-center mt-2">Something went wrong.</p>}
            </form>
        </div>
    )
}

export default ContactForm
