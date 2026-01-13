"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { ExternalLink, Github, ArrowRight, Check } from "lucide-react";
import { projects } from "@/lib/details";

const sizeClasses = {
    "large-portrait": "md:col-span-6 lg:col-span-6 md:row-span-2",
    "large-wide": "md:col-span-8 lg:col-span-8",
    "medium": "md:col-span-6 lg:col-span-5",
    "small": "md:col-span-6 lg:col-span-4",
};

export default function Work() {
    const [hoveredId, setHoveredId] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work" className="py-20 lg:py-32 bg-bg-primary">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-12 lg:mb-16">
                    <div>
                        <span className="inline-block text-accent-blue text-sm font-medium uppercase tracking-widest mb-3 lg:mb-4">
                            Selected Work
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                            Projects that
                            <span className="gradient-text"> matter</span>
                        </h2>
                    </div>
                    <p className="text-text-secondary text-sm lg:text-base max-w-md">
                        A selection of projects I&apos;ve built, from concept to completion.
                    </p>
                </div>

                {/* Project Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 auto-rows-auto">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            isHovered={hoveredId === project.id}
                            onHover={() => setHoveredId(project.id)}
                            onLeave={() => setHoveredId(null)}
                            isOtherHovered={hoveredId !== null && hoveredId !== project.id}
                            onClick={() => setSelectedProject(project)}
                        />
                    ))}
                </div>

                {/* View All CTA */}
                <div className="mt-8 lg:mt-12">
                    <a
                        href="https://github.com/hrishabh6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block w-full glass rounded-xl p-6 lg:p-10 text-center hover:bg-white/10 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center gap-3 lg:gap-4">
                            <span className="text-xl lg:text-2xl font-bold">
                                Explore All Projects on GitHub
                            </span>
                            <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform" />
                        </div>
                    </a>
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />

            {/* Section divider */}
            <div className="section-divider mt-20 lg:mt-28" />
        </section>
    );
}

function ProjectCard({ project, index, isHovered, onHover, onLeave, isOtherHovered, onClick }) {
    const hasImage = project.image && project.image !== "null";

    return (
        <article
            className={`
        group relative overflow-hidden rounded-xl lg:rounded-2xl bg-bg-secondary border border-white/5 cursor-pointer
        ${sizeClasses[project.size]}
        ${project.size === "large-portrait" ? "min-h-[350px] lg:min-h-[450px]" : "min-h-[250px] lg:min-h-[300px]"}
        transition-all duration-500
        ${isHovered ? "scale-[1.02] z-10" : "scale-100"}
        ${isOtherHovered ? "opacity-60" : "opacity-100"}
      `}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
        >
            {/* Background Image (if provided) */}
            {hasImage ? (
                <>
                    {/* Image layer */}
                    <div className="absolute inset-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className={`
                w-full h-full object-cover object-top
                transition-all duration-700
                ${isHovered ? "scale-105 grayscale-0" : "scale-100 grayscale"}
              `}
                        />
                        {/* Dark overlay for readability - stronger at bottom */}
                        <div
                            className="absolute inset-0"
                            style={{
                                background: "linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.7) 40%, rgba(10, 10, 10, 0.4) 100%)",
                            }}
                        />
                    </div>

                    {/* Accent color overlay on hover */}
                    <div
                        className={`
              absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/10
              transition-opacity duration-500
              ${isHovered ? "opacity-100" : "opacity-0"}
            `}
                    />
                </>
            ) : (
                <>
                    {/* Fallback: gradient background + project number */}
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-bg-secondary to-bg-tertiary"
                    />

                    {/* Project number - shown only when no image */}
                    <span className="absolute top-4 left-4 lg:top-6 lg:left-6 text-5xl lg:text-7xl font-bold text-white/5 select-none">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Hover gradient */}
                    <div
                        className={`
              absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20
              transition-opacity duration-500
              ${isHovered ? "opacity-100" : "opacity-0"}
            `}
                    />
                </>
            )}

            {/* Content overlay */}
            <div className="absolute inset-0 p-4 lg:p-6 flex flex-col justify-end relative z-10">
                <h3 className="text-lg lg:text-xl font-bold mb-1 lg:mb-2 text-white drop-shadow-lg">
                    {project.title}
                </h3>
                <p className="text-text-secondary text-xs lg:text-sm mb-3 lg:mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-3 lg:mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                        <Badge
                            key={tech}
                            variant="outline"
                            className="bg-black/40 backdrop-blur-sm border-white/10 text-text-secondary text-[10px] lg:text-xs"
                        >
                            {tech}
                        </Badge>
                    ))}
                    {project.tech.length > 4 && (
                        <Badge
                            variant="outline"
                            className="bg-black/40 backdrop-blur-sm border-white/10 text-text-tertiary text-[10px] lg:text-xs"
                        >
                            +{project.tech.length - 4}
                        </Badge>
                    )}
                </div>

                {/* Click hint */}
                <div
                    className={`
            flex gap-4 transition-all duration-300
            ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
                >
                    <span className="text-xs lg:text-sm text-accent-blue flex items-center gap-1 drop-shadow-lg">
                        Click to view details →
                    </span>
                </div>
            </div>

            {/* Hover glow border */}
            <div
                className={`
          absolute inset-0 pointer-events-none rounded-xl lg:rounded-2xl
          transition-opacity duration-500
          ${isHovered ? "opacity-100" : "opacity-0"}
        `}
                style={{
                    boxShadow: "inset 0 0 60px rgba(0, 113, 227, 0.15), 0 0 20px rgba(0, 113, 227, 0.1)",
                }}
            />
        </article>
    );
}

function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-bg-secondary border-white/10">
                <DialogHeader>
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <DialogTitle className="text-xl lg:text-2xl font-bold mb-2">
                                {project.title}
                            </DialogTitle>
                            <DialogDescription className="text-text-secondary text-sm">
                                {project.shortTitle} • {project.date}
                            </DialogDescription>
                        </div>
                    </div>
                </DialogHeader>

                <div className="mt-4 space-y-6">
                    {/* Full description */}
                    <p className="text-text-secondary text-sm lg:text-base leading-relaxed">
                        {project.fullDescription}
                    </p>

                    {/* Features list */}
                    {project.features && project.features.length > 0 && (
                        <div>
                            <h4 className="text-sm font-semibold text-accent-blue uppercase tracking-wide mb-3">
                                Key Features
                            </h4>
                            <ul className="space-y-2">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex gap-2 text-sm text-text-secondary">
                                        <Check className="w-4 h-4 text-accent-blue shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tech stack */}
                    <div>
                        <h4 className="text-sm font-semibold text-accent-blue uppercase tracking-wide mb-3">
                            Tech Stack
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <Badge
                                    key={tech}
                                    className="bg-accent-blue/10 border-accent-blue/20 text-accent-blue"
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-cyan transition-colors text-sm font-medium"
                            >
                                <ExternalLink className="w-4 h-4" />
                                View Live
                            </a>
                        )}
                        {project.codeUrl && (
                            <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/5 transition-colors text-sm font-medium"
                            >
                                <Github className="w-4 h-4" />
                                View Code
                            </a>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
