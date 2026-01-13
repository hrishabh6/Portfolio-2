// ============================================
// Centralized Personal Data - Portfolio
// ============================================

export const personalInfo = {
    name: "Hrishabh Joshi",
    initials: "HJ",
    title: "Full-Stack Developer",
    tagline: "Building scalable backends & elegant frontends",
    location: "Delhi, India",
    email: "hrishabbhjoshi123@gmail.com",
    phone: "+91 97119 76595",
    resumeUrl: "#", // Placeholder - add Google Drive link later
    website: "hrishabbhjoshi.xyz",
};

export const socialLinks = {
    github: "https://github.com/hrishabh6",
    linkedin: "https://linkedin.com/in/hrishabbhjoshi",
    twitter: "#",
    email: "mailto:hrishabbhjoshi123@gmail.com",
};

export const stats = {
    yearsExperience: "1+",
    projectsCompleted: "6+",
    role: "Full-Stack",
};

export const aboutText = {
    headline: "Building the future, one line at a time",
    paragraph1: `I'm a passionate full-stack developer pursuing my Bachelor's in Computer Applications 
    at Vivekananda Institute of Professional Studies (CGPA: 8.3). I specialize in building 
    scalable backend systems with Spring Boot and modern frontends with React and Next.js.`,
    paragraph2: `Currently interning as a Backend Engineer at Thales Group, where I've improved API 
    performance by 30% and established monitoring frameworks covering 90% of critical endpoints.`,
    quote: "Complexity should be hidden, not eliminated",
};

export const skills = {
    primary: [
        {
            id: "backend",
            category: "Backend",
            skills: ["Spring Boot", "Node.js", "Express", "REST APIs"],
            level: "Expert",
        },
        {
            id: "frontend",
            category: "Frontend",
            skills: ["React", "Next.js", "TypeScript", "TailwindCSS"],
            level: "Expert",
        },
    ],
    secondary: [
        {
            id: "languages",
            category: "Languages",
            skills: ["Java", "JavaScript", "TypeScript", "SQL"],
            level: "Expert",
        },
        {
            id: "database",
            category: "Databases",
            skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
            level: "Advanced",
        },
        {
            id: "devops",
            category: "DevOps",
            skills: ["Docker", "Kubernetes", "AWS", "CI/CD"],
            level: "Advanced",
        },
        {
            id: "messaging",
            category: "Messaging",
            skills: ["Kafka", "RabbitMQ", "WebSockets"],
            level: "Advanced",
        },
        {
            id: "tools",
            category: "Tools",
            skills: ["Git", "IntelliJ", "VS Code", "Postman"],
            level: "Expert",
        },
    ],
};

export const experiences = [
    {
        id: 1,
        year: "2025",
        type: "work",
        title: "Backend Engineer Intern",
        company: "Thales Group",
        location: "Delhi, India",
        duration: "Nov 2025 - Present",
        highlights: [
            "Improved backend API performance by 30% using Gatling load testing",
            "Simulated 10,000 concurrent requests to identify performance bottlenecks",
        ],
        expandedDetails: [
            "Established monitoring framework covering 90% of critical API endpoints",
            "Collaborated with 5 engineers to detect 95% of issues before production",
            "Reduced response time variability by 30% and error rates by 25%",
        ],
        tech: ["Spring Boot", "Gatling", "CI/CD", "Prometheus"],
        isCurrent: true,
    },
    {
        id: 2,
        year: "2023",
        type: "education",
        title: "Bachelor in Computer Applications",
        company: "Vivekananda Institute of Professional Studies",
        location: "Delhi, India",
        duration: "Aug 2023 - Jul 2026 (Expected)",
        highlights: [
            "CGPA: 8.3/10.0",
            "Focus on Software Engineering and System Design",
        ],
        expandedDetails: [
            "Active participant in hackathons and coding competitions",
            "Building full-stack projects independently",
        ],
        tech: ["Java", "Python", "DSA"],
        isCurrent: false,
    },
];

export const projects = [
    {
        id: 1,
        title: "Code Execution Engine",
        shortTitle: "CodeExecutionEngine",
        description: "A secure and extensible code execution engine built with Spring Boot, designed to evaluate user-submitted code in an isolated Docker runtime.",
        fullDescription: "A secure and extensible plug and play code execution engine built with Spring Boot and Java, designed to evaluate user-submitted code against test cases in an isolated runtime. The system dynamically generates, compiles, and executes code with strong security guarantees, making it suitable for coding platforms, assessments, and interview systems.",
        features: [
            "Centralized CodeExecutionManager for orchestration",
            "Dynamic code generation using problem metadata",
            "Secure isolated execution inside Dockerized runtime",
            "Test case driven validation with standardized responses",
            "Custom data structure support (graphs, nodes)",
            "Spring Boot integration as reusable service",
            "Automatic resource cleanup after execution",
            "Extensible architecture for multiple languages",
        ],
        tech: ["Spring Boot", "Java", "Docker"],
        liveUrl: null,
        codeUrl: "https://github.com/hrishabh6/CodeExecutionEngine",
        image: "null", // Replace with: "/images/projects/code-execution.png"
        size: "large-portrait",
        date: "Apr 2025",
    },
    {
        id: 2,
        title: "RideWise",
        shortTitle: "Uber Backend Clone",
        description: "A highly scalable Uber-inspired backend with microservices, real-time driver tracking, and Kafka-powered async communication.",
        fullDescription: "A highly scalable backend system inspired by Uber, built entirely using Spring Boot and microservices architecture. Designed to simulate real-world ride-booking operations including user authentication, real-time driver location tracking, ride management, and asynchronous communication using Kafka and WebSockets.",
        features: [
            "JWT-based auth with Spring Security",
            "Real-time driver location via Redis geospatial queries",
            "WebSocket notifications for instant driver alerts",
            "Kafka integration for async ride flow",
            "Shared entity service published to Maven",
            "Eureka service registry for discovery",
            "Event-driven booking workflow",
            "Clean modular microservices codebase",
        ],
        tech: ["Spring Boot", "Redis", "Kafka", "MySQL", "Eureka"],
        liveUrl: null,
        codeUrl: "https://github.com/hrishabh6/UberProject-MicroServices",
        image: "null", // Replace with: "/images/projects/ridewise.png"
        size: "large-wide",
        date: "Jun 2025",
    },
    {
        id: 3,
        title: "HorizonAI",
        shortTitle: "AI PPT Generator",
        description: "AI-powered SaaS for creating stunning presentations with custom editor, drag-and-drop, and OpenAI integration.",
        fullDescription: "A full-fledged AI-powered SaaS application that enables users to create stunning presentations effortlessly using advanced prompt engineering techniques. Built a custom presentation editor with rich text formatting, drag-and-drop functionality, and AI-powered content generation.",
        features: [
            "Custom presentation editor from scratch",
            "Drag-and-drop slide arrangement",
            "AI-powered content generation with OpenAI",
            "Dynamic theme support",
            "LemonSqueezy payment integration",
            "Optimized with Next.js and Zustand",
        ],
        tech: ["Next.js", "Prisma", "OpenAI", "LemonSqueezy"],
        liveUrl: "https://horizonai-builder.vercel.app",
        codeUrl: "https://github.com/hrishabh6/HorizonAI",
        image: "null", // Replace with: "/images/projects/horizonai.png"
        size: "medium",
        date: "Mar 2025",
    },
    {
        id: 4,
        title: "DevOverflow",
        shortTitle: "Stack Overflow Clone",
        description: "Full-stack Q&A platform for developers with authentication, voting, and comprehensive search.",
        fullDescription: "Devoverflow is a full-stack web application inspired by Stack Overflow, designed for developers to ask, answer, and discuss technical questions. It features user authentication, question posting, answer submissions, and voting functionality.",
        features: [
            "User authentication and authorization",
            "Post and manage technical questions",
            "Submit answers to questions",
            "Voting system for best answers",
            "Tagging for organization",
            "Responsive design",
            "Comprehensive search functionality",
        ],
        tech: ["Next.js", "TailwindCSS", "MongoDB", "Docker"],
        liveUrl: "https://dev-overflow-flame-pi.vercel.app/",
        codeUrl: "https://github.com/hrishabh6/DevOverflow",
        image: "null", // Replace with: "/images/projects/devoverflow.png"
        size: "medium",
        date: "2024",
    },
    {
        id: 5,
        title: "Career Bridge",
        shortTitle: "Job Portal",
        description: "Job portal connecting seekers with companies, featuring admin panel and application tracking.",
        fullDescription: "Career Bridge is a job portal platform that connects job seekers with companies. It enables admins to create job listings, while users can apply for jobs, track their application status, and interact with recruiters.",
        features: [
            "Admin panel for job listings",
            "User registration and profiles",
            "Search and filter jobs",
            "Application tracking system",
            "Employer profile management",
            "Real-time notifications",
            "Responsive mobile design",
        ],
        tech: ["React", "TailwindCSS", "MongoDB", "Node.js"],
        liveUrl: "https://jobportal-gamma-mocha.vercel.app/",
        codeUrl: "https://github.com/hrishabh6/CareerBridge",
        image: "null", // Replace with: "/images/projects/careerbridge.png"
        size: "small",
        date: "2024",
    },
    {
        id: 6,
        title: "SpotifyClone",
        shortTitle: "Spotify UI Clone",
        description: "Client-side Spotify clone with music player, sound control, and dynamic libraries.",
        fullDescription: "SpotifyClone is a client side clone of Spotify that offers a seamless user experience. It provides a music player with sound control and dynamic libraries that makes it easy to navigate and interact with. Built as a personal project to showcase skills in front-end development using Vanilla HTML, CSS, and JS.",
        features: [
            "Music player with controls",
            "Sound volume control",
            "Dynamic library navigation",
            "Responsive UI",
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://spotify-pi-blush.vercel.app/",
        codeUrl: "https://github.com/hrishabh6/SpotifyClone",
        image: "null", // Replace with: "/images/projects/spotify.png"
        size: "small",
        date: "2024",
    },
];

export const footerData = {
    tagline: "Made with ☕ and countless lines of code",
    alternateTagline: "No templates were harmed ✨",
};
