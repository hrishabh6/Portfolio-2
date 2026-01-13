"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Send, MapPin } from "lucide-react";
import { personalInfo, socialLinks } from "@/lib/details";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setIsSubmitted(false), 3000);
    };

    return (
        <section id="contact" className="relative min-h-screen flex flex-col lg:flex-row">
            {/* Left Panel */}
            <div className="w-full lg:w-[50%] bg-bg-primary py-16 lg:py-24 px-6 md:px-12 lg:px-16 flex flex-col justify-center">
                <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto lg:mr-12">
                    <span className="inline-block text-accent-blue text-sm font-medium uppercase tracking-widest mb-3 lg:mb-4">
                        Let&apos;s Talk
                    </span>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 lg:mb-8">
                        Have a project
                        <span className="gradient-text block">in mind?</span>
                    </h2>

                    {/* Quick contact cards grid */}
                    <div className="grid grid-cols-2 gap-3 lg:gap-4 mb-6 lg:mb-8">
                        <ContactCard
                            icon={Mail}
                            label="Email"
                            value={personalInfo.email.split("@")[0] + "@..."}
                            href={`mailto:${personalInfo.email}`}
                        />
                        <ContactCard
                            icon={Phone}
                            label="Phone"
                            value={personalInfo.phone}
                            href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                        />
                        <ContactCard
                            icon={Linkedin}
                            label="LinkedIn"
                            value="Connect"
                            href={socialLinks.linkedin}
                        />
                        <ContactCard
                            icon={Github}
                            label="GitHub"
                            value="Follow"
                            href={socialLinks.github}
                        />
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mb-6 lg:mb-8">
                        <div className="flex-1 h-px bg-white/10" />
                        <span className="text-text-tertiary text-xs lg:text-sm">OR</span>
                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    {/* Contact Form */}
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 lg:space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent-blue transition-colors text-sm lg:text-base"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                                className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent-blue transition-colors text-sm lg:text-base"
                            />
                        </div>

                        <textarea
                            placeholder="Tell me about your project..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                            rows={4}
                            className="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg text-white placeholder:text-text-tertiary focus:outline-none focus:border-accent-blue transition-colors resize-none text-sm lg:text-base"
                        />

                        <div className="flex justify-end">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-6 lg:px-8 py-5 lg:py-6 bg-accent-blue hover:bg-accent-cyan text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 flex items-center gap-2 text-sm lg:text-base"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : isSubmitted ? (
                                    <>✓ Sent!</>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8 lg:mt-12 flex items-center gap-2 text-text-tertiary text-xs lg:text-sm">
                        <MapPin className="w-4 h-4" />
                        <span>{personalInfo.location}</span>
                    </div>
                </div>
            </div>

            {/* Right Panel - Desktop only */}
            <div className="hidden lg:block w-[50%] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 via-accent-purple/10 to-accent-cyan/20" />

                <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-accent-blue/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent-purple/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
                <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent-cyan/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />

                <FloatingIcon icon={Mail} style={{ top: "20%", left: "20%" }} delay={0} />
                <FloatingIcon icon={Phone} style={{ top: "60%", left: "30%" }} delay={0.5} />
                <FloatingIcon icon={Linkedin} style={{ top: "30%", right: "25%" }} delay={1} />
                <FloatingIcon icon={Github} style={{ bottom: "25%", right: "20%" }} delay={1.5} />

                <svg
                    className="absolute left-0 top-0 h-full"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path d="M0,0 Q30,50 0,100 L0,0" fill="#0a0a0a" />
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl lg:text-3xl font-light text-white/30 text-center max-w-md">
                        Let&apos;s build something
                        <span className="block text-white/50 font-medium">together</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

function ContactCard({ icon: Icon, label, value, href }) {
    return (
        <a
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group glass rounded-xl p-3 lg:p-4 hover:bg-white/10 transition-all duration-300"
        >
            <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-accent-blue mb-1.5 lg:mb-2 group-hover:scale-110 transition-transform" />
            <span className="block text-[10px] lg:text-xs text-text-tertiary mb-0.5 lg:mb-1">{label}</span>
            <span className="block text-xs lg:text-sm font-medium text-white group-hover:text-accent-blue transition-colors truncate">
                {value}
            </span>
        </a>
    );
}

function FloatingIcon({ icon: Icon, style, delay = 0 }) {
    return (
        <div
            className="absolute opacity-10 animate-float"
            style={{ ...style, animationDelay: `${delay}s` }}
        >
            <Icon className="w-12 h-12 lg:w-16 lg:h-16" />
        </div>
    );
}
