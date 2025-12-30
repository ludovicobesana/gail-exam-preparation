import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EXAM_SECTIONS, PRACTICE_QUESTIONS } from "@/lib/exam-data"
import Link from "next/link"
import { PracticeQuestionClient } from "@/components/practice-question-client"

type Props = {
  searchParams: Promise<{ topic?: string; section?: string }>
}

export default async function PracticePage({ searchParams }: Props) {
  const { topic, section } = await searchParams

  let filteredQuestions = PRACTICE_QUESTIONS

  if (topic) {
    filteredQuestions = PRACTICE_QUESTIONS.filter((q) => q.topicId === topic)
  } else if (section) {
    filteredQuestions = PRACTICE_QUESTIONS.filter((q) => q.sectionId === section)
  }

  const sections = EXAM_SECTIONS.map((s) => ({
    id: s.id,
    title: s.title,
    questionCount: PRACTICE_QUESTIONS.filter((q) => q.sectionId === s.id).length,
  }))

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <h1 className="text-2xl font-bold mb-2">PRACTICE QUESTIONS</h1>
        <p className="text-muted-foreground mb-6">Individual questions with detailed explanations. Filter by domain.</p>

        {/* Filter */}
        <div className="border-2 border-foreground p-4 mb-6">
          <h2 className="font-bold mb-2">FILTER BY DOMAIN</h2>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/practice"
              className={`border border-foreground px-3 py-1 text-sm no-underline ${
                !section && !topic ? "bg-foreground text-background" : "hover:bg-muted"
              }`}
            >
              ALL ({PRACTICE_QUESTIONS.length})
            </Link>
            {sections.map((s) => (
              <Link
                key={s.id}
                href={`/practice?section=${s.id}`}
                className={`border border-foreground px-3 py-1 text-sm no-underline ${
                  section === s.id ? "bg-foreground text-background" : "hover:bg-muted"
                }`}
              >
                {s.title.split(" ").slice(0, 2).join(" ")} ({s.questionCount})
              </Link>
            ))}
          </div>
        </div>

        {/* Questions */}
        {filteredQuestions.length === 0 ? (
          <div className="border-2 border-foreground p-6 text-center text-muted-foreground">
            No questions available for this filter.
          </div>
        ) : (
          <PracticeQuestionClient questions={filteredQuestions} />
        )}
      </main>

      <SiteFooter />
    </div>
  )
}
