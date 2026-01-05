import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full">
        <h1 className="text-2xl font-bold mb-6">ABOUT</h1>

        <section className="border-2 border-foreground p-6 mb-6">
          <h2 className="font-bold mb-4">WHAT IS THIS?</h2>
          <p className="mb-4">
            An open-source study platform for the Google Cloud Generative AI Leader certification exam. 
            Brutalist design: minimal, functional, distraction-free.
          </p>
          <p className="text-muted-foreground text-sm">
            NOT an official Google product. Verify content with official documentation.
          </p>
        </section>

        <section className="border-2 border-foreground p-6 mb-6 bg-muted">
          <h2 className="font-bold mb-4">✓ CERTIFICATION ACHIEVED</h2>
          <p className="mb-4">
            I passed the Google Cloud Generative AI Leader certification on <strong>January 3rd, 2026</strong>. The exam consisted of <strong>45 questions total</strong>.
          </p>
          <p className="mb-4">
            View my certification badge:{" "}
            <a 
              href="https://www.credly.com/badges/86ce0288-fb86-403f-abde-6cd772f53b56" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline font-bold"
            >
              Credly Credential
            </a>
          </p>
        </section>

        <section className="border-2 border-foreground p-6 mb-6">
          <h2 className="font-bold mb-4">EXAM INSIGHTS</h2>
          <p className="mb-4">
            The exam is <strong>not trivial</strong>. Several questions are carefully designed to be deceptive, requiring close and attentive reading. It's easy to misinterpret what a question is asking if you rush through it.
          </p>
          <p className="mb-4">
            <strong>Key lessons:</strong>
          </p>
          <ul className="space-y-2 text-sm mb-4">
            <li>→ Read every option carefully—trap answers are very plausible</li>
            <li>→ Distinguish between similar concepts (e.g., Gemini vs Gemma, Vertex AI vs Google AI Studio)</li>
            <li>→ Pay attention to business context in scenario questions</li>
            <li>→ Don't assume—verify your understanding against official documentation</li>
          </ul>
        </section>

        <section className="border-2 border-foreground p-6 mb-6">
          <h2 className="font-bold mb-4">RESOURCES THAT HELPED</h2>
          <p className="mb-4">
            Preparation resources I used:
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              → This website ({" "}
              <a 
                href="https://github.com/ludovicobesana/gail-exam-preparation" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline"
              >
                gail-exam-preparation
              </a>
              {" "}): organized study materials and practice questions
            </li>
            <li>
              → ExamPro GCP GAL Course:{" "}
              <a 
                href="https://app.exampro.co/student/material/gcp-gal/7543" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline"
              >
                app.exampro.co
              </a>
              {" "}: excellent video explanations and additional practice
            </li>
            <li>
              → Official Google Cloud documentation—always the source of truth
            </li>
          </ul>
        </section>

        <section className="border-2 border-foreground p-6 mb-6">
          <h2 className="font-bold mb-4">CONTRIBUTE</h2>
          <ul className="space-y-2 text-sm">
            <li>
              → <a href="https://github.com/ludovicobesana/gail-exam-preparation" target="_blank" rel="noopener noreferrer" className="underline font-bold">⭐ Star the project on GitHub</a>
            </li>
            <li>
              → <a href="https://github.com/ludovicobesana/gail-exam-preparation" target="_blank" rel="noopener noreferrer">Source code on GitHub</a>
            </li>
            <li>
              → <a href="https://github.com/ludovicobesana/gail-exam-preparation/issues" target="_blank" rel="noopener noreferrer">Report issues or corrections</a>
            </li>
          </ul>
        </section>

        <section className="border-2 border-foreground p-6 bg-muted">
          <h2 className="font-bold mb-4">DID THIS HELP YOU PASS?</h2>
          <p className="mb-4">
            If this site helped you prepare for your GAIL certification, I'd love to hear about it!
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              → DM me on LinkedIn:{" "}
              <a 
                href="https://www.linkedin.com/in/ludovicobesana/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline font-bold"
              >
                linkedin.com/in/ludovicobesana
              </a>
            </li>
            <li>
              → Or via my website:{" "}
              <a 
                href="https://www.ludovicobesana.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline"
              >
                ludovicobesana.com
              </a>
            </li>
          </ul>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
