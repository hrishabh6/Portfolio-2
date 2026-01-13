import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <Work />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
        </main>
    );
}
