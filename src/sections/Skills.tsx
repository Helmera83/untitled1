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

const proficiencyMap: Record<string, number> = {
    'CRM Tools': 85,
    'Technical': 90,
    'Business': 95,
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 border-b border-gray-100">
            <div className="flex items-baseline gap-4 mb-12">
                <span className="section-label">02 — Skills</span>
                <h2 className="text-4xl md:text-5xl leading-none tracking-tight text-gray-900">Core Competencies</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILLS_DATA.map((group) => (
                    <div key={group.category} className="h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                        {/* Category label */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className={`w-2 h-2 rounded-full flex-shrink-0 ${accentMap[group.category]}`}></span>
                                <span className="text-sm font-semibold text-gray-700">{group.category}</span>
                                <span className="ml-auto text-xs font-semibold text-gray-400">{proficiencyMap[group.category] ?? 80}%</span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                                <div
                                    className={`h-full rounded-full ${accentMap[group.category]}`}
                                    style={{ width: `${proficiencyMap[group.category] ?? 80}%` }}
                                />
                            </div>
                        </div>

                        {/* Skills */}
                        <div className="mt-5 flex flex-wrap gap-2">
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
