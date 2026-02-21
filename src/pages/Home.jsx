import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import MessageCard from '../components/MessageCard';
import StatsCounter from '../components/StatsCounter';
import { stats, deskMessages, facilities, foundationPrograms, notices, academics, whyChoose } from '../data/schoolData';
import { FaArrowRight, FaCheckCircle, FaBell, FaFilePdf } from 'react-icons/fa';

export default function Home() {
    return (
        <main>
            {/* 1. Hero */}
            <Hero />

            {/* 2. About Preview */}
            <section className="section-pad">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <SectionTitle
                                tag="About VCA"
                                title="A Modern Digital Campus in Kuchaman City"
                                subtitle="Virat Children Academy is committed to providing exceptional education combining CBSE & RBSE curriculum with a strong focus on competitive exam preparation."
                            />
                            <ul className="space-y-3 mb-8">
                                {[
                                    'VCA-Kids: Play Group to Class 8th (English Medium)',
                                    'VCA-Foundation: Arts & Science (Class 9th–12th)',
                                    'NDA | NEET | IIT | Army | Delhi Police | NAVY | Air Force',
                                    'Sound-proof Digital Classrooms & Experienced Faculty (7+ yrs)',
                                    'AC Hostel with 24/7 supervision & GPS Transport',
                                    'Located at Narayanpura, Railway Station Road, Kuchaman City',
                                ].map((pt) => (
                                    <li key={pt} className="flex items-start gap-3">
                                        <FaCheckCircle className="text-accent flex-shrink-0 mt-0.5 text-sm" />
                                        <span className="text-gray-600 text-sm">{pt}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/about" className="btn-primary">
                                Learn More <FaArrowRight size={12} />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { num: '2026', label: 'Est. Year', bg: 'bg-primary', text: 'text-white' },
                                { num: 'CBSE', label: '& RBSE Affiliated', bg: 'bg-accent', text: 'text-white' },
                                { num: '1200+', label: 'Students Enrolled', bg: 'bg-gold', text: 'text-white' },
                                { num: '45+', label: 'Qualified Staff', bg: 'bg-primary-light', text: 'text-white' },
                            ].map((card) => (
                                <div key={card.label} className={`${card.bg} ${card.text} rounded-2xl p-6 text-center shadow-card-hover`}>
                                    <p className="text-3xl font-extrabold mb-1">{card.num}</p>
                                    <p className="text-xs font-medium opacity-90">{card.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Foundation Programs */}
            <section className="section-pad section-alt">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        tag="Foundation Programs"
                        title="Integrated Competitive Exam Preparation"
                        subtitle="Alongside regular academics, VCA offers dedicated foundation coaching for India's top competitive exams."
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {foundationPrograms.map((prog) => (
                            <div key={prog.title} className="card-base p-8 text-center group">
                                <div className="text-5xl mb-4">{prog.icon}</div>
                                <span className={`text-xs font-bold px-3 py-1 rounded-full ${prog.badgeColor} mb-3 inline-block`}>
                                    {prog.badge}
                                </span>
                                <h3 className="text-xl font-bold text-primary mb-3">{prog.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{prog.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Choose VCA */}
            <section className="section-pad">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        tag="Why Choose Us"
                        title="Why Choose VCA?"
                        subtitle="From experienced teachers to sound-proof digital classrooms — everything your child deserves."
                        center
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                        {whyChoose.map((item) => (
                            <div key={item.title} className="card-base p-6 flex gap-4 items-start group hover:-translate-y-1 transition-transform duration-200">
                                <div className="text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">{item.icon}</div>
                                <div>
                                    <h4 className="text-base font-bold text-primary mb-1">{item.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Stats Counter */}
            <StatsCounter stats={stats} />

            {/* 5. Facilities Preview */}
            <section className="section-pad">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                        <SectionTitle
                            tag="Infrastructure"
                            title="World-Class Facilities"
                            subtitle="Everything your child needs to learn, grow, and thrive."
                        />
                        <Link to="/facilities" className="btn-primary text-sm">
                            View All <FaArrowRight size={12} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {facilities.slice(0, 8).map((f) => (
                            <div key={f.title} className="card-base p-6 text-center group">
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                                <h4 className="text-sm font-semibold text-primary">{f.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Academics Preview */}
            <section className="section-pad section-alt">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                        <SectionTitle tag="Academics" title="Our Academic Programs" />
                        <Link to="/academics" className="btn-primary text-sm">
                            View All <FaArrowRight size={12} />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {academics.map((a) => (
                            <div key={a.level} className="card-base overflow-hidden group">
                                <div className={`bg-gradient-to-r ${a.color} p-5 flex items-center gap-4`}>
                                    <span className="text-3xl">{a.icon}</span>
                                    <div>
                                        <h3 className="text-white font-bold text-base">{a.level}</h3>
                                        <p className="text-white/80 text-xs">{a.classes}</p>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Desk Messages */}
            <section className="section-pad">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle
                        tag="From the Desk Of"
                        title="Leadership Messages"
                        subtitle="Words of wisdom and vision from our esteemed leadership team."
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {deskMessages.map((msg) => (
                            <MessageCard key={msg.id} data={msg} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. Notices */}
            <section className="section-pad section-alt">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
                        <SectionTitle tag="Notice Board" title="Latest Notices & Updates" />
                        <Link to="/notices" className="btn-primary text-sm">
                            View All <FaArrowRight size={12} />
                        </Link>
                    </div>
                    <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                        {notices.slice(0, 5).map((n, i) => (
                            <div
                                key={n.id}
                                className={`flex flex-col sm:flex-row items-start sm:items-center gap-3 px-6 py-4 hover:bg-primary-50 transition-colors duration-200 ${i < notices.length - 1 ? 'border-b border-gray-100' : ''
                                    }`}
                            >
                                <div className="flex-shrink-0">
                                    <FaBell className={`text-lg ${n.important ? 'text-accent' : 'text-primary'}`} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-center gap-2 mb-0.5">
                                        {n.important && (
                                            <span className="text-xs font-bold text-white bg-accent px-2 py-0.5 rounded-full">Important</span>
                                        )}
                                        <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{n.type}</span>
                                    </div>
                                    <p className="text-gray-700 text-sm font-medium">{n.title}</p>
                                </div>
                                <div className="flex items-center gap-3 flex-shrink-0">
                                    <span className="text-xs text-gray-400">{n.date}</span>
                                    <button className="text-primary hover:text-accent p-1 rounded transition-colors duration-200">
                                        <FaFilePdf />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. CTA Banner */}
            <section className="py-16 bg-gradient-to-r from-accent to-accent-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Secure Your Child's Future Today!
                    </h2>
                    <p className="text-white/85 text-base mb-8 max-w-2xl mx-auto">
                        Admissions are open for Session 2026–27. Limited seats available across all classes from Nursery to 12th.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/admissions" className="px-8 py-3.5 bg-white text-accent font-bold rounded-xl shadow-lg hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-200">
                            Apply Now
                        </Link>
                        <a href="tel:+919571133669" className="px-8 py-3.5 bg-white/15 border border-white/40 text-white font-semibold rounded-xl hover:bg-white/25 transition-all duration-200">
                            📞 95711-33669
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
