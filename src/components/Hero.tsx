import { ABOUT_ME } from '../data/portfolioData';

export default function Hero() {
    return (
        <section className="py-24 flex flex-col items-center text-center">
            <h1 className="text-6xl font-black text-slate-900 tracking-tighter mb-4">
                {ABOUT_ME.name}
            </h1>
            <h2 className="text-2xl font-bold text-blue-600 mb-6 uppercase tracking-wide">
                {ABOUT_ME.title}
            </h2>
            <p className="max-w-2xl text-xl text-slate-600 leading-relaxed mb-10">
                I design and build systems that solve <span className="text-slate-900 font-semibold">real organizational problems </span>  <span className="text-slate-900 font-semibold"></span>
            </p>
            <div className="flex gap-4">
                <a href="#projects" className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition-all">
                    View Projects
                </a>
                <a href="/Amanda_Helmer_Resume.pdf" download className="px-8 py-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-xl hover:bg-slate-50 transition-all">
                    Download Resume (PDF)
                </a>
            </div>
        </section>
    );
}