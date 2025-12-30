"use client"

import { useState, useEffect, useCallback } from "react"
import type { Question } from "@/lib/exam-data"

type ExamState = "intro" | "active" | "review" | "results"

type Props = {
  questions: Question[]
  sections: Array<{ id: string; title: string; weight: number }>
}

const EXAM_DURATION = 90 * 60 // 90 minutes in seconds
const TARGET_QUESTIONS = 50

export function ExamClient({ questions, sections }: Props) {
  const [examState, setExamState] = useState<ExamState>("intro")
  const [examQuestions, setExamQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Map<string, number>>(new Map())
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION)
  const [showEndDialog, setShowEndDialog] = useState(false)

  // Generate weighted exam questions
  const generateExam = useCallback(() => {
    const selectedQuestions: Question[] = []

    // For each section, select questions based on weight
    sections.forEach((section) => {
      const sectionQuestions = questions.filter((q) => q.sectionId === section.id)
      const targetCount = Math.round((section.weight / 100) * TARGET_QUESTIONS)
      const shuffled = [...sectionQuestions].sort(() => Math.random() - 0.5)
      selectedQuestions.push(...shuffled.slice(0, targetCount))
    })

    // Shuffle final list
    return selectedQuestions.sort(() => Math.random() - 0.5)
  }, [questions, sections])

  // Timer
  useEffect(() => {
    if (examState !== "active") return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          setExamState("results")
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [examState])

  const startExam = () => {
    const generated = generateExam()
    setExamQuestions(generated)
    setAnswers(new Map())
    setFlagged(new Set())
    setCurrentIndex(0)
    setTimeRemaining(EXAM_DURATION)
    setExamState("active")
  }

  const handleAnswer = (questionId: string, answerIndex: number) => {
    setAnswers((prev) => new Map(prev).set(questionId, answerIndex))
  }

  const toggleFlag = (questionId: string) => {
    setFlagged((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(questionId)) {
        newSet.delete(questionId)
      } else {
        newSet.add(questionId)
      }
      return newSet
    })
  }

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`
  }

  const calculateResults = () => {
    let correct = 0
    const sectionResults: { [key: string]: { correct: number; total: number } } = {}

    examQuestions.forEach((q) => {
      if (!sectionResults[q.sectionId]) {
        sectionResults[q.sectionId] = { correct: 0, total: 0 }
      }
      sectionResults[q.sectionId].total++

      if (answers.get(q.id) === q.correctIndex) {
        correct++
        sectionResults[q.sectionId].correct++
      }
    })

    return {
      correct,
      total: examQuestions.length,
      percentage: Math.round((correct / examQuestions.length) * 100),
      passed: (correct / examQuestions.length) * 100 >= 85,
      sectionResults,
    }
  }

  // Intro Screen
  if (examState === "intro") {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-2">PRACTICE EXAM</h1>
        <p className="text-muted-foreground mb-8">Simulated exam environment with realistic pacing.</p>

        <div className="border-2 border-foreground mb-6">
          <div className="p-4 border-b border-foreground bg-foreground text-background">
            <span className="font-bold">EXAM PARAMETERS</span>
          </div>
          <div className="p-4">
            <table className="w-full text-sm">
              <tbody>
                <tr className="border-b border-foreground">
                  <td className="py-2 text-muted-foreground">Duration</td>
                  <td className="py-2 text-right font-bold">90 minutes</td>
                </tr>
                <tr className="border-b border-foreground">
                  <td className="py-2 text-muted-foreground">Questions</td>
                  <td className="py-2 text-right font-bold">{Math.min(TARGET_QUESTIONS, questions.length)}</td>
                </tr>
                <tr className="border-b border-foreground">
                  <td className="py-2 text-muted-foreground">Passing Score</td>
                  <td className="py-2 text-right font-bold">85%</td>
                </tr>
                <tr>
                  <td className="py-2 text-muted-foreground">Weighting</td>
                  <td className="py-2 text-right font-bold">Section-proportional</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="border-2 border-foreground p-4 mb-6 bg-muted">
          <h2 className="font-bold mb-2">SECTION WEIGHTS</h2>
          <ul className="text-sm space-y-1">
            {sections.map((s) => (
              <li key={s.id} className="flex justify-between">
                <span>{s.title}</span>
                <span className="font-bold">{s.weight}%</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-2 border-foreground p-4 mb-6">
          <h2 className="font-bold mb-2">RULES</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>→ Timer starts immediately when you begin</li>
            <li>→ You can flag questions for review</li>
            <li>→ All questions must be answered before submission</li>
            <li>→ Results show section-by-section breakdown</li>
          </ul>
        </div>

        <button
          onClick={startExam}
          className="w-full border-2 border-foreground p-4 font-bold hover:bg-foreground hover:text-background"
        >
          START EXAM →
        </button>
      </div>
    )
  }

  // Active Exam
  if (examState === "active" || examState === "review") {
    const question = examQuestions[currentIndex]
    const isAnswered = answers.has(question.id)
    const isFlagged = flagged.has(question.id)
    const unansweredCount = examQuestions.length - answers.size

    return (
      <div>
        {/* Timer Bar */}
        <div className="border-2 border-foreground mb-6 sticky top-0 bg-background z-10">
          <div className="p-3 flex justify-between items-center">
            <span className="font-bold">{examState === "review" ? "REVIEW MODE" : formatTime(timeRemaining)}</span>
            <span className="text-sm">
              {currentIndex + 1}/{examQuestions.length} | Unanswered: {unansweredCount} | Flagged: {flagged.size}
            </span>
          </div>
          <div className="h-1 bg-muted">
            <div
              className="h-full bg-foreground"
              style={{
                width: `${(timeRemaining / EXAM_DURATION) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="border-2 border-foreground mb-6">
          <div className="p-4 border-b border-foreground bg-muted flex justify-between items-start">
            <div>
              <span className="text-sm text-muted-foreground">QUESTION {currentIndex + 1}</span>
              <p className="font-medium mt-1">{question.question}</p>
            </div>
            <button
              onClick={() => toggleFlag(question.id)}
              className={`border border-foreground px-2 py-1 text-xs ${isFlagged ? "bg-foreground text-background" : ""}`}
            >
              {isFlagged ? "FLAGGED" : "FLAG"}
            </button>
          </div>

          <div className="divide-y divide-foreground">
            {question.options.map((option, index) => {
              const isSelected = answers.get(question.id) === index
              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(question.id, index)}
                  className={`p-4 w-full text-left flex gap-3 ${isSelected ? "bg-foreground text-background" : "hover:bg-muted"}`}
                >
                  <span className="font-bold">{String.fromCharCode(65 + index)}.</span>
                  <span>{option}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Question Navigator */}
        <div className="border-2 border-foreground p-4 mb-6">
          <h2 className="font-bold mb-2 text-sm">QUESTION NAVIGATOR</h2>
          <div className="flex flex-wrap gap-1">
            {examQuestions.map((q, index) => {
              const answered = answers.has(q.id)
              const isFlagged = flagged.has(q.id)
              const current = index === currentIndex

              let className = "w-8 h-8 text-xs border border-foreground"
              
              if (current) {
                className += " ring-2 ring-foreground ring-offset-2"
              }
              
              if (answered) {
                className += " bg-foreground text-background"
              } else if (isFlagged) {
                className += " bg-yellow-400 text-black border-2"
              }

              return (
                <button 
                  key={q.id} 
                  onClick={() => setCurrentIndex(index)} 
                  className={className}
                >
                  {index + 1}
                </button>
              )
            })}
          </div>
          <div className="mt-3 text-xs flex gap-4 border-t border-foreground pt-2">
            <span className="flex items-center gap-1">
              <span className="inline-block w-4 h-4 bg-foreground border-2 border-foreground"></span>
              Answered
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-4 h-4 bg-background border-2 border-foreground"></span>
              Unanswered
            </span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-4 h-4 bg-yellow-400 border-2 border-foreground"></span>
              Flagged
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between gap-4">
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="border-2 border-foreground px-4 py-2 disabled:opacity-50 hover:bg-foreground hover:text-background disabled:hover:bg-background disabled:hover:text-foreground"
          >
            ← PREV
          </button>

          <div className="flex gap-2">
            {examState === "active" && (
              <button
                onClick={() => setShowEndDialog(true)}
                className="border-2 border-foreground px-4 py-2 bg-red-600 text-white hover:bg-red-700"
              >
                END EXAM
              </button>
            )}

            {examState === "active" && unansweredCount === 0 && (
              <button
                onClick={() => setExamState("review")}
                className="border-2 border-foreground px-4 py-2 hover:bg-muted"
              >
                REVIEW →
              </button>
            )}

            {examState === "review" && (
              <button
                onClick={() => setExamState("results")}
                className="border-2 border-foreground px-4 py-2 bg-foreground text-background hover:bg-muted hover:text-foreground"
              >
                SUBMIT EXAM
              </button>
            )}
          </div>

          <button
            onClick={() => setCurrentIndex(Math.min(examQuestions.length - 1, currentIndex + 1))}
            disabled={currentIndex === examQuestions.length - 1}
            className="border-2 border-foreground px-4 py-2 disabled:opacity-50 hover:bg-foreground hover:text-background disabled:hover:bg-background disabled:hover:text-foreground"
          >
            NEXT →
          </button>
        </div>

        {/* End Exam Confirmation Dialog */}
        {showEndDialog && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-background border-2 border-foreground p-6 max-w-md">
              <h2 className="font-bold text-xl mb-4">END EXAM?</h2>
              <p className="mb-6 text-muted-foreground">
                {unansweredCount > 0 ? (
                  <>You have <strong>{unansweredCount} unanswered question{unansweredCount > 1 ? 's' : ''}</strong>. Are you sure you want to end the exam?</>
                ) : (
                  <>Are you sure you want to end the exam and see your results?</>
                )}
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowEndDialog(false)}
                  className="flex-1 border-2 border-foreground px-4 py-2 hover:bg-muted"
                >
                  CANCEL
                </button>
                <button
                  onClick={() => {
                    setShowEndDialog(false)
                    setExamState("results")
                  }}
                  className="flex-1 border-2 border-foreground px-4 py-2 bg-foreground text-background hover:bg-muted hover:text-foreground"
                >
                  END EXAM
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  // Results
  if (examState === "results") {
    const results = calculateResults()

    return (
      <div>
        <h1 className="text-2xl font-bold mb-6">EXAM RESULTS</h1>

        {/* Score */}
        <div
          className={`border-2 border-foreground p-6 mb-6 ${results.passed ? "bg-foreground text-background" : "bg-muted"}`}
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{results.percentage}%</div>
            <div className="text-lg mb-2">
              {results.correct} / {results.total} CORRECT
            </div>
            <div className="font-bold">{results.passed ? "PASSED" : "NOT PASSED"}</div>
            <div className="text-sm mt-1">(Target: 85%)</div>
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
                <th className="text-right p-3">SCORE</th>
                <th className="text-right p-3">%</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((section) => {
                const r = results.sectionResults[section.id] || { correct: 0, total: 0 }
                const pct = r.total > 0 ? Math.round((r.correct / r.total) * 100) : 0
                return (
                  <tr key={section.id} className="border-b border-foreground">
                    <td className="p-3">{section.title}</td>
                    <td className="p-3 text-right">
                      {r.correct}/{r.total}
                    </td>
                    <td className="p-3 text-right font-bold">{pct}%</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Time Used */}
        <div className="border-2 border-foreground p-4 mb-6">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Time Used</span>
            <span className="font-bold">{formatTime(EXAM_DURATION - timeRemaining)} / 90:00</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={startExam}
            className="flex-1 border-2 border-foreground p-4 hover:bg-foreground hover:text-background"
          >
            RETAKE EXAM
          </button>
          <button
            onClick={() => setExamState("intro")}
            className="flex-1 border-2 border-foreground p-4 hover:bg-muted"
          >
            BACK TO INTRO
          </button>
        </div>
      </div>
    )
  }

  return null
}
