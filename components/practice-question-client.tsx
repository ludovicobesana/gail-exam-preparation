"use client"

import { useState } from "react"
import type { Question } from "@/lib/exam-data"
import { EXAM_SECTIONS } from "@/lib/exam-data"

type Props = {
  questions: Question[]
}

export function PracticeQuestionClient({ questions }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<string>>(new Set())
  const [correctAnswers, setCorrectAnswers] = useState<Set<string>>(new Set())

  const question = questions[currentIndex]
  const section = EXAM_SECTIONS.find((s) => s.id === question.sectionId)
  const topic = section?.topics.find((t) => t.id === question.topicId)

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    setShowExplanation(true)
    setAnsweredQuestions((prev) => new Set([...prev, question.id]))
    if (index === question.correctIndex) {
      setCorrectAnswers((prev) => new Set([...prev, question.id]))
    }
  }

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    }
  }

  const handleReset = () => {
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setAnsweredQuestions(new Set())
    setCorrectAnswers(new Set())
  }

  return (
    <div>
      {/* Progress */}
      <div className="border-2 border-foreground p-4 mb-6">
        <div className="flex justify-between text-sm">
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>
          <span>
            Score: {correctAnswers.size}/{answeredQuestions.size} (
            {answeredQuestions.size > 0 ? Math.round((correctAnswers.size / answeredQuestions.size) * 100) : 0}%)
          </span>
        </div>
        <div className="mt-2 h-2 border border-foreground">
          <div
            className="h-full bg-foreground"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="border-2 border-foreground mb-6">
        <div className="p-4 border-b border-foreground bg-muted">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>
              {section?.title} → {topic?.title}
            </span>
            <span className="uppercase">{question.difficulty}</span>
          </div>
          <p className="font-medium">{question.question}</p>
        </div>

        <div className="divide-y divide-foreground">
          {question.options.map((option, index) => {
            let className = "p-4 cursor-pointer hover:bg-muted"

            if (selectedAnswer !== null) {
              if (index === question.correctIndex) {
                className = "p-4 bg-foreground text-background"
              } else if (index === selectedAnswer) {
                className = "p-4 bg-muted line-through"
              } else {
                className = "p-4 text-muted-foreground"
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`${className} w-full text-left flex gap-3`}
              >
                <span className="font-bold">{String.fromCharCode(65 + index)}.</span>
                <span>{option}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="border-2 border-foreground mb-6">
          <div className="p-4 border-b border-foreground bg-foreground text-background">
            <span className="font-bold">
              {selectedAnswer === question.correctIndex ? "CORRECT" : "INCORRECT"} — EXPLANATION
            </span>
          </div>
          <div className="p-4">
            <p className="mb-4">{question.explanation}</p>

            <h3 className="font-bold mb-2">WHY OTHER OPTIONS ARE WRONG:</h3>
            <ul className="space-y-2 mb-4">
              {question.whyOthersWrong.map((reason, index) => (
                <li key={index} className="flex gap-2 text-sm">
                  <span className="text-muted-foreground font-bold">{String.fromCharCode(65 + index)}.</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>

            {question.officialDoc && (
              <a
                href={question.officialDoc}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground"
              >
                [OFFICIAL DOC] → {question.officialDoc}
              </a>
            )}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="border-2 border-foreground px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foreground hover:text-background disabled:hover:bg-background disabled:hover:text-foreground"
        >
          ← PREVIOUS
        </button>
        <button onClick={handleReset} className="border-2 border-foreground px-4 py-2 hover:bg-muted">
          RESET
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === questions.length - 1}
          className="border-2 border-foreground px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-foreground hover:text-background disabled:hover:bg-background disabled:hover:text-foreground"
        >
          NEXT →
        </button>
      </div>
    </div>
  )
}
