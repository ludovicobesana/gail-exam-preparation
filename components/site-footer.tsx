export function SiteFooter() {
  return (
    <footer className="border-t-2 border-foreground mt-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-4 text-sm">
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/ludovicobesana/gail-exam-preparation" target="_blank" rel="noopener noreferrer">
              GITHUB
            </a>
            <span>|</span>
            <a
              href="https://cloud.google.com/learn/certification/generative-ai-leader"
              target="_blank"
              rel="noopener noreferrer"
            >
              OFFICIAL EXAM INFO
            </a>
            <span>|</span>
            <a href="https://www.cloudskillsboost.google/paths/118" target="_blank" rel="noopener noreferrer">
              INTRO TO GENAI SKILLS BOOST PATH
            </a>
            <span>|</span>
            <a href="https://www.skills.google/paths/1951" target="_blank" rel="noopener noreferrer">
              GAIL SKILLS BOOST PATH
            </a>
            <span>|</span>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScNn5oUIFeMQjtsHilQsJPxDsnP-0DbhDVsIXaBeCmPj-dgYw/formResponse"
              target="_blank"
              rel="noopener noreferrer"
            >
              SAMPLE QUESTIONS
            </a>
            <span>|</span>
            <a href="/about">ABOUT</a>
          </div>
          <p className="text-muted-foreground">
            Open-source. Not affiliated with Google. Content accuracy not guaranteed. Always verify with official
            documentation.
          </p>
          <p className="text-muted-foreground">
            <a href="https://github.com/ludovicobesana/gail-exam-preparation/issues" target="_blank" rel="noopener noreferrer">
              [SUGGEST CORRECTION] → GitHub Issues
            </a>
          </p>
          <p className="text-muted-foreground">
            Made with ♥ by{" "}
            <a 
              href="https://www.ludovicobesana.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              Ludovico Besana
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
