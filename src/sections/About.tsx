import { ABOUT_ME } from "../data/portfolioData.ts";
export default function About() {
    return (
        <section id="about" className="py-20 grid md:grid-cols-3 gap-12 border-t border-slate-100">
            <div className="md:col-span-1">
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-4 text-slate-900">About</h2>
                <p className="text-slate-600 leading-relaxed">
                    {ABOUT_ME.bio}
                </p>
            </div>
        </section>
    );
}