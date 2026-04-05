import { PROJECTS_DATA } from '../data/portfolioData';

export default function Projects() {
    return (
        <section id="projects" className="py-20 border-t border-slate-100">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter">Selected Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {PROJECTS_DATA.map((p) => (
                    <div key={p.id} className="h-full bg-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 group">
                        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                            <h3 className="text-3xl font-bold text-slate-900">{p.title}</h3>
                            <div className="flex gap-2 mt-4 md:mt-0">
                                {p.technologies.map((t: string) => (
                                    <span key={t} className="px-3 py-1 bg-white border border-slate-200 text-xs font-bold rounded-full">{t}</span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div>
                                <h4 className="text-xs font-black uppercase text-blue-600 mb-2">The Problem</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{p.problem}</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase text-blue-600 mb-2">What I Built</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">{p.solution}</p>
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase text-blue-600 mb-2">Outcome</h4>
                                <p className="text-slate-900 font-bold text-sm leading-relaxed">{p.outcome}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}