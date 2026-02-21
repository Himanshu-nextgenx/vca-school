export default function SectionTitle({ tag, title, subtitle, center = false }) {
    return (
        <div className={`mb-10 ${center ? 'text-center' : ''}`}>
            {tag && (
                <span className="inline-block text-xs font-semibold tracking-widest text-accent uppercase mb-3 bg-red-50 px-3 py-1 rounded-full">
                    {tag}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-3">
                {title}
            </h2>
            <div className={`w-14 h-1 rounded-full bg-gradient-to-r from-primary to-accent ${center ? 'mx-auto' : ''}`} />
            {subtitle && (
                <p className="mt-4 text-gray-500 text-base max-w-2xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
