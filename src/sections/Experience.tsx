import { EXPERIENCE } from '../data/portfolioData.ts';

const Experience = () => {
    return (
        <section className="max-w-6xl mx-auto py-16">
            <h2 className="text-2xl font-bold mb-8 text-slate-800">Professional Experience</h2>
            <div className="space-y-8">
                {EXPERIENCE.map((job) => (
                    <div key={job.id} className="relative pl-8 border-l-2 border-slate-200">
                        <div className="absolute -left-2.25 top-0 h-4 w-4 rounded-full bg-blue-600 border-4 border-slate-50"></div>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline">
                            <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                            <span className="text-sm font-medium text-slate-500">{job.period}</span>
                        </div>
                        <p className="text-blue-600 font-medium mb-3">{job.company}</p>
                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                            {job.description.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
