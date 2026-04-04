import Header from './components/Header';
import Hero from './components/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main className="max-w-6xl mx-auto px-6">
                <Hero />
                <About />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}