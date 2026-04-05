import { ABOUT_ME, CERTIFICATIONS } from '../data/portfolioData';

const stats = [
    { value: '10+', label: 'Years Experience' },
    { value: String(CERTIFICATIONS.length), label: 'Google Certs' },
    { value: '2', label: 'Live Projects' },
    { value: 'Open', label: 'To Opportunities' },
];

export default function Hero() {
    return (
        <section className="pt-24 pb-20 border-b border-gray-100">
            {/* Role badge */}
            <div className="fade-up fade-up-1 mb-10">
                <span className="section-label">
                    ✦ Available for new roles · {ABOUT_ME.location}
                </span>
            </div>

            {/* Giant name */}
            <h1 className="fade-up fade-up-1 text-[clamp(3rem,10vw,7rem)] leading-[0.9] font-normal text-gray-900 mb-4 -ml-1">
                {ABOUT_ME.name.split(' ')[0]}
                <br />
                <span className="italic text-blue-600">{ABOUT_ME.name.split(' ')[1]}</span>
            </h1>

            {/* Title + bio row */}
            <div className="fade-up fade-up-2 mt-10 grid md:grid-cols-2 gap-10 items-end">
                <div>
                    <p className="text-lg font-medium text-gray-900 mb-3">{ABOUT_ME.title}</p>
                    <p className="text-gray-500 leading-relaxed max-w-sm">
                        {ABOUT_ME.valueStatement}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                    <a
                        href="#projects"
                        className="px-7 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-blue-600 transition-all text-center"
                    >
                        View Work
                    </a>
                    <a
                        href="/Amanda_Helmer_Resume.pdf"
                        download
                        className="px-7 py-3.5 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all text-center"
                    >
                        Download CV
                    </a>
                </div>
            </div>

            {/* Stats strip */}
            <div className="fade-up fade-up-3 mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
                {stats.map(({ value, label }) => (
                    <div key={label} className="bg-white px-6 py-5 flex flex-col gap-1">
                        <span style={{ fontFamily: 'var(--font-display)' }} className="text-3xl text-gray-900">
                            {value}
                        </span>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-widest">{label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
