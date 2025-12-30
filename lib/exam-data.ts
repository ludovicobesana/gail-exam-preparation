// Core exam structure and content data

export const EXAM_SECTIONS = [
  {
    id: "fundamentals",
    title: "Fundamentals of GenAI",
    weight: 30,
    description: "Core concepts, architectures, and foundational knowledge",
    topics: [
      {
        id: "llm-basics",
        title: "Large Language Model Fundamentals",
        concepts: [
          "Transformer architecture basics",
          "Tokens and tokenization",
          "Context windows and limitations",
          "Temperature and sampling parameters",
          "Pre-training vs fine-tuning",
          "Embeddings and vector representations",
        ],
        examFocus:
          "Understand conceptual distinctions, not implementation details. Exam tests whether you know WHEN to use concepts, not HOW they work internally.",
        traps: [
          "Confusing pre-training with fine-tuning scope",
          "Assuming larger context = always better",
          "Mixing up temperature effects on output",
        ],
        officialDocs: [
          {
            title: "Introduction to Large Language Models",
            url: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview",
          },
        ],
      },
      {
        id: "gemini-vs-gemma",
        title: "Gemini vs Gemma",
        concepts: [
          "Gemini: Proprietary, API-accessed, managed by Google",
          "Gemma: Open weights, self-hosted, customizable",
          "Gemini Nano: Edge deployment for devices",
          "Imagen: Text-to-image generation",
          "Veo: Video generation",
          "Use case alignment: control vs convenience",
          "Cost implications of each approach",
        ],
        examFocus:
          "Critical distinction. Exam frequently tests scenarios where choosing Gemini vs Gemma matters based on control, cost, compliance.",
        traps: [
          'Assuming Gemma is just "smaller Gemini"',
          "Forgetting Gemma requires infrastructure management",
          "Ignoring licensing and compliance requirements",
          "Confusing Gemini Nano (edge) with Gemma (open-weight)",
        ],
        officialDocs: [
          {
            title: "Gemini models",
            url: "https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/gemini",
          },
          {
            title: "Gemma open models",
            url: "https://cloud.google.com/vertex-ai/generative-ai/docs/open-models/use-gemma",
          },
        ],
      },
      {
        id: "prompting-techniques",
        title: "Prompting Techniques",
        concepts: [
          "Zero-shot: No examples provided",
          "One-shot: Single example provided",
          "Few-shot: Multiple examples provided",
          "Chain-of-thought: Step-by-step reasoning",
          "Role prompting: Assigning persona to model",
          "Prompt chaining: Sequential prompts building on each other",
          "ReAct framework: Reasoning + Action",
          "System instructions vs user prompts",
        ],
        examFocus:
          "Know when to apply each technique. Zero-shot for simple tasks, few-shot for format consistency, chain-of-thought for reasoning tasks.",
        traps: [
          "Overusing few-shot when zero-shot suffices",
          "Confusing chain-of-thought with few-shot",
          "Not recognizing when examples hurt performance",
          "Confusing ReAct framework with React.js",
        ],
        officialDocs: [
          {
            title: "Prompt design strategies",
            url: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies",
          },
        ],
      },
      {
        id: "model-limitations",
        title: "Model Limitations",
        concepts: [
          "Hallucinations: Generating false but plausible information",
          "Knowledge cutoff: Temporal limits of training data",
          "Data bias: Prejudices from training data",
          "Edge cases: Rare scenarios causing errors",
          "Fairness: Ensuring equitable treatment of users",
        ],
        examFocus:
          "Understand limitations to know when AI is NOT the right solution. Exam tests awareness of risks.",
        traps: [
          "Thinking hallucinations can be fully eliminated",
          "Ignoring bias when it seems 'minor'",
          "Assuming more data always fixes fairness issues",
        ],
        officialDocs: [
          {
            title: "Responsible AI practices",
            url: "https://cloud.google.com/responsible-ai",
          },
        ],
      },
    ],
  },
  {
    id: "google-cloud-offerings",
    title: "Google Cloud GenAI Offerings",
    weight: 35,
    description: "Products, services, and when to use each",
    topics: [
      {
        id: "vertex-ai-overview",
        title: "Vertex AI Platform",
        concepts: [
          "Unified ML platform for GenAI",
          "Model Garden: Access to models",
          "Vertex AI Studio: Prototyping interface",
          "Vertex AI Search and Conversation",
          "Agent Builder capabilities",
          "Vertex AI Pipelines for workflow automation",
          "Feature Store for ML feature management",
          "Model Registry for versioning",
        ],
        examFocus:
          "Know the purpose of each component. Exam tests product selection based on requirements, not feature memorization.",
        traps: [
          "Confusing Vertex AI Studio with Google AI Studio",
          "Not knowing when to use Model Garden vs direct API",
          "Mixing up Agent Builder vs custom agent development",
        ],
        officialDocs: [
          {
            title: "Vertex AI overview",
            url: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
          },
        ],
      },
      {
        id: "vertex-vs-google-ai-studio",
        title: "Vertex AI Studio vs Google AI Studio",
        concepts: [
          "Vertex AI Studio: Enterprise, in GCP, production-ready",
          "Google AI Studio: Consumer-focused, quick prototyping",
          "API key differences and security implications",
          "When to migrate from Google AI Studio to Vertex",
        ],
        examFocus:
          "Major exam topic. Enterprise scenarios = Vertex AI. Quick demos/personal projects = Google AI Studio. Security requirements always point to Vertex.",
        traps: [
          "Assuming they are interchangeable",
          "Using Google AI Studio API keys in production",
          "Not recognizing enterprise compliance requirements",
        ],
        officialDocs: [
          {
            title: "Vertex AI Studio",
            url: "https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal",
          },
          { title: "Google AI Studio", url: "https://ai.google.dev/gemini-api/docs/ai-studio-quickstart" },
        ],
      },
      {
        id: "grounding-rag",
        title: "Grounding and RAG",
        concepts: [
          "Grounding: Connecting responses to real data sources",
          "RAG: Retrieval-Augmented Generation pattern",
          "RAG steps: Retrieval → Augmentation → Generation",
          "Vertex AI Search for enterprise search",
          "Vector databases for semantic search",
          "When grounding vs fine-tuning vs RAG",
        ],
        examFocus:
          "Know the decision tree: Need current data? → Grounding/RAG. Need behavior change? → Fine-tuning. Need both? → Combine approaches.",
        traps: [
          "Thinking RAG replaces fine-tuning",
          "Not understanding grounding data freshness",
          "Overcomplicating when simple grounding suffices",
        ],
        officialDocs: [
          {
            title: "Ground responses",
            url: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
          },
        ],
      },
      {
        id: "agents-applications",
        title: "Agents and GenAI Applications",
        concepts: [
          "Conversational agents: Understanding intent and responding",
          "Workflow agents: Automating multi-step tasks",
          "Agent Builder for creating AI agents",
          "Playbooks: Defining step-by-step agent behaviors",
          "NotebookLM: AI-first document notebook",
          "Agentspace: Enterprise AI assistant platform",
        ],
        examFocus:
          "Know when to use agents vs simple prompting. Agents excel at multi-step tasks requiring tool integration.",
        traps: [
          "Using agents for simple Q&A when prompting suffices",
          "Confusing NotebookLM with Jupyter notebooks",
          "Not understanding agent workflow patterns",
        ],
        officialDocs: [
          {
            title: "Agent Builder overview",
            url: "https://cloud.google.com/vertex-ai/docs/agent-builder/overview",
          },
        ],
      },
      {
        id: "security-services",
        title: "Security and Data Protection",
        concepts: [
          "Cloud DLP for PII detection and protection",
          "Security Command Center for infrastructure security",
          "SAIF: Secure AI Framework",
          "Data poisoning and prompt injection risks",
          "Model theft prevention",
        ],
        examFocus:
          "DLP is the go-to answer for data protection/PII questions. Security Command Center for infrastructure.",
        traps: [
          "Confusing DLP with other security tools",
          "Ignoring AI-specific security risks",
          "Not considering data protection in GenAI pipelines",
        ],
        officialDocs: [
          {
            title: "Cloud DLP overview",
            url: "https://cloud.google.com/dlp/docs/overview",
          },
        ],
      },
    ],
  },
  {
    id: "improve-output",
    title: "Techniques to Improve Model Output",
    weight: 20,
    description: "Fine-tuning, RAG, prompt engineering, and optimization",
    topics: [
      {
        id: "fine-tuning-approaches",
        title: "Fine-tuning Approaches",
        concepts: [
          "Supervised fine-tuning: Task-specific adaptation",
          "RLHF: Reinforcement Learning from Human Feedback",
          "LoRA and parameter-efficient methods",
          "Continued pre-training vs fine-tuning",
          "When NOT to fine-tune",
        ],
        examFocus:
          "Fine-tuning is expensive and slow. Exam tests whether you recognize when simpler approaches (prompting, RAG) should be tried first.",
        traps: [
          "Jumping to fine-tuning before trying prompting",
          "Confusing fine-tuning with continued pre-training",
          "Not considering data requirements for fine-tuning",
        ],
        officialDocs: [
          { title: "Tune models", url: "https://cloud.google.com/vertex-ai/generative-ai/docs/models/tune-models" },
        ],
      },
      {
        id: "evaluation-methods",
        title: "Model Evaluation",
        concepts: [
          "Automatic metrics: BLEU, ROUGE, perplexity",
          "Human evaluation importance",
          "Task-specific evaluation criteria",
          "A/B testing in production",
          "Model monitoring for drift detection",
        ],
        examFocus:
          "Understand that automatic metrics have limitations. Human evaluation remains critical for quality assessment.",
        traps: [
          "Over-relying on automatic metrics",
          "Not establishing evaluation criteria upfront",
          "Ignoring task-specific quality requirements",
        ],
        officialDocs: [
          {
            title: "Evaluate models",
            url: "https://cloud.google.com/vertex-ai/generative-ai/docs/models/evaluate-models",
          },
        ],
      },
      {
        id: "sampling-parameters",
        title: "Sampling Parameters",
        concepts: [
          "Temperature: Controls randomness (0=deterministic, higher=creative)",
          "Top-P (nucleus sampling): Probability-based token selection",
          "Top-K: Fixed number of token candidates",
          "Token count and output length limits",
          "Safety settings for content filtering",
        ],
        examFocus:
          "Know what each parameter does. Temperature is most commonly tested.",
        traps: [
          "Thinking temperature affects quality, not randomness",
          "Confusing Top-P and Top-K effects",
          "Forgetting safety settings exist",
        ],
        officialDocs: [
          {
            title: "Model parameters",
            url: "https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/gemini",
          },
        ],
      },
    ],
  },
  {
    id: "business-strategies",
    title: "Business Strategies for GenAI Solutions",
    weight: 15,
    description: "ROI, governance, responsible AI, and organizational adoption",
    topics: [
      {
        id: "responsible-ai",
        title: "Responsible AI Principles",
        concepts: [
          "Google AI Principles overview",
          "Fairness and bias mitigation",
          "Transparency and explainability",
          "Privacy and data protection",
          "Safety and security considerations",
          "Accountability for AI decisions",
          "Legal implications: privacy, IP, liability",
        ],
        examFocus:
          "Conceptual understanding, not implementation. Know principles and when they apply to business decisions. Always choose the most 'responsible' answer.",
        traps: [
          "Thinking responsible AI is only technical",
          "Ignoring organizational governance needs",
          "Not recognizing bias in training data",
        ],
        officialDocs: [{ title: "Responsible AI practices", url: "https://cloud.google.com/responsible-ai" }],
      },
      {
        id: "cost-optimization",
        title: "Cost and Performance Tradeoffs",
        concepts: [
          "Token pricing models",
          "Latency vs accuracy tradeoffs",
          "Model size vs capability decisions",
          "Batch vs real-time processing",
          "Gemini Flash for cost-efficient workloads",
        ],
        examFocus:
          "Business scenarios testing cost awareness. Smaller models for simple tasks, larger for complex. Batch when latency allows.",
        traps: [
          "Always choosing largest model",
          "Not considering token costs at scale",
          "Ignoring latency requirements",
        ],
        officialDocs: [{ title: "Pricing", url: "https://cloud.google.com/vertex-ai/generative-ai/pricing" }],
      },
      {
        id: "human-in-the-loop",
        title: "Human-in-the-Loop (HITL)",
        concepts: [
          "Content moderation: Human review of AI outputs",
          "Sensitive applications: Healthcare, finance oversight",
          "High-risk decisions: Human accountability",
          "Pre-generation review: Validating inputs",
          "Post-generation review: Continuous feedback",
        ],
        examFocus:
          "Know when human oversight is essential. High-stakes decisions always benefit from HITL.",
        traps: [
          "Assuming AI can fully replace human judgment",
          "Ignoring HITL for 'simple' applications",
          "Not building feedback loops into AI systems",
        ],
        officialDocs: [{ title: "Responsible AI practices", url: "https://cloud.google.com/responsible-ai" }],
      },
      {
        id: "data-quality",
        title: "Data Quality and Management",
        concepts: [
          "Structured vs unstructured data",
          "Data quality dimensions: accuracy, completeness, consistency",
          "GenAI excels with unstructured data (emails, PDFs, images)",
          "Data governance and access controls",
          "PII and sensitive data handling",
        ],
        examFocus:
          "Understand that GenAI is particularly powerful for unstructured data. Data quality directly impacts AI quality.",
        traps: [
          "Ignoring data quality for AI projects",
          "Assuming GenAI only works with structured data",
          "Forgetting about data privacy requirements",
        ],
        officialDocs: [{ title: "Vertex AI Feature Store", url: "https://cloud.google.com/vertex-ai/docs/featurestore/overview" }],
      },
    ],
  },
]

export type Question = {
  id: string
  sectionId: string
  topicId: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
  whyOthersWrong: string[]
  officialDoc?: string
  difficulty: "easy" | "medium" | "hard"
}

export const PRACTICE_QUESTIONS: Question[] = [
  {
    id: "q1",
    sectionId: "fundamentals",
    topicId: "gemini-vs-gemma",
    question:
      "Your organization requires full control over model weights for compliance reasons and wants to host the model in their own infrastructure. Which Google AI model family should you recommend?",
    options: [
      "Gemini Pro via Vertex AI API",
      "Gemma open weights models",
      "PaLM 2 via Google AI Studio",
      "Gemini via Google AI Studio API",
    ],
    correctIndex: 1,
    explanation:
      "Gemma models are open-weight, meaning organizations can download, host, and customize them on their own infrastructure. This provides full control required for strict compliance scenarios.",
    whyOthersWrong: [
      "Gemini Pro via Vertex AI is API-accessed only; you cannot access or control the model weights.",
      "PaLM 2 via Google AI Studio does not provide access to model weights and is not the current recommended approach.",
      "Gemini via Google AI Studio is consumer-focused and API-only; no weight access.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/open-models/use-gemma",
    difficulty: "medium",
  },
  {
    id: "q2",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-vs-google-ai-studio",
    question:
      "A startup wants to quickly prototype a chatbot for a demo next week. They have no Google Cloud account yet. What should they use?",
    options: [
      "Vertex AI Studio with a new GCP project",
      "Google AI Studio with a Google account",
      "Deploy Gemma on Cloud Run",
      "Use Vertex AI Agent Builder",
    ],
    correctIndex: 1,
    explanation:
      "Google AI Studio allows quick prototyping with just a Google account, no GCP setup required. Ideal for demos and rapid iteration.",
    whyOthersWrong: [
      "Vertex AI Studio requires GCP account setup, billing configuration, and more time than available.",
      "Deploying Gemma requires infrastructure setup, far too complex for a quick demo.",
      "Agent Builder requires Vertex AI access and GCP project, overkill for a simple prototype.",
    ],
    officialDoc: "https://ai.google.dev/gemini-api/docs/ai-studio-quickstart",
    difficulty: "easy",
  },
  {
    id: "q3",
    sectionId: "improve-output",
    topicId: "fine-tuning-approaches",
    question:
      "Your model produces good responses but occasionally uses outdated product pricing. What is the MOST cost-effective first approach?",
    options: [
      "Fine-tune the model with updated pricing data",
      "Implement RAG with a pricing database",
      "Switch to a larger model",
      "Increase the temperature parameter",
    ],
    correctIndex: 1,
    explanation:
      "RAG (Retrieval-Augmented Generation) connects the model to external data sources like a pricing database, ensuring current information without expensive fine-tuning.",
    whyOthersWrong: [
      "Fine-tuning is expensive, slow, and prices change frequently making this approach impractical.",
      "Model size does not affect knowledge of specific current data like prices.",
      "Temperature affects randomness/creativity, not factual accuracy or data freshness.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q4",
    sectionId: "fundamentals",
    topicId: "prompting-techniques",
    question:
      "You need the model to solve a complex math word problem. Which prompting technique is MOST likely to improve accuracy?",
    options: [
      "Zero-shot prompting",
      "Few-shot prompting with similar problems",
      "Chain-of-thought prompting",
      "Reducing temperature to 0",
    ],
    correctIndex: 2,
    explanation:
      "Chain-of-thought prompting encourages the model to show step-by-step reasoning, significantly improving accuracy on complex reasoning tasks like math problems.",
    whyOthersWrong: [
      "Zero-shot may work for simple tasks but complex math benefits from structured reasoning.",
      "Few-shot shows format/style but does not inherently improve reasoning process.",
      "Temperature affects randomness, not reasoning quality; low temperature alone does not improve problem-solving.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies",
    difficulty: "medium",
  },
  {
    id: "q5",
    sectionId: "business-strategies",
    topicId: "cost-optimization",
    question:
      "Your application processes 10,000 customer emails daily for sentiment classification. Latency is not critical. What approach optimizes cost?",
    options: [
      "Use Gemini 1.5 Pro for each email in real-time",
      "Use Gemini 1.5 Flash with batch processing",
      "Fine-tune Gemma for sentiment and self-host",
      "Use Gemini 1.0 Pro for lower cost per token",
    ],
    correctIndex: 1,
    explanation:
      "Gemini 1.5 Flash is optimized for speed and cost. Batch processing aggregates requests for efficiency. When latency is not critical, batch + Flash is most cost-effective.",
    whyOthersWrong: [
      "Gemini 1.5 Pro is more expensive per token; overkill for sentiment classification.",
      "Self-hosting Gemma requires infrastructure costs and maintenance that may exceed API costs at this scale.",
      "Gemini 1.0 Pro is older; 1.5 Flash is specifically designed for cost-efficient, high-throughput tasks.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
    difficulty: "hard",
  },
  {
    id: "q6",
    sectionId: "google-cloud-offerings",
    topicId: "grounding-rag",
    question:
      "You want responses to include citations from your company knowledge base. Which Vertex AI feature directly supports this?",
    options: [
      "Model fine-tuning with knowledge base data",
      "Grounding with Vertex AI Search",
      "Increasing context window size",
      "Using system instructions only",
    ],
    correctIndex: 1,
    explanation:
      "Grounding with Vertex AI Search connects model responses to your enterprise data and provides citations. Purpose-built for this use case.",
    whyOthersWrong: [
      "Fine-tuning embeds knowledge but does not provide live citations or ensure current data.",
      "Larger context can hold more data but does not provide citation mechanisms.",
      "System instructions guide behavior but cannot dynamically retrieve and cite from knowledge bases.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q7",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "Your GenAI application will make loan approval recommendations. Which responsible AI consideration is MOST critical?",
    options: [
      "Minimizing token costs",
      "Ensuring fairness and bias mitigation",
      "Maximizing response speed",
      "Using the largest available model",
    ],
    correctIndex: 1,
    explanation:
      "Loan approvals directly impact people financially. Fairness and bias mitigation are essential to prevent discriminatory outcomes and meet regulatory requirements.",
    whyOthersWrong: [
      "Cost optimization is secondary to ethical and legal requirements in financial decisions.",
      "Speed is irrelevant compared to the consequences of biased loan decisions.",
      "Model size does not address fairness concerns; smaller models can be fair, larger models can be biased.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "easy",
  },
  {
    id: "q8",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question: "What happens when you set temperature to 0 in a Gemini API call?",
    options: [
      "The model refuses to generate responses",
      "Responses become more deterministic and consistent",
      "The model generates longer responses",
      "Token costs are reduced",
    ],
    correctIndex: 1,
    explanation:
      "Temperature controls randomness. At 0, the model consistently selects the highest-probability tokens, producing deterministic, repeatable outputs.",
    whyOthersWrong: [
      "Temperature 0 does not prevent generation; the model still produces output.",
      "Temperature does not affect response length; that is controlled by max_tokens.",
      "Temperature has no effect on pricing; costs are based on tokens processed.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/gemini",
    difficulty: "easy",
  },
  // Additional questions based on exam content
  {
    id: "q9",
    sectionId: "fundamentals",
    topicId: "prompting-techniques",
    question:
      "A team needs the model to respond as a financial advisor when helping customers. Which prompting technique should they use?",
    options: [
      "Zero-shot prompting",
      "Role prompting",
      "Chain-of-thought prompting",
      "Few-shot prompting"
    ],
    correctIndex: 1,
    explanation:
      "Role prompting assigns a persona to the model, guiding it to respond as a specific character or professional role like a financial advisor.",
    whyOthersWrong: [
      "Zero-shot prompting gives instructions but doesn't assign a persona or role.",
      "Chain-of-thought is for step-by-step reasoning, not for role assignment.",
      "Few-shot provides examples but doesn't inherently assign a role persona.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies",
    difficulty: "easy",
  },
  {
    id: "q10",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "What is the primary purpose of tokenization in large language models?",
    options: [
      "To encrypt the input data for security",
      "To break text into smaller units the model can process",
      "To translate text into different languages",
      "To compress the data for faster processing"
    ],
    correctIndex: 1,
    explanation:
      "Tokenization breaks text into smaller units (tokens) that the model can process. Tokens can be words, subwords, or characters depending on the tokenizer.",
    whyOthersWrong: [
      "Tokenization is not about encryption or security.",
      "Translation is a separate task, not related to tokenization.",
      "Tokenization structures data for processing, not for compression purposes.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview",
    difficulty: "easy",
  },
  {
    id: "q11",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "Which Vertex AI feature allows you to browse and access a variety of AI models including third-party models?",
    options: [
      "Vertex AI Studio",
      "Model Garden",
      "Agent Builder",
      "Vertex AI Pipelines"
    ],
    correctIndex: 1,
    explanation:
      "Model Garden is the Vertex AI feature that provides access to a curated collection of AI models, including Google models and third-party models.",
    whyOthersWrong: [
      "Vertex AI Studio is for prototyping and testing, not for browsing model catalogs.",
      "Agent Builder is for creating conversational AI agents, not model discovery.",
      "Vertex AI Pipelines is for ML workflow automation, not model browsing.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "easy",
  },
  {
    id: "q12",
    sectionId: "improve-output",
    topicId: "fine-tuning-approaches",
    question:
      "When should you consider fine-tuning a model instead of using prompt engineering?",
    options: [
      "When you need quick results with minimal setup",
      "When the model needs to learn a specific style, domain, or task that prompts cannot achieve",
      "When you want to reduce token costs",
      "When you need to update the model's knowledge cutoff"
    ],
    correctIndex: 1,
    explanation:
      "Fine-tuning is appropriate when the model needs to learn specific behaviors, styles, or domain knowledge that cannot be achieved through prompting alone.",
    whyOthersWrong: [
      "For quick results, prompt engineering is more appropriate than fine-tuning.",
      "Fine-tuning often increases costs, not reduces them.",
      "Fine-tuning doesn't update knowledge cutoff; RAG or grounding is needed for current data.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/models/tune-models",
    difficulty: "medium",
  },
  {
    id: "q13",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "An AI system for hiring is found to favor candidates from certain universities. This is an example of:",
    options: [
      "Hallucination",
      "Knowledge cutoff limitation",
      "Bias in training data",
      "Temperature misconfiguration"
    ],
    correctIndex: 2,
    explanation:
      "When an AI system shows preference for certain demographics or backgrounds, it typically reflects biases present in the training data.",
    whyOthersWrong: [
      "Hallucinations involve generating false information, not systematic preferences.",
      "Knowledge cutoff is about temporal limitations, not discriminatory patterns.",
      "Temperature affects randomness/creativity, not discriminatory behavior.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "easy",
  },
  {
    id: "q14",
    sectionId: "fundamentals",
    topicId: "gemini-vs-gemma",
    question:
      "Which statement best describes the difference between Gemini and Gemma models?",
    options: [
      "Gemini is for text only, Gemma is multimodal",
      "Gemini is API-accessed and managed, Gemma is open-weight for self-hosting",
      "Gemma is more powerful than Gemini",
      "Gemini requires on-premise deployment, Gemma is cloud-only"
    ],
    correctIndex: 1,
    explanation:
      "Gemini is Google's proprietary, API-accessed model that is fully managed. Gemma is the open-weight family that organizations can download and run on their own infrastructure.",
    whyOthersWrong: [
      "Gemini is actually multimodal (text, images, audio, video), not text-only.",
      "Gemma models are smaller and designed for different use cases, not necessarily more powerful.",
      "The opposite is true: Gemini is cloud-based API, Gemma can be deployed on-premise.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/open-models/use-gemma",
    difficulty: "medium",
  },
  {
    id: "q15",
    sectionId: "google-cloud-offerings",
    topicId: "grounding-rag",
    question:
      "In a RAG (Retrieval-Augmented Generation) system, what happens during the 'Augmentation' step?",
    options: [
      "The model is fine-tuned with retrieved data",
      "Retrieved information is added to the prompt context",
      "The model generates multiple response options",
      "Data is stored in a vector database"
    ],
    correctIndex: 1,
    explanation:
      "In RAG, the Augmentation step takes the retrieved information and incorporates it into the prompt, providing the model with additional context to generate more accurate responses.",
    whyOthersWrong: [
      "Fine-tuning is a separate process, not part of RAG's real-time augmentation.",
      "Generating multiple options is part of the generation step, not augmentation.",
      "Storing in vector databases is part of the setup/retrieval infrastructure, not the augmentation step.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q16",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "Which Google Cloud tool helps you understand why a model made a specific prediction?",
    options: [
      "Cloud DLP",
      "Vertex Explainable AI",
      "Security Command Center",
      "Cloud Armor"
    ],
    correctIndex: 1,
    explanation:
      "Vertex Explainable AI provides tools to understand model predictions, helping with debugging, bias detection, and building user trust.",
    whyOthersWrong: [
      "Cloud DLP is for data loss prevention and PII protection, not model explanations.",
      "Security Command Center is for infrastructure security, not AI explanations.",
      "Cloud Armor is for DDoS protection, not AI model interpretability.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/explainable-ai/overview",
    difficulty: "medium",
  },
  {
    id: "q17",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "What is a 'context window' in large language models?",
    options: [
      "The user interface for entering prompts",
      "The maximum number of tokens (input + output) a model can process in one call",
      "The time limit for API responses",
      "The number of users who can access the model simultaneously"
    ],
    correctIndex: 1,
    explanation:
      "A context window is the maximum number of tokens (combining input and output) that a model can handle in a single interaction.",
    whyOthersWrong: [
      "Context window is not about the UI, but about token processing capacity.",
      "Time limits are separate from context window size.",
      "Concurrent user limits are separate from context window concepts.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview",
    difficulty: "easy",
  },
  {
    id: "q18",
    sectionId: "improve-output",
    topicId: "evaluation-methods",
    question:
      "Why is human evaluation still important for assessing generative AI outputs?",
    options: [
      "Automatic metrics are always inaccurate",
      "Automatic metrics cannot capture all aspects of quality like creativity and appropriateness",
      "Human evaluation is faster than automatic metrics",
      "Regulators require only human evaluation"
    ],
    correctIndex: 1,
    explanation:
      "Automatic metrics like BLEU and ROUGE have limitations and cannot fully assess qualities like creativity, appropriateness, and overall coherence that humans can evaluate.",
    whyOthersWrong: [
      "Automatic metrics are useful but limited, not always inaccurate.",
      "Human evaluation is typically slower, not faster than automatic metrics.",
      "Regulations don't mandate only human evaluation; both approaches have their place.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/models/evaluate-models",
    difficulty: "medium",
  },
  {
    id: "q19",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "Which Vertex AI tool helps automate and manage ML workflows?",
    options: [
      "Model Garden",
      "Agent Builder",
      "Vertex AI Pipelines",
      "Vertex AI Studio"
    ],
    correctIndex: 2,
    explanation:
      "Vertex AI Pipelines allows you to orchestrate and automate ML workflows, making it easier to build, deploy, and manage ML systems.",
    whyOthersWrong: [
      "Model Garden is for model discovery and access, not workflow automation.",
      "Agent Builder is for conversational AI, not ML pipeline orchestration.",
      "Vertex AI Studio is for prototyping, not workflow automation.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/pipelines/introduction",
    difficulty: "easy",
  },
  {
    id: "q20",
    sectionId: "fundamentals",
    topicId: "prompting-techniques",
    question:
      "What is 'prompt chaining'?",
    options: [
      "Using multiple API keys for redundancy",
      "Creating complex interactions where each prompt builds on the output of the previous one",
      "Encrypting prompts for security",
      "Running multiple models in parallel"
    ],
    correctIndex: 1,
    explanation:
      "Prompt chaining creates complex workflows where the output of one prompt becomes input for the next, enabling multi-step reasoning and task decomposition.",
    whyOthersWrong: [
      "API key management is unrelated to prompt chaining.",
      "Encryption is a security feature, not a prompting technique.",
      "Parallel model execution is different from sequential prompt chaining.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies",
    difficulty: "medium",
  },
  {
    id: "q21",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "What is 'HITL' in the context of AI systems?",
    options: [
      "High-Intensity Training Loop",
      "Human-In-The-Loop: human oversight in AI processes",
      "Hybrid Intelligence Transfer Learning",
      "Hardware Integration Testing Layer"
    ],
    correctIndex: 1,
    explanation:
      "HITL (Human-In-The-Loop) refers to incorporating human oversight and intervention in AI systems, critical for high-stakes applications and quality assurance.",
    whyOthersWrong: [
      "This is not a training methodology acronym.",
      "This is not related to transfer learning concepts.",
      "This is not a hardware testing term.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "easy",
  },
  {
    id: "q22",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "What is Gemini Nano designed for?",
    options: [
      "Large-scale enterprise deployments",
      "Edge deployment on devices like smartphones",
      "Training new models from scratch",
      "Replacing Vertex AI in the cloud"
    ],
    correctIndex: 1,
    explanation:
      "Gemini Nano is Google's most efficient, compact AI model designed for edge deployment on devices like smartphones and embedded systems, enabling local processing.",
    whyOthersWrong: [
      "Large-scale enterprise deployments use larger Gemini models via API.",
      "Gemini Nano is for inference, not training new models.",
      "Gemini Nano complements cloud services, doesn't replace them.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/gemini",
    difficulty: "medium",
  },
  {
    id: "q23",
    sectionId: "fundamentals",
    topicId: "prompting-techniques",
    question:
      "What is the ReAct framework in prompt engineering?",
    options: [
      "A JavaScript library for AI interfaces",
      "A framework combining Reasoning and Acting for dynamic problem-solving",
      "A method for reducing model response time",
      "A technique for training reactive models"
    ],
    correctIndex: 1,
    explanation:
      "ReAct (Reason + Act) is a prompting framework that combines reasoning and action. The model thinks, acts (e.g., searches), observes results, and then responds.",
    whyOthersWrong: [
      "ReAct is not the React JavaScript library.",
      "ReAct is about reasoning approach, not response time optimization.",
      "ReAct is a prompting technique, not a training method.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies",
    difficulty: "hard",
  },
  {
    id: "q24",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "Which framework does Google Cloud provide for building and maintaining secure AI systems?",
    options: [
      "HITL Framework",
      "SAIF (Secure AI Framework)",
      "RLHF Protocol",
      "RAG Security Model"
    ],
    correctIndex: 1,
    explanation:
      "SAIF (Secure AI Framework) is Google Cloud's framework providing tools and guidelines to help build and maintain secure AI systems throughout the lifecycle.",
    whyOthersWrong: [
      "HITL is about human oversight, not a security framework.",
      "RLHF is a training methodology, not a security framework.",
      "RAG is an architecture pattern, not a security framework.",
    ],
    officialDoc: "https://cloud.google.com/security/ai",
    difficulty: "medium",
  },
  {
    id: "q25",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "What is NotebookLM?",
    options: [
      "A Jupyter notebook extension for Google Cloud",
      "An AI-first notebook grounded in your own documents for research and summarization",
      "A code editor for machine learning",
      "A model training interface"
    ],
    correctIndex: 1,
    explanation:
      "NotebookLM is an AI-first notebook that grounds AI responses in your uploaded documents, helping with research, summarization, and finding connections in your materials.",
    whyOthersWrong: [
      "NotebookLM is not a Jupyter extension but a standalone AI research tool.",
      "It's not a code editor but a document-focused AI assistant.",
      "It's not for training models but for interacting with documents.",
    ],
    officialDoc: "https://notebooklm.google/",
    difficulty: "easy",
  },
  {
    id: "q26",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "What is the difference between pre-training and fine-tuning?",
    options: [
      "Pre-training uses labeled data, fine-tuning uses unlabeled data",
      "Pre-training is initial training on large datasets, fine-tuning adapts the model to specific tasks",
      "Pre-training is faster than fine-tuning",
      "There is no difference; they are the same process"
    ],
    correctIndex: 1,
    explanation:
      "Pre-training is the initial phase where a model learns from vast amounts of data. Fine-tuning then adapts the pre-trained model to specific tasks or domains with additional training.",
    whyOthersWrong: [
      "Pre-training often uses unlabeled data; fine-tuning typically uses labeled, task-specific data.",
      "Pre-training is typically much longer and more resource-intensive than fine-tuning.",
      "They are distinct processes in the model development lifecycle.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/models/tune-models",
    difficulty: "medium",
  },
  {
    id: "q27",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "What is Vertex AI Feature Store used for?",
    options: [
      "Storing model weights and parameters",
      "Managing and serving ML features consistently across training and serving",
      "Hosting web applications",
      "Version control for code"
    ],
    correctIndex: 1,
    explanation:
      "Vertex AI Feature Store is used to manage, share, and serve ML features consistently, ensuring that the same feature transformations are applied during both training and inference.",
    whyOthersWrong: [
      "Model weights are stored in Model Registry, not Feature Store.",
      "It's for ML features, not web application hosting.",
      "Code version control uses git/GitHub, not Feature Store.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/featurestore/overview",
    difficulty: "medium",
  },
  {
    id: "q28",
    sectionId: "business-strategies",
    topicId: "cost-optimization",
    question:
      "Which Gemini model variant is specifically optimized for cost-efficient, high-throughput tasks?",
    options: [
      "Gemini Ultra",
      "Gemini Pro",
      "Gemini Flash",
      "Gemini Nano"
    ],
    correctIndex: 2,
    explanation:
      "Gemini Flash is specifically optimized for speed and cost efficiency, making it ideal for high-volume, latency-sensitive applications where cost per token matters.",
    whyOthersWrong: [
      "Gemini Ultra is the most capable but also most expensive variant.",
      "Gemini Pro is balanced but not specifically optimized for cost.",
      "Gemini Nano is for edge devices, not cloud-based high-throughput processing.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/pricing",
    difficulty: "easy",
  },
  {
    id: "q29",
    sectionId: "improve-output",
    topicId: "fine-tuning-approaches",
    question:
      "What is LoRA in the context of model fine-tuning?",
    options: [
      "A type of neural network architecture",
      "Low-Rank Adaptation: a parameter-efficient fine-tuning method",
      "A learning rate adjustment technique",
      "A model evaluation metric"
    ],
    correctIndex: 1,
    explanation:
      "LoRA (Low-Rank Adaptation) is a parameter-efficient fine-tuning method that reduces the number of trainable parameters, making fine-tuning more accessible and cost-effective.",
    whyOthersWrong: [
      "LoRA is a fine-tuning technique, not a network architecture like Transformer.",
      "LoRA is about weight adaptation, not learning rate adjustment.",
      "LoRA is a training method, not an evaluation metric.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/models/tune-models",
    difficulty: "hard",
  },
  {
    id: "q30",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "What is Agentspace in Google Cloud?",
    options: [
      "A development environment for coding",
      "A centralized platform to manage AI agents using company data",
      "A virtual machine hosting service",
      "A database management system"
    ],
    correctIndex: 1,
    explanation:
      "Agentspace is a centralized platform that allows organizations to manage AI agents that work with company data, integrating with internal systems and acting as research assistants for employees.",
    whyOthersWrong: [
      "Agentspace is for AI agent management, not code development.",
      "It's an AI platform, not a VM hosting service.",
      "It's for AI agents, not database management.",
    ],
    officialDoc: "https://cloud.google.com/agentspace",
    difficulty: "medium",
  },
  // New questions from official Google sample questions
  {
    id: "q31",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "A human resources department deploys a generative AI model to screen job applications and provide a shortlist of candidates to recruiters. Recruiters notice that some seemingly qualified candidates are consistently being overlooked, but the AI provides no explanation for its rankings or exclusions. The company needs to address this lack of transparency. What should they do?",
    options: [
      "Collect a larger and more diverse dataset for the gen AI model",
      "Fine-tune the gen AI model",
      "Implement explainable gen AI policies",
      "Develop fairness assessments for the gen AI model"
    ],
    correctIndex: 2,
    explanation:
      "The core issue is lack of transparency - the AI provides no explanation for its decisions. Implementing explainable AI policies directly addresses this by requiring the system to provide reasoning for its outputs.",
    whyOthersWrong: [
      "More data might help with bias but doesn't address the transparency/explainability issue.",
      "Fine-tuning changes model behavior but doesn't add transparency.",
      "Fairness assessments are valuable but the specific problem here is lack of explanation, not proven unfairness.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "medium",
  },
  {
    id: "q32",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "A company is evaluating the use of large language models (LLMs) to enhance its operations and customer interactions. What is a primary characteristic of LLMs?",
    options: [
      "LLMs excel in highly specific technical tasks requiring deep, singular domain expertise",
      "LLMs learn and generalize effectively from small datasets for niche applications",
      "LLMs have strong inherent logical reasoning and problem-solving abilities without extra prompting",
      "LLMs are trained on vast datasets, enabling broad language and context understanding, and adaptability across many tasks"
    ],
    correctIndex: 3,
    explanation:
      "The defining characteristic of LLMs is their training on massive datasets, which enables broad language understanding and the ability to generalize across many different tasks.",
    whyOthersWrong: [
      "LLMs are generalists, not specialists in singular domains.",
      "LLMs require vast datasets for training, not small datasets.",
      "LLMs often need prompting techniques like chain-of-thought to improve reasoning.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview",
    difficulty: "easy",
  },
  {
    id: "q33",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "An AI robot learns optimal package delivery routes in a city. It receives positive scores for fast, successful deliveries and negative scores for delays or failures. Through this feedback, the robot improves its navigation over time. What type of machine learning is being used to train the robot?",
    options: [
      "Supervised learning",
      "Deep learning",
      "Unsupervised learning",
      "Reinforcement learning"
    ],
    correctIndex: 3,
    explanation:
      "Reinforcement learning involves an agent learning through interaction with an environment, receiving rewards or penalties based on its actions. This describes the delivery robot scenario exactly.",
    whyOthersWrong: [
      "Supervised learning uses labeled input-output pairs, not reward/penalty feedback.",
      "Deep learning is an architecture type, not a learning paradigm.",
      "Unsupervised learning finds patterns in unlabeled data without explicit feedback.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "easy",
  },
  {
    id: "q34",
    sectionId: "google-cloud-offerings",
    topicId: "agents-applications",
    question:
      "A company wants to use generative AI to automate complex workflows and improve decision-making across its various departments. They are considering implementing AI agents as a key component of their strategy. What is the primary function of an AI agent in a gen AI system?",
    options: [
      "To provide the computing power for training and running advanced AI models",
      "To be the user interface for interacting with AI models",
      "To be a smart system that can analyze, use tools, and make decisions to reach goals",
      "To be a central storage place for the data that AI models use"
    ],
    correctIndex: 2,
    explanation:
      "An AI agent is a smart system that can analyze situations, use available tools, and make autonomous decisions to achieve specified goals. This is their core function in GenAI systems.",
    whyOthersWrong: [
      "Computing power is provided by infrastructure, not agents.",
      "UI is separate from agent functionality.",
      "Data storage is handled by databases and storage systems, not agents.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "medium",
  },
  {
    id: "q35",
    sectionId: "fundamentals",
    topicId: "gemini-vs-gemma",
    question:
      "An advertising agency needs to quickly generate many photorealistic images from text for client campaigns because traditional photoshoots are slow and costly. They want to rapidly create high-quality visuals from text and reduce expenses. Which Google foundation model should they use?",
    options: [
      "Gemini",
      "Gemma",
      "Veo",
      "Imagen"
    ],
    correctIndex: 3,
    explanation:
      "Imagen is Google's text-to-image generation model, specifically designed for creating photorealistic images from text descriptions. This is exactly what the advertising agency needs.",
    whyOthersWrong: [
      "Gemini is multimodal but optimized for understanding, not image generation.",
      "Gemma is an open-weight text model, not for image generation.",
      "Veo is for video generation, not static images.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview",
    difficulty: "easy",
  },
  {
    id: "q36",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A company is planning to integrate generative AI into its operations but is wary of becoming dependent on a single technology provider. They prioritize the ability to choose and integrate different AI tools and platforms as their needs evolve. Which inherent characteristic of Google Cloud would address this concern?",
    options: [
      "Google Cloud's emphasis on an open approach within its AI offerings",
      "Google Cloud's commitment to tightly integrated, proprietary AI solutions",
      "Google Cloud's strategy prioritizing fully managed AI services that simplify the user experience",
      "Google Cloud's primary focus on automating AI workflows"
    ],
    correctIndex: 0,
    explanation:
      "Google Cloud emphasizes an open approach with options like Gemma (open weights), support for open-source frameworks, and Model Garden with third-party models, reducing vendor lock-in.",
    whyOthersWrong: [
      "Proprietary solutions would increase vendor lock-in, the opposite of what the company wants.",
      "Managed services are about simplicity, not vendor independence.",
      "Workflow automation doesn't address the vendor lock-in concern.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "medium",
  },
  {
    id: "q37",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A consulting research team needs to analyze multiple lengthy reports and documents to find key trends and make client recommendations. They require a method to quickly understand each document's core findings, link information across sources, and efficiently organize insights for their report. Manual methods are too slow and complex. Which Google Cloud offering should they use?",
    options: [
      "NotebookLM",
      "Gemini app",
      "Vertex AI Search",
      "Google Workspace with Gemini"
    ],
    correctIndex: 0,
    explanation:
      "NotebookLM is specifically designed for analyzing multiple documents, finding connections, and organizing insights. It grounds AI responses in your uploaded documents for research and summarization.",
    whyOthersWrong: [
      "Gemini app is for general queries, not deep document analysis.",
      "Vertex AI Search is for enterprise search, not document analysis.",
      "Google Workspace with Gemini helps with productivity but isn't specialized for multi-document research.",
    ],
    officialDoc: "https://notebooklm.google/",
    difficulty: "medium",
  },
  {
    id: "q38",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A grocery store chain has data in several internal systems like sales, inventory, and marketing. Employees waste time searching these systems for information on product performance, stock, and campaign effectiveness. They need a central way to easily access and understand data across these systems for better decisions and efficiency. Which Google Cloud offering should they use?",
    options: [
      "Google Workspace with Gemini",
      "Gemini Enterprise",
      "Vertex AI Search",
      "Conversational Agents"
    ],
    correctIndex: 2,
    explanation:
      "Vertex AI Search provides enterprise search capabilities that can connect to multiple internal data sources and provide unified search with AI-powered understanding across all systems.",
    whyOthersWrong: [
      "Google Workspace with Gemini is for productivity tools, not enterprise data search.",
      "Gemini Enterprise is for employee productivity, not cross-system data search.",
      "Conversational Agents are for customer interactions, not internal data search.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/search/overview",
    difficulty: "medium",
  },
  {
    id: "q39",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A tech company has separate teams using different tools for their machine learning projects, causing duplicated work and scaling issues. They need a central platform to manage all their AI development, deployment, and monitoring efficiently. Which Google Cloud offering should they use?",
    options: [
      "Cloud Functions",
      "Vertex AI",
      "Gemini Enterprise",
      "BigQuery"
    ],
    correctIndex: 1,
    explanation:
      "Vertex AI is Google's unified ML platform that provides centralized tools for AI development, training, deployment, and monitoring, eliminating fragmentation and duplication.",
    whyOthersWrong: [
      "Cloud Functions is for serverless computing, not ML management.",
      "Gemini Enterprise is for end-user productivity, not ML development.",
      "BigQuery is for data analytics, not ML lifecycle management.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "easy",
  },
  {
    id: "q40",
    sectionId: "improve-output",
    topicId: "grounding-rag",
    question:
      "A software company's AI chatbot struggles to answer customer questions about recently released features because this information is not in its original training data. Customers are getting inaccurate answers, increasing support agent workload. The company wants the chatbot to use the latest product documentation to give accurate, up-to-date responses without retraining the entire model. Which technique should they use?",
    options: [
      "Fine-tuning",
      "Prompt engineering",
      "Retrieval-augmented generation (RAG)",
      "Human-in-the-loop (HITL)"
    ],
    correctIndex: 2,
    explanation:
      "RAG connects the model to external data sources (like product documentation) at query time, enabling accurate, up-to-date responses without expensive model retraining.",
    whyOthersWrong: [
      "Fine-tuning requires retraining, which the company wants to avoid.",
      "Prompt engineering cannot add new factual information the model doesn't have.",
      "HITL is for human oversight, not for adding new knowledge.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q41",
    sectionId: "fundamentals",
    topicId: "model-limitations",
    question:
      "A business analyst asks a generative AI model about the quarterly revenue of a small startup that recently entered the market. The model confidently provides a specific revenue figure and even mentions a supposed press release detailing the company's success. However, after further investigation, the analyst discovers that the startup has not yet released any financial reports, and no such press release exists. The information provided by the AI model is entirely fabricated despite sounding plausible. Which type of large language model limitation does this exemplify?",
    options: [
      "Bias",
      "Knowledge cutoff",
      "Data dependency",
      "Hallucinations"
    ],
    correctIndex: 3,
    explanation:
      "Hallucinations occur when the model generates plausible-sounding but fabricated information. The model invented a revenue figure and press release that don't exist.",
    whyOthersWrong: [
      "Bias is about systematic prejudice in outputs, not fabricated facts.",
      "Knowledge cutoff is about temporal limits, but the issue here is made-up information.",
      "Data dependency refers to reliance on training data quality, not fabrication.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "easy",
  },
  {
    id: "q42",
    sectionId: "improve-output",
    topicId: "grounding-rag",
    question:
      "A generative AI tool that answers employee policy questions is providing outdated and inaccurate information, causing confusion. The company wants the tool to give reliable answers based on the latest official documents. What should the organization do?",
    options: [
      "Fine-tune the underlying language model with a broader dataset of general knowledge",
      "Increase the temperature setting of the language model",
      "Implement grounding techniques",
      "Reduce the token count parameter"
    ],
    correctIndex: 2,
    explanation:
      "Grounding connects the model to authoritative data sources (like policy documents), ensuring responses are based on current, official information rather than potentially outdated training data.",
    whyOthersWrong: [
      "Fine-tuning with general knowledge doesn't guarantee current policy information.",
      "Temperature affects creativity/randomness, not accuracy.",
      "Token count affects response length, not accuracy.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q43",
    sectionId: "fundamentals",
    topicId: "gemini-vs-gemma",
    question:
      "A sales team wants to create dynamic and personalized video pitches for potential clients. They receive client information in various formats and need an AI model that can transform this information into engaging video content tailored to each client's specific needs and challenges. Which Google model should they use?",
    options: [
      "Gemma",
      "Gemini",
      "Imagen",
      "Veo"
    ],
    correctIndex: 3,
    explanation:
      "Veo is Google's video generation model, designed to create videos from text and other inputs. It's the right choice for generating personalized video content.",
    whyOthersWrong: [
      "Gemma is a text model, not for video generation.",
      "Gemini is multimodal but for understanding, not video generation.",
      "Imagen generates images, not videos.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview",
    difficulty: "easy",
  },
  {
    id: "q44",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A growing retail company with fragmented phone, email, and basic website chat support needs a unified cloud solution. They require integrated communication channels, consistent customer experiences, and scalable support that ensures security and privacy. Which Google Cloud offering should they use?",
    options: [
      "Vertex AI Platform",
      "Google Cloud Contact Center as a Service",
      "Conversational AI",
      "Vertex AI Search"
    ],
    correctIndex: 1,
    explanation:
      "Google Cloud Contact Center as a Service (CCAI) provides an integrated solution for unifying communication channels (phone, email, chat) with AI-powered capabilities and enterprise security.",
    whyOthersWrong: [
      "Vertex AI Platform is for ML development, not contact center operations.",
      "Conversational AI is a component, not a complete contact center solution.",
      "Vertex AI Search is for enterprise search, not customer support operations.",
    ],
    officialDoc: "https://cloud.google.com/solutions/contact-center",
    difficulty: "medium",
  },
  {
    id: "q45",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "An organization is seeking to improve how its employees access and use internal company information scattered across various systems. They want to provide their knowledge workers with tools that can understand and use this data to enhance productivity and decision-making. What is a key benefit of using Gemini Enterprise in this scenario?",
    options: [
      "Gemini Enterprise primarily focuses on enhancing external customer engagement through AI-powered chatbots",
      "Gemini Enterprise directly manages the underlying infrastructure and hardware required for AI model training",
      "Gemini Enterprise allows employees to find and use internal information more easily by creating custom AI agents that can access and understand data from various enterprise sources",
      "Gemini Enterprise is mainly designed for building and deploying custom machine learning models for predictive analytics"
    ],
    correctIndex: 2,
    explanation:
      "Gemini Enterprise enables employees to access and leverage internal company data through AI-powered tools and custom agents that can understand enterprise data sources.",
    whyOthersWrong: [
      "Gemini Enterprise is for internal productivity, not external customer chatbots.",
      "It doesn't manage infrastructure; that's handled by GCP.",
      "It's for productivity and information access, not custom ML model development.",
    ],
    officialDoc: "https://cloud.google.com/gemini-for-workspace",
    difficulty: "medium",
  },
  {
    id: "q46",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question: "What is reinforcement learning?",
    options: [
      "Learning from labeled data with correct output pairs",
      "Learning by identifying patterns in unlabeled data",
      "Learning through interaction and feedback",
      "Learning by training on vast data to generate new content"
    ],
    correctIndex: 2,
    explanation:
      "Reinforcement learning is a paradigm where an agent learns by interacting with an environment and receiving feedback (rewards or penalties) based on its actions.",
    whyOthersWrong: [
      "Learning from labeled pairs describes supervised learning.",
      "Finding patterns in unlabeled data describes unsupervised learning.",
      "Training on vast data for generation describes generative AI/foundation models.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "easy",
  },
  {
    id: "q47",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "A company is developing a system to automatically categorize customer support emails. They have a collection of thousands of past emails, and each email has been manually reviewed and tagged with a category such as 'Billing Inquiry,' 'Technical Support,' or 'Feature Request.' What type of data is this?",
    options: [
      "Unlabeled data",
      "Labeled data",
      "Structured data",
      "Raw data"
    ],
    correctIndex: 1,
    explanation:
      "Labeled data consists of examples that have been tagged with the correct answer or category. The emails with manual category tags are labeled data.",
    whyOthersWrong: [
      "Unlabeled data lacks the category tags these emails have.",
      "Structured data refers to format (tables, schemas), not whether it's labeled.",
      "Raw data is unprocessed; these emails have been reviewed and tagged.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "easy",
  },
  {
    id: "q48",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question: "What is the definition of a generative AI model?",
    options: [
      "A physical device that houses the hardware components of a gen AI system",
      "A complex algorithm trained on vast amounts of data to learn patterns and relationships",
      "A user interface that allows users to interact with a gen AI system",
      "A set of rules and guidelines governing responsible development and use of gen AI"
    ],
    correctIndex: 1,
    explanation:
      "A generative AI model is a complex algorithm trained on vast datasets to learn patterns, relationships, and structures, enabling it to generate new content.",
    whyOthersWrong: [
      "Physical hardware is infrastructure, not the model itself.",
      "The UI is for interaction, separate from the model.",
      "Rules and guidelines are governance, not the model definition.",
    ],
    officialDoc: "https://cloud.google.com/ai/generative-ai",
    difficulty: "easy",
  },
  {
    id: "q49",
    sectionId: "google-cloud-offerings",
    topicId: "agents-applications",
    question:
      "A video game company created a virtual reality game with virtual characters that can interact with users in a more natural and intuitive way by using gestures and facial expressions to communicate. What type of agent is this?",
    options: [
      "Creative agent",
      "Workflow agent",
      "Virtual assistant agent",
      "Conversational agent"
    ],
    correctIndex: 3,
    explanation:
      "Conversational agents are designed for natural, interactive communication with users. Characters using gestures and expressions for communication are conversational agents.",
    whyOthersWrong: [
      "Creative agents focus on content generation, not interaction.",
      "Workflow agents automate business processes.",
      "Virtual assistant agents help with tasks, but the focus here is on natural conversation.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "medium",
  },
  {
    id: "q50",
    sectionId: "google-cloud-offerings",
    topicId: "agents-applications",
    question:
      "A software company has developers who need to write, review, debug, and generate code from natural language descriptions by using generative AI. What type of agent is this?",
    options: [
      "Data analysis agent",
      "Workflow agent",
      "Data agent",
      "Code agent"
    ],
    correctIndex: 3,
    explanation:
      "A code agent is specialized for software development tasks like writing, reviewing, debugging, and generating code from natural language. This describes exactly what the developers need.",
    whyOthersWrong: [
      "Data analysis agents focus on analyzing data, not code.",
      "Workflow agents automate business processes, not coding tasks.",
      "Data agents work with data retrieval and manipulation, not code generation.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "easy",
  },
  {
    id: "q51",
    sectionId: "fundamentals",
    topicId: "gemini-vs-gemma",
    question:
      "A research scientist wants to use Veo to visualize live, fluctuating data streams on a real-time dashboard. Why would Veo be a poor choice for this particular task?",
    options: [
      "Veo generates videos from static inputs like text or images and cannot process or dynamically visualize live data",
      "Veo may lack specific scientific visualization styles needed for accurate data representation",
      "Veo use for this scenario would require too many computational resources",
      "Veo is designed for short-form video, not continuous, long-duration live data displays"
    ],
    correctIndex: 0,
    explanation:
      "Veo is designed to generate videos from static inputs (text or images), not to process or display live, dynamic data streams. It's not a real-time visualization tool.",
    whyOthersWrong: [
      "While visualization styles may be limited, the core issue is inability to handle live data.",
      "Computational resources aren't the primary limitation.",
      "Video duration isn't the main issue; it's the inability to process live data.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview",
    difficulty: "medium",
  },
  {
    id: "q52",
    sectionId: "fundamentals",
    topicId: "gemini-vs-gemma",
    question:
      "A company sells custom-designed phone cases on their website. How should Imagen be effectively used?",
    options: [
      "To generate realistic images of phone cases on devices from text descriptions of designs",
      "To analyze customer feedback to identify popular phone case design trends",
      "To predict demand for different phone case designs based on sales data",
      "To transcribe customer audio feedback on prototypes of phone case designs"
    ],
    correctIndex: 0,
    explanation:
      "Imagen is a text-to-image model designed to generate photorealistic images from text descriptions. Generating product images from design descriptions is its core use case.",
    whyOthersWrong: [
      "Analyzing feedback requires NLP, not image generation.",
      "Demand prediction requires ML forecasting, not image generation.",
      "Audio transcription requires speech-to-text, not image generation.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview",
    difficulty: "easy",
  },
  {
    id: "q53",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A company lacks extensive in-house machine learning and AI expertise. How does Google Cloud democratize AI?",
    options: [
      "By offering exclusive access to its most powerful AI models for high-spending clients",
      "By providing fully automated AI solutions requiring no technical user input",
      "By providing a comprehensive AI platform with low-code/no-code tools, pre-trained models, and easy-to-use APIs",
      "By offering free custom AI solution development and deployment for all businesses"
    ],
    correctIndex: 2,
    explanation:
      "Google Cloud democratizes AI through accessible tools like Vertex AI Studio (low-code), pre-trained models via Model Garden, and simple APIs that don't require deep ML expertise.",
    whyOthersWrong: [
      "Google Cloud's approach is inclusive, not exclusive to high spenders.",
      "Some technical input is still required; it's not fully automated.",
      "Google doesn't offer free custom development for all businesses.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "medium",
  },
  {
    id: "q54",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-vs-google-ai-studio",
    question:
      "A marketing team is brainstorming creative ideas for a new social media campaign. They want to quickly generate various taglines and initial post drafts to explore different angles and messaging options. They need a Google Cloud prebuilt generative AI tool without additional setup that allows for rapid content creation and experimentation. What should the team do?",
    options: [
      "Use NotebookLM to upload past successful campaigns and analyze their key elements",
      "Use Google Workspace with Gemini within Google Slides to prepare a presentation outlining their social media campaign strategy",
      "Use the Gemini app to create taglines and social media post drafts that align with their campaign goals and target audience",
      "Create a custom Gem in Gemini Advanced with specific brand guidelines and target audience profiles"
    ],
    correctIndex: 2,
    explanation:
      "The Gemini app provides quick, no-setup access to generative AI for creative tasks like brainstorming taglines and drafting social media content.",
    whyOthersWrong: [
      "NotebookLM is for document analysis, not quick creative brainstorming.",
      "Google Slides with Gemini is for presentations, not rapid content generation.",
      "Creating a custom Gem requires additional setup; they want no additional setup.",
    ],
    officialDoc: "https://gemini.google.com/",
    difficulty: "medium",
  },
  {
    id: "q55",
    sectionId: "improve-output",
    topicId: "fine-tuning-approaches",
    question:
      "A healthcare company has a large language model that performs well on general medical queries but struggles with their specific internal medical coding system. They have a dataset of 10,000 correctly coded patient records. The company wants to adapt the model to accurately use their internal coding system while maintaining its general medical knowledge. Which approach should they use?",
    options: [
      "Supervised fine-tuning with their internal coding dataset",
      "Increasing the model's temperature parameter",
      "Using prompt engineering with few-shot examples",
      "Switching to a larger pre-trained model"
    ],
    correctIndex: 0,
    explanation:
      "Supervised fine-tuning adapts the model to domain-specific tasks (like internal coding) by training on labeled examples while preserving the model's general capabilities.",
    whyOthersWrong: [
      "Temperature affects randomness/creativity, not task-specific knowledge.",
      "Few-shot prompting can help but won't teach complex domain-specific rules as effectively as fine-tuning with 10,000 examples.",
      "A larger model won't automatically know the internal coding system.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/models/tune-models",
    difficulty: "medium",
  },
  {
    id: "q56",
    sectionId: "improve-output",
    topicId: "evaluation-methods",
    question:
      "A company deployed a customer service chatbot that generates responses to product inquiries. They want to measure how well the chatbot's responses match the quality and content of their expert customer service representatives' answers to the same questions. Which evaluation metric should they use?",
    options: [
      "BLEU score",
      "Perplexity",
      "F1 score",
      "Temperature"
    ],
    correctIndex: 0,
    explanation:
      "BLEU (Bilingual Evaluation Understudy) measures how similar generated text is to reference text, making it suitable for comparing chatbot responses to expert answers.",
    whyOthersWrong: [
      "Perplexity measures how well a model predicts text, not similarity to reference answers.",
      "F1 score is for classification tasks, not text generation quality.",
      "Temperature is a generation parameter, not an evaluation metric.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/models/evaluate-models",
    difficulty: "hard",
  },
  {
    id: "q57",
    sectionId: "improve-output",
    topicId: "sampling-parameters",
    question:
      "A legal firm uses a language model to draft standard contract clauses. They need the output to be highly consistent and predictable, using well-established legal language with minimal variation. Which temperature setting should they use?",
    options: [
      "Temperature = 0.0 (or very low, e.g., 0.1)",
      "Temperature = 0.5 (moderate)",
      "Temperature = 1.0 (high)",
      "Temperature = 2.0 (very high)"
    ],
    correctIndex: 0,
    explanation:
      "Low temperature (close to 0) makes the model deterministic and consistent, choosing the most likely tokens. This is ideal for predictable, standardized outputs like legal clauses.",
    whyOthersWrong: [
      "Moderate temperature introduces some randomness, reducing consistency.",
      "High temperature increases creativity and variation, which is undesirable for legal documents.",
      "Very high temperature produces highly random, unpredictable outputs unsuitable for legal work.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/adjust-parameter-values",
    difficulty: "easy",
  },
  {
    id: "q58",
    sectionId: "improve-output",
    topicId: "evaluation-methods",
    question:
      "A news organization built a generative AI system to create article summaries. They want to measure how well their model's summaries capture the essential information from the original articles compared to summaries written by professional editors. They have a test set of 1,000 articles with editor-written summaries. What evaluation approach should they use?",
    options: [
      "Compare BLEU scores between generated and editor summaries",
      "Only measure the model's inference speed",
      "Count the number of words in generated summaries",
      "Check if generated summaries contain the article title"
    ],
    correctIndex: 0,
    explanation:
      "BLEU score measures how closely generated text matches reference text (editor summaries), making it appropriate for evaluating summary quality against human-written benchmarks.",
    whyOthersWrong: [
      "Inference speed is a performance metric, not a quality metric.",
      "Word count doesn't indicate quality or accuracy of content.",
      "Checking for the title doesn't measure if the summary captures essential information.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/models/evaluate-models",
    difficulty: "medium",
  },
]

export const GLOSSARY: { term: string; definition: string; category: string }[] = [
  // Models
  {
    term: "Gemini",
    definition: "Google's proprietary multimodal AI model family, accessed via API. Processes text, images, audio, and video.",
    category: "Models",
  },
  { 
    term: "Gemma", 
    definition: "Google's open-weight model family, available for self-hosting and local deployment.", 
    category: "Models" 
  },
  {
    term: "Gemini Nano",
    definition: "Google's most compact AI model designed for edge deployment on smartphones and embedded systems.",
    category: "Models",
  },
  {
    term: "Imagen",
    definition: "Google's text-to-image generation model.",
    category: "Models",
  },
  {
    term: "Veo",
    definition: "Google's video generation model.",
    category: "Models",
  },
  // Techniques
  {
    term: "RAG",
    definition: "Retrieval-Augmented Generation: pattern combining retrieval systems with generative models to provide current, accurate information.",
    category: "Techniques",
  },
  {
    term: "Grounding",
    definition: "Connecting model responses to external, verifiable data sources for improved accuracy and reduced hallucinations.",
    category: "Techniques",
  },
  {
    term: "Fine-tuning",
    definition: "Adapting a pre-trained model to specific tasks or domains with additional training on task-specific data.",
    category: "Techniques",
  },
  {
    term: "HITL",
    definition: "Human-In-The-Loop: Incorporating human oversight and intervention in AI systems for quality assurance and accountability.",
    category: "Techniques",
  },
  {
    term: "Prompt Chaining",
    definition: "Creating complex workflows where the output of one prompt becomes input for the next, enabling multi-step reasoning.",
    category: "Techniques",
  },
  // Prompting
  { 
    term: "Zero-shot", 
    definition: "Prompting without examples; model uses only instruction to complete the task.", 
    category: "Prompting" 
  },
  {
    term: "One-shot",
    definition: "Prompting with a single example to demonstrate the desired format or behavior.",
    category: "Prompting",
  },
  {
    term: "Few-shot",
    definition: "Prompting with multiple examples to demonstrate desired format, style, or behavior.",
    category: "Prompting",
  },
  {
    term: "Chain-of-thought",
    definition: "Prompting technique that encourages step-by-step reasoning, improving accuracy on complex problems.",
    category: "Prompting",
  },
  {
    term: "Role Prompting",
    definition: "Assigning a persona or role to the model to guide its response style and expertise.",
    category: "Prompting",
  },
  {
    term: "ReAct",
    definition: "Reason + Act framework combining reasoning and action steps for dynamic problem-solving with tools.",
    category: "Prompting",
  },
  {
    term: "Metaprompting",
    definition: "Dynamic, adaptable prompt creation and interpretation for flexible AI interactions.",
    category: "Prompting",
  },
  // Parameters
  {
    term: "Temperature",
    definition: "Parameter controlling output randomness; 0=deterministic, higher values=more creative/random.",
    category: "Parameters",
  },
  {
    term: "Top-P",
    definition: "Nucleus sampling parameter that limits token selection to those with cumulative probability reaching P.",
    category: "Parameters",
  },
  {
    term: "Top-K",
    definition: "Parameter limiting token selection to the K most probable options.",
    category: "Parameters",
  },
  {
    term: "Context window",
    definition: "Maximum tokens (input+output) a model can process in one API call.",
    category: "Parameters",
  },
  {
    term: "Token",
    definition: "The basic unit of text that models process; can be a word, subword, or character.",
    category: "Parameters",
  },
  // Products
  {
    term: "Vertex AI",
    definition: "Google Cloud's unified ML platform including GenAI services, model training, and deployment.",
    category: "Products",
  },
  { 
    term: "Model Garden", 
    definition: "Vertex AI feature providing access to various AI models including Google and third-party models.", 
    category: "Products" 
  },
  { 
    term: "Agent Builder", 
    definition: "Vertex AI tool for building conversational AI agents with playbooks and external tools.", 
    category: "Products" 
  },
  {
    term: "Vertex AI Studio",
    definition: "Enterprise prototyping interface for testing and developing with generative AI models in GCP.",
    category: "Products",
  },
  {
    term: "Google AI Studio",
    definition: "Consumer-focused interface for quick prototyping with Gemini, usable without full GCP setup.",
    category: "Products",
  },
  {
    term: "Vertex AI Pipelines",
    definition: "Tool for orchestrating and automating ML workflows.",
    category: "Products",
  },
  {
    term: "Vertex AI Feature Store",
    definition: "Service for managing, sharing, and serving ML features consistently across training and inference.",
    category: "Products",
  },
  {
    term: "NotebookLM",
    definition: "AI-first notebook grounded in your documents for research, summarization, and Q&A.",
    category: "Products",
  },
  {
    term: "Agentspace",
    definition: "Centralized platform to manage AI agents using company data, acting as enterprise AI assistants.",
    category: "Products",
  },
  // Training
  {
    term: "RLHF",
    definition: "Reinforcement Learning from Human Feedback: training method using human preferences to align model behavior.",
    category: "Training",
  },
  { 
    term: "LoRA", 
    definition: "Low-Rank Adaptation: parameter-efficient fine-tuning method reducing trainable parameters.", 
    category: "Training" 
  },
  {
    term: "Pre-training",
    definition: "Initial training phase where a model learns from vast amounts of data before task-specific fine-tuning.",
    category: "Training",
  },
  {
    term: "Supervised Fine-tuning",
    definition: "Adapting a model using labeled examples for specific tasks.",
    category: "Training",
  },
  // Limitations
  {
    term: "Hallucination",
    definition: "When a model generates plausible-sounding but incorrect or nonsensical information.",
    category: "Limitations",
  },
  {
    term: "Knowledge Cutoff",
    definition: "The temporal limit of a model's training data; the model doesn't know events after this date.",
    category: "Limitations",
  },
  {
    term: "Data Bias",
    definition: "Prejudices in training data that can cause unfair or discriminatory model outputs.",
    category: "Limitations",
  },
  {
    term: "Edge Cases",
    definition: "Rare or unusual scenarios that can reveal model weaknesses and lead to errors.",
    category: "Limitations",
  },
  // Responsible AI
  {
    term: "Fairness",
    definition: "Ensuring AI systems treat all users and groups equitably without discrimination.",
    category: "Responsible AI",
  },
  {
    term: "Explainable AI",
    definition: "Tools and techniques for understanding why a model made specific predictions or decisions.",
    category: "Responsible AI",
  },
  {
    term: "SAIF",
    definition: "Secure AI Framework: Google's framework for building and maintaining secure AI systems.",
    category: "Responsible AI",
  },
  {
    term: "Transparency",
    definition: "Making AI decision-making processes understandable and data handling practices clear.",
    category: "Responsible AI",
  },
  {
    term: "Accountability",
    definition: "Clear responsibility for AI outputs and decisions, essential for high-stakes applications.",
    category: "Responsible AI",
  },
  // Security
  {
    term: "Cloud DLP",
    definition: "Data Loss Prevention: service for identifying and protecting sensitive data (PII).",
    category: "Security",
  },
  {
    term: "Data Poisoning",
    definition: "Attack where malicious data is injected into training sets to corrupt model behavior.",
    category: "Security",
  },
  {
    term: "Prompt Injection",
    definition: "Attack attempting to manipulate model behavior through malicious input prompts.",
    category: "Security",
  },
  {
    term: "Model Theft",
    definition: "Unauthorized extraction or replication of a model's capabilities.",
    category: "Security",
  },
  // Evaluation
  {
    term: "BLEU",
    definition: "Automatic metric for evaluating machine-generated text against reference translations.",
    category: "Evaluation",
  },
  {
    term: "ROUGE",
    definition: "Recall-Oriented metric for evaluating summaries against reference summaries.",
    category: "Evaluation",
  },
  {
    term: "Perplexity",
    definition: "Metric measuring how well a model predicts text; lower is generally better.",
    category: "Evaluation",
  },
  // Architecture
  {
    term: "Transformer",
    definition: "The neural network architecture underlying most modern large language models.",
    category: "Architecture",
  },
  {
    term: "Multimodal",
    definition: "Capability to process and generate multiple types of content: text, images, audio, video.",
    category: "Architecture",
  },
  {
    term: "Embedding",
    definition: "Vector representation of data (text, images) that captures semantic meaning for similarity search.",
    category: "Architecture",
  },
  {
    term: "Vector Database",
    definition: "Database optimized for storing and querying high-dimensional vectors used in semantic search and RAG.",
    category: "Architecture",
  },
]
