import { useState } from 'react';
import { FaQuoteLeft, FaChevronDown } from 'react-icons/fa';

export default function MessageCard({ data }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="card-base p-8 flex flex-col gap-5 group">
            {/* Header */}
            <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-4xl flex-shrink-0 shadow-md">
                    {data.icon}
                </div>
                <div>
                    <span className="inline-block text-xs font-bold tracking-widest text-accent uppercase bg-red-50 px-2 py-0.5 rounded-full mb-2">
                        {data.designation}
                    </span>
                    <h3 className="text-lg font-bold text-primary leading-tight">{data.name}</h3>
                    <p className="text-sm text-gray-400 font-medium">{data.designation}, VCA Kuchaman City</p>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gray-100" />

            {/* Quote */}
            <div className="relative">
                <FaQuoteLeft className="text-primary/10 text-5xl absolute -top-2 -left-1" />
                <p className="text-gray-600 text-sm leading-relaxed pl-4 italic">
                    {expanded ? data.message : data.short}
                </p>
            </div>

            {/* Read more */}
            <button
                onClick={() => setExpanded(!expanded)}
                className="self-start flex items-center gap-1 text-primary text-sm font-semibold hover:text-primary-light transition-colors duration-200 group"
            >
                {expanded ? 'Read Less' : 'Read More'}
                <FaChevronDown
                    className={`text-xs transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                />
            </button>
        </div>
    );
}
