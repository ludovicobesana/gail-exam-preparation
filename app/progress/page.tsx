import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EXAM_SECTIONS, PRACTICE_QUESTIONS, GLOSSARY } from "@/lib/exam-data"
import { ProgressClient } from "@/components/progress-client"

export default function ProgressPage() {
  const stats = {
    totalTopics: EXAM_SECTIONS.reduce((acc, s) => acc + s.topics.length, 0),
    totalQuestions: PRACTICE_QUESTIONS.length,
    totalTerms: GLOSSARY.length,
    sections: EXAM_SECTIONS.map((s) => ({
      id: s.id,
      title: s.title,
      weight: s.weight,
      topicCount: s.topics.length,
      questionCount: PRACTICE_QUESTIONS.filter((q) => q.sectionId === s.id).length,
    })),
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <ProgressClient stats={stats} />
      </main>

      <SiteFooter />
    </div>
  )
}
