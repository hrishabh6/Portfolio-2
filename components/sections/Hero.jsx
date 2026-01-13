"use client";

import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { personalInfo, stats, socialLinks } from "@/lib/details";

export default function Hero() {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            setMousePos({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen overflow-hidden bg-bg-primary"
        >
            {/* Diagonal divide line with glow */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <svg className="w-full h-full" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="diagonalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0071e3" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
                            <stop offset="100%" stopColor="#0071e3" stopOpacity="0.8" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <line
                        x1="0%"
                        y1="100%"
                        x2="55%"
                        y2="0%"
                        stroke="url(#diagonalGradient)"
                        strokeWidth="2"
                        filter="url(#glow)"
                    />
                </svg>
            </div>

            {/* Left Content Area */}
            <div
                className="relative lg:absolute left-0 top-0 w-full lg:w-[45%] min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 pt-24 pb-12 lg:pt-0 lg:pb-0"
            >
                <div
                    className="max-w-xl mx-auto lg:mx-0"
                    style={{
                        transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px)`,
                        transition: "transform 0.3s ease-out",
                    }}
                >
                    {/* Small label */}
                    <span className="inline-block text-accent-blue text-sm font-medium uppercase tracking-widest mb-4 animate-slide-up">
                        {personalInfo.title}
                    </span>

                    {/* Main heading - Name */}
                    <h1
                        className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4"
                    >
                        <span className="block animate-slide-up">Hi, I&apos;m</span>
                        <span className="block gradient-text animate-slide-up" style={{ animationDelay: "0.1s" }}>
                            {personalInfo.name.split(" ")[0]}
                        </span>
                        <span className="block animate-slide-up" style={{ animationDelay: "0.2s" }}>
                            {personalInfo.name.split(" ")[1]}
                        </span>
                    </h1>

                    {/* Tagline */}
                    <p
                        className="text-text-secondary text-lg md:text-xl mb-8 max-w-md animate-slide-up"
                        style={{ animationDelay: "0.3s" }}
                    >
                        {personalInfo.tagline}
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-wrap gap-4 animate-slide-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        <a
                            href="#work"
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-cyan transition-all duration-300 hover:shadow-glow text-sm sm:text-base"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300 text-sm sm:text-base"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Mobile stats */}
                    <div className="flex gap-6 mt-10 lg:hidden animate-slide-up" style={{ animationDelay: "0.5s" }}>
                        <div className="text-center">
                            <span className="block text-2xl font-bold gradient-text">{stats.yearsExperience}</span>
                            <span className="text-xs text-text-tertiary">Years Exp</span>
                        </div>
                        <div className="text-center">
                            <span className="block text-2xl font-bold gradient-text">{stats.projectsCompleted}</span>
                            <span className="text-xs text-text-tertiary">Projects</span>
                        </div>
                        <div className="text-center">
                            <Badge className="bg-accent-blue/20 text-accent-blue border-accent-blue/30 text-xs">
                                {stats.role}
                            </Badge>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Visual Area - Desktop only */}
            <div className="absolute right-0 top-0 w-[60%] h-full hidden lg:block">
                {/* Gradient background */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0f172a 100%)",
                    }}
                />

                {/* Profile initials circle */}
                <div
                    className="absolute"
                    style={{
                        left: "25%",
                        top: "50%",
                        transform: `translate(-50%, -50%) rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`,
                        transition: "transform 0.3s ease-out",
                    }}
                >
                    <div className="relative w-[350px] h-[350px] xl:w-[450px] xl:h-[450px]">
                        {/* Glow ring */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-blue/30 to-accent-cyan/30 blur-2xl" />

                        {/* Main circle */}
                        <div className="absolute inset-4 rounded-full bg-gradient-to-br from-bg-secondary to-bg-tertiary border border-white/10 overflow-hidden flex items-center justify-center">
                            <div className="text-7xl xl:text-8xl font-bold gradient-text">{personalInfo.initials}</div>
                        </div>
                    </div>
                </div>

                {/* Floating stat cards */}
                <FloatingCard
                    style={{
                        top: "18%",
                        left: "10%",
                        transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px) rotate(-3deg)`,
                    }}
                    delay={0.6}
                >
                    <span className="text-2xl font-bold gradient-text">{stats.yearsExperience}</span>
                    <span className="text-xs text-text-tertiary">Years Exp</span>
                </FloatingCard>

                <FloatingCard
                    style={{
                        bottom: "25%",
                        right: "15%",
                        transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px) rotate(2deg)`,
                    }}
                    delay={0.8}
                >
                    <span className="text-2xl font-bold gradient-text">{stats.projectsCompleted}</span>
                    <span className="text-xs text-text-tertiary">Projects</span>
                </FloatingCard>

                <FloatingCard
                    style={{
                        top: "30%",
                        right: "12%",
                        transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px) rotate(1deg)`,
                    }}
                    delay={1}
                >
                    <Badge className="bg-accent-blue/20 text-accent-blue border-accent-blue/30 px-3 py-1.5 text-sm">
                        {stats.role}
                    </Badge>
                </FloatingCard>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce hidden sm:flex">
                <span className="text-xs text-text-tertiary uppercase tracking-widest">Scroll</span>
                <div className="w-px h-8 bg-gradient-to-b from-accent-blue to-transparent" />
            </div>
        </section>
    );
}

function FloatingCard({ children, style, delay = 0 }) {
    return (
        <div
            className="absolute glass rounded-xl px-4 py-3 flex flex-col items-center gap-1 animate-slide-up"
            style={{
                ...style,
                animationDelay: `${delay}s`,
                transition: "transform 0.3s ease-out",
            }}
        >
            {children}
        </div>
    );
}
