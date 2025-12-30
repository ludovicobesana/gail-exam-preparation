"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

type SectionStat = {
  id: string
  title: string
  weight: number
  topicCount: number
  questionCount: number
}

type Props = {
  stats: {
    totalTopics: number
    totalQuestions: number
    totalTerms: number
    sections: SectionStat[]
  }
}

type ProgressData = {
  studiedTopics: string[]
  answeredQuestions: { [questionId: string]: boolean }
  examAttempts: Array<{ date: string; score: number; passed: boolean }>
  lastActive: string
}

const STORAGE_KEY = "gcgai-leader-progress"

export function ProgressClient({ stats }: Props) {
  const [progress, setProgress] = useState<ProgressData | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      setProgress(JSON.parse(stored))
    } else {
      setProgress({
        studiedTopics: [],
        answeredQuestions: {},
        examAttempts: [],
        lastActive: new Date().toISOString(),
      })
    }
  }, [])

  const handleReset = () => {
    if (confirm("This will reset ALL progress data. Are you sure?")) {
      const empty: ProgressData = {
        studiedTopics: [],
        answeredQuestions: {},
        examAttempts: [],
        lastActive: new Date().toISOString(),
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(empty))
      setProgress(empty)
    }
  }

  if (!isClient || !progress) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-2">PROGRESS</h1>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  const totalAnswered = Object.keys(progress.answeredQuestions).length
  const totalCorrect = Object.values(progress.answeredQuestions).filter(Boolean).length
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">PROGRESS</h1>
      <p className="text-muted-foreground mb-8">Track completion by domain. No charts, only tables and percentages.</p>

      {/* Overall Summary */}
      <div className="border-2 border-foreground mb-6">
        <div className="p-4 border-b border-foreground bg-foreground text-background">
          <span className="font-bold">OVERALL SUMMARY</span>
        </div>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-foreground">
              <td className="p-3 text-muted-foreground">Topics Studied</td>
              <td className="p-3 text-right font-bold">
                {progress.studiedTopics.length} / {stats.totalTopics}
              </td>
              <td className="p-3 text-right">
                {Math.round((progress.studiedTopics.length / stats.totalTopics) * 100)}%
              </td>
            </tr>
            <tr className="border-b border-foreground">
              <td className="p-3 text-muted-foreground">Questions Attempted</td>
              <td className="p-3 text-right font-bold">
                {totalAnswered} / {stats.totalQuestions}
              </td>
              <td className="p-3 text-right">{Math.round((totalAnswered / stats.totalQuestions) * 100)}%</td>
            </tr>
            <tr className="border-b border-foreground">
              <td className="p-3 text-muted-foreground">Question Accuracy</td>
              <td className="p-3 text-right font-bold">
                {totalCorrect} / {totalAnswered}
              </td>
              <td className="p-3 text-right">{accuracy}%</td>
            </tr>
            <tr>
              <td className="p-3 text-muted-foreground">Exam Attempts</td>
              <td className="p-3 text-right font-bold">{progress.examAttempts.length}</td>
              <td className="p-3 text-right">{progress.examAttempts.filter((e) => e.passed).length} passed</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Target Score */}
      <div className="border-2 border-foreground p-4 mb-6 bg-muted">
        <div className="flex justify-between items-center">
          <span className="font-bold">TARGET SCORE</span>
          <span className="text-2xl font-bold">85%</span>
        </div>
        <div className="mt-2 text-sm text-muted-foreground">
          Current accuracy: {accuracy}% | Gap: {Math.max(0, 85 - accuracy)}%
        </div>
      </div>

      {/* Section Breakdown */}
      <div className="border-2 border-foreground mb-6">
        <div className="p-4 border-b border-foreground bg-muted">
          <span className="font-bold">SECTION BREAKDOWN</span>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-foreground">
              <th className="text-left p-3">SECTION</th>
              <th className="text-right p-3">WEIGHT</th>
              <th className="text-right p-3">TOPICS</th>
              <th className="text-right p-3">QUESTIONS</th>
            </tr>
          </thead>
          <tbody>
            {stats.sections.map((section) => (
              <tr key={section.id} className="border-b border-foreground">
                <td className="p-3">
                  <Link href={`/study/${section.id}`}>{section.title}</Link>
                </td>
                <td className="p-3 text-right font-bold">{section.weight}%</td>
                <td className="p-3 text-right">{section.topicCount}</td>
                <td className="p-3 text-right">{section.questionCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Exam History */}
      {progress.examAttempts.length > 0 && (
        <div className="border-2 border-foreground mb-6">
          <div className="p-4 border-b border-foreground bg-muted">
            <span className="font-bold">EXAM HISTORY</span>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-foreground">
                <th className="text-left p-3">DATE</th>
                <th className="text-right p-3">SCORE</th>
                <th className="text-right p-3">RESULT</th>
              </tr>
            </thead>
            <tbody>
              {progress.examAttempts
                .slice()
                .reverse()
                .map((attempt, index) => (
                  <tr key={index} className="border-b border-foreground">
                    <td className="p-3">{new Date(attempt.date).toLocaleDateString()}</td>
                    <td className="p-3 text-right font-bold">{attempt.score}%</td>
                    <td className="p-3 text-right">{attempt.passed ? "PASSED" : "NOT PASSED"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Weak Areas */}
      <div className="border-2 border-foreground mb-6">
        <div className="p-4 border-b border-foreground bg-muted">
          <span className="font-bold">RECOMMENDED FOCUS</span>
        </div>
        <div className="p-4">
          {accuracy < 85 ? (
            <ul className="space-y-2 text-sm">
              <li>→ Target accuracy is 85%. Focus on understanding concepts, not memorization.</li>
              <li>→ Review topics where you consistently answer incorrectly.</li>
              <li>→ Pay attention to "Common Traps" in each topic page.</li>
              <li>→ Take full practice exams to build time management skills.</li>
            </ul>
          ) : (
            <p className="text-sm">Your accuracy meets the target. Continue practicing to maintain readiness.</p>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-4 mb-6">
        <Link
          href="/practice"
          className="border-2 border-foreground px-4 py-2 no-underline hover:bg-foreground hover:text-background"
        >
          PRACTICE QUESTIONS →
        </Link>
        <Link
          href="/exam"
          className="border-2 border-foreground px-4 py-2 no-underline hover:bg-foreground hover:text-background"
        >
          TAKE EXAM →
        </Link>
        <Link
          href="/flashcards"
          className="border-2 border-foreground px-4 py-2 no-underline hover:bg-foreground hover:text-background"
        >
          FLASHCARDS →
        </Link>
      </div>

      {/* Reset */}
      <div className="border-t border-foreground pt-6">
        <button onClick={handleReset} className="text-sm text-muted-foreground hover:text-foreground underline">
          RESET ALL PROGRESS
        </button>
        <p className="text-xs text-muted-foreground mt-1">
          Progress is stored locally in your browser. Clearing browser data will also reset progress.
        </p>
      </div>
    </div>
  )
}
