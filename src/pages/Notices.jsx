import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { notices } from '../data/schoolData';
import { FaBell, FaFilePdf, FaSearch } from 'react-icons/fa';

const typeColors = {
    Admission: 'bg-blue-100 text-blue-700',
    Event: 'bg-purple-100 text-purple-700',
    Exam: 'bg-orange-100 text-orange-700',
    Fee: 'bg-red-100 text-red-700',
    Academic: 'bg-green-100 text-green-700',
    Hostel: 'bg-teal-100 text-teal-700',
};

export default function Notices() {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');

    const types = ['All', ...new Set(notices.map((n) => n.type))];

    const filtered = notices.filter((n) => {
        const matchType = filter === 'All' || n.type === filter;
        const matchSearch = n.title.toLowerCase().includes(search.toLowerCase());
        return matchType && matchSearch;
    });

    return (
        <main className="pt-20">
            <div className="bg-gradient-to-br from-primary-dark to-primary py-16 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-xs font-bold tracking-widest text-gold uppercase mb-3 block">Stay Updated</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Notice Board</h1>
                    <p className="text-white/75 text-base max-w-xl mx-auto">
                        Latest announcements, circulars, and important updates from VCA.
                    </p>
                </div>
            </div>

            <section className="section-pad">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search & Filter */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <div className="relative flex-1">
                            <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                            <input
                                type="text"
                                placeholder="Search notices..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {types.map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setFilter(t)}
                                    className={`px-4 py-2 text-xs font-semibold rounded-full border-2 transition-all duration-200 ${filter === t ? 'bg-primary text-white border-primary' : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                                        }`}
                                >
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Notice List */}
                    <div className="bg-white rounded-2xl shadow-card overflow-hidden">
                        {filtered.length === 0 ? (
                            <div className="py-16 text-center text-gray-400">
                                <FaBell className="text-4xl mx-auto mb-3 opacity-30" />
                                <p className="text-sm">No notices found</p>
                            </div>
                        ) : (
                            filtered.map((n, i) => (
                                <div
                                    key={n.id}
                                    className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 py-5 hover:bg-primary-50 transition-colors duration-200 cursor-pointer ${i < filtered.length - 1 ? 'border-b border-gray-100' : ''
                                        }`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${n.important ? 'bg-accent text-white' : 'bg-primary-50 text-primary'}`}>
                                        <FaBell className="text-sm" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-2 mb-1">
                                            {n.important && (
                                                <span className="text-xs font-bold text-white bg-accent px-2 py-0.5 rounded-full">Important</span>
                                            )}
                                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${typeColors[n.type] || 'bg-gray-100 text-gray-600'}`}>
                                                {n.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-800 text-sm font-semibold">{n.title}</p>
                                    </div>
                                    <div className="flex items-center gap-4 flex-shrink-0">
                                        <span className="text-xs text-gray-400 font-medium">{n.date}</span>
                                        <button className="p-2 text-primary hover:text-accent hover:bg-red-50 rounded-lg transition-all duration-200" title="Download PDF">
                                            <FaFilePdf />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <p className="text-center text-sm text-gray-400 mt-6">
                        For more information, contact the school office at <a href="tel:+919571133669" className="text-primary font-semibold">95711-33669</a>
                    </p>
                </div>
            </section>
        </main>
    );
}
