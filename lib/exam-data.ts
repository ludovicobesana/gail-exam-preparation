// Core exam structure and content data

export const EXAM_SECTIONS = [
  {
    id: "fundamentals",
    title: "Fundamentals of GenAI",
    weight: 30,
    description: "Core concepts, architectures, and foundational knowledge",
    topics: [
      {
        id: "introduction",
        title: "Introduction",
        studyQA: [
          {
            question: "What is the main goal of the Google Cloud GenAI Leader certification?",
            answer: "The main goal of the Google Cloud GenAI Leader certification is to validate a candidate's ability to understand, evaluate, and lead the adoption of generative AI solutions on Google Cloud, focusing on responsible, secure, and effective use of GenAI technologies in business scenarios.",
            officialSource: "https://cloud.google.com/certification/generative-ai-leader"
          },
          {
            question: "What types of questions and competencies does the GenAI Leader exam primarily assess?",
            answer: "The GenAI Leader exam primarily assesses conceptual understanding, scenario-based decision making, and the ability to select appropriate Google Cloud GenAI products and practices. It focuses on responsible AI, security, business value, and solution design rather than technical implementation details.",
            officialSource: "https://cloud.google.com/certification/generative-ai-leader"
          }
        ]
      },
      {
        id: "llm-basics",
        title: "Large Language Model Fundamentals",
        studyQA: [
          {
            question: "What is Artificial Intelligence (AI) in general terms?",
            answer: "Artificial Intelligence (AI) refers to systems or machines that mimic human intelligence to perform tasks and can iteratively improve themselves based on the information they collect. AI encompasses a wide range of technologies, including rule-based systems, machine learning, and deep learning.",
            officialSource: "https://cloud.google.com/learn/what-is-artificial-intelligence"
          },
          {
            question: "What is the main difference between traditional AI and Generative AI?",
            answer: "Traditional AI focuses on recognizing patterns and making predictions or classifications based on existing data, while Generative AI creates new content such as text, images, or code by learning from large datasets. Generative AI models, like LLMs, can generate novel outputs rather than just analyze or classify data.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview"
          },
          {
            question: "What is Natural Language Processing (NLP) and why is it fundamental for LLMs?",
            answer: "Natural Language Processing (NLP) is a field of AI focused on enabling machines to understand, interpret, and generate human language. NLP is fundamental for LLMs because it allows them to process and generate text in a way that is meaningful and contextually appropriate for users.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview"
          },
          {
            question: "What is the difference between supervised and unsupervised learning?",
            answer: "Supervised learning uses labeled data to train models to predict outcomes, while unsupervised learning finds patterns or groupings in data without explicit labels. Supervised learning is common for classification and regression, whereas unsupervised is used for clustering and dimensionality reduction.",
            officialSource: "https://cloud.google.com/vertex-ai/docs/general/ml-use-cases"
          },
          {
            question: "What is a machine learning model?",
            answer: "A machine learning model is a mathematical representation trained on data to recognize patterns and make predictions or decisions without being explicitly programmed for each task.",
            officialSource: "https://cloud.google.com/vertex-ai/docs/general/ml-use-cases"
          },
          {
            question: "What is a feature in an ML model?",
            answer: "A feature is an individual measurable property or characteristic used as input to a machine learning model. Features are critical for the model to learn and make accurate predictions.",
            officialSource: "https://cloud.google.com/vertex-ai/docs/featurestore/overview"
          },
          {
            question: "What does inference mean in an ML or LLM context?",
            answer: "Inference is the process of using a trained model to make predictions or generate outputs based on new, unseen data. In LLMs, inference refers to generating text or answers from a prompt.",
            officialSource: "https://cloud.google.com/vertex-ai/docs/predictions/overview"
          },
          {
            question: "What is a foundation model and why is it fundamental to GenAI?",
            answer: "A foundation model is a large, pre-trained model that serves as a base for a wide range of downstream tasks. It is fundamental to GenAI because it provides general capabilities that can be adapted to specific applications through fine-tuning or prompting.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview"
          },
          {
            question: "What is a Large Language Model and what is it trained on?",
            answer: "A Large Language Model (LLM) is a machine learning model trained on vast amounts of textual data to learn linguistic patterns, semantic relationships, and syntax. LLMs are designed to understand and generate natural language, adapting to multiple tasks without domain-specific training.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview"
          },
          {
            question: "What do tokens represent and why is token capacity important?",
            answer: "Tokens are the minimal units of text (words, subwords, or characters) processed by the model. Token capacity defines the maximum amount of text the model can handle in input and output; exceeding this limit leads to context loss or generation errors.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview"
          },
          {
            question: "What is prompt tuning and how does it differ from fine-tuning?",
            answer: "Prompt tuning involves optimizing the input prompts to guide the model's output, while fine-tuning adjusts the model's internal parameters using additional training data. Prompt tuning is less resource-intensive and does not require retraining the model.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies"
          }
        ],
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
        studyQA: [
          {
            question: "What is the main difference between Gemini and Gemma?",
            answer: "Gemini is a proprietary, managed model accessible via API on Google Cloud, ideal for ready-to-use, scalable solutions. Gemma is open-weight, allows self-hosting and customization, but requires infrastructure management and attention to compliance and licensing.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/gemini"
          }
        ],
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
        studyQA: [
          {
            question: "What is zero-shot prompting?",
            answer: "Zero-shot prompting is a technique where the model is given a task without any example. It is suitable for simple tasks where the model can generalize from its pre-training.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies"
          },
          {
            question: "What is few-shot prompting and when is it preferable?",
            answer: "Few-shot prompting involves providing the model with a few examples to guide its output. It is preferable when you need consistent formatting or when the task is ambiguous without context.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies"
          },
          {
            question: "What is chaining and why is it useful in complex workflows?",
            answer: "Chaining refers to the sequential use of multiple prompts, where the output of one prompt becomes the input for the next. This is useful for decomposing complex tasks into manageable steps.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies"
          },
          {
            question: "What is Chain of Thought prompting and when should it be used?",
            answer: "Chain of Thought prompting encourages the model to reason step-by-step, making it suitable for tasks that require logical reasoning or multi-step problem solving.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies"
          }
        ],
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
        id: "overview",
        title: "Overview",
        studyQA: [
          {
            question: "What is Model Garden in Vertex AI?",
            answer: "Model Garden is a curated collection of Google and third-party AI models available in Vertex AI, allowing users to discover, evaluate, and deploy models for various use cases without building from scratch.",
            officialSource: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform"
          },
          {
            question: "What is Google Agentspace?",
            answer: "Google Agentspace is a centralized platform for managing and deploying AI agents that interact with enterprise data and systems, enabling employees to access information and automate tasks securely.",
            officialSource: "https://cloud.google.com/agentspace"
          },
          {
            question: "What is NotebookLM and what is it designed for?",
            answer: "NotebookLM is an AI-first notebook that grounds responses in your uploaded documents, designed for research, summarization, and finding connections in your materials.",
            officialSource: "https://notebooklm.google/"
          },
          {
            question: "How does Gemini integrate with Google Workspace?",
            answer: "Gemini integrates with Google Workspace by providing AI-powered features such as smart compose, summarization, and content generation across Gmail, Docs, Sheets, and other Workspace apps.",
            officialSource: "https://cloud.google.com/gemini-for-workspace"
          },
          {
            question: "What is the difference between standard Gemini and a Custom Gem in Google Workspace?",
            answer: "Standard Gemini provides general AI features, while a Custom Gem is tailored to specific workflows or domains, allowing organizations to extend Gemini's capabilities for unique requirements.",
            officialSource: "https://cloud.google.com/gemini-for-workspace"
          },
          {
            question: "How does Google Vids use GenAI?",
            answer: "Google Vids leverages GenAI to help users create, edit, and enhance videos by generating scripts, scenes, and visual content based on user input.",
            officialSource: "https://workspaceupdates.googleblog.com/2024/04/google-vids-ai-video-app.html"
          }
        ]
      },
      {
        id: "models",
        title: "Models",
        studyQA: [
          {
            question: "What is Model Garden in Vertex AI?",
            answer: "Model Garden is a curated collection of Google and third-party AI models available in Vertex AI, allowing users to discover, evaluate, and deploy models for various use cases without building from scratch.",
            officialSource: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform"
          },
          {
            question: "What is the main difference between Gemini and Gemma?",
            answer: "Gemini is a proprietary, managed model accessible via API on Google Cloud, ideal for ready-to-use, scalable solutions. Gemma is open-weight, allows self-hosting and customization, but requires infrastructure management and attention to compliance and licensing.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/gemini"
          },
          {
            question: "What is the difference between Imagen and Veo?",
            answer: "Imagen is a text-to-image generation model, while Veo is designed for text-to-video generation. Imagen creates photorealistic images from text, Veo generates videos from text or other inputs.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview"
          },
          {
            question: "What does it mean for a Google model to be multimodal?",
            answer: "A multimodal model can process and generate multiple types of data, such as text, images, audio, and video, enabling more flexible and comprehensive AI applications.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/gemini"
          }
        ],
        concepts: [],
        examFocus: "Know the differences between model types and when to use each. Exam tests model selection for specific tasks.",
        traps: [],
        officialDocs: [
          { title: "Model Garden", url: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform" },
          { title: "Gemini models", url: "https://cloud.google.com/vertex-ai/generative-ai/docs/model-reference/gemini" },
          { title: "Imagen overview", url: "https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview" }
        ]
      },
      {
        id: "engagement-suite",
                          title: "Engagement Suite",
                          studyQA: [
                            {
                              question: "What is Agent Assist and in what context is it used?",
                              answer: "Agent Assist is a Google Cloud solution that provides real-time support to contact center agents by suggesting responses, summarizing conversations, and surfacing relevant knowledge, improving efficiency and customer experience.",
                              officialSource: "https://cloud.google.com/agent-assist/docs/overview"
                            },
                            {
                              question: "How is GenAI used for summarization in contact centers?",
                              answer: "GenAI is used to automatically summarize customer interactions, providing agents with concise overviews of conversations, which helps in faster resolution and better customer service.",
                              officialSource: "https://cloud.google.com/agent-assist/docs/summarization"
                            },
                            {
                              question: "What is Knowledge Assist and what value does it bring to agents?",
                              answer: "Knowledge Assist surfaces relevant articles and information from knowledge bases in real time, enabling agents to quickly find accurate answers and improve first-contact resolution.",
                              officialSource: "https://cloud.google.com/agent-assist/docs/knowledge-assist"
                            },
                            {
                              question: "What is Smart Reply and what problem does it solve?",
                              answer: "Smart Reply suggests contextually appropriate responses to agents during customer interactions, reducing response time and improving consistency.",
                              officialSource: "https://cloud.google.com/agent-assist/docs/smart-reply"
                            },
                            {
                              question: "What are conversational agents?",
                              answer: "Conversational agents are AI systems designed to interact with users in natural language, handling tasks such as answering questions, providing recommendations, or completing transactions.",
                              officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview"
                            },
                            {
                              question: "What is the purpose of the conversational agents simulator?",
                              answer: "The simulator allows developers to test and refine conversational agent behavior in a controlled environment before deploying to production.",
                              officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview"
                            },
                            {
                              question: "What is Conversational Insights and what type of insights does it provide?",
                              answer: "Conversational Insights analyzes interactions to provide actionable data on customer sentiment, agent performance, and conversation trends, supporting continuous improvement.",
                              officialSource: "https://cloud.google.com/agent-assist/docs/insights"
                            },
                            {
                              question: "What is Google Cloud Contact Center as a Service (CCaaS)?",
                              answer: "Google Cloud CCaaS is a cloud-based platform that unifies communication channels and integrates AI-powered tools to enhance customer support operations at scale.",
                              officialSource: "https://cloud.google.com/solutions/contact-center"
                            }
                          ],
                          concepts: [],
                          examFocus: "Understand the components and value of the Engagement Suite. Exam tests ability to select the right tool for contact center scenarios.",
                          traps: [],
                          officialDocs: [
                            { title: "Agent Assist overview", url: "https://cloud.google.com/agent-assist/docs/overview" },
                            { title: "Contact Center AI", url: "https://cloud.google.com/solutions/contact-center" }
                          ]
                        },
                        {
                          id: "agentspace",
                          title: "Agentspace",
                          studyQA: [
                            {
                              question: "What is Google Agentspace?",
                              answer: "Google Agentspace is a centralized platform for managing and deploying AI agents that interact with enterprise data and systems, enabling employees to access information and automate tasks securely.",
                              officialSource: "https://cloud.google.com/agentspace"
                            },
                            {
                              question: "What is NotebookLM and what is it designed for?",
                              answer: "NotebookLM is an AI-first notebook that grounds responses in your uploaded documents, designed for research, summarization, and finding connections in your materials.",
                              officialSource: "https://notebooklm.google/"
                            },
                            {
                              question: "When is it most effective to use NotebookLM?",
                              answer: "NotebookLM is most effective when you need to analyze, summarize, and connect information across multiple documents, such as for research or report preparation.",
                              officialSource: "https://notebooklm.google/"
                            }
                          ],
                          concepts: [],
                          examFocus: "Know the use cases for Agentspace and NotebookLM. Exam tests ability to select the right tool for document and knowledge management.",
                          traps: [],
                          officialDocs: [
                            { title: "Agentspace", url: "https://cloud.google.com/agentspace" },
                            { title: "NotebookLM", url: "https://notebooklm.google/" }
                          ]
                        },
                        {
                          id: "gemini-workspace",
                          title: "Gemini with Google Workspace",
                          studyQA: [
                            {
                              question: "How does Gemini integrate with Google Workspace?",
                              answer: "Gemini integrates with Google Workspace by providing AI-powered features such as smart compose, summarization, and content generation across Gmail, Docs, Sheets, and other Workspace apps.",
                              officialSource: "https://cloud.google.com/gemini-for-workspace"
                            },
                            {
                              question: "What are Gemini Gems?",
                              answer: "Gemini Gems are custom AI-powered workflows or assistants built within Google Workspace to automate tasks, answer questions, or provide recommendations tailored to specific business needs.",
                              officialSource: "https://cloud.google.com/gemini-for-workspace"
                            },
                            {
                              question: "What is the difference between standard Gemini and a Custom Gem in Google Workspace?",
                              answer: "Standard Gemini provides general AI features, while a Custom Gem is tailored to specific workflows or domains, allowing organizations to extend Gemini's capabilities for unique requirements.",
                              officialSource: "https://cloud.google.com/gemini-for-workspace"
                            },
                            {
                              question: "How does Google Vids use GenAI?",
                              answer: "Google Vids leverages GenAI to help users create, edit, and enhance videos by generating scripts, scenes, and visual content based on user input.",
                              officialSource: "https://workspaceupdates.googleblog.com/2024/04/google-vids-ai-video-app.html"
                            }
                          ],
                          concepts: [],
                          examFocus: "Understand Gemini's integration and customization in Workspace. Exam tests ability to distinguish between standard and custom AI workflows.",
                          traps: [],
                          officialDocs: [
                            { title: "Gemini for Workspace", url: "https://cloud.google.com/gemini-for-workspace" }
                          ]
                        },
                        {
                          id: "vertex-ai-studio",
                          title: "Vertex AI Studio",
                          studyQA: [
                            {
                              question: "What is the purpose of Chat mode in Vertex AI Studio?",
                              answer: "Chat mode in Vertex AI Studio allows users to interact with generative models conversationally, test prompts, and prototype chat-based applications.",
                              officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal"
                            },
                            {
                              question: "What is the Image section of Vertex AI Studio used for?",
                              answer: "The Image section is used to generate, edit, and experiment with images using GenAI models, supporting creative and design workflows.",
                              officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview"
                            },
                            {
                              question: "What is the role of the Video section in Vertex AI Studio?",
                              answer: "The Video section enables users to generate and manipulate video content using GenAI, supporting tasks like video creation and editing.",
                              officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview"
                            },
                            {
                              question: "What does the Music section allow you to do?",
                              answer: "The Music section allows users to generate and experiment with music and audio content using GenAI models.",
                              officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/overview"
                            },
                            {
                              question: "What use cases does the Speech section cover?",
                              answer: "The Speech section covers use cases such as speech-to-text, text-to-speech, and audio content generation, enabling voice-driven applications.",
                              officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/overview"
                            },
                            {
                              question: "What does Live mode enable in Vertex AI Studio?",
                              answer: "Live mode enables real-time interaction and testing of GenAI models, supporting rapid prototyping and deployment of live applications.",
                              officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal"
                            }
                          ],
                          concepts: [],
                          examFocus: "Know the capabilities of each section in Vertex AI Studio. Exam tests ability to select the right tool for prototyping and content creation.",
                          traps: [],
                          officialDocs: [
                            { title: "Vertex AI Studio", url: "https://cloud.google.com/vertex-ai/generative-ai/docs/start/quickstarts/quickstart-multimodal" }
                          ]
                        },
                        {
                          id: "agent-builder",
                          title: "Agent Builder",
                          studyQA: [
                            {
                              question: "What is the Agent Garden?",
                              answer: "Agent Garden is a collection of pre-built and community-contributed agents in Vertex AI Agent Builder, allowing users to discover, test, and deploy agents for various use cases.",
                              officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview"
                            },
                            {
                              question: "What is the Agent-to-Agent (A2A) architecture?",
                              answer: "Agent-to-Agent (A2A) architecture enables multiple agents to collaborate and communicate, orchestrating complex workflows and tasks across different domains.",
                              officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview"
                            },
                            {
                              question: "What is the purpose of Agent-to-Agent example code?",
                              answer: "Agent-to-Agent example code demonstrates how to implement communication and collaboration between agents, serving as a reference for building multi-agent solutions.",
                              officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview"
                            }
                          ],
                          concepts: [],
                          examFocus: "Understand the features and use cases of Agent Builder. Exam tests ability to leverage pre-built agents and design multi-agent workflows.",
                          traps: [],
                          officialDocs: [
                            { title: "Agent Builder overview", url: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview" }
                          ]
                        },
                  {
                    id: "security",
                    title: "Security",
                    studyQA: [
                      {
                        question: "Why must security be considered at every stage of the ML lifecycle?",
                        answer: "Security must be considered at every stage of the ML lifecycle to protect data, models, and infrastructure from threats such as data leakage, model theft, and adversarial attacks. Proactive security ensures compliance, privacy, and trust in AI systems.",
                        officialSource: "https://cloud.google.com/security/ai"
                      },
                      {
                        question: "What is the purpose of Google's Secure AI Framework (SAIF)?",
                        answer: "Google's Secure AI Framework (SAIF) provides guidelines and best practices to help organizations build, deploy, and maintain secure AI systems, addressing risks such as data poisoning, model theft, and prompt injection.",
                        officialSource: "https://cloud.google.com/security/ai"
                      }
                    ],
                    concepts: [],
                    examFocus: "Understand the importance of security and the role of SAIF. Exam tests awareness of AI-specific risks and mitigation strategies.",
                    traps: [],
                    officialDocs: [
                      { title: "Secure AI Framework (SAIF)", url: "https://cloud.google.com/security/ai" }
                    ]
                  },
                  {
                    id: "vertex-search-grounding",
                    title: "Vertex Search & Grounding",
                    studyQA: [
                      {
                        question: "What is Retrieval-Augmented Generation (RAG) and what problem does it solve?",
                        answer: "Retrieval-Augmented Generation (RAG) is a technique that combines information retrieval with generative models to provide up-to-date, contextually relevant answers by incorporating external data sources at inference time. It solves the problem of outdated or incomplete model knowledge.",
                        officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview"
                      },
                      {
                        question: "What is Vertex AI Search and what is it used for?",
                        answer: "Vertex AI Search is a Google Cloud service that enables enterprise search across structured and unstructured data, supporting use cases like knowledge management, customer support, and grounding GenAI responses in enterprise data.",
                        officialSource: "https://cloud.google.com/vertex-ai/docs/search/overview"
                      },
                      {
                        question: "What does 'grounding' mean in a GenAI context?",
                        answer: "In GenAI, 'grounding' means connecting model responses to authoritative, real-world data sources to improve accuracy, reliability, and trustworthiness of generated outputs.",
                        officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview"
                      },
                      {
                        question: "Why does using Google Search and Google Maps for grounding improve answer reliability?",
                        answer: "Using Google Search and Maps for grounding allows GenAI models to reference up-to-date, authoritative information, reducing hallucinations and increasing the factual accuracy of responses.",
                        officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview"
                      },
                      {
                        question: "How does Vertex AI Search support enterprise grounding?",
                        answer: "Vertex AI Search enables enterprise grounding by integrating with internal data sources, allowing GenAI models to cite and use company-specific knowledge for more accurate and relevant responses.",
                        officialSource: "https://cloud.google.com/vertex-ai/docs/search/overview"
                      }
                    ],
                    concepts: [],
                    examFocus: "Know when to use RAG, grounding, and Vertex AI Search. Exam tests ability to select the right approach for data freshness and reliability.",
                    traps: [],
                    officialDocs: [
                      { title: "Grounding overview", url: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview" },
                      { title: "Vertex AI Search overview", url: "https://cloud.google.com/vertex-ai/docs/search/overview" }
                    ]
                  },
            {
              id: "hardware-compute",
              title: "Hardware & Compute",
              studyQA: [
                {
                  question: "What are TPUs and what workloads are they optimized for?",
                  answer: "TPUs (Tensor Processing Units) are custom accelerators developed by Google for high-performance machine learning workloads, especially deep learning and large-scale training and inference. They are optimized for tensor operations and are widely used for training and serving large models.",
                  officialSource: "https://cloud.google.com/tpu/docs/tpus"
                },
                {
                  question: "What are iGPUs and how do they differ from dedicated GPUs?",
                  answer: "iGPUs (integrated GPUs) are graphics processors built into the CPU, sharing memory with the main processor. Dedicated GPUs are separate hardware components with their own memory, offering significantly higher performance for AI and ML workloads.",
                  officialSource: "https://cloud.google.com/vertex-ai/docs/general/ml-use-cases"
                },
                {
                  question: "Why are GPUs fundamental for training AI models?",
                  answer: "GPUs (Graphics Processing Units) are fundamental for AI model training because they can perform parallel computations on large datasets, accelerating the training of deep learning models compared to CPUs.",
                  officialSource: "https://cloud.google.com/vertex-ai/docs/general/ml-use-cases"
                },
                {
                  question: "What is CUDA and what role does it play in using GPUs?",
                  answer: "CUDA is a parallel computing platform and API developed by NVIDIA that allows developers to use NVIDIA GPUs for general purpose processing, including machine learning and deep learning workloads.",
                  officialSource: "https://developer.nvidia.com/cuda-zone"
                }
              ],
              concepts: [],
              examFocus: "Understand the differences and use cases for each hardware type. Exam tests when to use TPUs, GPUs, or CPUs for different ML workloads.",
              traps: [],
              officialDocs: [
                { title: "TPU documentation", url: "https://cloud.google.com/tpu/docs/tpus" },
                { title: "Vertex AI ML use cases", url: "https://cloud.google.com/vertex-ai/docs/general/ml-use-cases" }
              ]
            },
            {
              id: "training-data",
              title: "Training & Data",
              studyQA: [
                {
                  question: "What is data labeling and why is it important in supervised learning?",
                  answer: "Data labeling is the process of annotating data with meaningful tags or labels, which is essential for supervised learning as it enables models to learn the relationship between input data and the correct output.",
                  officialSource: "https://cloud.google.com/vertex-ai/data-labeling/docs/overview"
                },
                {
                  question: "What is fine-tuning of an LLM and when is it necessary?",
                  answer: "Fine-tuning is the process of further training a pre-trained LLM on a specific dataset to adapt it to a particular task or domain. It is necessary when the base model does not perform adequately on specialized tasks or data.",
                  officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/models/tune-models"
                },
                {
                  question: "What is unstructured data?",
                  answer: "Unstructured data refers to information that does not have a predefined data model or organization, such as text, images, audio, and video. GenAI models are particularly effective at processing unstructured data.",
                  officialSource: "https://cloud.google.com/vertex-ai/docs/featurestore/overview"
                },
                {
                  question: "What are semi-structured data?",
                  answer: "Semi-structured data have some organizational properties but do not conform to a rigid structure, such as JSON, XML, or log files. They are more flexible than structured data but easier to process than unstructured data.",
                  officialSource: "https://cloud.google.com/vertex-ai/docs/featurestore/overview"
                },
                {
                  question: "What is structured data and where is it typically used?",
                  answer: "Structured data is highly organized and formatted in a way that is easily searchable, such as in relational databases and spreadsheets. It is typically used in traditional analytics and business intelligence applications.",
                  officialSource: "https://cloud.google.com/vertex-ai/docs/featurestore/overview"
                }
              ],
              concepts: [],
              examFocus: "Know the differences between data types and when to use each. Exam tests data preparation and selection for ML projects.",
              traps: [],
              officialDocs: [
                { title: "Data labeling overview", url: "https://cloud.google.com/vertex-ai/data-labeling/docs/overview" },
                { title: "Feature Store overview", url: "https://cloud.google.com/vertex-ai/docs/featurestore/overview" }
              ]
            },
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
        id: "overview",
        title: "Overview",
        studyQA: [
          {
            question: "What is prompt tuning and how does it differ from fine-tuning?",
            answer: "Prompt tuning involves optimizing the input prompts to guide the model's output, while fine-tuning adjusts the model's internal parameters using additional training data. Prompt tuning is less resource-intensive and does not require retraining the model.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies"
          },
          {
            question: "What is zero-shot prompting?",
            answer: "Zero-shot prompting is a technique where the model is given a task without any example. It is suitable for simple tasks where the model can generalize from its pre-training.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies"
          },
          {
            question: "What is few-shot prompting and when is it preferable?",
            answer: "Few-shot prompting involves providing the model with a few examples to guide its output. It is preferable when you need consistent formatting or when the task is ambiguous without context.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies"
          },
          {
            question: "What is chaining and why is it useful in complex workflows?",
            answer: "Chaining refers to the sequential use of multiple prompts, where the output of one prompt becomes the input for the next. This is useful for decomposing complex tasks into manageable steps.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies"
          },
          {
            question: "What is Chain of Thought prompting and when should it be used?",
            answer: "Chain of Thought prompting encourages the model to reason step-by-step, making it suitable for tasks that require logical reasoning or multi-step problem solving.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies"
          }
        ]
      },
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
      }
    ],
  },
  {
    id: "business-strategies",
    title: "Business Strategies for GenAI Solutions",
    weight: 15,
    description: "ROI, governance, responsible AI, and organizational adoption",
    topics: [
      {
        id: "overview",
        title: "Overview",
        studyQA: [
          {
            question: "What is the role of Responsible AI in business decisions?",
            answer: "Responsible AI ensures that AI systems are fair, transparent, safe, and accountable, which is critical for building trust, meeting regulatory requirements, and making ethical business decisions.",
            officialSource: "https://cloud.google.com/responsible-ai"
          },
          {
            question: "What is Human-in-the-Loop (HITL) and when is it essential?",
            answer: "Human-in-the-Loop (HITL) refers to incorporating human oversight and intervention in AI systems, which is essential for high-stakes decisions, content moderation, and applications where quality and safety are critical.",
            officialSource: "https://cloud.google.com/responsible-ai"
          },
          {
            question: "What is the importance of data quality in GenAI projects?",
            answer: "Data quality directly impacts the performance and reliability of GenAI models. High-quality, well-governed data ensures accurate, fair, and robust AI outputs.",
            officialSource: "https://cloud.google.com/vertex-ai/docs/featurestore/overview"
          },
          {
            question: "What are the main cost and performance tradeoffs in GenAI solutions?",
            answer: "Cost and performance tradeoffs involve balancing model size, latency, and token pricing. Smaller models and batch processing reduce costs, while larger models and real-time processing increase performance but may be more expensive.",
            officialSource: "https://cloud.google.com/vertex-ai/generative-ai/pricing"
          }
        ]
      },
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
      }
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
    {
    id: "q59",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "A data analyst at a logistics company is reviewing time-series GPS and engine sensor data collected from a fleet of delivery trucks. No labels are available, but the analyst wants to detect patterns, unusual behavior, and natural groupings in the data. What type of machine learning is most appropriate?",
    options: [
      "Unsupervised learning",
      "Computer vision modeling",
      "Reinforcement learning",
      "Semi-supervised learning"
    ],
    correctIndex: 0,
    explanation:
      "Unsupervised learning is used when the dataset lacks labels and the goal is to discover hidden patterns, groupings, or anomalies. In this case, clustering or anomaly detection techniques can help identify unusual truck behavior or route performance without requiring pre-labeled data.",
    whyOthersWrong: [
      "Computer vision focuses on image data, not time-series sensor data.",
      "Reinforcement learning is based on actions and rewards, and isn't suitable for static pattern detection.",
      "Semi-supervised learning requires at least some labeled data, which is not available here.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "easy",
  },
  {
    id: "q60",
    sectionId: "google-cloud-offerings",
    topicId: "agents-applications",
    question:
      "A biomedical lab wants to reduce the manual effort spent reviewing clinical trial documents by enabling researchers to ask natural language questions and receive summarized answers. The solution should require minimal coding. What should the team use?",
    options: [
      "Use Vertex AI Agent Builder to create a custom AI agent.",
      "Use Cloud Vision API to extract images and diagrams from the research files.",
      "Use Gemini for Workspace to enable AI-powered document editing and suggestions.",
      "Use BigQuery ML to generate summaries based on word frequency patterns."
    ],
    correctIndex: 0,
    explanation:
      "Vertex AI Agent Builder enables teams to create conversational agents that can access, understand, and summarize enterprise data—such as research papers—using natural language. It's designed for low-code development and is well-suited for R&D environments.",
    whyOthersWrong: [
      "Cloud Vision API extracts visual content, not textual summaries or answers.",
      "Gemini for Workspace enhances productivity tools like Docs and Sheets, but doesn't enable custom agent creation or document querying.",
      "BigQuery ML can analyze patterns but does not generate conversational summaries or support agent workflows.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "medium",
  },
  {
    id: "q61",
    sectionId: "business-strategies",
    topicId: "data-quality",
    question:
      "A retail company's data engineer is building a generative-AI pipeline to analyze thousands of free-form customer emails and social media posts about recent product launches. The messages vary widely in length, tone, and structure. Which best classifies the message content?",
    options: [
      "Structured data",
      "Semi-structured data",
      "Unstructured data",
      "Time-series data"
    ],
    correctIndex: 2,
    explanation:
      "Free-form natural-language text doesn't follow a fixed schema: sentences vary in length, grammar, tone, and layout. Even if platform APIs add metadata (timestamps, usernames), the message body itself remains unstructured.",
    whyOthersWrong: [
      "Structured data fits neatly into predefined fields (e.g., a table with columns like region, age, rating). The messages described are not in a consistent, columnar format.",
      "Semi-structured data (e.g., JSON, XML, logs) has consistent keys/tags but flexible values. While a social post may arrive in a JSON envelope, the content you're analyzing (free-text) is still unstructured.",
      "Time-series focuses on measurements indexed by time at regular intervals (prices, sensor readings). Although messages have timestamps, their primary nature is textual content, not time-indexed measurements.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "medium",
  },
  {
    id: "q62",
    sectionId: "google-cloud-offerings",
    topicId: "security-services",
    question:
      "A data science team is deploying multiple gen AI solutions and needs a central tool to monitor vulnerabilities, misconfigurations, and threats across their cloud environment. What should they use?",
    options: [
      "Cloud Asset Inventory",
      "Identity-Aware Proxy",
      "Cloud Logging",
      "Security Command Center"
    ],
    correctIndex: 3,
    explanation:
      "Security Command Center offers a unified view of security risks, vulnerabilities, and threats across Google Cloud resources, including AI workloads. It helps ensure secure deployment and monitoring of generative AI models at scale.",
    whyOthersWrong: [
      "Cloud Asset Inventory helps track resources, not monitor security posture.",
      "Identity-Aware Proxy controls access, not overall cloud security visibility.",
      "Cloud Logging collects logs but does not provide centralized threat visibility.",
    ],
    officialDoc: "https://cloud.google.com/security-command-center/docs/concepts-security-command-center-overview",
    difficulty: "easy",
  },
  {
    id: "q63",
    sectionId: "improve-output",
    topicId: "grounding-rag",
    question:
      "A financial services company is building an AI assistant to help analysts answer client questions. It must only respond using the company's internal policy documents. What should the company implement?",
    options: [
      "Use few-shot prompting.",
      "Adjust the top-p parameter.",
      "Ground the model using their internal documents.",
      "Fine-tune with external datasets."
    ],
    correctIndex: 2,
    explanation:
      "Grounding ensures the model only pulls information from the company's internal sources, avoiding hallucinations and maintaining accuracy. This is key for compliance-sensitive industries like finance.",
    whyOthersWrong: [
      "Few-shot prompting helps with formatting, not content control.",
      "Top-p controls randomness, not data source.",
      "Fine-tuning on external data increases risk of untrusted output.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q64",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "A machine learning engineer is explaining the role of generative AI in a company meeting. She states that gen AI models are designed to create new outputs—such as text, images, or code—based on learned data patterns. What accurately describes a generative AI model?",
    options: [
      "A browser-based tool that lets users prompt and query an AI system",
      "A compliance checklist for validating ethical use of generative technologies",
      "A complex algorithm trained on vast amounts of data to learn patterns and relationships",
      "A hardware system designed to accelerate inference workloads for neural networks"
    ],
    correctIndex: 2,
    explanation:
      "A generative AI model is a type of machine learning model trained on large datasets to learn the underlying patterns in data and generate new, original outputs. It can create human-like content such as natural language, images, audio, and more using these learned representations.",
    whyOthersWrong: [
      "A browser-based tool is an interface to interact with gen AI but does not define what the model is.",
      "A compliance checklist addresses governance and responsible use but is not the definition of the model itself.",
      "While hardware accelerates model operations, it is not the model and does not describe the algorithmic nature of generative AI.",
    ],
    officialDoc: "https://cloud.google.com/ai/generative-ai",
    difficulty: "easy",
  },
  {
    id: "q65",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "A data scientist at a hospital is deploying a gen AI model to help radiologists identify anomalies in imaging results. To ensure the solution aligns with responsible AI principles and earns clinician trust, which consideration is most essential?",
    options: [
      "Allowing the model to override clinician judgment for faster decisions",
      "Optimizing the model only for novel and creative diagnoses",
      "Ensuring the system provides explanations for its recommendations",
      "Avoiding visibility into the model's internal logic to simplify compliance"
    ],
    correctIndex: 2,
    explanation:
      "In high-stakes fields like healthcare, explainability helps professionals understand and trust AI outputs. Transparent insights into how the model arrived at its suggestions are vital for ethical use, informed decision-making, and regulatory compliance.",
    whyOthersWrong: [
      "Removing human oversight can jeopardize patient safety and violates key principles of responsible AI.",
      "While creativity has value in some applications, medical AI systems must prioritize accuracy, consistency, and traceability over novelty.",
      "Hiding model logic limits accountability and contradicts industry best practices and regulations.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "medium",
  },
  {
    id: "q66",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "An AI product manager at a logistics firm is exploring the use of large language models (LLMs) to improve customer communication and automate responses to shipment queries. What is a core capability that makes LLMs suitable for this task?",
    options: [
      "LLMs are trained on vast datasets, enabling broad language and context understanding, and adaptability across many tasks.",
      "LLMs rely on small, curated datasets for better precision in domain-specific scenarios.",
      "LLMs specialize in scientific and mathematical problem solving without needing real-world examples.",
      "LLMs automatically self-optimize their outputs over time without fine-tuning or intervention."
    ],
    correctIndex: 0,
    explanation:
      "LLMs are designed to generalize across a wide range of inputs by learning from massive and diverse datasets. This gives them the ability to understand nuanced language, follow context across turns, and perform well on a variety of tasks without domain-specific fine-tuning.",
    whyOthersWrong: [
      "Small, curated datasets are useful for fine-tuning, but LLMs need broad pretraining to generalize.",
      "While LLMs can support reasoning, they do not inherently specialize in technical or mathematical problem solving.",
      "LLMs do not self-optimize; they require explicit retraining or prompting strategies to improve behavior.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview",
    difficulty: "easy",
  },
  {
    id: "q67",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "A data scientist at a retail analytics firm wants to uncover meaningful groupings in customer behavior without using predefined labels. The goal is to understand how different types of customers interact with the store across various regions and products. What type of machine learning approach best fits this scenario?",
    options: [
      "Predicting which users are likely to return items using past return data",
      "Analyzing transaction clusters to find natural segments in customer behavior",
      "Training a sentiment model using labeled product review scores",
      "Generating next-quarter revenue forecasts using past performance and ad spend"
    ],
    correctIndex: 1,
    explanation:
      "This is an example of unsupervised learning, where the system detects patterns and groups (clusters) in data without needing labeled outcomes. It is commonly used for customer segmentation, anomaly detection, and market basket analysis.",
    whyOthersWrong: [
      "Predicting return behavior based on past data is a classic supervised learning task, requiring labeled input-output pairs.",
      "Training a model on labeled review scores is supervised learning, which uses predefined categories to guide prediction.",
      "Revenue forecasting uses historical labeled data to predict future values, which falls under supervised regression models.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "medium",
  },
  {
    id: "q68",
    sectionId: "improve-output",
    topicId: "grounding-rag",
    question:
      "A data scientist at a publishing company is using an LLM to answer customer inquiries about newly released books. However, the model returns outdated information due to its training cutoff. What should the team implement to fix this issue?",
    options: [
      "RAG applies auto-labeling to newly published content for classification.",
      "RAG reduces token usage by compressing historical data into prompt templates.",
      "RAG enables the LLM to retrieve relevant and up-to-date information from knowledge sources.",
      "RAG uses feedback loops to continuously adjust the model's creativity settings."
    ],
    correctIndex: 2,
    explanation:
      "Retrieval-augmented generation (RAG) solves the knowledge cutoff limitation by retrieving recent, external documents at inference time. This allows the model to generate responses based on current, verified content instead of outdated internal knowledge.",
    whyOthersWrong: [
      "Auto-labeling helps with classification tasks but doesn't inject live data into generation.",
      "Reducing token count may improve efficiency but doesn't solve accuracy issues caused by outdated knowledge.",
      "Creativity settings like temperature do not influence factual grounding or data freshness.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q69",
    sectionId: "google-cloud-offerings",
    topicId: "agents-applications",
    question:
      "A customer support engineer is deploying tools to help live agents respond more efficiently during active support calls. The goal is to surface real-time suggestions based on conversation context. Which Google Cloud solution should be used?",
    options: [
      "Contact Center AI provides omnichannel routing and CRM integration for automated support.",
      "Conversation Insights generates post-call summaries and team-wide customer sentiment trends.",
      "Agent Assist provides real-time assistance and recommended replies during live customer conversations.",
      "Dialogflow CX is used to design and deploy virtual chatbots for self-service support."
    ],
    correctIndex: 2,
    explanation:
      "Agent Assist enhances live customer-agent interactions by delivering AI-generated suggestions, knowledge articles, and recommended responses in real time, improving efficiency and customer experience.",
    whyOthersWrong: [
      "Contact Center AI includes infrastructure and routing but does not offer real-time agent guidance.",
      "Conversation Insights focuses on analytics and summaries after interactions, not real-time help.",
      "Dialogflow CX supports virtual agent development but is not designed to assist live agents directly.",
    ],
    officialDoc: "https://cloud.google.com/solutions/contact-center",
    difficulty: "medium",
  },
  {
    id: "q70",
    sectionId: "fundamentals",
    topicId: "agents-applications",
    question:
      "A game development studio wants to help its engineers accelerate feature implementation by generating Unity or C# scripts from plain English descriptions. The AI assistant should also suggest improvements, detect bugs, and refactor code as needed. What type of agent should they use?",
    options: [
      "Workflow automation agent",
      "Language translation agent",
      "Data ingestion agent",
      "Code agent"
    ],
    correctIndex: 3,
    explanation:
      "Code agents are specialized generative AI agents designed to assist with writing, reviewing, debugging, and transforming natural language into source code. They improve developer productivity by automating coding tasks and ensuring consistency.",
    whyOthersWrong: [
      "Workflow automation agents handle process coordination or repetitive task execution rather than assisting with software development tasks.",
      "Language translation agents are used to convert content between human languages, not programming languages or development workflows.",
      "Data ingestion agents focus on collecting, formatting, and preparing data—not working with or generating code.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "easy",
  },
  {
    id: "q71",
    sectionId: "improve-output",
    topicId: "prompting-techniques",
    question:
      "A retail company wants to ensure its generative AI assistant consistently communicates in the company's brand voice. Which technique would best help enforce alignment with the company's tone and communication style?",
    options: [
      "Switching to an open-source LLM with no prebuilt personality",
      "Embedding product catalog data into the model weights",
      "Increasing the top-k sampling value during generation",
      "Role prompting"
    ],
    correctIndex: 3,
    explanation:
      "Role prompting guides the model to adopt a specific persona or communication style by explicitly instructing it to respond as a defined role (e.g., a brand representative). This technique helps align output tone and behavior with the company's voice.",
    whyOthersWrong: [
      "Switching models without guidance on prompt strategy won't ensure consistency in tone or compliance with brand standards.",
      "Embedding product data may improve factual accuracy but does not affect tone or voice alignment.",
      "Increasing top-k expands the randomness of responses, which risks inconsistency rather than enforcing brand alignment.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies",
    difficulty: "medium",
  },
  {
    id: "q72",
    sectionId: "google-cloud-offerings",
    topicId: "gemini-vs-gemma",
    question:
      "A marketing engineer at a digital agency is tasked with generating custom promotional videos based on input briefs that include customer segments, value props, and campaign goals. The team wants an AI model that can generate high-quality videos that align with each brief. Which model should they use?",
    options: [
      "Imagen",
      "Gemma",
      "Gemini",
      "Veo"
    ],
    correctIndex: 3,
    explanation:
      "Veo is Google's video generation foundation model that creates high-quality, dynamic video content from text and other multimodal inputs. It supports customized and engaging video generation suitable for marketing, storytelling, and sales purposes.",
    whyOthersWrong: [
      "Imagen is designed for generating photorealistic images from text but does not support full video generation.",
      "Gemma is an open model family designed for lightweight and fine-tuned text generation tasks, not multimedia or video output.",
      "Gemini is a multimodal model suited for text, image, code, and audio tasks, but not optimized for video generation.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview",
    difficulty: "medium",
  },
  {
    id: "q73",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A machine learning engineer at a healthcare startup notices that different teams are independently training models, storing datasets in separate environments, and using inconsistent evaluation methods. The organization wants a unified platform to streamline model development, training, deployment, and monitoring. What should they adopt?",
    options: [
      "Cloud Run",
      "Gemini in Google Sheets",
      "Vertex AI",
      "Google Cloud Pub/Sub"
    ],
    correctIndex: 2,
    explanation:
      "Vertex AI offers a comprehensive platform to unify the AI lifecycle—including training, tuning, deploying, and monitoring ML models. It reduces redundancy, promotes collaboration across teams, and supports both custom and foundation models with scalable MLOps capabilities.",
    whyOthersWrong: [
      "Cloud Run is for deploying containerized applications but does not manage the full AI/ML workflow.",
      "Gemini in Google Sheets provides assistance within spreadsheets but isn't suitable for managing enterprise AI pipelines.",
      "Pub/Sub is a messaging service that supports event-driven architecture but doesn't support end-to-end AI model development and deployment.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "easy",
  },
  {
    id: "q74",
    sectionId: "improve-output",
    topicId: "sampling-parameters",
    question:
      "A marketing analyst at a media company is configuring a generative AI tool to write promotional email content. They want the language to be creative and engaging without becoming incoherent or irrelevant. Which model sampling parameter should they focus on adjusting to best balance randomness and quality?",
    options: [
      "Token penalty",
      "Stop sequence",
      "Temperature",
      "Model version"
    ],
    correctIndex: 2,
    explanation:
      "Adjusting the temperature parameter directly influences the randomness of model outputs. A moderate temperature (e.g., 0.7) encourages diverse, imaginative responses while maintaining coherence, making it ideal for creative tasks like marketing copy.",
    whyOthersWrong: [
      "Token penalty is used to discourage repetition, not to balance creativity versus coherence.",
      "Stop sequences define where the output should end but don't affect creativity or diversity of the response.",
      "Choosing a different model version might affect performance or features, but it does not specifically tune output diversity or control creativity.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/adjust-parameter-values",
    difficulty: "medium",
  },
  {
    id: "q75",
    sectionId: "fundamentals",
    topicId: "model-limitations",
    question:
      "A data analyst at a fintech firm asks a generative AI assistant for the recent funding amount of a stealth-mode startup. The model replies with a specific figure and attributes it to a major financial outlet. After checking, the analyst realizes no such funding event or article exists. What does this behavior indicate about the model?",
    options: [
      "Hallucinations",
      "Low context awareness",
      "Outdated training data",
      "Training bias"
    ],
    correctIndex: 0,
    explanation:
      "Hallucinations occur when a generative AI model fabricates plausible-sounding but false or unverifiable information. This is a known limitation of LLMs, especially when answering confidently about topics not grounded in its training data or external sources.",
    whyOthersWrong: [
      "Low context awareness would lead to vague or irrelevant answers, not confidently false ones.",
      "Outdated training data refers to the knowledge cutoff issue, but this scenario is about invented information rather than missing it.",
      "Training bias refers to systematic skew or prejudice in the model's output, not the generation of false facts.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "medium",
  },
  {
    id: "q76",
    sectionId: "fundamentals",
    topicId: "agents-applications",
    question:
      "An education-focused startup hires an AI engineer to build an intelligent tutoring system that can evaluate learners' understanding, deliver adaptive exercises, guide lesson progression, and monitor performance analytics. Which type of AI solution is most appropriate to power this experience?",
    options: [
      "Customized learning agent",
      "Basic rule-based chatbot embedded in a learning portal",
      "Large-scale text summarization model",
      "Pretrained model used for generalized content classification"
    ],
    correctIndex: 0,
    explanation:
      "A customized learning agent integrates multiple capabilities—such as knowledge assessment, lesson sequencing, personalized recommendations, and real-time feedback—making it ideal for adaptive, AI-powered education platforms. These agents are tailored to respond dynamically based on user interaction and performance.",
    whyOthersWrong: [
      "Rule-based chatbots provide limited functionality and do not support deep personalization or autonomous lesson delivery.",
      "While summarization models are useful for condensing text, they lack the interactive, adaptive logic needed for personalized instruction and tracking.",
      "A generalized content classification model can label content, but it cannot drive the end-to-end learning flow or assess student progress effectively.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "medium",
  },
  {
    id: "q77",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "A retail enterprise is building an AI-powered virtual assistant that supports product troubleshooting and complex account inquiries for both new and returning customers. The assistant must remember prior parts of the conversation to provide accurate and coherent responses. Which capability should the development team prioritize when selecting a foundation model?",
    options: [
      "The model's ability to synthesize tabular data",
      "The model's compatibility with image captioning tasks",
      "The model's context window size",
      "The model's licensing terms for commercial resale"
    ],
    correctIndex: 2,
    explanation:
      "A model's context window size determines how much information it can retain and reason over in a single interaction. For complex and multi-turn conversations like customer support, a larger context window enables the model to track prior queries and responses for more coherent dialogue.",
    whyOthersWrong: [
      "Tabular data synthesis is more relevant to analytics and structured data processing, not chatbot comprehension.",
      "Image captioning is useful for vision-related applications, not text-based customer service interactions.",
      "Licensing terms affect usage rights but are not a functional capability tied to a chatbot's ability to understand customer queries.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview",
    difficulty: "medium",
  },
  {
    id: "q78",
    sectionId: "improve-output",
    topicId: "prompting-techniques",
    question:
      "A banking app team is building a virtual assistant that helps users manage transactions and view account history. The assistant must reference earlier parts of the conversation to respond accurately. What prompting technique should the team apply?",
    options: [
      "Use temperature tuning to keep responses more balanced and consistent.",
      "Use keyword tagging to match user intents with static templates.",
      "Use zero-shot prompting to minimize training data needs.",
      "Use prompt chaining to maintain and pass context between turns."
    ],
    correctIndex: 3,
    explanation:
      "Prompt chaining links multiple prompts together, allowing the model to retain context from previous interactions. This technique is essential in scenarios like banking or customer support where earlier conversation history must influence later responses.",
    whyOthersWrong: [
      "Temperature tuning adjusts randomness, not conversational memory.",
      "Keyword tagging helps with intent recognition but does not maintain dialogue continuity.",
      "Zero-shot prompting gives quick answers without prior examples but doesn't preserve context.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies",
    difficulty: "medium",
  },
  {
    id: "q79",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "A data analyst at a logistics company is rolling out a generative AI tool that automatically recommends delivery routes based on historical performance and real-time factors. To maintain user trust in the AI's decisions, which responsible AI principle should be prioritized?",
    options: [
      "Reducing processing time by omitting context for each recommendation",
      "Hiding decision logic to protect internal algorithms from users",
      "Providing transparency and explainability about how decisions are made",
      "Collecting excess route data to improve model creativity"
    ],
    correctIndex: 2,
    explanation:
      "Transparency and explainability are critical for building trust in automated systems, especially when they influence real-world operations. By helping users understand how decisions are made, organizations can ensure accountability and foster confidence in AI outputs.",
    whyOthersWrong: [
      "Prioritizing speed at the expense of clarity can erode trust and introduce operational risk.",
      "Hiding decision logic contradicts responsible AI principles and limits user oversight.",
      "Gathering excessive or irrelevant data can raise privacy concerns and doesn't inherently improve user trust or model output quality.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "medium",
  },
  {
    id: "q80",
    sectionId: "google-cloud-offerings",
    topicId: "gemini-vs-gemma",
    question:
      "A product designer at a consumer electronics company needs to generate realistic marketing images of new concept devices before they are physically manufactured. The visuals must be photorealistic and generated directly from product descriptions. What foundation model should be used?",
    options: [
      "Gemma",
      "Chirp",
      "Imagen",
      "Gemini"
    ],
    correctIndex: 2,
    explanation:
      "Imagen is Google's foundation model for high-quality text-to-image generation. It is optimized for producing photorealistic visuals from detailed descriptions, making it ideal for industries like design, advertising, and media where visual content needs to be produced at scale and low cost.",
    whyOthersWrong: [
      "Gemma is a lightweight open-source LLM used for text generation, not image creation.",
      "Chirp is designed for speech-to-text and audio processing tasks.",
      "Gemini is a multimodal foundation model but is not specialized for generating photorealistic images.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview",
    difficulty: "easy",
  },
  {
    id: "q81",
    sectionId: "google-cloud-offerings",
    topicId: "gemini-vs-gemma",
    question:
      "A freelance AI engineer is building a multilingual chatbot on a personal laptop and needs a high-performance open-source model that can be fine-tuned locally. The solution must offer strong language understanding while being lightweight enough for limited compute environments. Which model family should they use?",
    options: [
      "Gemini",
      "Imagen",
      "Gemma",
      "Chirp"
    ],
    correctIndex: 2,
    explanation:
      "Gemma is Google's open-source LLM family designed for local fine-tuning and deployment. It is lightweight, optimized for performance on limited hardware, and ideal for developers or researchers building prototypes without needing large cloud resources.",
    whyOthersWrong: [
      "Gemini is a powerful, multimodal foundation model but is not open-source or lightweight for local development.",
      "Imagen is for text-to-image generation, not natural language understanding or chatbot development.",
      "Chirp is related to speech-to-text tasks, not language generation or chatbot use cases.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/open-models/use-gemma",
    difficulty: "easy",
  },
  {
    id: "q82",
    sectionId: "fundamentals",
    topicId: "agents-applications",
    question:
      "A financial services firm is developing a generative AI agent to handle regulatory reporting. The agent must access internal systems, analyze data, and take action based on compliance rules. What is the core function of an AI agent in this system?",
    options: [
      "To host and scale foundation models for faster data processing.",
      "To act as a data lake for storing structured and unstructured business information.",
      "To serve as a conversational interface between users and the AI model.",
      "To be a smart system that can analyze, use tools, and make decisions to reach goals."
    ],
    correctIndex: 3,
    explanation:
      "In generative AI systems, agents are autonomous entities that combine reasoning, planning, and tool use to carry out tasks toward specific goals. They can interact with external tools and systems, making them ideal for automating complex workflows like compliance checks.",
    whyOthersWrong: [
      "Model hosting is a function of infrastructure, not agents.",
      "Data lakes store information but do not include intelligence or decision-making.",
      "A conversational interface allows interaction but lacks autonomous decision-making.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "medium",
  },
  {
    id: "q83",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "A healthcare startup is deploying a generative AI tool to assist clinicians by summarizing patient records and suggesting follow-up actions. To support responsible AI use, what should the team prioritize to ensure accountability in decision-making?",
    options: [
      "Ensure the model's internal logic remains confidential to prevent user influence",
      "Implement explainability features that help users understand how the system reaches its conclusions",
      "Allow the model to generate suggestions autonomously without requiring human validation",
      "Focus exclusively on generating innovative summaries, regardless of factual accuracy"
    ],
    correctIndex: 1,
    explanation:
      "Explainability is a key pillar of responsible AI and accountability. It allows users—especially in regulated domains like healthcare—to understand the reasoning behind AI outputs, enabling better trust, oversight, and informed decision-making.",
    whyOthersWrong: [
      "Opaqueness in AI decision-making undermines trust and fails to meet accountability or transparency standards.",
      "Full automation without human oversight can lead to unsafe or unaccountable outcomes, especially in sensitive fields.",
      "Prioritizing creativity without ensuring factual correctness is risky and irresponsible in use cases involving real-world consequences.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "medium",
  },
  {
    id: "q84",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A data engineer at a transportation company wants employees to easily access insights spread across dispatch logs, maintenance reports, and customer feedback tools. Currently, staff must manually check each system, slowing response times. What should the engineer implement to unify data access across platforms using gen AI?",
    options: [
      "Google Cloud Vision",
      "Gemini Code Assist",
      "Gemini for Google Workspace",
      "Vertex AI Search"
    ],
    correctIndex: 3,
    explanation:
      "Vertex AI Search enables organizations to connect and index multiple internal data sources and use generative AI to deliver relevant, context-aware search results across systems. It improves operational efficiency by offering a central access point for structured and unstructured information.",
    whyOthersWrong: [
      "Google Cloud Vision is used for image analysis and doesn't facilitate cross-system text-based data access.",
      "Gemini Code Assist is intended for code generation and developer support, not enterprise search integration.",
      "Gemini for Google Workspace improves productivity within Google apps but isn't designed to unify custom enterprise systems.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/search/overview",
    difficulty: "medium",
  },
  {
    id: "q85",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A support administrator at a telecom provider is tasked with improving customer service operations across live chat, email, and voice channels. The company wants to modernize its contact center using AI to ensure secure, seamless, and scalable interactions across all support methods. What Google Cloud offering should they use?",
    options: [
      "Vertex AI Platform",
      "Dialogflow CX",
      "Google Cloud Contact Center as a Service",
      "BigQuery Studio"
    ],
    correctIndex: 2,
    explanation:
      "Google Cloud Contact Center AI (CCAI) offers a unified solution that integrates multiple communication channels with generative AI-powered automation. It enables secure, scalable, and consistent customer support while reducing operational overhead.",
    whyOthersWrong: [
      "Vertex AI Platform is focused on the full ML lifecycle but is not designed for contact center operations or communication integration.",
      "Dialogflow CX powers conversational interfaces but doesn't offer full contact center capabilities like telephony integration or omnichannel support.",
      "BigQuery Studio is for data analytics and AI/ML development, not customer communication workflows.",
    ],
    officialDoc: "https://cloud.google.com/solutions/contact-center",
    difficulty: "medium",
  },
  {
    id: "q86",
    sectionId: "business-strategies",
    topicId: "cost-optimization",
    question:
      "An e-commerce data analyst proposes using multimodal search features—such as visual, voice, and text input—to help customers find products more easily. What is a primary business outcome of this strategy?",
    options: [
      "Improved customer engagement and product discovery leading to increased satisfaction and potential sales.",
      "Reduced time spent by employees tagging product metadata for SEO optimization.",
      "Enhanced backend integration between inventory systems and product catalogs.",
      "Improved fraud detection and prevention for high-value product transactions."
    ],
    correctIndex: 0,
    explanation:
      "Multimodal search enhances how users interact with the catalog, making it easier to discover relevant products through intuitive inputs. This leads to better user experience, stronger engagement, and ultimately higher conversion and sales potential.",
    whyOthersWrong: [
      "While it may reduce reliance on keywords, multimodal search is not aimed at SEO tagging optimization.",
      "Backend system integration is not directly improved by implementing multimodal search.",
      "Fraud detection is unrelated to the user-facing search experience.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/search/overview",
    difficulty: "medium",
  },
  {
    id: "q87",
    sectionId: "business-strategies",
    topicId: "human-in-the-loop",
    question:
      "A media company is using generative AI to summarize customer reviews for its video streaming service. The summaries often miss subtle humor or exaggeration, leading to misrepresentation of the reviewer's tone. What should the team do to improve the accuracy of these summaries?",
    options: [
      "Apply few-shot prompting to shorten and simplify customer feedback.",
      "Incorporate a human-in-the-loop (HITL) process to refine the model's output.",
      "Lower the top-p value to reduce the randomness of the generated summaries.",
      "Fine-tune the model on factual news articles for better summarization control."
    ],
    correctIndex: 1,
    explanation:
      "A human-in-the-loop process allows humans to review, adjust, or approve AI-generated summaries, especially when interpreting tone, sarcasm, or subjective content. This approach helps maintain content accuracy and prevent misunderstandings in emotionally or culturally nuanced situations.",
    whyOthersWrong: [
      "Few-shot prompting supports instruction clarity but doesn't correct misread tone.",
      "Lowering the top-p value may reduce variability but won't help with tone interpretation.",
      "Fine-tuning on factual news reduces generalization ability for subjective content like reviews.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "hard",
  },
  {
    id: "q88",
    sectionId: "google-cloud-offerings",
    topicId: "grounding-rag",
    question:
      "A technical team at a legal firm wants to build a generative AI assistant that answers questions by referencing their internal legal documents, trusted third-party compliance sources, and Google's knowledge base. What does Vertex AI Search enable them to do?",
    options: [
      "Generate search rankings based on law firm popularity and public sentiment.",
      "Ground LLM responses with first-party data, third-party data, and Google's knowledge graph.",
      "Index global legal case data from public legal websites to compare precedents.",
      "Surface summaries using global content trends across regulatory blogs and forums."
    ],
    correctIndex: 1,
    explanation:
      "Vertex AI Search enables grounding of generative AI output using enterprise documents (first-party), trusted partner sources (third-party), and Google's knowledge graph. This allows for accurate, context-aware answers using authoritative data.",
    whyOthersWrong: [
      "Vertex AI Search does not rank content by popularity or sentiment.",
      "Indexing public legal websites is not a core function of Vertex AI Search.",
      "Summaries generated by Vertex AI Search are grounded in configured sources, not global content trends.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/search/overview",
    difficulty: "hard",
  },
  {
    id: "q89",
    sectionId: "improve-output",
    topicId: "grounding-rag",
    question:
      "A legal tech startup deploys a generative AI assistant to help law firms answer client questions about recent case rulings. The assistant is producing outdated or incomplete answers because it lacks access to recent court documents. The team wants a solution that allows the assistant to use current legal sources without retraining the model. What approach should they take?",
    options: [
      "Model distillation",
      "Embedding visualization",
      "Retrieval-augmented generation (RAG)",
      "Data labeling"
    ],
    correctIndex: 2,
    explanation:
      "RAG combines a retrieval system with a generative model to dynamically fetch and incorporate relevant, up-to-date information at inference time. This allows the assistant to deliver more accurate and timely legal insights without retraining the base model.",
    whyOthersWrong: [
      "Model distillation is used to compress large models into smaller ones for efficiency but does not help the model access new information.",
      "Embedding visualization is used for analyzing the model's understanding of relationships in data, not for improving response relevance.",
      "Data labeling supports supervised learning tasks but does not allow live access to current external documents or databases.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q90",
    sectionId: "business-strategies",
    topicId: "data-quality",
    question:
      "A data scientist is launching a machine learning pipeline that collects live event logs from IoT devices and structured metadata from a relational database. What tools can support this data ingestion process?",
    options: [
      "Google Cloud offers services like Pub/Sub, Cloud SQL, and Cloud Storage.",
      "Document AI pipelines are ideal for real-time structured and streaming data.",
      "Gemini Advanced handles all forms of automated data intake.",
      "Vertex AI Studio is used to collect all project data types directly."
    ],
    correctIndex: 0,
    explanation:
      "Google Cloud provides scalable ingestion tools: Pub/Sub for real-time streaming, Cloud SQL for structured data, and Cloud Storage for object-based storage. These tools support different data modalities that commonly appear in ML projects.",
    whyOthersWrong: [
      "Document AI is designed for processing documents, not ingesting live or structured data.",
      "Gemini Advanced enhances productivity but doesn't handle raw data ingestion.",
      "Vertex AI Studio supports model exploration, not ingestion of diverse data formats.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "easy",
  },
  {
    id: "q91",
    sectionId: "business-strategies",
    topicId: "data-quality",
    question:
      "A data scientist at a telecommunications company is building a classifier to detect customer intent from email messages. They are working with a dataset of messages that have each been manually assigned a tag like 'Service Cancellation,' 'New Account Setup,' or 'Plan Upgrade.' What type of data are they using?",
    options: [
      "Semi-structured data",
      "Unsupervised data",
      "Synthetic data",
      "Labeled data"
    ],
    correctIndex: 3,
    explanation:
      "Labeled data refers to datasets that include input-output pairs, where each data point is annotated with the correct category or value. This is essential for training supervised learning models to learn accurate predictions.",
    whyOthersWrong: [
      "Semi-structured data includes formats like JSON or XML that have some organization but aren't fully tabular or relational; the focus here is on labeled classification.",
      "Unsupervised data lacks labels entirely, which disqualifies it for use in supervised categorization tasks.",
      "Synthetic data is artificially generated and may or may not be labeled; it doesn't describe manually tagged historical data.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "easy",
  },
  {
    id: "q92",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "A financial services company is deploying a generative AI model to assist with customer onboarding and wants to reduce the risk of prompt injection attacks and unauthorized data exposure. Which Google-recommended security strategy should they implement to protect their AI systems end-to-end?",
    options: [
      "Store model training data only in a local spreadsheet for simplicity",
      "Disable all IAM roles to avoid misconfiguration issues",
      "Adopt the Secure AI Framework (SAIF) to embed protections throughout the AI lifecycle",
      "Rely solely on rate limiting to mitigate advanced prompt manipulation"
    ],
    correctIndex: 2,
    explanation:
      "SAIF provides a structured framework for securing AI systems across the model lifecycle—from data handling and training to deployment and monitoring. It ensures proactive defenses against common threats like model manipulation, prompt injection, and data leakage.",
    whyOthersWrong: [
      "Spreadsheets lack the necessary scalability, governance, and security controls required for managing sensitive training data.",
      "Disabling IAM roles entirely removes all access control, introducing serious security risks instead of preventing them.",
      "Rate limiting alone cannot defend against nuanced AI-specific attacks like model exfiltration or adversarial prompts.",
    ],
    officialDoc: "https://cloud.google.com/security/ai",
    difficulty: "hard",
  },
  {
    id: "q93",
    sectionId: "fundamentals",
    topicId: "agents-applications",
    question:
      "An AI engineer at an edtech company is developing interactive 3D avatars for a virtual classroom. These avatars use facial expressions, voice inflection, and body language to engage with learners in real-time, responding contextually to questions and comments. What type of agent is being implemented?",
    options: [
      "Workflow automation agent",
      "Creative generation agent",
      "Conversational agent",
      "Scheduling optimization agent"
    ],
    correctIndex: 2,
    explanation:
      "Conversational agents are designed to interact with users in natural ways—using speech, text, or gestures—and are often used in environments like virtual assistants, chatbots, or immersive digital experiences. They focus on engaging in human-like dialogue and responses.",
    whyOthersWrong: [
      "Workflow automation agents are focused on handling repetitive business tasks and orchestrating backend processes, not human-like communication.",
      "Creative generation agents are used for tasks like generating images, music, or stories—not conversational interaction.",
      "Scheduling optimization agents are built for solving time or resource allocation challenges and do not simulate natural interaction.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "medium",
  },
  {
    id: "q94",
    sectionId: "google-cloud-offerings",
    topicId: "grounding-rag",
    question:
      "A system administrator is helping the HR department build an AI assistant that can answer questions about HR policies, PTO rules, and remote work procedures. These documents are frequently updated and stored in Google Cloud Storage. What is the main advantage of using RAG APIs for this use case?",
    options: [
      "They automatically group similar employee questions to reduce duplicate chatbot responses.",
      "They allow the team to analyze user behavior and improve the chatbot's personality settings.",
      "They enable the generative AI model to retrieve the most up-to-date and relevant information from the policy documents in real-time.",
      "They fine-tune the model using internal documentation to generate more personalized summaries."
    ],
    correctIndex: 2,
    explanation:
      "RAG (Retrieval-Augmented Generation) APIs let the AI assistant dynamically retrieve content from source documents at inference time. This ensures responses are based on the latest HR policies without requiring model retraining whenever documents change.",
    whyOthersWrong: [
      "Grouping questions is a post-processing or analytics feature, not a core function of RAG.",
      "Personality tuning is related to prompt design or model parameters, not retrieval.",
      "Fine-tuning is a separate and more resource-intensive process than using RAG for live document access.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q95",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A regional healthcare organization with limited technical staff wants to integrate AI into their patient support system. They hope to leverage AI capabilities without hiring a team of machine learning engineers. How does Google Cloud support such organizations in adopting AI?",
    options: [
      "By providing a comprehensive AI platform with low-code/no-code tools, pre-trained models, and easy-to-use APIs",
      "By requiring users to manually fine-tune foundation models using Python-based notebooks",
      "By offering an on-premises AI infrastructure package with custom GPU configurations",
      "By limiting AI access to certified developers with verified experience in MLOps"
    ],
    correctIndex: 0,
    explanation:
      "Google Cloud democratizes AI by offering platforms like Vertex AI and tools such as Model Garden, PaLM API, and Generative AI Studio. These solutions allow users—regardless of technical background—to build, test, and deploy AI-powered applications through accessible interfaces, pre-built models, and minimal coding.",
    whyOthersWrong: [
      "While advanced users can fine-tune models manually, this is not required for adopting AI through Google Cloud's democratized tooling.",
      "On-premises infrastructure does not align with Google Cloud's focus on scalable, cloud-native AI services.",
      "Google Cloud encourages broader participation in AI and does not restrict access to users with formal ML certifications.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "medium",
  },
  {
    id: "q96",
    sectionId: "improve-output",
    topicId: "grounding-rag",
    question:
      "A data engineer is building a chatbot for an insurance provider that needs to respond to customer questions using only verified documents like policy manuals and claims guidelines stored in Google Cloud. What approach ensures the responses stay aligned with official content?",
    options: [
      "Increase the sampling temperature to generate more expressive answers.",
      "Use one-shot prompting to structure responses based on example queries.",
      "Tune the prompt length to prioritize policy-related keywords.",
      "Use grounding to reference the company's official documents during generation."
    ],
    correctIndex: 3,
    explanation:
      "Grounding allows a generative AI model to pull from specific, trusted sources—such as internal documentation—ensuring outputs remain accurate and aligned with company policies. This avoids hallucinations and keeps responses compliant.",
    whyOthersWrong: [
      "Increasing temperature affects randomness, not content source.",
      "One-shot prompting improves structure or tone but doesn't guarantee factual grounding.",
      "Tuning prompt length or keyword priority does not restrict the source of information used in generation.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q97",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "A university admissions office deploys a generative AI tool to prioritize student applications, but reviewers find that qualified applicants are being rejected with no clear explanation. How should the team address this issue?",
    options: [
      "Increase the model's output length to include reasoning details.",
      "Apply prompt chaining to walk through the review logic step-by-step.",
      "Implement explainable gen AI policies to improve model transparency.",
      "Retrain the model using student feedback from prior admission cycles."
    ],
    correctIndex: 2,
    explanation:
      "Explainable gen AI practices ensure that stakeholders understand how AI models make decisions, especially in high-impact domains like hiring or admissions. This builds trust, identifies bias, and supports regulatory compliance.",
    whyOthersWrong: [
      "Output length affects response size but not the interpretability of decisions.",
      "Prompt chaining structures logical steps but does not guarantee transparency in complex ranking systems.",
      "Retraining may help performance but doesn't inherently address explainability or fairness.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "hard",
  },
  {
    id: "q98",
    sectionId: "google-cloud-offerings",
    topicId: "grounding-rag",
    question:
      "A retail chain wants to help employees and customers find inventory details and product specs faster across their website and internal systems. Which Google Cloud gen AI solution best supports this?",
    options: [
      "Gemini for Workspace",
      "Vertex AI Translation API",
      "Pre-built RAG with Vertex AI Search",
      "Cloud Vision API"
    ],
    correctIndex: 2,
    explanation:
      "Pre-built retrieval-augmented generation (RAG) with Vertex AI Search enhances search capabilities by grounding responses in structured and unstructured business data, improving relevance for both internal and customer queries. It's ideal for dynamic product catalogs or large knowledge bases.",
    whyOthersWrong: [
      "Gemini for Workspace enhances productivity tools, not search capabilities.",
      "Vertex AI Translation API translates content but doesn't improve search relevance.",
      "Cloud Vision API analyzes images, not text or search queries.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/search/overview",
    difficulty: "medium",
  },
  {
    id: "q99",
    sectionId: "improve-output",
    topicId: "grounding-rag",
    question:
      "A publishing startup is building a gen AI tool to summarize tech blogs and news from across the web in real time. What solution should they use to ensure summaries are timely and accurate?",
    options: [
      "Gemini Advanced with Gems",
      "Vertex AI Model Garden",
      "Grounding with Google Search",
      "AutoML Tables"
    ],
    correctIndex: 2,
    explanation:
      "Grounding with Google Search allows the model to access live, high-quality, and relevant information from across the web, making it ideal for generating accurate summaries of rapidly evolving content like blogs and news articles.",
    whyOthersWrong: [
      "Gemini Advanced focuses on productivity tasks, not live information grounding.",
      "Model Garden offers pre-trained models but not real-time data access.",
      "AutoML Tables is designed for tabular data, not text summarization or search.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q100",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A financial services company wants to empower its internal compliance analysts by giving them access to scattered regulatory documents, training materials, and internal policy updates. They need an AI-driven tool that helps them interact with these resources through natural language and custom workflows. What should they use?",
    options: [
      "Looker Studio",
      "Google Cloud Agentspace",
      "Vertex AI Model Garden",
      "Gemma"
    ],
    correctIndex: 1,
    explanation:
      "Agentspace enables organizations to build AI agents that integrate with enterprise systems and data sources, helping employees access and interact with internal information easily using natural language. This improves productivity by turning scattered knowledge into actionable insights.",
    whyOthersWrong: [
      "Looker Studio is a BI and visualization tool used to create dashboards, not AI-powered agents or conversational access to data.",
      "Vertex AI Model Garden is a model hub for selecting, testing, and fine-tuning models but doesn't provide custom agent interaction with enterprise data.",
      "Gemma is a family of lightweight open models for text generation, but it does not provide orchestration or enterprise integration features like Agentspace.",
    ],
    officialDoc: "https://cloud.google.com/agentspace",
    difficulty: "medium",
  },
  {
    id: "q101",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A data analyst at a financial services firm is preparing a market insights report based on hundreds of internal whitepapers, investor presentations, and competitor analyses. They need an AI-powered tool that can extract summaries, draw links across content, and help structure key takeaways for presentation. What should the analyst use?",
    options: [
      "Gemini for Google Chat",
      "NotebookLM",
      "Vertex AI Agent Builder",
      "Document AI"
    ],
    correctIndex: 1,
    explanation:
      "NotebookLM is designed to help users synthesize, organize, and generate insights from large volumes of source documents. It allows analysts to upload files, ask questions about them, and automatically generate summaries and connections across documents—making it ideal for research-heavy tasks.",
    whyOthersWrong: [
      "Gemini for Google Chat enhances productivity in chat environments but lacks the document-centric research capability of NotebookLM.",
      "Vertex AI Agent Builder is intended for building conversational agents and not primarily for research synthesis.",
      "Document AI focuses on structured document processing like form parsing and OCR, not contextual synthesis and insight generation.",
    ],
    officialDoc: "https://notebooklm.google/",
    difficulty: "medium",
  },
  {
    id: "q102",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "An IT administrator at a global electronics firm is leading a project to introduce generative AI to automate product documentation and internal workflows. What should the company prioritize to ensure employees adapt successfully to this AI-driven transformation?",
    options: [
      "Develop a comprehensive change management and training plan",
      "Expect all departments to adjust naturally without formal onboarding",
      "Roll out the tool silently and rely on users to self-learn its features",
      "Focus solely on API integration and skip team-level communication"
    ],
    correctIndex: 0,
    explanation:
      "A structured change management and training plan ensures employees are equipped to adopt the technology confidently and productively. This approach includes stakeholder communication, skills development, support systems, and ongoing feedback, all of which contribute to sustainable adoption.",
    whyOthersWrong: [
      "Assuming organic understanding undermines readiness and slows productivity gains.",
      "Silent implementation leads to confusion, resistance, or misapplication of the new tools.",
      "Overlooking the human impact of tech integration can result in failed adoption despite technical success.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "medium",
  },
  {
    id: "q103",
    sectionId: "business-strategies",
    topicId: "cost-optimization",
    question:
      "An AI project manager at a digital publishing company has deployed a generative AI tool to help editors generate article summaries faster. According to Google Cloud-recommended best practices, how should the team assess the effectiveness of this deployment?",
    options: [
      "Track how often editors interact with the tool, regardless of result quality",
      "Assume the tool improves productivity based on internal feedback alone",
      "Compare the solution's performance against predefined business metrics and KPIs",
      "Measure only system metrics like latency and availability"
    ],
    correctIndex: 2,
    explanation:
      "Evaluating the impact of a generative AI solution requires tying performance to clear business goals, such as reduced editorial time, increased publishing frequency, or content engagement metrics. This ensures the solution is delivering measurable value aligned with organizational objectives.",
    whyOthersWrong: [
      "Measuring usage without evaluating outcomes does not reflect the real impact or effectiveness of the AI tool.",
      "Assuming success without data can lead to biased or incorrect conclusions, undermining decision-making.",
      "Technical metrics are important for infrastructure, but alone they don't indicate the business value or effectiveness of the AI solution.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "medium",
  },
  {
    id: "q104",
    sectionId: "improve-output",
    topicId: "grounding-rag",
    question:
      "A government agency is deploying an AI chatbot to provide up-to-date information about policies and legal procedures. The LLM used has a knowledge cutoff and sometimes returns outdated answers. How can the agency solve this?",
    options: [
      "RAG helps filter sensitive content from the model's outputs.",
      "RAG allows the model to retrieve real-time and current information from external sources.",
      "RAG enhances response formatting using zero-shot prompting.",
      "RAG boosts creativity by sampling from earlier conversation threads."
    ],
    correctIndex: 1,
    explanation:
      "Retrieval-augmented generation enables an LLM to access and incorporate external knowledge sources into its responses, allowing it to bypass its built-in knowledge cutoff and avoid hallucinations from outdated data. This is essential when up-to-date accuracy is required.",
    whyOthersWrong: [
      "Content filtering involves safety settings, not retrieval methods.",
      "Zero-shot prompting helps with few-data scenarios but doesn't provide fresh knowledge.",
      "Sampling from past conversations doesn't address outdated knowledge.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q105",
    sectionId: "google-cloud-offerings",
    topicId: "grounding-rag",
    question:
      "A human resources team is launching an AI assistant to answer employee questions about benefits and leave policies, which are stored in Google Cloud Storage and updated weekly. What is the main benefit of using RAG APIs?",
    options: [
      "They fine-tune the model using employee chat logs and usage behavior.",
      "They allow the model to retrieve accurate and current information directly from source documents.",
      "They generate visual dashboards of employee policy usage patterns.",
      "They convert PDF documents into structured tables for analysis."
    ],
    correctIndex: 1,
    explanation:
      "RAG APIs enhance generative AI by retrieving real-time information from external or internal data sources, like frequently updated policy documents. This ensures that answers reflect the most recent content without retraining the model.",
    whyOthersWrong: [
      "Fine-tuning uses labeled datasets and is different from retrieval-based approaches.",
      "Dashboards require analytics tools, not RAG APIs.",
      "Converting PDFs into structured tables is handled by tools like Document AI, not RAG APIs.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q106",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "An enterprise software company with global development hubs wants to unify how team members access design documents, technical wikis, and support playbooks. What is a key benefit of using Google Agentspace?",
    options: [
      "Real-time network traffic analysis across office locations.",
      "Automated approval workflows for engineering change requests.",
      "Integration with third-party auditing software for process monitoring.",
      "Seamless knowledge sharing and collaboration across internal systems."
    ],
    correctIndex: 3,
    explanation:
      "Google Agentspace enables teams to create AI-powered agents that unify access to internal knowledge sources, allowing users to retrieve and interact with information naturally. This breaks down knowledge silos and enhances collaboration across departments and geographies.",
    whyOthersWrong: [
      "Network monitoring is handled by infrastructure and security tools, not Agentspace.",
      "Approval workflows may be built using other Google Cloud tools but aren't a primary use case for Agentspace.",
      "Auditing software integration is unrelated to the core purpose of Agentspace.",
    ],
    officialDoc: "https://cloud.google.com/agentspace",
    difficulty: "medium",
  },
  {
    id: "q107",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "An AI engineer at a retail chain wants to build a generative AI agent that can check current stock levels from a Cloud SQL database and respond to supply chain queries. What is the most cost-effective solution for live data access?",
    options: [
      "Train a large foundation model using AutoML with historical inventory logs.",
      "Use Gemini Advanced to manually check stock through chat prompts.",
      "Use Google Cloud databases and Vertex AI for the agent to get live data.",
      "Fine-tune a custom model with JSON snapshots of inventory files."
    ],
    correctIndex: 2,
    explanation:
      "Connecting Vertex AI agents with Google Cloud databases allows real-time access to inventory without expensive fine-tuning. This setup is cost-effective and scalable, enabling the agent to retrieve and act on live data instantly.",
    whyOthersWrong: [
      "AutoML training is more expensive and unnecessary when real-time data access is needed.",
      "Gemini Advanced is not designed for direct integration with cloud databases.",
      "Fine-tuning on static files won't support live, dynamic queries required for inventory tracking.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "medium",
  },
  {
    id: "q108",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A cloud architect at a global logistics firm is tasked with integrating generative AI into internal applications but wants to avoid vendor lock-in and retain flexibility to switch between models and tools over time. What core feature of Google Cloud addresses this requirement?",
    options: [
      "Google Cloud's emphasis on an open approach within its AI offerings.",
      "Google Cloud's use of pre-trained agents only within Workspace environments.",
      "Google Cloud's preference for single-stack proprietary models for performance.",
      "Google Cloud's focus on bundling AI features exclusively with managed databases."
    ],
    correctIndex: 0,
    explanation:
      "Google Cloud promotes openness by supporting multiple foundation models, integration with open-source tools, and the flexibility to deploy or connect third-party services. This open strategy helps organizations avoid vendor lock-in while scaling AI initiatives.",
    whyOthersWrong: [
      "Workspace integrations are useful but don't reflect the broader open model ecosystem.",
      "Proprietary-only models reduce flexibility and contradict an open ecosystem strategy.",
      "AI services in Google Cloud are not restricted to database-related use cases or bundles.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "medium",
  },
  {
    id: "q59",
    sectionId: "ai-ml-fundamentals",
    topicId: "ml-types-use-cases",
    question:
      "A data analyst at a logistics company is reviewing time-series GPS and engine sensor data collected from a fleet of delivery trucks. No labels are available, but the analyst wants to detect patterns, unusual behavior, and natural groupings in the data. What type of machine learning is most appropriate?",
    options: [
      "Unsupervised learning",
      "Computer vision modeling",
      "Reinforcement learning",
      "Semi-supervised learning"
    ],
    correctIndex: 0,
    explanation:
      "Unsupervised learning is used when the dataset lacks labels and the goal is to discover hidden patterns, groupings, or anomalies. In this case, clustering or anomaly detection techniques can help identify unusual truck behavior or route performance without requiring pre-labeled data.",
    whyOthersWrong: [
      "Computer vision focuses on image data, not time-series sensor data.",
      "Reinforcement learning is based on actions and rewards, and isn't suitable for static pattern detection.",
      "Semi-supervised learning requires at least some labeled data, which is not available here.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "easy",
  },
  {
    id: "q60",
    sectionId: "google-cloud-offerings",
    topicId: "agents-applications",
    question:
      "A biomedical lab wants to reduce the manual effort spent reviewing clinical trial documents by enabling researchers to ask natural language questions and receive summarized answers. The solution should require minimal coding. What should the team use?",
    options: [
      "Use Vertex AI Agent Builder to create a custom AI agent.",
      "Use Cloud Vision API to extract images and diagrams from the research files.",
      "Use Gemini for Workspace to enable AI-powered document editing and suggestions.",
      "Use BigQuery ML to generate summaries based on word frequency patterns."
    ],
    correctIndex: 0,
    explanation:
      "Vertex AI Agent Builder enables teams to create conversational agents that can access, understand, and summarize enterprise data—such as research papers—using natural language. It's designed for low-code development and is well-suited for R&D environments.",
    whyOthersWrong: [
      "Cloud Vision API extracts visual content, not textual summaries or answers.",
      "Gemini for Workspace enhances productivity tools like Docs and Sheets, but doesn't enable custom agent creation or document querying.",
      "BigQuery ML can analyze patterns but does not generate conversational summaries or support agent workflows.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "medium",
  },
  {
    id: "q61",
    sectionId: "business-strategies",
    topicId: "data-quality",
    question:
      "A retail company's data engineer is building a generative-AI pipeline to analyze thousands of free-form customer emails and social media posts about recent product launches. The messages vary widely in length, tone, and structure. Which best classifies the message content?",
    options: [
      "Structured data",
      "Semi-structured data",
      "Unstructured data",
      "Time-series data"
    ],
    correctIndex: 2,
    explanation:
      "Free-form natural-language text doesn't follow a fixed schema: sentences vary in length, grammar, tone, and layout. Even if platform APIs add metadata (timestamps, usernames), the message body itself remains unstructured.",
    whyOthersWrong: [
      "Structured data fits neatly into predefined fields (e.g., a table with columns like region, age, rating). The messages described are not in a consistent, columnar format.",
      "Semi-structured data (e.g., JSON, XML, logs) has consistent keys/tags but flexible values. While a social post may arrive in a JSON envelope, the content you're analyzing (free-text) is still unstructured.",
      "Time-series focuses on measurements indexed by time at regular intervals (prices, sensor readings). Although messages have timestamps, their primary nature is textual content, not time-indexed measurements.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "medium",
  },
  {
    id: "q62",
    sectionId: "google-cloud-offerings",
    topicId: "security-services",
    question:
      "A data science team is deploying multiple gen AI solutions and needs a central tool to monitor vulnerabilities, misconfigurations, and threats across their cloud environment. What should they use?",
    options: [
      "Cloud Asset Inventory",
      "Identity-Aware Proxy",
      "Cloud Logging",
      "Security Command Center"
    ],
    correctIndex: 3,
    explanation:
      "Security Command Center offers a unified view of security risks, vulnerabilities, and threats across Google Cloud resources, including AI workloads. It helps ensure secure deployment and monitoring of generative AI models at scale.",
    whyOthersWrong: [
      "Cloud Asset Inventory helps track resources, not monitor security posture.",
      "Identity-Aware Proxy controls access, not overall cloud security visibility.",
      "Cloud Logging collects logs but does not provide centralized threat visibility.",
    ],
    officialDoc: "https://cloud.google.com/security-command-center/docs/concepts-security-command-center-overview",
    difficulty: "easy",
  },
  {
    id: "q63",
    sectionId: "improve-output",
    topicId: "grounding-rag",
    question:
      "A financial services company is building an AI assistant to help analysts answer client questions. It must only respond using the company's internal policy documents. What should the company implement?",
    options: [
      "Use few-shot prompting.",
      "Adjust the top-p parameter.",
      "Ground the model using their internal documents.",
      "Fine-tune with external datasets."
    ],
    correctIndex: 2,
    explanation:
      "Grounding ensures the model only pulls information from the company's internal sources, avoiding hallucinations and maintaining accuracy. This is key for compliance-sensitive industries like finance.",
    whyOthersWrong: [
      "Few-shot prompting helps with formatting, not content control.",
      "Top-p controls randomness, not data source.",
      "Fine-tuning on external data increases risk of untrusted output.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q64",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "A machine learning engineer is explaining the role of generative AI in a company meeting. She states that gen AI models are designed to create new outputs—such as text, images, or code—based on learned data patterns. What accurately describes a generative AI model?",
    options: [
      "A browser-based tool that lets users prompt and query an AI system",
      "A compliance checklist for validating ethical use of generative technologies",
      "A complex algorithm trained on vast amounts of data to learn patterns and relationships",
      "A hardware system designed to accelerate inference workloads for neural networks"
    ],
    correctIndex: 2,
    explanation:
      "A generative AI model is a type of machine learning model trained on large datasets to learn the underlying patterns in data and generate new, original outputs. It can create human-like content such as natural language, images, audio, and more using these learned representations.",
    whyOthersWrong: [
      "A browser-based tool is an interface to interact with gen AI but does not define what the model is.",
      "A compliance checklist addresses governance and responsible use but is not the definition of the model itself.",
      "While hardware accelerates model operations, it is not the model and does not describe the algorithmic nature of generative AI.",
    ],
    officialDoc: "https://cloud.google.com/ai/generative-ai",
    difficulty: "easy",
  },
  {
    id: "q65",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "A data scientist at a hospital is deploying a gen AI model to help radiologists identify anomalies in imaging results. To ensure the solution aligns with responsible AI principles and earns clinician trust, which consideration is most essential?",
    options: [
      "Allowing the model to override clinician judgment for faster decisions",
      "Optimizing the model only for novel and creative diagnoses",
      "Ensuring the system provides explanations for its recommendations",
      "Avoiding visibility into the model's internal logic to simplify compliance"
    ],
    correctIndex: 2,
    explanation:
      "In high-stakes fields like healthcare, explainability helps professionals understand and trust AI outputs. Transparent insights into how the model arrived at its suggestions are vital for ethical use, informed decision-making, and regulatory compliance.",
    whyOthersWrong: [
      "Removing human oversight can jeopardize patient safety and violates key principles of responsible AI.",
      "While creativity has value in some applications, medical AI systems must prioritize accuracy, consistency, and traceability over novelty.",
      "Hiding model logic limits accountability and contradicts industry best practices and regulations.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "medium",
  },
  {
    id: "q66",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "An AI product manager at a logistics firm is exploring the use of large language models (LLMs) to improve customer communication and automate responses to shipment queries. What is a core capability that makes LLMs suitable for this task?",
    options: [
      "LLMs are trained on vast datasets, enabling broad language and context understanding, and adaptability across many tasks.",
      "LLMs rely on small, curated datasets for better precision in domain-specific scenarios.",
      "LLMs specialize in scientific and mathematical problem solving without needing real-world examples.",
      "LLMs automatically self-optimize their outputs over time without fine-tuning or intervention."
    ],
    correctIndex: 0,
    explanation:
      "LLMs are designed to generalize across a wide range of inputs by learning from massive and diverse datasets. This gives them the ability to understand nuanced language, follow context across turns, and perform well on a variety of tasks without domain-specific fine-tuning.",
    whyOthersWrong: [
      "Small, curated datasets are useful for fine-tuning, but LLMs need broad pretraining to generalize.",
      "While LLMs can support reasoning, they do not inherently specialize in technical or mathematical problem solving.",
      "LLMs do not self-optimize; they require explicit retraining or prompting strategies to improve behavior.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview",
    difficulty: "easy",
  },
  {
    id: "q67",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "A data scientist at a retail analytics firm wants to uncover meaningful groupings in customer behavior without using predefined labels. The goal is to understand how different types of customers interact with the store across various regions and products. What type of machine learning approach best fits this scenario?",
    options: [
      "Predicting which users are likely to return items using past return data",
      "Analyzing transaction clusters to find natural segments in customer behavior",
      "Training a sentiment model using labeled product review scores",
      "Generating next-quarter revenue forecasts using past performance and ad spend"
    ],
    correctIndex: 1,
    explanation:
      "This is an example of unsupervised learning, where the system detects patterns and groups (clusters) in data without needing labeled outcomes. It is commonly used for customer segmentation, anomaly detection, and market basket analysis.",
    whyOthersWrong: [
      "Predicting return behavior based on past data is a classic supervised learning task, requiring labeled input-output pairs.",
      "Training a model on labeled review scores is supervised learning, which uses predefined categories to guide prediction.",
      "Revenue forecasting uses historical labeled data to predict future values, which falls under supervised regression models.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "medium",
  },
  {
    id: "q68",
    sectionId: "improve-output",
    topicId: "grounding-rag",
    question:
      "A data scientist at a publishing company is using an LLM to answer customer inquiries about newly released books. However, the model returns outdated information due to its training cutoff. What should the team implement to fix this issue?",
    options: [
      "RAG applies auto-labeling to newly published content for classification.",
      "RAG reduces token usage by compressing historical data into prompt templates.",
      "RAG enables the LLM to retrieve relevant and up-to-date information from knowledge sources.",
      "RAG uses feedback loops to continuously adjust the model's creativity settings."
    ],
    correctIndex: 2,
    explanation:
      "Retrieval-augmented generation (RAG) solves the knowledge cutoff limitation by retrieving recent, external documents at inference time. This allows the model to generate responses based on current, verified content instead of outdated internal knowledge.",
    whyOthersWrong: [
      "Auto-labeling helps with classification tasks but doesn't inject live data into generation.",
      "Reducing token count may improve efficiency but doesn't solve accuracy issues caused by outdated knowledge.",
      "Creativity settings like temperature do not influence factual grounding or data freshness.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/grounding/overview",
    difficulty: "medium",
  },
  {
    id: "q69",
    sectionId: "google-cloud-offerings",
    topicId: "agents-applications",
    question:
      "A customer support engineer is deploying tools to help live agents respond more efficiently during active support calls. The goal is to surface real-time suggestions based on conversation context. Which Google Cloud solution should be used?",
    options: [
      "Contact Center AI provides omnichannel routing and CRM integration for automated support.",
      "Conversation Insights generates post-call summaries and team-wide customer sentiment trends.",
      "Agent Assist provides real-time assistance and recommended replies during live customer conversations.",
      "Dialogflow CX is used to design and deploy virtual chatbots for self-service support."
    ],
    correctIndex: 2,
    explanation:
      "Agent Assist enhances live customer-agent interactions by delivering AI-generated suggestions, knowledge articles, and recommended responses in real time, improving efficiency and customer experience.",
    whyOthersWrong: [
      "Contact Center AI includes infrastructure and routing but does not offer real-time agent guidance.",
      "Conversation Insights focuses on analytics and summaries after interactions, not real-time help.",
      "Dialogflow CX supports virtual agent development but is not designed to assist live agents directly.",
    ],
    officialDoc: "https://cloud.google.com/solutions/contact-center",
    difficulty: "medium",
  },
  {
    id: "q70",
    sectionId: "fundamentals",
    topicId: "agents-applications",
    question:
      "A game development studio wants to help its engineers accelerate feature implementation by generating Unity or C# scripts from plain English descriptions. The AI assistant should also suggest improvements, detect bugs, and refactor code as needed. What type of agent should they use?",
    options: [
      "Workflow automation agent",
      "Language translation agent",
      "Data ingestion agent",
      "Code agent"
    ],
    correctIndex: 3,
    explanation:
      "Code agents are specialized generative AI agents designed to assist with writing, reviewing, debugging, and transforming natural language into source code. They improve developer productivity by automating coding tasks and ensuring consistency.",
    whyOthersWrong: [
      "Workflow automation agents handle process coordination or repetitive task execution rather than assisting with software development tasks.",
      "Language translation agents are used to convert content between human languages, not programming languages or development workflows.",
      "Data ingestion agents focus on collecting, formatting, and preparing data—not working with or generating code.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "easy",
  },
  {
    id: "q71",
    sectionId: "improve-output",
    topicId: "prompting-techniques",
    question:
      "A retail company wants to ensure its generative AI assistant consistently communicates in the company's brand voice. Which technique would best help enforce alignment with the company's tone and communication style?",
    options: [
      "Switching to an open-source LLM with no prebuilt personality",
      "Embedding product catalog data into the model weights",
      "Increasing the top-k sampling value during generation",
      "Role prompting"
    ],
    correctIndex: 3,
    explanation:
      "Role prompting guides the model to adopt a specific persona or communication style by explicitly instructing it to respond as a defined role (e.g., a brand representative). This technique helps align output tone and behavior with the company's voice.",
    whyOthersWrong: [
      "Switching models without guidance on prompt strategy won't ensure consistency in tone or compliance with brand standards.",
      "Embedding product data may improve factual accuracy but does not affect tone or voice alignment.",
      "Increasing top-k expands the randomness of responses, which risks inconsistency rather than enforcing brand alignment.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies",
    difficulty: "medium",
  },
  {
    id: "q72",
    sectionId: "google-cloud-offerings",
    topicId: "gemini-vs-gemma",
    question:
      "A marketing engineer at a digital agency is tasked with generating custom promotional videos based on input briefs that include customer segments, value props, and campaign goals. The team wants an AI model that can generate high-quality videos that align with each brief. Which model should they use?",
    options: [
      "Imagen",
      "Gemma",
      "Gemini",
      "Veo"
    ],
    correctIndex: 3,
    explanation:
      "Veo is Google's video generation foundation model that creates high-quality, dynamic video content from text and other multimodal inputs. It supports customized and engaging video generation suitable for marketing, storytelling, and sales purposes.",
    whyOthersWrong: [
      "Imagen is designed for generating photorealistic images from text but does not support full video generation.",
      "Gemma is an open model family designed for lightweight and fine-tuned text generation tasks, not multimedia or video output.",
      "Gemini is a multimodal model suited for text, image, code, and audio tasks, but not optimized for video generation.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/video/overview",
    difficulty: "medium",
  },
  {
    id: "q73",
    sectionId: "google-cloud-offerings",
    topicId: "vertex-ai-overview",
    question:
      "A machine learning engineer at a healthcare startup notices that different teams are independently training models, storing datasets in separate environments, and using inconsistent evaluation methods. The organization wants a unified platform to streamline model development, training, deployment, and monitoring. What should they adopt?",
    options: [
      "Cloud Run",
      "Gemini in Google Sheets",
      "Vertex AI",
      "Google Cloud Pub/Sub"
    ],
    correctIndex: 2,
    explanation:
      "Vertex AI offers a comprehensive platform to unify the AI lifecycle—including training, tuning, deploying, and monitoring ML models. It reduces redundancy, promotes collaboration across teams, and supports both custom and foundation models with scalable MLOps capabilities.",
    whyOthersWrong: [
      "Cloud Run is for deploying containerized applications but does not manage the full AI/ML workflow.",
      "Gemini in Google Sheets provides assistance within spreadsheets but isn't suitable for managing enterprise AI pipelines.",
      "Pub/Sub is a messaging service that supports event-driven architecture but doesn't support end-to-end AI model development and deployment.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/docs/start/introduction-unified-platform",
    difficulty: "easy",
  },
  {
    id: "q74",
    sectionId: "improve-output",
    topicId: "sampling-parameters",
    question:
      "A marketing analyst at a media company is configuring a generative AI tool to write promotional email content. They want the language to be creative and engaging without becoming incoherent or irrelevant. Which model sampling parameter should they focus on adjusting to best balance randomness and quality?",
    options: [
      "Token penalty",
      "Stop sequence",
      "Temperature",
      "Model version"
    ],
    correctIndex: 2,
    explanation:
      "Adjusting the temperature parameter directly influences the randomness of model outputs. A moderate temperature (e.g., 0.7) encourages diverse, imaginative responses while maintaining coherence, making it ideal for creative tasks like marketing copy.",
    whyOthersWrong: [
      "Token penalty is used to discourage repetition, not to balance creativity versus coherence.",
      "Stop sequences define where the output should end but don't affect creativity or diversity of the response.",
      "Choosing a different model version might affect performance or features, but it does not specifically tune output diversity or control creativity.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/adjust-parameter-values",
    difficulty: "medium",
  },
  {
    id: "q75",
    sectionId: "fundamentals",
    topicId: "model-limitations",
    question:
      "A data analyst at a fintech firm asks a generative AI assistant for the recent funding amount of a stealth-mode startup. The model replies with a specific figure and attributes it to a major financial outlet. After checking, the analyst realizes no such funding event or article exists. What does this behavior indicate about the model?",
    options: [
      "Hallucinations",
      "Low context awareness",
      "Outdated training data",
      "Training bias"
    ],
    correctIndex: 0,
    explanation:
      "Hallucinations occur when a generative AI model fabricates plausible-sounding but false or unverifiable information. This is a known limitation of LLMs, especially when answering confidently about topics not grounded in its training data or external sources.",
    whyOthersWrong: [
      "Low context awareness would lead to vague or irrelevant answers, not confidently false ones.",
      "Outdated training data refers to the knowledge cutoff issue, but this scenario is about invented information rather than missing it.",
      "Training bias refers to systematic skew or prejudice in the model's output, not the generation of false facts.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "medium",
  },
  {
    id: "q76",
    sectionId: "fundamentals",
    topicId: "agents-applications",
    question:
      "An education-focused startup hires an AI engineer to build an intelligent tutoring system that can evaluate learners' understanding, deliver adaptive exercises, guide lesson progression, and monitor performance analytics. Which type of AI solution is most appropriate to power this experience?",
    options: [
      "Customized learning agent",
      "Basic rule-based chatbot embedded in a learning portal",
      "Large-scale text summarization model",
      "Pretrained model used for generalized content classification"
    ],
    correctIndex: 0,
    explanation:
      "A customized learning agent integrates multiple capabilities—such as knowledge assessment, lesson sequencing, personalized recommendations, and real-time feedback—making it ideal for adaptive, AI-powered education platforms. These agents are tailored to respond dynamically based on user interaction and performance.",
    whyOthersWrong: [
      "Rule-based chatbots provide limited functionality and do not support deep personalization or autonomous lesson delivery.",
      "While summarization models are useful for condensing text, they lack the interactive, adaptive logic needed for personalized instruction and tracking.",
      "A generalized content classification model can label content, but it cannot drive the end-to-end learning flow or assess student progress effectively.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/agent-builder/overview",
    difficulty: "medium",
  },
  {
    id: "q77",
    sectionId: "fundamentals",
    topicId: "llm-basics",
    question:
      "A retail enterprise is building an AI-powered virtual assistant that supports product troubleshooting and complex account inquiries for both new and returning customers. The assistant must remember prior parts of the conversation to provide accurate and coherent responses. Which capability should the development team prioritize when selecting a foundation model?",
    options: [
      "The model's ability to synthesize tabular data",
      "The model's compatibility with image captioning tasks",
      "The model's context window size",
      "The model's licensing terms for commercial resale"
    ],
    correctIndex: 2,
    explanation:
      "A model's context window size determines how much information it can retain and reason over in a single interaction. For complex and multi-turn conversations like customer support, a larger context window enables the model to track prior queries and responses for more coherent dialogue.",
    whyOthersWrong: [
      "Tabular data synthesis is more relevant to analytics and structured data processing, not chatbot comprehension.",
      "Image captioning is useful for vision-related applications, not text-based customer service interactions.",
      "Licensing terms affect usage rights but are not a functional capability tied to a chatbot's ability to understand customer queries.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/overview",
    difficulty: "medium",
  },
  {
    id: "q78",
    sectionId: "improve-output",
    topicId: "prompting-techniques",
    question:
      "A banking app team is building a virtual assistant that helps users manage transactions and view account history. The assistant must reference earlier parts of the conversation to respond accurately. What prompting technique should the team apply?",
    options: [
      "Use temperature tuning to keep responses more balanced and consistent.",
      "Use keyword tagging to match user intents with static templates.",
      "Use zero-shot prompting to minimize training data needs.",
      "Use prompt chaining to maintain and pass context between turns."
    ],
    correctIndex: 3,
    explanation:
      "Prompt chaining links multiple prompts together, allowing the model to retain context from previous interactions. This technique is essential in scenarios like banking or customer support where earlier conversation history must influence later responses.",
    whyOthersWrong: [
      "Temperature tuning adjusts randomness, not conversational memory.",
      "Keyword tagging helps with intent recognition but does not maintain dialogue continuity.",
      "Zero-shot prompting gives quick answers without prior examples but doesn't preserve context.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/learn/prompts/prompt-design-strategies",
    difficulty: "medium",
  },
  {
    id: "q79",
    sectionId: "business-strategies",
    topicId: "responsible-ai",
    question:
      "A data analyst at a logistics company is rolling out a generative AI tool that automatically recommends delivery routes based on historical performance and real-time factors. To maintain user trust in the AI's decisions, which responsible AI principle should be prioritized?",
    options: [
      "Reducing processing time by omitting context for each recommendation",
      "Hiding decision logic to protect internal algorithms from users",
      "Providing transparency and explainability about how decisions are made",
      "Collecting excess route data to improve model creativity"
    ],
    correctIndex: 2,
    explanation:
      "Transparency and explainability are critical for building trust in automated systems, especially when they influence real-world operations. By helping users understand how decisions are made, organizations can ensure accountability and foster confidence in AI outputs.",
    whyOthersWrong: [
      "Prioritizing speed at the expense of clarity can erode trust and introduce operational risk.",
      "Hiding decision logic contradicts responsible AI principles and limits user oversight.",
      "Gathering excessive or irrelevant data can raise privacy concerns and doesn't inherently improve user trust or model output quality.",
    ],
    officialDoc: "https://cloud.google.com/responsible-ai",
    difficulty: "medium",
  },
  {
    id: "q80",
    sectionId: "google-cloud-offerings",
    topicId: "gemini-vs-gemma",
    question:
      "A product designer at a consumer electronics company needs to generate realistic marketing images of new concept devices before they are physically manufactured. The visuals must be photorealistic and generated directly from product descriptions. What foundation model should be used?",
    options: [
      "Gemma",
      "Chirp",
      "Imagen",
      "Gemini"
    ],
    correctIndex: 2,
    explanation:
      "Imagen is Google's foundation model for high-quality text-to-image generation. It is optimized for producing photorealistic visuals from detailed descriptions, making it ideal for industries like design, advertising, and media where visual content needs to be produced at scale and low cost.",
    whyOthersWrong: [
      "Gemma is a lightweight open-source LLM used for text generation, not image creation.",
      "Chirp is designed for speech-to-text and audio processing tasks.",
      "Gemini is a multimodal foundation model but is not specialized for generating photorealistic images.",
    ],
    officialDoc: "https://cloud.google.com/vertex-ai/generative-ai/docs/image/overview",
    difficulty: "easy",
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
