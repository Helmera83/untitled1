import { SKILLS_DATA } from '../data/portfolioData';

/**
 * Skills Section - Progress Bar & Chip Hybrid
 * Visualizes category mastery while detailing individual competencies.
 */
const Skills = () => {
    // Proficiency mapping based on 10+ years experience and Google Certifications
    const getCategoryProficiency = (category: string) => {
        switch (category) {
            case "Business": return "95%"; // Based on ProjectCard Management & BI Certs [cite: 68, 71]
            case "Technical": return "90%"; // Based on Web Design & UX Certs [cite: 24, 65]
            case "CRM Tools": return "85%"; // Based on HubSpot & Salesforce usage
            default: return "80%";
        }
    };

    return (
        <section id="skills" className="py-20">
            <h2 className="text-3xl font-black mb-12 uppercase tracking-tighter text-slate-900">
                Core Competencies
            </h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
                {SKILLS_DATA.map((group) => (
                    <div key={group.category} className="space-y-6">
                        {/* Category Progress Header */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-end">
                                <h3 className="text-sm font-black uppercase tracking-widest text-blue-600">
                                    {group.category}
                                </h3>
                                <span className="text-xs font-bold text-slate-400">
                                    {getCategoryProficiency(group.category)} Mastery
                                </span>
                            </div>
                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 rounded-full transition-all duration-1000 shadow-[0_0_8px_rgba(37,99,235,0.4)]"
                                    style={{ width: getCategoryProficiency(group.category) }}
                                ></div>
                            </div>
                        </div>

                        {/* Individual Skill Chips */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {group.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-600 shadow-sm hover:border-blue-300 hover:text-blue-600 transition-colors cursor-default"
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
};

export default Skills;