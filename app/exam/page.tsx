import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { EXAM_SECTIONS, PRACTICE_QUESTIONS } from "@/lib/exam-data"
import { ExamClient } from "@/components/exam-client"

export default function ExamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <ExamClient questions={PRACTICE_QUESTIONS} sections={EXAM_SECTIONS} />
      </main>

      <SiteFooter />
    </div>
  )
}
