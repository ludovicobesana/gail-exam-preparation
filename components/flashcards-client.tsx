"use client"

import { useState, useMemo } from "react"

type GlossaryItem = {
  term: string
  definition: string
  category: string
}

type Props = {
  glossary: GlossaryItem[]
}

export function FlashcardsClient({ glossary }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showDefinition, setShowDefinition] = useState(false)
  const [shuffledCards, setShuffledCards] = useState<GlossaryItem[]>([])
  const [knownCards, setKnownCards] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isStarted, setIsStarted] = useState(false)

  const categories = useMemo(() => {
    const cats = new Set(glossary.map((g) => g.category))
    return ["all", ...Array.from(cats)]
  }, [glossary])

  const startSession = () => {
    const filtered = selectedCategory === "all" ? glossary : glossary.filter((g) => g.category === selectedCategory)
    setShuffledCards([...filtered].sort(() => Math.random() - 0.5))
    setCurrentIndex(0)
    setShowDefinition(false)
    setKnownCards(new Set())
    setIsStarted(true)
  }

  const handleKnow = () => {
    setKnownCards((prev) => new Set([...prev, shuffledCards[currentIndex].term]))
    handleNext()
  }

  const handleDontKnow = () => {
    handleNext()
  }

  const handleNext = () => {
    setShowDefinition(false)
    if (currentIndex < shuffledCards.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    setShowDefinition(false)
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleReset = () => {
    setIsStarted(false)
    setCurrentIndex(0)
    setShowDefinition(false)
    setKnownCards(new Set())
  }

  if (!isStarted) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-2">FLASHCARDS</h1>
        <p className="text-muted-foreground mb-8">Term recall practice from official terminology.</p>

        <div className="border-2 border-foreground mb-6">
          <div className="p-4 border-b border-foreground bg-muted">
            <span className="font-bold">SELECT CATEGORY</span>
          </div>
          <div className="p-4 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`border border-foreground px-3 py-1 text-sm ${selectedCategory === cat ? "bg-foreground text-background" : "hover:bg-muted"}`}
              >
                {cat.toUpperCase()} (
                {cat === "all" ? glossary.length : glossary.filter((g) => g.category === cat).length})
              </button>
            ))}
          </div>
        </div>

        <div className="border-2 border-foreground p-4 mb-6">
          <h2 className="font-bold mb-2">HOW IT WORKS</h2>
          <ul className="text-sm space-y-1 text-muted-foreground">
            <li>→ Cards show term first, click to reveal definition</li>
            <li>→ Mark "KNOW" or "DON'T KNOW" to track progress</li>
            <li>→ Cards are shuffled each session</li>
            <li>→ No spaced repetition - simple recall practice</li>
          </ul>
        </div>

        <button
          onClick={startSession}
          className="w-full border-2 border-foreground p-4 font-bold hover:bg-foreground hover:text-background"
        >
          START SESSION (
          {selectedCategory === "all"
            ? glossary.length
            : glossary.filter((g) => g.category === selectedCategory).length}{" "}
          CARDS) →
        </button>
      </div>
    )
  }

  const card = shuffledCards[currentIndex]
  const progress = Math.round((currentIndex / shuffledCards.length) * 100)
  const isComplete = currentIndex === shuffledCards.length - 1 && showDefinition

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">FLASHCARDS</h1>

      {/* Progress */}
      <div className="border-2 border-foreground p-4 mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span>
            Card {currentIndex + 1} / {shuffledCards.length}
          </span>
          <span>
            Known: {knownCards.size} ({Math.round((knownCards.size / shuffledCards.length) * 100)}%)
          </span>
        </div>
        <div className="h-2 border border-foreground">
          <div className="h-full bg-foreground" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Card */}
      <div
        className="border-2 border-foreground mb-6 cursor-pointer min-h-[200px] flex flex-col"
        onClick={() => setShowDefinition(!showDefinition)}
      >
        <div className="p-2 border-b border-foreground bg-muted text-xs text-muted-foreground flex justify-between">
          <span>{card.category.toUpperCase()}</span>
          <span>CLICK TO {showDefinition ? "HIDE" : "REVEAL"}</span>
        </div>
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <div className="text-xl font-bold mb-4">{card.term}</div>
            {showDefinition && (
              <div className="text-muted-foreground border-t border-foreground pt-4 mt-4">{card.definition}</div>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      {showDefinition && !isComplete && (
        <div className="flex gap-4 mb-6">
          <button onClick={handleDontKnow} className="flex-1 border-2 border-foreground p-3 hover:bg-muted">
            DON'T KNOW
          </button>
          <button
            onClick={handleKnow}
            className="flex-1 border-2 border-foreground p-3 bg-foreground text-background hover:bg-muted hover:text-foreground"
          >
            KNOW ✓
          </button>
        </div>
      )}

      {/* Complete */}
      {isComplete && (
        <div className="border-2 border-foreground p-6 mb-6 bg-foreground text-background text-center">
          <div className="text-2xl font-bold mb-2">SESSION COMPLETE</div>
          <div>
            You marked {knownCards.size} / {shuffledCards.length} cards as known (
            {Math.round((knownCards.size / shuffledCards.length) * 100)}%)
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="border-2 border-foreground px-4 py-2 disabled:opacity-50 hover:bg-foreground hover:text-background disabled:hover:bg-background disabled:hover:text-foreground"
        >
          ← PREV
        </button>
        <button onClick={handleReset} className="border-2 border-foreground px-4 py-2 hover:bg-muted">
          END SESSION
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === shuffledCards.length - 1}
          className="border-2 border-foreground px-4 py-2 disabled:opacity-50 hover:bg-foreground hover:text-background disabled:hover:bg-background disabled:hover:text-foreground"
        >
          NEXT →
        </button>
      </div>
    </div>
  )
}
