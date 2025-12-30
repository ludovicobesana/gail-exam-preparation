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
            An open-source study platform for the Google Cloud Generative AI Leader certification exam (50 questions). 
            Brutalist design: minimal, functional, distraction-free.
          </p>
          <p className="text-muted-foreground text-sm">
            NOT an official Google product. Verify content with official documentation.
          </p>
        </section>

        <section className="border-2 border-foreground p-6 mb-6">
          <h2 className="font-bold mb-4">EXAM DOMAINS</h2>
          <ul className="space-y-2 text-sm">
            <li>→ <strong>Fundamentals of Generative AI (~30%)</strong>: Core AI/ML concepts</li>
            <li>→ <strong>Google Cloud's GenAI Offerings (~35%)</strong>: Google Cloud tools and services</li>
            <li>→ <strong>Techniques to Improve Model Output (~20%)</strong>: Methods to enhance performance</li>
            <li>→ <strong>Business Strategies (~15%)</strong>: Enterprise implementation strategies</li>
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
