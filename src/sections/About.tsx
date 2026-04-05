import { ABOUT_ME, CERTIFICATIONS } from '../data/portfolioData';

export default function About() {
    return (
        <section id="about" className="py-24 border-b border-gray-100">
            <div className="max-w-3xl space-y-8">
                {/* Bio + Certs */}
                <div className="space-y-8">
                    <div>
                        <span className="section-label">01 — About</span>
                        <h2 className="mt-3 text-4xl md:text-5xl leading-none tracking-tight text-gray-900">Who I am</h2>
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
                                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
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
            </div>
        </section>
    );
}
