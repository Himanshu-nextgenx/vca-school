import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { schoolInfo } from '../data/schoolData';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const initForm = { name: '', email: '', phone: '', message: '' };

export default function Contact() {
    const [form, setForm] = useState(initForm);
    const [sent, setSent] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setForm(initForm);
        setTimeout(() => setSent(false), 4000);
    };

    return (
        <main className="pt-20">
            <div className="bg-gradient-to-br from-primary-dark to-primary py-16 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-xs font-bold tracking-widest text-gold uppercase mb-3 block">Get in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Contact Us</h1>
                    <p className="text-white/75 text-base max-w-xl mx-auto">
                        Reach out to Virat Children Academy for admissions, enquiries, or any other information.
                    </p>
                </div>
            </div>

            <section className="section-pad">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Info Cards */}
                        <div className="space-y-5">
                            <SectionTitle tag="Contact Info" title="Reach Us Directly" />

                            {[
                                {
                                    icon: <FaMapMarkerAlt className="text-accent text-lg" />,
                                    title: 'Address',
                                    lines: ['Narayanpura, Railway Station Road,', 'Kuchaman City, Rajasthan'],
                                    link: null,
                                },
                                {
                                    icon: <FaPhone className="text-accent text-lg" />,
                                    title: 'Phone Numbers',
                                    lines: schoolInfo.phones,
                                    link: `tel:+91${schoolInfo.phones[0].replace(/-/g, '')}`,
                                },
                                {
                                    icon: <FaEnvelope className="text-accent text-lg" />,
                                    title: 'Email',
                                    lines: [schoolInfo.email],
                                    link: `mailto:${schoolInfo.email}`,
                                },
                                {
                                    icon: <FaInstagram className="text-accent text-lg" />,
                                    title: 'Instagram',
                                    lines: [`@${schoolInfo.instagram}`],
                                    link: `https://instagram.com/${schoolInfo.instagram}`,
                                },
                            ].map((card) => (
                                <div key={card.title} className="card-base p-5 flex items-start gap-4">
                                    <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                                        {card.icon}
                                    </div>
                                    <div>
                                        <p className="text-primary font-bold text-sm mb-1">{card.title}</p>
                                        {card.lines.map((line) =>
                                            card.link ? (
                                                <a key={line} href={card.link} target={card.link.startsWith('http') ? '_blank' : '_self'} rel="noreferrer"
                                                    className="block text-gray-500 text-sm hover:text-primary transition-colors">
                                                    {line}
                                                </a>
                                            ) : (
                                                <p key={line} className="text-gray-500 text-sm">{line}</p>
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}

                            <div className="card-base p-5 bg-primary text-white">
                                <p className="font-bold text-sm mb-1">Office Hours</p>
                                <p className="text-white/75 text-xs">Monday – Saturday</p>
                                <p className="text-white font-semibold text-sm">8:00 AM – 4:00 PM</p>
                            </div>
                        </div>

                        {/* Form + Map */}
                        <div className="lg:col-span-2 space-y-7">
                            {/* Contact Form */}
                            <div className="card-base p-8">
                                <h3 className="text-xl font-bold text-primary mb-6">Send Us a Message</h3>
                                {sent && (
                                    <div className="mb-5 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-semibold">
                                        ✅ Message sent! We'll get back to you within 24 hours.
                                    </div>
                                )}
                                <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {[
                                        { name: 'name', label: 'Full Name *', type: 'text', required: true },
                                        { name: 'email', label: 'Email Address', type: 'email', required: false },
                                        { name: 'phone', label: 'Phone Number *', type: 'tel', required: true },
                                    ].map((f) => (
                                        <div key={f.name}>
                                            <label className="block text-xs font-semibold text-gray-600 mb-1.5">{f.label}</label>
                                            <input
                                                type={f.type}
                                                name={f.name}
                                                value={form[f.name]}
                                                onChange={handleChange}
                                                required={f.required}
                                                className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                            />
                                        </div>
                                    ))}
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">Message *</label>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            placeholder="Write your message or enquiry here..."
                                            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <button type="submit" className="flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg">
                                            <FaPaperPlane size={12} /> Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>

                            {/* Map */}
                            <div className="card-base overflow-hidden">
                                <div className="p-4 border-b border-gray-100">
                                    <p className="text-primary font-bold text-sm flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-accent" />
                                        VCA Location — Narayanpura, Kuchaman City
                                    </p>
                                </div>
                                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                    <iframe
                                        title="VCA Location Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3568.5!2d74.8600!3d27.1400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963a40a5a5a5a5a%3A0x1234567890abcdef!2sKuchaman+City%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                        className="absolute inset-0 w-full h-full border-0"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
