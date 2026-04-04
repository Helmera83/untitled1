import { EDUCATION_DATA } from '../data/portfolioData';

const EducationSection = () => {
    return (
        <section id="education" className="py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-black text-slate-900 mb-12 flex items-center gap-4">
                    <span className="h-8 w-1 bg-blue-600 rounded-full"></span>
                    Education
                </h2>

                <div className="space-y-12">
                    {EDUCATION_DATA.map((edu, index) => (
                        <div key={index} className="group relative bg-slate-50 p-8 rounded-2xl border border-slate-100 transition-all hover:shadow-md">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{edu.school}</h3>
                                    <p className="text-lg font-medium text-blue-600 mt-1">
                                        {edu.degree} in {edu.major}
                                    </p>
                                    <div className="flex items-center gap-2 mt-2 text-sm font-bold uppercase tracking-wider text-slate-400">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                                        {edu.status}
                                    </div>
                                </div>

                                {/* Academic Badge */}
                                <div className="hidden md:block px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm">
                                    <span className="text-xs font-bold text-slate-500 italic">Student ID: 45114629</span>
                                </div>
                            </div>

                            {edu.relevantCoursework && (
                                <div className="mt-8">
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Focus Areas</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {edu.relevantCoursework.map((course) => (
                                            <span
                                                key={course}
                                                className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 transition-colors group-hover:border-blue-200"
                                            >
                        {course}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationSection;