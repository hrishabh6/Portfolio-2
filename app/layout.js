import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

export const metadata = {
    title: "HJ.dev | Developer Portfolio",
    description: "Full-stack developer crafting elegant digital experiences with modern technologies.",
    keywords: ["developer", "portfolio", "full-stack", "react", "next.js", "web development"],
    authors: [{ name: "Hrishabh Joshi" }],
    openGraph: {
        title: "HJ.dev | Developer Portfolio",
        description: "Full-stack developer crafting elegant digital experiences with modern technologies.",
        type: "website",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
