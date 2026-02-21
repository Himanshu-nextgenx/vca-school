import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { galleryCategories } from '../data/schoolData';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Generate placeholder gallery items with gradient colors
const galleryItems = [
    { id: 1, category: 'Campus', label: 'Main Building', color: 'from-blue-400 to-blue-600', emoji: '🏫' },
    { id: 2, category: 'Classrooms', label: 'Smart Classroom', color: 'from-indigo-400 to-indigo-600', emoji: '🖥️' },
    { id: 3, category: 'Events', label: 'Annual Function', color: 'from-purple-400 to-purple-600', emoji: '🎭' },
    { id: 4, category: 'Sports', label: 'Sports Day', color: 'from-green-400 to-green-600', emoji: '⚽' },
    { id: 5, category: 'Hostel', label: 'Hostel Block', color: 'from-amber-400 to-amber-600', emoji: '🏠' },
    { id: 6, category: 'Campus', label: 'School Entrance', color: 'from-cyan-400 to-cyan-600', emoji: '🚪' },
    { id: 7, category: 'Events', label: 'Prize Distribution', color: 'from-rose-400 to-rose-600', emoji: '🏆' },
    { id: 8, category: 'Classrooms', label: 'Computer Lab', color: 'from-teal-400 to-teal-600', emoji: '💻' },
    { id: 9, category: 'Sports', label: 'Cricket Ground', color: 'from-lime-400 to-lime-600', emoji: '🏏' },
    { id: 10, category: 'Campus', label: 'Science Lab', color: 'from-blue-500 to-blue-700', emoji: '🔬' },
    { id: 11, category: 'Events', label: 'Republic Day', color: 'from-orange-400 to-orange-600', emoji: '🇮🇳' },
    { id: 12, category: 'Hostel', label: 'Dining Hall', color: 'from-pink-400 to-pink-600', emoji: '🍽️' },
];

export default function Gallery() {
    const [active, setActive] = useState('All');
    const [lightbox, setLightbox] = useState(null);

    const filtered = active === 'All' ? galleryItems : galleryItems.filter((g) => g.category === active);

    const nav = (dir) => {
        const idx = filtered.findIndex((g) => g.id === lightbox.id);
        const next = (idx + dir + filtered.length) % filtered.length;
        setLightbox(filtered[next]);
    };

    return (
        <main className="pt-20">
            <div className="bg-gradient-to-br from-primary-dark to-primary py-16 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <span className="text-xs font-bold tracking-widest text-gold uppercase mb-3 block">Visual Tour</span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Photo Gallery</h1>
                    <p className="text-white/75 text-base max-w-xl mx-auto">
                        A glimpse into campus life, events, sports, and student activities at VCA.
                    </p>
                </div>
            </div>

            <section className="section-pad">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {galleryCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-5 py-2 text-sm font-semibold rounded-full border-2 transition-all duration-200 ${active === cat
                                        ? 'bg-primary text-white border-primary'
                                        : 'border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filtered.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setLightbox(item)}
                                className={`relative bg-gradient-to-br ${item.color} rounded-2xl overflow-hidden aspect-square group cursor-pointer`}
                            >
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                                    <span className="text-5xl mb-2 group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                                    <span className="text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.label}</span>
                                </div>
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                                    <p className="text-white text-xs font-semibold">{item.label}</p>
                                    <p className="text-white/70 text-xs">{item.category}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightbox && (
                <div
                    className="lightbox-overlay"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        onClick={(e) => { e.stopPropagation(); nav(-1); }}
                        className="absolute left-4 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                    >
                        <FaChevronLeft />
                    </button>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`relative bg-gradient-to-br ${lightbox.color} w-72 h-72 sm:w-96 sm:h-96 rounded-3xl flex flex-col items-center justify-center text-white shadow-2xl`}
                    >
                        <span className="text-8xl mb-4">{lightbox.emoji}</span>
                        <p className="font-bold text-xl">{lightbox.label}</p>
                        <p className="text-white/70 text-sm mt-1">{lightbox.category}</p>
                    </div>
                    <button
                        onClick={(e) => { e.stopPropagation(); nav(1); }}
                        className="absolute right-4 p-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                    >
                        <FaChevronRight />
                    </button>
                    <button
                        onClick={() => setLightbox(null)}
                        className="absolute top-4 right-4 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors"
                    >
                        <FaTimes />
                    </button>
                </div>
            )}
        </main>
    );
}
