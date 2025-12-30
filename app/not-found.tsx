import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8 w-full flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <h2 className="text-2xl font-bold mb-2">PAGE NOT FOUND</h2>
          <p className="text-muted-foreground mb-8">
            La pagina che stai cercando non esiste o è stata spostata.
          </p>

          <div className="border-2 border-foreground p-6 mb-6">
            <h3 className="font-bold mb-4">RISORSE DISPONIBILI</h3>
            <ul className="space-y-2 text-sm">
              <li>
                → <Link href="/" className="underline">Home</Link> - Panoramica dell'esame
              </li>
              <li>
                → <Link href="/study" className="underline">Study</Link> - Materiale di studio per dominio
              </li>
              <li>
                → <Link href="/practice" className="underline">Practice</Link> - Domande di pratica
              </li>
              <li>
                → <Link href="/exam" className="underline">Exam</Link> - Simulazione esame completa
              </li>
              <li>
                → <Link href="/flashcards" className="underline">Flashcards</Link> - Memorizzazione termini
              </li>
              <li>
                → <Link href="/glossary" className="underline">Glossary</Link> - Dizionario dei termini
              </li>
            </ul>
          </div>

          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="border-2 border-foreground px-6 py-3 font-bold hover:bg-foreground hover:text-background"
            >
              ← TORNA ALLA HOME
            </Link>
            <Link
              href="/study"
              className="border-2 border-foreground px-6 py-3 font-bold hover:bg-foreground hover:text-background"
            >
              VAI ALLO STUDIO →
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
