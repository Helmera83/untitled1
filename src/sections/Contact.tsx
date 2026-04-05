import { ABOUT_ME } from '../data/portfolioData';

export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-10 py-16 md:px-20 md:py-20">
                {/* Decorative blur */}
                <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl"></div>
                <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>

                <div className="relative z-10 max-w-2xl">
                    <span className="section-label text-blue-400">04 — Contact</span>
                    <h2 className="mt-4 text-4xl md:text-6xl text-white leading-tight">
                        Let's build<br />
                        <span className="italic text-blue-400">something great.</span>
                    </h2>
                    <p className="mt-6 text-gray-400 leading-relaxed max-w-md">
                        Seeking roles in Data Analysis and Project Management. Let's talk about what we can create together.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a
                            href={`mailto:${ABOUT_ME.email}`}
                            className="px-8 py-4 bg-white text-gray-900 font-bold rounded-xl hover:bg-blue-50 transition-all"
                        >
                            {ABOUT_ME.email}
                        </a>
                        <a
                            href={ABOUT_ME.socials.credly}
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 border border-gray-700 text-gray-300 font-semibold rounded-xl hover:border-gray-500 hover:text-white transition-all"
                        >
                            View Certifications ↗
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
