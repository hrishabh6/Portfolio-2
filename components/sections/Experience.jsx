"use client";

import { useRef, useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/details";

export default function Experience() {
    const sectionRef = useRef(null);
    const [activeId, setActiveId] = useState(1);
    const [expandedId, setExpandedId] = useState(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = parseInt(entry.target.dataset.id);
                        setActiveId(id);
                    }
                });
            },
            { threshold: 0.6, rootMargin: "-100px 0px -100px 0px" }
        );

        const cards = document.querySelectorAll("[data-experience-card]");
        cards.forEach((card) => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="py-20 lg:py-32 bg-bg-primary"
        >
            <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <span className="inline-block text-accent-blue text-sm font-medium uppercase tracking-widest mb-3 lg:mb-4">
                        Journey
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Experience &
                        <span className="gradient-text"> Education</span>
                    </h2>
                </div>

                {/* Vertical Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div
                        className="absolute left-2 sm:left-4 md:left-6 top-0 bottom-0 w-px"
                        style={{
                            background: "linear-gradient(180deg, transparent, rgba(0, 113, 227, 0.3) 10%, rgba(0, 113, 227, 0.3) 90%, transparent)",
                        }}
                    />

                    {/* Experience cards */}
                    <div className="space-y-6 lg:space-y-8">
                        {experiences.map((exp) => (
                            <ExperienceCard
                                key={exp.id}
                                experience={exp}
                                isActive={activeId === exp.id}
                                isExpanded={expandedId === exp.id}
                                onToggleExpand={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                            />
                        ))}
                    </div>

                    {/* What's Next CTA */}
                    <div className="relative pl-8 sm:pl-12 md:pl-16 mt-8 lg:mt-12">
                        <div
                            className="absolute left-2 sm:left-4 md:left-6 top-4 w-2 h-2 sm:w-3 sm:h-3 -translate-x-1/2 rounded-full bg-accent-cyan"
                        />

                        <a
                            href="#contact"
                            className="block p-5 lg:p-6 rounded-xl text-center transition-all duration-300 hover:bg-white/5"
                            style={{
                                background: "linear-gradient(135deg, rgba(0, 113, 227, 0.1) 0%, rgba(139, 92, 246, 0.05) 100%)",
                                border: "1px solid rgba(0, 113, 227, 0.2)",
                            }}
                        >
                            <span className="text-3xl lg:text-4xl mb-3 block">🚀</span>
                            <span className="text-lg lg:text-xl font-semibold">What&apos;s Next?</span>
                            <p className="text-sm text-text-secondary mt-1">Let&apos;s build something together</p>
                        </a>
                    </div>
                </div>
            </div>

            {/* Section divider */}
            <div className="section-divider mt-20 lg:mt-24" />
        </section>
    );
}

function ExperienceCard({ experience, isActive, isExpanded, onToggleExpand }) {
    return (
        <div
            data-experience-card
            data-id={experience.id}
            className="relative pl-8 sm:pl-12 md:pl-16"
        >
            {/* Timeline dot */}
            <div
                className={`
          absolute left-2 sm:left-4 md:left-6 top-5 lg:top-6 w-2 h-2 sm:w-3 sm:h-3 -translate-x-1/2 rounded-full
          transition-all duration-300
          ${isActive
                        ? "bg-accent-blue scale-125 shadow-[0_0_12px_rgba(0,113,227,0.5)]"
                        : "bg-white/20"
                    }
        `}
            />

            {/* Year badge - mobile */}
            <div className="sm:hidden mb-2">
                <span className={`text-xs font-medium ${isActive ? "text-accent-blue" : "text-text-tertiary"}`}>
                    {experience.year}
                </span>
            </div>

            {/* Card */}
            <div
                className={`
          relative rounded-xl p-4 lg:p-6 cursor-pointer
          transition-all duration-300
          ${isActive ? "scale-[1.01]" : "scale-100"}
          ${experience.isCurrent ? "ring-1 ring-accent-blue/30" : ""}
        `}
                style={{
                    background: isActive
                        ? "linear-gradient(180deg, rgba(30, 30, 35, 0.98) 0%, rgba(25, 25, 30, 0.98) 100%)"
                        : "linear-gradient(180deg, rgba(25, 25, 30, 0.6) 0%, rgba(20, 20, 25, 0.6) 100%)",
                    boxShadow: isActive
                        ? "0 8px 32px rgba(0, 0, 0, 0.3)"
                        : "0 2px 8px rgba(0, 0, 0, 0.2)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                }}
                onClick={onToggleExpand}
            >
                {/* Current badge */}
                {experience.isCurrent && (
                    <div className="absolute -top-2 right-3 lg:right-4">
                        <Badge className="bg-accent-blue/20 text-accent-blue border-accent-blue/30 text-[10px] lg:text-xs">
                            Current
                        </Badge>
                    </div>
                )}

                {/* Header row */}
                <div className="flex items-start justify-between gap-3 lg:gap-4 mb-3 lg:mb-4">
                    <div className="flex-1 min-w-0">
                        <h3 className={`text-base lg:text-xl font-bold mb-1 ${isActive ? "text-white" : "text-text-secondary"}`}>
                            {experience.title}
                        </h3>
                        <p className="text-accent-blue font-medium text-sm lg:text-base truncate">
                            {experience.company}
                        </p>
                        <p className="text-[10px] lg:text-xs text-text-tertiary mt-1">
                            {experience.duration} • {experience.location}
                        </p>
                    </div>

                    {/* Year - desktop */}
                    <div className="hidden sm:block text-right shrink-0">
                        <span className={`text-xl lg:text-2xl font-bold ${isActive ? "text-white/20" : "text-white/10"}`}>
                            {experience.year}
                        </span>
                    </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-1.5 lg:space-y-2 mb-3 lg:mb-4">
                    {experience.highlights.map((item, i) => (
                        <li key={i} className="text-xs lg:text-sm text-text-secondary flex gap-2">
                            <span className="text-accent-blue/60 shrink-0">•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>

                {/* Expanded details */}
                {isExpanded && experience.expandedDetails && (
                    <ul className="space-y-1.5 lg:space-y-2 mb-3 lg:mb-4 pl-3 lg:pl-4 border-l border-white/5">
                        {experience.expandedDetails.map((item, i) => (
                            <li key={i} className="text-xs lg:text-sm text-text-tertiary flex gap-2">
                                <span className="text-accent-blue/40 shrink-0">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 lg:gap-2">
                    {experience.tech.map((tech) => (
                        <span
                            key={tech}
                            className="text-[10px] lg:text-xs px-2 py-0.5 rounded bg-white/5 text-text-tertiary"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Expand indicator */}
                {experience.expandedDetails && experience.expandedDetails.length > 0 && (
                    <div className="mt-2 lg:mt-3 text-center">
                        <span className="text-[10px] lg:text-xs text-text-tertiary">
                            {isExpanded ? "Click to collapse" : "Click for more"}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}
