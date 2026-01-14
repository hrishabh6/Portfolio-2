"use client";

import { Card } from "@/components/ui/card";
import { ArrowRight, Github, FileText, BookOpen } from "lucide-react";
import { personalInfo, aboutText, stats, socialLinks } from "@/lib/details";

export default function About() {
    return (
        <section
            id="about"
            className="relative py-20 lg:py-32 bg-bg-primary overflow-hidden"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Section label */}
                <span className="inline-block text-accent-blue text-sm font-medium uppercase tracking-widest mb-8 lg:mb-12">
                    About Me
                </span>

                {/* Main grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left column - Image */}
                    <div className="lg:col-span-4 relative">
                        <div className="relative aspect-square max-w-xs mx-auto lg:mx-0 lg:max-w-none">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-accent-blue/15 to-accent-purple/15 blur-2xl opacity-50" />

                            {/* Image container */}
                            <div className="relative w-full h-full rounded-lg bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-white/10 overflow-hidden flex items-center justify-center">
                                <img
                                    src={personalInfo.pfp}
                                    alt={personalInfo.name}
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right column - Content */}
                    <div className="lg:col-span-8 flex flex-col justify-center">
                        {/* Main heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 lg:mb-8">
                            {aboutText.headline.split(",")[0]},
                            <span className="gradient-text block">{aboutText.headline.split(",")[1]}</span>
                        </h2>

                        {/* Content grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-start">
                            {/* Paragraphs */}
                            <div className="md:col-span-7 space-y-4">
                                <p className="text-text-secondary text-base lg:text-lg leading-relaxed">
                                    {aboutText.paragraph1}
                                </p>
                                <p className="text-text-secondary text-sm lg:text-base leading-relaxed">
                                    {aboutText.paragraph2}
                                </p>
                            </div>

                            {/* Stats Card */}
                            <div className="md:col-span-5">
                                <Card className="glass rounded-xl p-5 lg:p-6 -rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <div className="space-y-3 lg:space-y-4">
                                        <StatItem value={stats.yearsExperience} label="Years Experience" />
                                        <StatItem value={stats.projectsCompleted} label="Projects Completed" />
                                        <StatItem value="8.3" label="CGPA" />
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pull Quote */}
                <div className="mt-12 lg:mt-20 relative">
                    <div className="border-l-4 border-accent-blue bg-bg-secondary/50 p-6 lg:p-10 max-w-3xl mx-auto rounded-r-lg">
                        <blockquote className="text-xl lg:text-2xl font-medium italic text-text-secondary">
                            &ldquo;{aboutText.quote}&rdquo;
                        </blockquote>
                        <cite className="block mt-3 text-accent-blue not-italic text-sm">— My Philosophy</cite>
                    </div>
                </div>

                {/* Action Links */}
                <div className="mt-12 lg:mt-16 flex flex-wrap justify-center gap-6 lg:gap-10">
                    <ActionLink href={personalInfo.resumeUrl} icon={FileText}>
                        Resume
                    </ActionLink>
                    <ActionLink href={socialLinks.github} icon={Github}>
                        GitHub
                    </ActionLink>
                    <ActionLink href={socialLinks.linkedin} icon={BookOpen}>
                        LinkedIn
                    </ActionLink>
                </div>
            </div>

            {/* Section divider */}
            <div className="section-divider mt-20 lg:mt-28" />
        </section>
    );
}

function StatItem({ value, label }) {
    return (
        <div className="flex items-center gap-3 lg:gap-4">
            <span className="text-xl lg:text-2xl font-bold gradient-text">{value}</span>
            <span className="text-xs lg:text-sm text-text-tertiary">{label}</span>
        </div>
    );
}

function ActionLink({ href, icon: Icon, children }) {
    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-2 text-text-secondary hover:text-accent-blue transition-colors duration-300"
        >
            <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="font-medium text-sm lg:text-base">{children}</span>
            <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
        </a>
    );
}
