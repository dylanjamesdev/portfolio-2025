import "./globals.css"
import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import type React from "react" 

const inter = Raleway({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "dylan james - dev & neteng",
  description: "hi there! i'm dylan james, a developer and network engineer. this site is blehh, but it's mine.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

