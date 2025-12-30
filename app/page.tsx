import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EXAM_SECTIONS } from "@/lib/exam-data"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        {/* Hero */}
        <section className="border-2 border-foreground p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">GOOGLE CLOUD GENERATIVE AI LEADER</h1>
          <h2 className="text-lg mb-4">CERTIFICATION EXAM PREPARATION</h2>
          <p className="mb-4 text-muted-foreground">Open-source study material. Brutalist. Minimal. Exam-focused.</p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/study"
              className="border-2 border-foreground px-4 py-2 no-underline hover:bg-foreground hover:text-background"
            >
              START STUDYING →
            </Link>
            <Link
              href="/exam"
              className="border-2 border-foreground px-4 py-2 no-underline hover:bg-foreground hover:text-background"
            >
              PRACTICE EXAM →
            </Link>
          </div>
        </section>

        {/* Exam Structure */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b-2 border-foreground pb-2 mb-4">EXAM STRUCTURE</h2>
          <div className="border-2 border-foreground">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-foreground">
                  <th className="text-left p-3 border-r border-foreground">DOMAIN</th>
                  <th className="text-left p-3 w-20">WEIGHT</th>
                </tr>
              </thead>
              <tbody>
                {EXAM_SECTIONS.map((section, index) => (
                  <tr key={section.id} className={index < EXAM_SECTIONS.length - 1 ? "border-b border-foreground" : ""}>
                    <td className="p-3 border-r border-foreground">
                      <Link href={`/study/${section.id}`} className="font-medium">
                        {section.title}
                      </Link>
                      <p className="text-muted-foreground text-xs mt-1">{section.description}</p>
                    </td>
                    <td className="p-3 font-bold">{section.weight}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Duration: 90 minutes | Questions: 50 | Passing: ~85%</p>
        </section>

        {/* Quick Access */}
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b-2 border-foreground pb-2 mb-4">NAVIGATION</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/study"
              className="border-2 border-foreground p-4 no-underline hover:bg-foreground hover:text-background group"
            >
              <h3 className="font-bold">/STUDY</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70">
                Topic-by-topic breakdown with exam focus
              </p>
            </Link>
            <Link
              href="/practice"
              className="border-2 border-foreground p-4 no-underline hover:bg-foreground hover:text-background group"
            >
              <h3 className="font-bold">/PRACTICE</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70">
                Individual questions with explanations
              </p>
            </Link>
            <Link
              href="/exam"
              className="border-2 border-foreground p-4 no-underline hover:bg-foreground hover:text-background group"
            >
              <h3 className="font-bold">/EXAM</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70">
                Timed practice exam (90 min, 50 questions)
              </p>
            </Link>
            <Link
              href="/flashcards"
              className="border-2 border-foreground p-4 no-underline hover:bg-foreground hover:text-background group"
            >
              <h3 className="font-bold">/FLASHCARDS</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70">
                Term recall from official terminology
              </p>
            </Link>
            <Link
              href="/glossary"
              className="border-2 border-foreground p-4 no-underline hover:bg-foreground hover:text-background group"
            >
              <h3 className="font-bold">/GLOSSARY</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70">
                All terms linked and categorized
              </p>
            </Link>
            <Link
              href="/progress"
              className="border-2 border-foreground p-4 no-underline hover:bg-foreground hover:text-background group"
            >
              <h3 className="font-bold">/PROGRESS</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70">
                Track completion and weak areas
              </p>
            </Link>
          </div>
        </section>

        {/* Philosophy */}
        <section className="border-2 border-foreground p-6">
          <h2 className="text-xl font-bold mb-4">PHILOSOPHY</h2>
          <ul className="space-y-2 text-sm">
            <li>→ Exam-focused: every element serves exam preparation</li>
            <li>→ Source-grounded: all content links to official Google docs</li>
            <li>→ Trap-aware: explicit coverage of misleading question patterns</li>
            <li>→ Open-source: fork, correct, contribute</li>
            <li>→ No fluff: no gamification, no illustrations, no decorations</li>
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
