import { ABOUT_ME, EXPERIENCE, CERTIFICATIONS } from '../data/portfolioData';

export default function About() {
    return (
        <section id="about" className="py-20 border-b border-gray-100">
            <div className="grid md:grid-cols-3 gap-12">
                {/* Left: Bio + Certs */}
                <div className="md:col-span-1 space-y-8">
                    <div>
                        <span className="section-label">01 — About</span>
                        <h2 className="mt-3 text-4xl text-gray-900">Who I am</h2>
                    </div>

                    <p className="text-gray-500 leading-relaxed text-sm">
                        {ABOUT_ME.bio}
                    </p>

                    {/* Certifications compact list */}
                    <div>
                        <p className="section-label mb-3">Certifications</p>
                        <ul className="space-y-2">
                            {CERTIFICATIONS.map((cert) => (
                                <li key={cert} className="flex items-start gap-2 text-xs text-gray-600">
                                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex gap-4 pt-2">
                        <a href={ABOUT_ME.socials.github} target="_blank" rel="noreferrer"
                            className="text-xs font-semibold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">
                            GitHub ↗
                        </a>
                        <a href={ABOUT_ME.socials.credly} target="_blank" rel="noreferrer"
                            className="text-xs font-semibold text-gray-400 hover:text-gray-900 transition-colors uppercase tracking-widest">
                            Credly ↗
                        </a>
                    </div>
                </div>

                {/* Right: Experience Timeline */}
                <div className="md:col-span-2">
                    <div className="flex items-center justify-between mb-8">
                        <span className="section-label">Experience</span>
                        <div className="h-px flex-1 bg-gray-100 ml-4"></div>
                    </div>

                    <div className="space-y-0">
                        {EXPERIENCE.map((job, i) => (
                            <div
                                key={job.id}
                                className={`grid grid-cols-[1fr_auto] gap-6 py-6 ${i < EXPERIENCE.length - 1 ? 'border-b border-gray-100' : ''}`}
                            >
                                <div>
                                    <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                        <h3 className="text-base font-semibold text-gray-900" style={{ fontFamily: 'var(--font-body)' }}>
                                            {job.role}
                                        </h3>
                                        <span className="text-blue-600 text-sm font-medium">@ {job.company}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mb-3">{job.location}</p>
                                    <ul className="space-y-1">
                                        {job.description.map((point) => (
                                            <li key={point} className="text-sm text-gray-500 flex gap-2">
                                                <span className="text-gray-300 flex-shrink-0">—</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-medium text-gray-400 whitespace-nowrap">{job.period}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
