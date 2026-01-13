"use client";

import { useState } from "react";
import {
    Code2,
    Database,
    Cloud,
    Server,
    Settings,
    MessageSquare,
    Wrench,
    Languages
} from "lucide-react";
import { skills } from "@/lib/details";

const iconMap = {
    backend: Server,
    frontend: Code2,
    languages: Languages,
    database: Database,
    devops: Settings,
    messaging: MessageSquare,
    tools: Wrench,
    cloud: Cloud,
};

export default function Skills() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section
            id="skills"
            className="relative py-20 lg:py-32 bg-bg-primary overflow-hidden"
        >
            {/* Subtle background gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 lg:w-96 h-64 lg:h-96 bg-accent-blue/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-56 lg:w-80 h-56 lg:h-80 bg-accent-purple/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 relative">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    <span className="inline-block text-accent-blue text-sm font-medium uppercase tracking-widest mb-3 lg:mb-4">
                        Expertise
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Technologies I
                        <span className="gradient-text"> work with</span>
                    </h2>
                </div>

                {/* Structured Grid Layout */}
                <div className="space-y-8 lg:space-y-12">
                    {/* Primary Skills Row */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4 lg:gap-8">
                        {skills.primary.map((skill) => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                icon={iconMap[skill.id]}
                                size="large"
                                isHovered={hoveredId === skill.id}
                                isOtherHovered={hoveredId !== null && hoveredId !== skill.id}
                                onHover={() => setHoveredId(skill.id)}
                                onLeave={() => setHoveredId(null)}
                            />
                        ))}
                    </div>

                    {/* Secondary Skills Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
                        {skills.secondary.map((skill) => (
                            <SkillCard
                                key={skill.id}
                                skill={skill}
                                icon={iconMap[skill.id]}
                                size="small"
                                isHovered={hoveredId === skill.id}
                                isOtherHovered={hoveredId !== null && hoveredId !== skill.id}
                                onHover={() => setHoveredId(skill.id)}
                                onLeave={() => setHoveredId(null)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Section divider */}
            <div className="section-divider mt-20 lg:mt-24" />
        </section>
    );
}

function SkillCard({ skill, icon: Icon, size, isHovered, isOtherHovered, onHover, onLeave }) {
    const isLarge = size === "large";

    return (
        <div
            className={`
        relative rounded-xl cursor-pointer transition-all duration-300
        ${isLarge ? "w-full sm:w-56 lg:w-64 p-5 lg:p-6" : "p-3 lg:p-4"}
        ${isHovered ? "scale-105 z-20" : "scale-100 z-10"}
        ${isOtherHovered ? "opacity-50" : "opacity-100"}
      `}
            style={{
                background: "linear-gradient(180deg, rgba(30, 30, 35, 0.95) 0%, rgba(20, 20, 25, 0.98) 100%)",
                boxShadow: isHovered
                    ? "0 8px 32px rgba(0, 113, 227, 0.2), 0 4px 12px rgba(0, 0, 0, 0.4)"
                    : "0 4px 16px rgba(0, 0, 0, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            {/* Hover glow */}
            {isHovered && (
                <div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                        background: "linear-gradient(180deg, rgba(0, 113, 227, 0.08) 0%, transparent 50%)",
                    }}
                />
            )}

            {/* Icon */}
            {Icon && (
                <div
                    className={`
            mx-auto mb-2 lg:mb-3 rounded-lg flex items-center justify-center
            ${isLarge ? "w-10 h-10 lg:w-12 lg:h-12 bg-accent-blue/15" : "w-8 h-8 bg-white/5"}
          `}
                >
                    <Icon className={`${isLarge ? "w-5 h-5 lg:w-6 lg:h-6" : "w-4 h-4"} text-accent-blue`} />
                </div>
            )}

            {/* Category name */}
            <h3 className={`font-bold text-center mb-2 text-white ${isLarge ? "text-lg lg:text-xl" : "text-sm"}`}>
                {skill.category}
            </h3>

            {/* Skills list */}
            <div className="flex flex-col items-center gap-0.5 lg:gap-1">
                {skill.skills.slice(0, isLarge ? 4 : 3).map((s) => (
                    <span
                        key={s}
                        className={`text-text-secondary ${isLarge ? "text-xs lg:text-sm" : "text-[10px] lg:text-xs"}`}
                    >
                        {s}
                    </span>
                ))}
            </div>

            {/* Level indicator - only for large */}
            {isLarge && (
                <div className="mt-3 lg:mt-4">
                    <div className="h-0.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-accent-blue/60 rounded-full"
                            style={{
                                width: skill.level === "Expert" ? "95%" : skill.level === "Advanced" ? "75%" : "55%",
                            }}
                        />
                    </div>
                    <span className="text-[10px] lg:text-xs text-accent-blue/70 mt-1.5 block text-center">
                        {skill.level}
                    </span>
                </div>
            )}
        </div>
    );
}
