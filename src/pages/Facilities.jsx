import SectionTitle from '../components/SectionTitle';
import { facilities } from '../data/schoolData';

export default function Facilities() {
    return (
        <main className="pt-20">
            <div className="bg-gradient-to-br from-primary-dark to-primary py-16 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-xs font-bold tracking-widest text-gold uppercase mb-3 block">Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">World-Class Facilities</h1>
                    <p className="text-white/75 text-base max-w-2xl mx-auto">
                        Everything your child needs to learn, grow, and thrive — all under one roof.
                    </p>
                </div>
            </div>

            <section className="section-pad">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle tag="Our Campus" title="Facility Details" center />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-4">
                        {facilities.map((f) => (
                            <div key={f.title} className="card-base p-7 group">
                                <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">{f.icon}</div>
                                <h3 className="text-primary font-bold text-lg mb-3">{f.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hostel highlight */}
            <section className="section-pad section-alt">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="card-base overflow-hidden">
                        <div className="bg-gradient-to-r from-primary to-primary-light p-8 text-white text-center">
                            <div className="text-6xl mb-4">🏠</div>
                            <h2 className="text-3xl font-extrabold mb-3">Hostel Facility Available</h2>
                            <p className="text-white/80 text-sm max-w-xl mx-auto">
                                VCA provides fully air-conditioned hostel accommodation with nutritious meals, round-the-clock security, and dedicated study rooms — ensuring complete care for outstation students.
                            </p>
                        </div>
                        <div className="p-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
                            {[
                                { icon: '❄️', label: 'AC Rooms' },
                                { icon: '🍽️', label: 'Nutritious Meals' },
                                { icon: '📖', label: 'Study Room' },
                                { icon: '🔒', label: '24/7 Security' },
                            ].map((h) => (
                                <div key={h.label} className="text-center">
                                    <div className="text-3xl mb-2">{h.icon}</div>
                                    <p className="text-primary font-semibold text-sm">{h.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
