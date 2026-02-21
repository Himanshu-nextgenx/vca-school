import SectionTitle from '../components/SectionTitle';
import MessageCard from '../components/MessageCard';
import { deskMessages } from '../data/schoolData';
import { FaCheckCircle, FaEye, FaBullseye } from 'react-icons/fa';

export default function About() {
    return (
        <main className="pt-20">
            {/* Page Hero */}
            <div className="bg-gradient-to-br from-primary-dark to-primary py-16 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-xs font-bold tracking-widest text-gold uppercase mb-3 block">Who We Are</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Virat Children Academy</h1>
                    <p className="text-white/75 text-base max-w-2xl mx-auto">
                        Building excellence, character, and academic brilliance in Kuchaman City since 2026.
                    </p>
                </div>
            </div>

            {/* School Overview */}
            <section className="section-pad">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                        <div>
                            <SectionTitle tag="School Overview" title="A Legacy of Academic Excellence" />
                            <p className="text-gray-500 text-sm leading-relaxed mb-5">
                                Virat Children Academy (VCA) was established in 2026 with a vision to provide quality education combining modern teaching methods with traditional values. Situated at Narayanpura, Railway Station Road, Kuchaman City, VCA has grown into one of the most trusted educational institutions in the region.
                            </p>
                            <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                Affiliated to both CBSE and RBSE boards, VCA offers a comprehensive education from Nursery to Class 12th including Arts and Science streams. Our hostel facility ensures students from remote areas also get the benefit of quality education.
                            </p>
                            <ul className="grid grid-cols-2 gap-3">
                                {[
                                    'Established 2026',
                                    'CBSE & RBSE Board',
                                    'Nursery to 12th',
                                    'Arts & Science',
                                    'NDA Coaching',
                                    'NEET Coaching',
                                    'JEE Coaching',
                                    'Hostel Available',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                        <FaCheckCircle className="text-accent text-xs flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Stats cards */}
                        <div className="grid grid-cols-2 gap-5">
                            {[
                                { icon: '🏫', label: 'Modern Campus', desc: 'State-of-the-art infrastructure' },
                                { icon: '📚', label: 'Dual Board', desc: 'CBSE & RBSE certified' },
                                { icon: '🎓', label: '1200+ Alumni', desc: 'Strong alumni network' },
                                { icon: '🏠', label: 'AC Hostel', desc: '24/7 supervised accommodation' },
                            ].map((c) => (
                                <div key={c.label} className="card-base p-6 text-center">
                                    <div className="text-4xl mb-3">{c.icon}</div>
                                    <h4 className="text-primary font-bold text-sm mb-1">{c.label}</h4>
                                    <p className="text-gray-400 text-xs">{c.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="section-pad section-alt">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle tag="Our Foundation" title="Vision & Mission" center />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        <div className="card-base p-8">
                            <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                                <FaEye className="text-primary text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                To be the most respected educational institution in Rajasthan that produces highly competent, confident, and character-driven individuals who lead society with integrity.
                            </p>
                            <ul className="space-y-2">
                                {['Develop global thinkers', 'Nurture innovative minds', 'Build strong character'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-accent">→</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-base p-8">
                            <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                                <FaBullseye className="text-accent text-2xl" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                To deliver holistic, technology-enabled, and value-based education that equips every student with academic knowledge and life skills to excel in competitive examinations and real-world challenges.
                            </p>
                            <ul className="space-y-2">
                                {['Quality classroom education', 'Competitive exam readiness', 'Holistic personality development'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-accent">→</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Educational Philosophy */}
            <section className="section-pad">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <SectionTitle tag="Philosophy" title="Our Educational Approach" center />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
                        {[
                            { icon: '🧠', title: 'Conceptual Clarity', desc: 'Deep understanding over rote learning with regular doubt-clearing sessions' },
                            { icon: '🏅', title: 'Academic Excellence', desc: 'Systematic test preparation, practice papers, and regular assessments' },
                            { icon: '🌟', title: 'Holistic Development', desc: 'Sports, arts, and personality development programs alongside academics' },
                        ].map((item) => (
                            <div key={item.title} className="card-base p-6 text-center">
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <h4 className="text-primary font-bold text-base mb-2">{item.title}</h4>
                                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Desk Messages */}
            <section className="section-pad section-alt">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle tag="From the Desk Of" title="Leadership Messages" center />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {deskMessages.map((msg) => <MessageCard key={msg.id} data={msg} />)}
                    </div>
                </div>
            </section>
        </main>
    );
}
