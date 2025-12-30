import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EXAM_SECTIONS } from "@/lib/exam-data"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = {
  params: Promise<{ sectionId: string }>
}

export default async function SectionPage({ params }: Props) {
  const { sectionId } = await params

  const section = EXAM_SECTIONS.find((s) => s.id === sectionId)
  if (!section) notFound()

  const sectionIndex = EXAM_SECTIONS.findIndex((s) => s.id === sectionId)
  const prevSection = sectionIndex > 0 ? EXAM_SECTIONS[sectionIndex - 1] : null
  const nextSection = sectionIndex < EXAM_SECTIONS.length - 1 ? EXAM_SECTIONS[sectionIndex + 1] : null

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        {/* Breadcrumb */}
        <nav className="text-sm mb-6 text-muted-foreground">
          <Link href="/study">STUDY</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{section.title.toUpperCase()}</span>
        </nav>

        {/* Header */}
        <header className="border-2 border-foreground p-6 mb-6 bg-foreground text-background">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{section.title}</h1>
              <p className="text-background/70 mt-1">{section.description}</p>
            </div>
            <span className="text-xl font-bold">{section.weight}%</span>
          </div>
        </header>

        {/* Topics */}
        <section className="mb-8">
          <h2 className="text-lg font-bold border-b-2 border-foreground pb-2 mb-4">TOPICS ({section.topics.length})</h2>
          <div className="divide-y-2 divide-foreground border-2 border-foreground">
            {section.topics.map((topic, index) => (
              <Link
                key={topic.id}
                href={`/study/${sectionId}/${topic.id}`}
                className="block p-4 no-underline hover:bg-muted"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-muted-foreground mr-2">{String(index + 1).padStart(2, "0")}.</span>
                    <span className="font-medium">{topic.title}</span>
                  </div>
                  <span className="text-muted-foreground">→</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1 ml-6">{topic.concepts.length} concepts</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Section Navigation */}
        <nav className="border-t-2 border-foreground pt-6 flex justify-between">
          {prevSection ? (
            <Link href={`/study/${prevSection.id}`} className="text-sm">
              ← {prevSection.title}
            </Link>
          ) : (
            <span />
          )}
          {nextSection ? (
            <Link href={`/study/${nextSection.id}`} className="text-sm">
              {nextSection.title} →
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </main>

      <SiteFooter />
    </div>
  )
}
