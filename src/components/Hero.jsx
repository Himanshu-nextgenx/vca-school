import { Link } from 'react-router-dom';
import { FaArrowRight, FaDownload, FaPhone, FaAward, FaBookOpen } from 'react-icons/fa';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16 lg:pt-20">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light" />

            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <div className="absolute top-20 right-20 w-72 h-72 border-2 border-white rounded-full" />
                <div className="absolute top-40 right-40 w-48 h-48 border border-white rounded-full" />
                <div className="absolute bottom-32 right-16 w-96 h-96 border border-white/50 rounded-full" />
            </div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute top-20 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
                <div className="max-w-3xl">
                    {/* Admission badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-pulse">
                        <span className="w-2 h-2 bg-gold rounded-full" />
                        🎓 Admissions Open — Session 2026–27
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
                        Shaping Future
                        <span className="block text-gold">Leaders</span>
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl mb-3 font-medium">
                        Virat Children Academy, Kuchaman City
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {['CBSE Affiliated', 'RBSE Affiliated', 'Nursery – 12th', 'Hostel Available'].map((b) => (
                            <span
                                key={b}
                                className="bg-white/15 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
                            >
                                ✓ {b}
                            </span>
                        ))}
                    </div>

                    <p className="text-white/70 text-base max-w-2xl leading-relaxed mb-10">
                        Located at Narayanpura, Railway Station Road, Kuchaman City. Offering world-class education with integrated NDA, NEET & JEE foundation programs. Enroll now to secure your child's future.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to="/admissions"
                            className="flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl shadow-lg hover:bg-accent-dark hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                        >
                            Apply Now <FaArrowRight size={12} />
                        </Link>
                        <a
                            href="#"
                            className="flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-sm text-white font-semibold text-sm rounded-xl border border-white/30 hover:bg-white/25 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <FaDownload size={12} /> Fee Structure
                        </a>
                        <a
                            href="tel:+919571133669"
                            className="flex items-center gap-2 px-6 py-3 bg-white text-primary font-bold text-sm rounded-xl shadow-lg hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            <FaPhone size={12} /> Contact Us
                        </a>
                    </div>

                    {/* Bottom quick stats */}
                    <div className="mt-14 flex flex-wrap gap-6">
                        {[
                            { icon: <FaAward className="text-gold" />, text: 'Est. 2026 • Kuchaman City' },
                            { icon: <FaBookOpen className="text-gold" />, text: 'CBSE & RBSE Board' },
                            { icon: <span className="text-gold text-lg">🏠</span>, text: 'Hostel Facility' },
                        ].map((item) => (
                            <div key={item.text} className="flex items-center gap-2 text-white/80 text-sm">
                                {item.icon}
                                <span>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 80L480 30L960 60L1440 0V80H0Z" fill="white" fillOpacity="1" />
                </svg>
            </div>
        </section>
    );
}
