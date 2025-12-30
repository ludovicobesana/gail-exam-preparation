import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GLOSSARY } from "@/lib/exam-data"
import Link from "next/link"

export default function GlossaryPage() {
  // Group by category
  const grouped = GLOSSARY.reduce(
    (acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = []
      }
      acc[item.category].push(item)
      return acc
    },
    {} as { [key: string]: typeof GLOSSARY },
  )

  const categories = Object.keys(grouped).sort()

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <h1 className="text-2xl font-bold mb-2">GLOSSARY</h1>
        <p className="text-muted-foreground mb-8">
          All terms from official Google Cloud GenAI documentation. {GLOSSARY.length} entries.
        </p>

        {/* Quick Nav */}
        <div className="border-2 border-foreground p-4 mb-6">
          <h2 className="font-bold mb-2 text-sm">CATEGORIES</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <a
                key={cat}
                href={`#${cat.toLowerCase()}`}
                className="text-sm border border-foreground px-2 py-1 hover:bg-muted"
              >
                {cat.toUpperCase()} ({grouped[cat].length})
              </a>
            ))}
          </div>
        </div>

        {/* Terms by Category */}
        {categories.map((category) => (
          <section key={category} id={category.toLowerCase()} className="mb-8">
            <h2 className="text-lg font-bold border-b-2 border-foreground pb-2 mb-4">{category.toUpperCase()}</h2>
            <div className="border-2 border-foreground divide-y divide-foreground">
              {grouped[category]
                .sort((a, b) => a.term.localeCompare(b.term))
                .map((item) => (
                  <div key={item.term} className="p-4">
                    <dt className="font-bold">{item.term}</dt>
                    <dd className="text-muted-foreground mt-1">{item.definition}</dd>
                  </div>
                ))}
            </div>
          </section>
        ))}

        {/* Practice Link */}
        <div className="border-2 border-foreground p-4 mt-8">
          <p className="mb-2">Ready to test your knowledge?</p>
          <Link
            href="/flashcards"
            className="inline-block border-2 border-foreground px-4 py-2 no-underline hover:bg-foreground hover:text-background"
          >
            PRACTICE WITH FLASHCARDS →
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
