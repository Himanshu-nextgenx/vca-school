import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import { quickLinks, schoolInfo } from '../data/schoolData';
import vcaLogo from '../assets/logovca.png';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="bg-primary-dark text-white">
            {/* Top band */}
            <div className="bg-accent py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-white font-semibold text-base text-center sm:text-left">
                        🎉 Admissions Open for Session 2026–27 — Nursery to Class 12th
                    </p>
                    <Link
                        to="/admissions"
                        className="flex-shrink-0 px-5 py-2 bg-white text-accent font-bold text-sm rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    >
                        Apply Now →
                    </Link>
                </div>
            </div>

            {/* Main footer */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand col */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 mb-5">
                            <img src={vcaLogo} alt="VCA Logo" className="w-12 h-12 object-contain rounded-xl bg-white p-0.5" />
                            <div>
                                <p className="font-bold text-base leading-tight">Virat Children Academy</p>
                                <p className="text-white/60 text-xs">CBSE & RBSE Affiliated</p>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed mb-5">
                            Shaping future leaders with quality education, discipline, and innovation since 2026. Nurturing Excellence from Nursery to 12th.
                        </p>
                        {/* Social */}
                        <a
                            href={`https://instagram.com/${schoolInfo.instagram}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg text-sm hover:bg-white/20 transition-colors duration-200"
                        >
                            <FaInstagram className="text-pink-400" />
                            @{schoolInfo.instagram}
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-base mb-5 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
                            Quick Links
                        </h4>
                        <ul className="space-y-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-white/70 text-sm hover:text-white hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200"
                                    >
                                        <span className="text-accent text-xs">›</span> {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h4 className="font-semibold text-base mb-5 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
                            Programs
                        </h4>
                        <ul className="space-y-2.5">
                            {['CBSE Curriculum', 'RBSE Curriculum', 'NDA Foundation', 'NEET Foundation', 'JEE Foundation', 'Hostel Facility'].map((p) => (
                                <li key={p} className="flex items-center gap-1 text-white/70 text-sm">
                                    <span className="text-accent text-xs">›</span> {p}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-base mb-5 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-0.5 after:bg-accent">
                            Contact Us
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm text-white/70">
                                <FaMapMarkerAlt className="text-accent flex-shrink-0 mt-0.5" />
                                <span>Narayanpura, Railway Station Road, Kuchaman City, Rajasthan</span>
                            </li>
                            {schoolInfo.phones.map((p) => (
                                <li key={p}>
                                    <a href={`tel:+91${p.replace(/-/g, '')}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200">
                                        <FaPhone className="text-accent flex-shrink-0" />
                                        {p}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href={`mailto:${schoolInfo.email}`} className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-200">
                                    <FaEnvelope className="text-accent flex-shrink-0" />
                                    {schoolInfo.email}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10 py-5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/50 text-sm">
                    <p>© {year} Virat Children Academy, Kuchaman City. All rights reserved.</p>
                    <p className="flex items-center gap-1">
                        Made with <FaHeart className="text-accent text-xs" /> for VCA Students
                    </p>
                </div>
            </div>
        </footer>
    );
}
