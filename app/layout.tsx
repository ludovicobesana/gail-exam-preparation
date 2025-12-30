import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "GCGAI-LEADER // Certification Prep",
  description:
    "Open-source exam preparation for Google Cloud Generative AI Leader certification. Brutalist. Minimal. Exam-focused.",
  keywords: ["Google Cloud", "Generative AI", "Certification", "Exam Prep", "GCGAI Leader"],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
