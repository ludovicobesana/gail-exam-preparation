import Link from "next/link"
import Image from "next/image"

export function SiteHeader() {
  return (
    <header className="border-b-2 border-foreground">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center gap-2 no-underline hover:opacity-80">
            <Image src="/logo.png" alt="GAIL Logo" width={50} height={50} />
            <span className="font-bold text-xl">GAIL</span>
          </Link>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link href="/study">STUDY</Link>
            <Link href="/practice">PRACTICE</Link>
            <Link href="/exam">EXAM</Link>
            <Link href="/flashcards">FLASHCARDS</Link>
            <Link href="/glossary">GLOSSARY</Link>
            <Link href="/progress">PROGRESS</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}