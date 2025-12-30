import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GLOSSARY } from "@/lib/exam-data"
import { FlashcardsClient } from "@/components/flashcards-client"

export default function FlashcardsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <FlashcardsClient glossary={GLOSSARY} />
      </main>

      <SiteFooter />
    </div>
  )
}
