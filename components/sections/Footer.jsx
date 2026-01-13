"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { personalInfo, socialLinks, footerData } from "@/lib/details";

export default function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [loadTime, setLoadTime] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 500);
        };

        if (typeof window !== "undefined" && window.performance) {
            const navigationEntry = performance.getEntriesByType("navigation")[0];
            if (navigationEntry) {
                const time = (navigationEntry.loadEventEnd - navigationEntry.startTime) / 1000;
                setLoadTime(time > 0 ? time.toFixed(2) : null);
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`
          fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 w-12 h-12 lg:w-14 lg:h-14 rounded-full
          bg-gradient-to-br from-accent-blue to-accent-cyan
          flex items-center justify-center text-white shadow-lg
          transition-all duration-300 hover:scale-110 hover:shadow-glow
          ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
                aria-label="Back to top"
            >
                <ArrowUp className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Footer */}
            <footer className="bg-bg-primary border-t border-accent-blue/20 py-12 lg:py-16 px-6 md:px-12 lg:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
                        <div className="space-y-4 lg:space-y-6">
                            <a href="#" className="text-xl lg:text-2xl font-bold gradient-text">
                                {personalInfo.initials}.dev
                            </a>

                            <nav className="flex flex-wrap gap-4 lg:gap-6 text-text-secondary text-sm lg:text-base">
                                <a href="#work" className="hover:text-accent-blue transition-colors">
                                    Work
                                </a>
                                <a href="#skills" className="hover:text-accent-blue transition-colors">
                                    Skills
                                </a>
                                <a href="#experience" className="hover:text-accent-blue transition-colors">
                                    Experience
                                </a>
                                <a href="#contact" className="hover:text-accent-blue transition-colors">
                                    Contact
                                </a>
                            </nav>

                            <div className="flex gap-3 lg:gap-4">
                                <SocialLink href={socialLinks.github} icon={Github} label="GitHub" />
                                <SocialLink href={socialLinks.linkedin} icon={Linkedin} label="LinkedIn" />
                                <SocialLink href={socialLinks.twitter} icon={Twitter} label="Twitter" />
                                <SocialLink href={socialLinks.email} icon={Mail} label="Email" />
                            </div>
                        </div>

                        <div className="hidden lg:block">
                            <button
                                onClick={scrollToTop}
                                className="group flex items-center gap-2 text-text-tertiary hover:text-accent-blue transition-colors"
                            >
                                <span className="text-sm">Back to Top</span>
                                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="h-px bg-white/5 my-6 lg:my-8" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 lg:gap-4 text-xs lg:text-sm text-text-tertiary">
                        <p>
                            © {new Date().getFullYear()} {personalInfo.name} • Crafted with attention to detail
                        </p>

                        {loadTime && (
                            <p className="flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                Loaded in {loadTime}s
                            </p>
                        )}
                    </div>

                    <p className="mt-4 text-[10px] lg:text-xs text-text-tertiary/50 hover:text-text-tertiary transition-colors cursor-default group">
                        <span className="group-hover:hidden">{footerData.tagline}</span>
                        <span className="hidden group-hover:inline">{footerData.alternateTagline}</span>
                    </p>
                </div>
            </footer>
        </>
    );
}

function SocialLink({ href, icon: Icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 lg:w-10 lg:h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-secondary hover:bg-accent-blue/20 hover:text-accent-blue transition-all duration-300"
            aria-label={label}
        >
            <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
        </a>
    );
}
