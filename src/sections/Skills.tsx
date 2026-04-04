import { SKILLS } from '../data/portfolioData';
import type { SkillCategory } from '../types/types';

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="grid md:grid-cols-2 gap-12">
                {SKILLS.map((category: SkillCategory) => (
                    <div key={category.category} className="space-y-6">
                        <h3 className="text-xl font-black text-slate-900 border-b-2 border-blue-600 w-fit pb-1">
                            {category.category}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {category.items.map((skill: string) => (
                                <span key={skill} className="px-5 py-2.5 bg-white border-2 border-slate-100 rounded-2xl text-sm font-bold text-slate-700 hover:border-blue-200 hover:text-blue-600 transition-all cursor-default shadow-sm">
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