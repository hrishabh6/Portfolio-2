import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

// Site URL - update this when deploying
const siteUrl = "https://portfolio-2-tau-six.vercel.app";

export const metadata = {
    // Core SEO
    title: {
        default: "Hrishabh Joshi | Full-Stack Developer & Backend Engineer",
        template: "%s | Hrishabh Joshi",
    },
    description:
        "Hrishabh Joshi is a Full-Stack Developer and Backend Engineer based in Delhi, India. Specializing in Spring Boot, React, Next.js, microservices, and scalable system design. Currently interning at Thales Group.",
    keywords: [
        "Hrishabh Joshi",
        "Hrishabh",
        "HJ.dev",
        "Full-Stack Developer",
        "Backend Engineer",
        "Software Developer Delhi",
        "Spring Boot Developer",
        "React Developer",
        "Next.js Developer",
        "Java Developer",
        "Microservices",
        "Web Developer India",
        "VIPS Delhi",
        "Thales Group Intern",
        "Portfolio",
        "Freelance Developer",
    ],
    authors: [{ name: "Hrishabh Joshi", url: siteUrl }],
    creator: "Hrishabh Joshi",
    publisher: "Hrishabh Joshi",

    // Canonical & Alternate
    metadataBase: new URL(siteUrl),
    alternates: {
        canonical: "/",
    },

    // Open Graph (Facebook, LinkedIn, Discord, etc.)
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: siteUrl,
        siteName: "Hrishabh Joshi | Developer Portfolio",
        title: "Hrishabh Joshi | Full-Stack Developer & Backend Engineer",
        description:
            "Full-Stack Developer specializing in Spring Boot, React, and microservices. Building scalable backends and elegant frontends. Currently at Thales Group.",
        images: [
            {
                url: "/images/others/pfpb.jpg",
                width: 1200,
                height: 630,
                alt: "Hrishabh Joshi - Full-Stack Developer",
                type: "image/jpeg",
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: "Hrishabh Joshi | Full-Stack Developer",
        description:
            "Building scalable backends & elegant frontends. Spring Boot, React, Next.js, Microservices. Currently @ThalesGroup",
        images: ["/images/others/pfpb.jpg"],
        creator: "@hrishabbhjoshi",
    },

    // Robots & Indexing
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // Verification (add your IDs when you have them)
    verification: {
        // google: "your-google-verification-code",
        // yandex: "your-yandex-verification-code",
    },

    // App info
    applicationName: "Hrishabh Joshi Portfolio",
    category: "technology",

    // Other
    other: {
        "og:profile:first_name": "Hrishabh",
        "og:profile:last_name": "Joshi",
        "og:profile:username": "hrishabh6",
    },
};

// JSON-LD Structured Data for better Google Search results
const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hrishabh Joshi",
    alternateName: ["HJ", "Hrishabh"],
    url: siteUrl,
    image: `${siteUrl}/images/others/pfpb.jpg`,
    description:
        "Full-Stack Developer and Backend Engineer specializing in Spring Boot, React, and microservices.",
    email: "hrishabbhjoshi123@gmail.com",
    telephone: "+91-97119-76595",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Delhi",
        addressCountry: "IN",
    },
    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Vivekananda Institute of Professional Studies",
        sameAs: "https://vips.edu/",
    },
    worksFor: {
        "@type": "Organization",
        name: "Thales Group",
        sameAs: "https://www.thalesgroup.com/",
    },
    jobTitle: "Backend Engineer Intern",
    knowsAbout: [
        "Spring Boot",
        "Java",
        "React",
        "Next.js",
        "Node.js",
        "Microservices",
        "Kafka",
        "Redis",
        "Docker",
        "Kubernetes",
        "PostgreSQL",
        "MongoDB",
    ],
    sameAs: [
        "https://github.com/hrishabh6",
        "https://linkedin.com/in/hrishabbhjoshi",
    ],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <head>
                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {/* Favicon hints */}
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            </head>
            <body className={`${inter.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
