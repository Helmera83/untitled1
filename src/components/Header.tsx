import { ABOUT_ME } from '../data/portfolioData';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <span className="text-xl font-black text-slate-900 tracking-tighter">{ABOUT_ME.name.toUpperCase()}</span>
                <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
                    <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
                    <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
                    <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
                    <a href={`mailto:${ABOUT_ME.email}`} className="text-blue-600 font-bold">Contact</a>
                </nav>
            </div>
        </header>
    );
}