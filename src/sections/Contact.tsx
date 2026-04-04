import { ABOUT_ME } from '../data/portfolioData';

const Contact = () => {
    return (
        <section id="contact" className="py-24">
            <div className="relative overflow-hidden bg-blue-600 rounded-[3rem] p-12 md:p-20 text-center text-white">
                {/* Visual decoration */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>

                <h2 className="text-4xl md:text-6xl font-black mb-6 relative z-10">Let's build something.</h2>
                <p className="text-blue-100 text-lg mb-10 max-w-lg mx-auto relative z-10">
                    Currently seeking roles in Data Analysis and Project Management where I can apply my Purdue Global education.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center relative z-10">
                    <a
                        href={`mailto:${ABOUT_ME.email}`}
                        className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-slate-100 transition-all shadow-xl"
                    >
                        Email Amanda
                    </a>
                    <a
                        href={ABOUT_ME.socials.credly}
                        target="_blank"
                        className="px-10 py-5 bg-blue-700 text-white font-black rounded-2xl hover:bg-blue-800 transition-all border border-blue-500"
                    >
                        Certifications
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;