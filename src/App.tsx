import Header from './components/Header';
import Hero from './components/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import Skills from './sections/Skills';
import Projects from './sections/Projects';

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="max-w-6xl mx-auto px-6 md:px-8">
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
