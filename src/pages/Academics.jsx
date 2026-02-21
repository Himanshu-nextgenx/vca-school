import SectionTitle from '../components/SectionTitle';
import { academics, foundationPrograms } from '../data/schoolData';

export default function Academics() {
    return (
        <main className="pt-20">
            <div className="bg-gradient-to-br from-primary-dark to-primary py-16 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-xs font-bold tracking-widest text-gold uppercase mb-3 block">Knowledge Hub</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Academic Programs</h1>
                    <p className="text-white/75 text-base max-w-2xl mx-auto">
                        Comprehensive education from Nursery to Class 12th under CBSE & RBSE standards.
                    </p>
                </div>
            </div>

            {/* Academic Levels */}
            <section className="section-pad">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle tag="Curriculum" title="Class-wise Academic Programs" center />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-6">
                        {academics.map((a) => (
                            <div key={a.level} className="card-base overflow-hidden flex flex-col sm:flex-row items-stretch">
                                <div className={`bg-gradient-to-br ${a.color} p-6 flex flex-col items-center justify-center min-w-[130px] text-white text-center`}>
                                    <span className="text-5xl mb-2">{a.icon}</span>
                                    <p className="font-bold text-sm">{a.level}</p>
                                    <p className="text-xs text-white/80 mt-1">{a.classes}</p>
                                </div>
                                <div className="p-6 flex-1">
                                    <h3 className="text-primary font-bold text-lg mb-2">{a.level} — {a.classes}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.desc}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {['CBSE', 'RBSE', 'Regular Assessments'].map((tag) => (
                                            <span key={tag} className="text-xs bg-primary-50 text-primary font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Board Affiliation */}
            <section className="section-pad section-alt">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle tag="Board Affiliation" title="CBSE & RBSE Curriculum" center />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        {[
                            { board: 'CBSE', logo: '🇮🇳', desc: 'Central Board of Secondary Education curriculum with a focus on conceptual learning, project-based assessment, and national standardized examination patterns.', features: ['NCERT Textbooks', 'Pan-India Recognition', 'Activity-Based Learning', 'Board Exams (X & XII)'] },
                            { board: 'RBSE', logo: '🏜️', desc: 'Rajasthan Board of Secondary Education curriculum aligned with state standards, providing students with local-language education options and state-level scholarship eligibility.', features: ['Rajasthan Board Standard', 'Hindi Medium Option', 'State Scholarship Eligibility', 'Board Exams (X & XII)'] },
                        ].map((b) => (
                            <div key={b.board} className="card-base p-8">
                                <div className="flex items-center gap-4 mb-5">
                                    <span className="text-4xl">{b.logo}</span>
                                    <h3 className="text-2xl font-extrabold text-primary">{b.board} Board</h3>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-5">{b.desc}</p>
                                <ul className="space-y-2">
                                    {b.features.map((f) => (
                                        <li key={f} className="text-sm text-gray-600 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Foundation Programs */}
            <section className="section-pad">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle tag="Competitive Coaching" title="Foundation Programs" center />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                        {foundationPrograms.map((prog) => (
                            <div key={prog.title} className="card-base p-8 text-center">
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

            {/* Examination System */}
            <section className="section-pad section-alt">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <SectionTitle tag="Assessment" title="Examination System" center />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
                        {[
                            { icon: '📝', label: 'Unit Tests', desc: 'Monthly' },
                            { icon: '📊', label: 'Mid-Term', desc: 'Half-Yearly' },
                            { icon: '📋', label: 'Pre-Board', desc: 'Annual' },
                            { icon: '🏆', label: 'Board Exams', desc: 'X & XII' },
                        ].map((e) => (
                            <div key={e.label} className="card-base p-6 text-center">
                                <div className="text-3xl mb-2">{e.icon}</div>
                                <h4 className="text-primary font-bold text-sm mb-1">{e.label}</h4>
                                <p className="text-gray-400 text-xs">{e.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
