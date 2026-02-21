import { useEffect, useState, useRef } from 'react';

function CounterItem({ label, value, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const started = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started.current) {
                    started.current = true;
                    const duration = 2000;
                    const steps = 60;
                    const increment = value / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= value) {
                            setCount(value);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [value]);

    return (
        <div ref={ref} className="text-center px-4">
            <div className="text-4xl md:text-5xl font-extrabold text-white mb-1">
                {count.toLocaleString()}{suffix}
            </div>
            <p className="text-white/70 text-sm font-medium">{label}</p>
        </div>
    );
}

export default function StatsCounter({ stats }) {
    return (
        <section className="bg-gradient-to-r from-primary-dark via-primary to-primary-light py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-white/20">
                    {stats.map((stat) => (
                        <CounterItem key={stat.label} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
