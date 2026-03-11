import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: {
        default: "Rayline Studio — Premium Web Design & Development",
        template: "%s | Rayline Studio",
    },
    description:
        "Rayline Studio builds premium, high-performance websites with 3D integrations, custom animations, and full-stack capabilities. Get a quote today.",
    keywords: ["web design", "web development", "custom website", "3D web", "React", "Next.js"],
    authors: [{ name: "Rayline Studio" }],
    creator: "Rayline Studio",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://raylinestudio.com",
        siteName: "Rayline Studio",
        title: "Rayline Studio — Premium Web Design & Development",
        description:
            "Premium websites with 3D integrations, custom animations, and full-stack capabilities.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Rayline Studio — Premium Web Design & Development",
        description: "Premium websites with 3D integrations, custom animations, and full-stack capabilities.",
    },
    robots: {
        index: true,
        follow: true,
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
