import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects() {
    return (
        <section id="projects" className="py-24 border-b border-gray-100">
            <div className="flex items-baseline gap-4 mb-12">
                <span className="section-label">03 — Work</span>
                <h2 className="text-4xl md:text-5xl leading-none tracking-tight text-gray-900">Selected Projects</h2>
            </div>

            <div className="space-y-6">
                {PROJECTS_DATA.map((p, i) => (
                    <div
                        key={p.id}
                        className="group relative bg-gray-50 hover:bg-blue-50/40 rounded-2xl p-8 md:p-10 border border-gray-100 hover:border-blue-100 transition-all duration-300"
                    >
                        {/* Number + title row */}
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                            <div className="flex items-start gap-5">
                                <span style={{ fontFamily: 'var(--font-display)' }}
                                    className="text-5xl text-gray-200 group-hover:text-blue-200 transition-colors leading-none flex-shrink-0">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                                        {p.title}
                                    </h3>
                                    {p.link && (
                                        <a
                                            href={p.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-xs font-semibold text-blue-500 hover:text-blue-700 uppercase tracking-widest"
                                        >
                                            View Live ↗
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2 md:justify-end">
                                {p.technologies.map((t) => (
                                    <span key={t} className="px-3 py-1 bg-white border border-gray-200 text-xs font-semibold text-gray-600 rounded-full">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Three-column details */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { label: 'Problem', content: p.problem, accent: false },
                                { label: 'Solution', content: p.solution, accent: false },
                                { label: 'Outcome', content: p.outcome, accent: true },
                            ].map(({ label, content, accent }) => (
                                <div key={label}>
                                    <p className="section-label mb-2">{label}</p>
                                    <p className={`text-sm leading-relaxed ${accent ? 'text-gray-900 font-semibold' : 'text-gray-500'}`}>
                                        {content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
