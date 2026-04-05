import { ABOUT_ME } from '../data/portfolioData';

export default function Header() {
    const initials = ABOUT_ME.name.split(' ').map(n => n[0]).join('');

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#" className="flex items-center gap-3 group">
                    <span className="w-8 h-8 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        {initials}
                    </span>
                    <span style={{ fontFamily: 'var(--font-body)' }} className="text-sm font-semibold text-gray-900 tracking-tight hidden sm:block">
                        {ABOUT_ME.name}
                    </span>
                </a>

                <nav className="flex items-center gap-1">
                    {[
                        { label: 'About', href: '#about' },
                        { label: 'Work', href: '#projects' },
                        { label: 'Skills', href: '#skills' },
                    ].map(({ label, href }) => (
                        <a
                            key={label}
                            href={href}
                            className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-all"
                        >
                            {label}
                        </a>
                    ))}
                    <a
                        href={`mailto:${ABOUT_ME.email}`}
                        className="ml-2 px-4 py-1.5 bg-gray-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Hire Me
                    </a>
                </nav>
            </div>
        </header>
    );
}
