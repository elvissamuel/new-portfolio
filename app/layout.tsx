import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Omotehinse Elvis - Software Developer",
  description:
    "Experienced software developer with over 3 years of experience building scalable web applications and Federal government systems. Specializing in React, Next.js, Vue.js, and modern web technologies. Based in Lagos, Nigeria.",
  keywords: "frontend developer, full-stack developer, React, Next.js, Vue.js, JavaScript, TypeScript, Lagos Nigeria",
  authors: [{ name: "Omotehinse Elvis" }],
  openGraph: {
    title: "Omotehinse Elvis - Software Developer",
    description:
      "Experienced software developer specializing in React, Next.js, Vue.js and Federal government applications",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
