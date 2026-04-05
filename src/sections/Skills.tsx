import { SKILLS_DATA } from '../data/portfolioData';

const colorMap: Record<string, string> = {
    'CRM Tools': 'bg-violet-50 text-violet-700 border-violet-100',
    'Technical':  'bg-blue-50 text-blue-700 border-blue-100',
    'Business':   'bg-emerald-50 text-emerald-700 border-emerald-100',
};

const accentMap: Record<string, string> = {
    'CRM Tools': 'bg-violet-500',
    'Technical':  'bg-blue-600',
    'Business':   'bg-emerald-500',
};

export default function Skills() {
    return (
        <section id="skills" className="py-20 border-b border-gray-100">
            <div className="flex items-baseline gap-4 mb-12">
                <span className="section-label">02 — Skills</span>
                <h2 className="text-4xl text-gray-900">Core Competencies</h2>
            </div>

            <div className="space-y-10">
                {SKILLS_DATA.map((group) => (
                    <div key={group.category} className="grid md:grid-cols-[200px_1fr] gap-6 items-start">
                        {/* Category label */}
                        <div className="flex items-center gap-3">
                            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${accentMap[group.category]}`}></span>
                            <span className="text-sm font-semibold text-gray-700">{group.category}</span>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                                <span
                                    key={skill}
                                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${colorMap[group.category]} transition-all hover:scale-105 cursor-default`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
