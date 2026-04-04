import { SKILLS_DATA, ABOUT_ME } from '../data/portfolioData';

export default function About() {
    return (
        <section id="about" className="py-20 grid md:grid-cols-3 gap-12 border-t border-slate-100">
            <div className="md:col-span-1">
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900">About</h2>
                <p className="text-slate-600 leading-relaxed">
                    {ABOUT_ME.bio} Based in Durant, OK, I leverage my background in logistics and
                    data scanning to solve complex business problems.
                </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {SKILLS_DATA.map((group) => (
                    <div key={group.category}>
                        <h3 className="text-sm font-black uppercase text-blue-600 mb-4">{group.category}</h3>
                        <ul className="space-y-2">
                            {group.items.map(item => (
                                <li key={item} className="text-slate-900 font-medium text-sm flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 bg-blue-400 rounded-full"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}