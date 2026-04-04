import { ABOUT_ME } from '../data/portfolioData.ts';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-slate-50 border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Left Side */}
                    <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-4">Let's Connect</h3>
                        <p className="text-slate-600 max-w-xs mb-6">
                            Currently based in <span className="font-semibold text-slate-800">{ABOUT_ME.location}</span>.
                            Open to discussions regarding Data Analysis, Project Management, or Development roles.
                        </p>
                        <div className="flex gap-4">
                            <a href={ABOUT_ME.socials.github} target="_blank" className="text-slate-400 hover:text-slate-900 font-medium">GitHub</a>
                            <a href={ABOUT_ME.socials.credly} target="_blank" className="text-slate-400 hover:text-slate-900 font-medium">Certifications</a>
                        </div>
                    </div>

                    {/* Right Side - Quick Links */}
                    <div className="md:text-right">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Contact</p>
                        <a
                            href={`mailto:${ABOUT_ME.email}`}
                            className="text-2xl font-bold text-slate-900 hover:text-blue-600 break-all"
                        >
                            {ABOUT_ME.email}
                        </a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500 italic">
                        Purdue Global University • B.S. in Business Administration
                    </p>
                    <p className="text-xs text-slate-400">
                        © {currentYear} {ABOUT_ME.name}. Built with Vite, React, and TypeScript.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;