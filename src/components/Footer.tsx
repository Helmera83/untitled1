import { ABOUT_ME } from '../data/portfolioData';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-xs text-gray-400">
                    © {year} {ABOUT_ME.name} · Durant, Oklahoma
                </p>
                <p className="text-xs text-gray-400">
                    Built with React, TypeScript & Vite
                </p>
                <div className="flex gap-6">
                    <a href={ABOUT_ME.socials.github} target="_blank" rel="noreferrer"
                        className="text-xs font-semibold text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-colors">
                        GitHub
                    </a>
                    <a href={ABOUT_ME.socials.credly} target="_blank" rel="noreferrer"
                        className="text-xs font-semibold text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-colors">
                        Credly
                    </a>
                    <a href={`mailto:${ABOUT_ME.email}`}
                        className="text-xs font-semibold text-gray-400 hover:text-gray-900 uppercase tracking-widest transition-colors">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
