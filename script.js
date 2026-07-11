const roles = [
  "Full-Stack Software Engineer.",
  "AI Product Builder.",
  "Backend Systems Developer.",
  "Frontend Engineer.",
];

const experience = [
  {
    period: "Dec 2024 - Dec 2025",
    title: "Founding Software Engineer / Business Product Manager",
    company: "Work Order Wizard - San Francisco Bay Area, CA",
    description:
      "Built realtime mobile and web applications with React, TypeScript, React Native, FastAPI, Firebase, and GCP, reducing API latency by 35% while leading product strategy, roadmap decisions, and LLM-powered work-order insights.",
  },
  {
    period: "Aug 2022 - Apr 2024",
    title: "Software Engineer II",
    company: "Cisco - San Jose, CA",
    description:
      "Developed full-stack automation dashboards and ML-backed analytics modules used by 2000+ engineers, with React, TypeScript, Flask, MongoDB, Java pipelines, Jenkins, Docker, and Kubernetes.",
  },
  {
    period: "Jul 2020 - Sep 2020",
    title: "Full Stack Developer",
    company: "Fresh Digital - Chennai, India",
    description:
      "Built MeteorJS interfaces for an AI-driven analytics and sentiment dashboard backed by MongoDB on GCP, including NLTK and Scikit-learn sentiment classification modules.",
  },
  {
    period: "Dec 2019 - Apr 2020",
    title: "Artificial Intelligence & App Developer Intern",
    company: "Tamil Nadu E-Governance Agency - Chennai, India",
    description:
      "Designed chatbot and classification workflows for agriculture and public complaint mobile apps, applying NLP interaction flows and structured domain datasets.",
  },
  {
    period: "Mar 2018 - May 2020",
    title: "Web Developer",
    company: "Seasons - Women's Clothing E-commerce Startup - India, Remote",
    description:
      "Developed a responsive e-commerce website using HTML, CSS, JavaScript, Bootstrap, jQuery, PHP, and MySQL, implementing product catalog, cart, checkout, Razorpay/Paytm payment integration, and an admin panel for products, inventory, and orders.",
  },
  {
    period: "May 2019 - Aug 2019",
    title: "Web Developer Intern",
    company: "Engineers India Limited - Greater Delhi Area",
    description:
      "Worked on web application development with Visual Basic .NET, frontend development, technical design, and internal application workflows.",
  },
  {
    period: "May 2019 - Jul 2019",
    title: "Neural Network Developer and Analyst",
    company: "Engineers India Limited - Gurugram, Haryana, India",
    description:
      "Analyzed neural-network workflows and supported technical design for plant-performance and decision-support use cases.",
  },
  {
    period: "Jul 2018 - Aug 2018",
    title: "Android Application Developer Intern",
    company: "National Small Industries Corp (NSIC) - Chennai, India",
    description:
      "Worked as an Android developer intern, contributing to mobile application development and implementation tasks.",
  },
];

const projects = [
  {
    title: "Adaptive AI Portfolio",
    description:
      "AI-powered personal portfolio that tailors itself per recruiter using React, FastAPI, and Groq, with share links, session history, and PDF export.",
    tags: ["React", "TypeScript", "FastAPI", "Groq", "SQLite"],
    url: "https://github.com/nivethajay27/adaptive-ai-portfolio",
    caseStudy: {
      problem: "Recruiters and hiring teams often need different slices of the same portfolio story.",
      built:
        "Built a React and FastAPI app that rewrites portfolio summaries and project framing for a specific recruiter, company, role, and job description.",
      impact:
        "Shows full-stack AI product thinking with saved sessions, share links, local fallback generation, and browser-based PDF export.",
    },
    objectType: "laptop",
    details: {
      frontend: "React, TypeScript, Vite",
      backend: "FastAPI, Python",
      database: "SQLite",
      apis: "Groq API with deterministic local fallback",
      solution:
        "The frontend collects recruiter inputs, sends them to a FastAPI tailoring endpoint, renders a live tailored preview, and saves generated versions with session and share IDs.",
      features: [
        "Recruiter-specific portfolio tailoring",
        "Live tailored preview",
        "Session history",
        "Share links",
        "Browser print PDF export",
      ],
      demo: "https://adaptive-ai-portfolio.vercel.app",
    },
  },
  {
    title: "Personal Health Platform",
    description:
      "Modern cycle and wellness tracking application that delivers personalized health insights through nutrition, recovery, and symptom tracking.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "IndexedDB"],
    url: "https://github.com/nivethajay27/personal-health-platform",
    caseStudy: {
      problem: "Wellness tracking needs to make patterns clear while keeping sensitive health-adjacent data private and local-first.",
      built:
        "Built a dashboard-first Next.js app for cycle phase visualization, daily check-ins, food/workout/recovery logging, and pattern exploration.",
      impact:
        "Shows responsible product design for wellness data, local-first storage, charting, privacy controls, and polished dashboard UX.",
    },
    objectType: "cloud",
    details: {
      frontend: "Next.js, TypeScript, Tailwind CSS, Recharts",
      backend: "TODO: Confirm backend details if implemented.",
      database: "IndexedDB local-first storage",
      apis: "TODO: Confirm API details if implemented.",
      solution:
        "Implemented local-first wellness tracking with dashboard metrics, chart filters, rule-based insights, export/delete controls, and privacy/settings flows.",
      features: [
        "Cycle phase visualization",
        "Daily check-in logging",
        "Food, workout, and recovery logging",
        "Rule-based insights",
        "Interactive chart filters",
        "Export/delete local data controls",
      ],
      demo: "TODO: Add live demo link if available.",
    },
  },
  {
    title: "Personalized Pixel Avatar",
    description:
      "Full-stack monorepo for generating customizable pixel avatars with a React editor, Express API, and shared avatar engine.",
    tags: ["React", "TypeScript", "Vite", "Express", "Node.js"],
    url: "https://github.com/nivethajay27/personalized-pixel-avatar",
    caseStudy: {
      problem: "Avatar generation needs consistent rendering rules across the UI and API.",
      built:
        "Built a monorepo with an avatar editor UI, randomization/rendering API, shared TypeScript contracts, and a reusable layer-based avatar engine.",
      impact:
        "Shows creative full-stack TypeScript architecture with deterministic rendering, export, and reusable packages.",
    },
    objectType: "phone",
    details: {
      frontend: "React, TypeScript, Vite",
      backend: "Node.js, TypeScript, Express",
      database: "TODO: Confirm database usage if implemented.",
      apis: "Express API endpoints for random avatar generation and PNG rendering",
      solution:
        "Created a layered editor with configurable avatar parts, deterministic seed randomization, undo history, favorites, and PNG export.",
      features: [
        "Layered avatar editor",
        "Background patterns and gradient controls",
        "Palette controls",
        "Deterministic randomization by seed",
        "Undo history",
        "Favorites tray",
        "PNG export",
      ],
      demo: "https://personalized-pixel-avatar-8x0nk06wx-nivethajay27s-projects.vercel.app",
    },
  },
  {
    title: "FullStack AI Chatbot",
    description:
      "Modern full-stack chatbot with streaming AI responses, PostgreSQL storage, JWT authentication, and conversation management.",
    tags: ["React", "Vite", "Express", "PostgreSQL", "JWT"],
    url: "https://github.com/nivethajay27/Fullstack_AIChatbot",
    caseStudy: {
      problem: "AI chat products need persistence, authentication, usage visibility, and attachment handling to feel production-ready.",
      built:
        "Implemented a full-stack chatbot with user auth, protected chat endpoints, DB-backed sessions, streaming responses, and PDF/image attachments.",
      impact:
        "Highlights practical LLM app engineering beyond a simple prompt box.",
    },
    objectType: "terminal",
    details: {
      frontend: "React, Vite",
      backend: "Express, Node.js",
      database: "PostgreSQL",
      apis: "Streaming chat endpoint, PDF/image attachment-aware prompts",
      solution:
        "Built registration/login, multi-chat session UI, token usage display, streaming assistant responses, conversation controls, and attachment-aware prompts.",
      features: [
        "User registration and login",
        "Protected chat endpoint",
        "Persistent sessions and messages",
        "Token usage tracking",
        "Streaming assistant responses",
        "Conversation rename/archive/delete",
        "PDF/image attachments",
      ],
      demo: "TODO: Add live demo link if available.",
    },
  },
  {
    title: "My Fashion Closet",
    description:
      "Full-stack virtual wardrobe app with an intelligent outfit stylist, simulated try-on preview, daily recommendations, trip packing, wishlist gap analysis, and inspiration-based outfit recreation.",
    tags: ["React", "React Router", "Node.js", "Express", "PostgreSQL"],
    url: "https://github.com/nivethajay27/my-fashion-closet",
    caseStudy: {
      problem: "Wardrobe planning is easier when closet data, style preferences, outfit planning, and inspiration workflows live in one product.",
      built:
        "Built a full-stack fashion closet with wardrobe metadata, outfit generation, try-on preview, trip packing, wishlist analysis, and inspiration-based outfit recreation.",
      impact:
        "Shows consumer-product thinking through visual UX, full-stack data flows, recommendation logic, and multi-page planning features.",
    },
    objectType: "database",
    details: {
      frontend: "React, React Router, CSS",
      backend: "Express, Node.js",
      database: "PostgreSQL",
      apis: "Express API routes",
      solution:
        "Created closet filtering, style-goal onboarding, outfit scoring, simulated try-on, 7-day planning, trip packing, wishlist gap analysis, and inspiration recreation flows.",
      features: [
        "Virtual closet metadata",
        "Clothing image upload",
        "Daily stylist recommendations",
        "Simulated try-on preview",
        "Outfit planner",
        "Trip packing planner",
        "Wishlist gap analysis",
        "Inspiration-based outfit recreation",
      ],
      demo: "TODO: Add live demo link if available.",
    },
  },
  {
    title: "Recipe Organizer",
    description:
      "Full-stack recipe app for saving, tagging, searching, favoriting, and viewing favorite dishes with image uploads and modal recipe details.",
    tags: ["React", "Axios", "Node.js", "Express", "PostgreSQL"],
    url: "https://github.com/nivethajay27/recipe-organizer",
    caseStudy: {
      problem: "Home cooks need a simple way to save, tag, search, and revisit favorite recipes.",
      built:
        "Built a full-stack recipe organizer with recipe creation, image uploads, ingredients/instructions, tags, favorites, search, and modal details.",
      impact:
        "Demonstrates practical CRUD, file upload handling, search/filter UX, and PostgreSQL-backed organization.",
    },
    objectType: "folder",
    details: {
      frontend: "React, Axios, custom CSS",
      backend: "Node.js, Express",
      database: "PostgreSQL",
      apis: "Express API routes, Multer file uploads",
      solution:
        "Created a React and Express app for adding recipes, storing them in PostgreSQL, uploading images, filtering by tags, searching recipes, and opening recipe modal views.",
      features: ["Add recipes", "Image uploads", "Tags", "Favorites", "Search", "Recipe modal popup"],
      demo: "TODO: Add live demo link if available.",
    },
  },
];

const skills = [
  {
    title: "Languages",
    description: "JavaScript, TypeScript, Python, Java, C++, C#, Swift, SQL, HTML/CSS.",
  },
  {
    title: "Frontend & Mobile",
    description: "React, React Native, Expo, Next.js, Flutter, responsive UI, Figma prototypes.",
  },
  {
    title: "Backend & Systems",
    description: "Node.js, Express, Flask, Django, Spring Boot, FastAPI, REST APIs, microservices.",
  },
  {
    title: "Data & AI",
    description: "OpenAI, Groq, Hugging Face, NLTK, Scikit-learn, ML analytics, LLM workflows.",
  },
  {
    title: "Databases",
    description: "PostgreSQL, MongoDB, Firebase, SQLite, Elasticsearch.",
  },
  {
    title: "Cloud & DevOps",
    description: "GCP, AWS, Jenkins, Docker, Kubernetes, CI/CD, Vercel, Render.",
  },
];

const root = document.documentElement;
const roleText = document.querySelector("#roleText");
const themeToggle = document.querySelector("#themeToggle");
const themeIcon = document.querySelector(".theme-icon");
const cursorGlow = document.querySelector(".cursor-glow");
const mailboxButton = document.querySelector("#mailboxButton");

let roleIndex = 0;
let sparkleIndex = 0;
let activeExperienceIndex = 0;
let activeVersionIndex = 0;
let lastExperienceTrigger = null;

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const cursorSparkles = prefersReducedMotion.matches
  ? []
  : Array.from({ length: 10 }, () => {
      const sparkle = document.createElement("span");
      sparkle.className = "cursor-sparkle";
      document.body.appendChild(sparkle);
      return sparkle;
    });

const experienceTechnologyTerms = [
  "React",
  "TypeScript",
  "React Native",
  "FastAPI",
  "Firebase",
  "GCP",
  "LLM",
  "Flask",
  "MongoDB",
  "Java",
  "Jenkins",
  "Docker",
  "Kubernetes",
  "MeteorJS",
  "NLTK",
  "Scikit-learn",
  "NLP",
  "HTML",
  "CSS",
  "JavaScript",
  "Bootstrap",
  "jQuery",
  "PHP",
  "MySQL",
  "Razorpay",
  "Paytm",
  "Visual Basic .NET",
  "Android",
];

function getExperienceIcon(title) {
  const normalizedTitle = title.toLowerCase();

  if (normalizedTitle.includes("ai") || normalizedTitle.includes("neural")) {
    return "AI";
  }

  if (normalizedTitle.includes("android") || normalizedTitle.includes("mobile")) {
    return "APP";
  }

  if (normalizedTitle.includes("web") || normalizedTitle.includes("full stack")) {
    return "WEB";
  }

  if (normalizedTitle.includes("product")) {
    return "PM";
  }

  return "DEV";
}

function parseCompanyLocation(companyLine) {
  const [company, ...locationParts] = companyLine.split(" - ");

  return {
    company,
    location: locationParts.join(" - ") || "Location available in resume",
  };
}

function getExperienceTechnologies(description) {
  return experienceTechnologyTerms.filter((term) =>
    description.toLowerCase().includes(term.toLowerCase()),
  );
}

function getExperienceBullets(description) {
  return description
    .split(/,\s+(?=(with|including|implementing|reducing|applying|contributing|technical|and internal)\b)/i)
    .map((part) => part.replace(/^(with|including|implementing|and internal)\s+/i, "").trim())
    .filter(Boolean)
    .slice(0, 4);
}

function getExperienceTheme(item) {
  const company = item.company.toLowerCase();
  const title = item.title.toLowerCase();

  if (company.includes("work order wizard")) return "workorder";
  if (company.startsWith("cisco")) return "network";
  if (company.includes("seasons")) return "commerce";
  if (title.includes("android")) return "mobile";
  if (title.includes("ai") || title.includes("neural") || company.includes("fresh digital")) {
    return "analytics";
  }

  return "dashboard";
}

function renderExperienceScene(theme, label) {
  const scenes = {
    network: `
      <div class="experience-rack" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <div class="experience-terminal" aria-hidden="true">
        <span>$ monitor --network</span>
        <span>nodes connected</span>
      </div>
      <div class="experience-network" aria-hidden="true"></div>
    `,
    workorder: `
      <div class="experience-phone" aria-hidden="true"><span>mobile app</span></div>
      <div class="experience-dashboard" aria-hidden="true">
        <span>dashboard</span>
        <i></i><i></i>
      </div>
      <div class="experience-api" aria-hidden="true">API</div>
      <div class="experience-card-stack" aria-hidden="true">
        <span>property</span>
        <span>work order</span>
      </div>
    `,
    commerce: `
      <div class="experience-storefront" aria-hidden="true"><span>catalog</span></div>
      <div class="experience-cart" aria-hidden="true">cart</div>
      <div class="experience-dashboard" aria-hidden="true">
        <span>admin</span>
        <i></i><i></i>
      </div>
    `,
    mobile: `
      <div class="experience-phone is-large" aria-hidden="true"><span>Android</span></div>
      <div class="experience-terminal" aria-hidden="true">
        <span>build mobile</span>
        <span>implementation</span>
      </div>
    `,
    analytics: `
      <div class="experience-dashboard" aria-hidden="true">
        <span>analytics</span>
        <i></i><i></i>
      </div>
      <div class="experience-terminal" aria-hidden="true">
        <span>classify text</span>
        <span>model output</span>
      </div>
    `,
    dashboard: `
      <div class="experience-dashboard" aria-hidden="true">
        <span>web app</span>
        <i></i><i></i>
      </div>
      <div class="experience-terminal" aria-hidden="true">
        <span>internal tools</span>
        <span>frontend flow</span>
      </div>
    `,
  };

  return `
    <div class="experience-scene experience-scene-${theme}" aria-label="${label} technical scene">
      <div class="scene-doodle scene-star" aria-hidden="true">✦</div>
      <div class="scene-doodle scene-arrow" aria-hidden="true">↗</div>
      ${scenes[theme]}
    </div>
  `;
}

function setTheme(theme) {
  root.dataset.theme = theme;
  themeIcon.textContent = theme === "dark" ? "☀" : "☾";
}

function renderExperienceDetails(index) {
  const item = experience[index];
  const { company, location } = parseCompanyLocation(item.company);
  const technologies = getExperienceTechnologies(item.description);
  const bullets = getExperienceBullets(item.description);
  const theme = getExperienceTheme(item);
  const detailPanel = document.querySelector("#experienceDetail");

  detailPanel.innerHTML = `
    <div class="experience-detail-heading">
      <p class="eyebrow">Checkpoint ${String(index + 1).padStart(2, "0")}</p>
      <h3 id="experienceDialogTitle">${company}</h3>
      <p>${item.title}</p>
    </div>
    <dl class="experience-facts">
      <div>
        <dt>Dates</dt>
        <dd>${item.period}</dd>
      </div>
      <div>
        <dt>Location</dt>
        <dd>${location}</dd>
      </div>
    </dl>
    ${renderExperienceScene(theme, company)}
    <div class="experience-detail-grid">
      <div>
        <h4>Resume details</h4>
        <p>${item.description}</p>
        <ul>${bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>
      </div>
      <div>
        <h4>Technologies</h4>
        <div class="experience-tech-list">
          ${
            technologies.length
              ? technologies.map((tech) => `<span>${tech}</span>`).join("")
              : "<span>TODO: Confirm technologies</span>"
          }
        </div>
      </div>
    </div>
  `;

  document.querySelectorAll(".experience-card").forEach((card) => {
    card.classList.toggle("is-active", Number(card.dataset.experienceIndex) === index);
  });

  document.querySelectorAll(".company-sign").forEach((button) => {
    button.setAttribute("aria-expanded", String(Number(button.dataset.experienceIndex) === index));
  });
}

function openExperienceDialog(index, trigger) {
  const dialog = document.querySelector("#experienceDialog");
  const dialogPanel = document.querySelector("#experienceDialogPanel");

  activeExperienceIndex = index;
  lastExperienceTrigger = trigger;
  renderExperienceDetails(activeExperienceIndex);
  dialog.hidden = false;
  document.body.classList.add("modal-open");
  requestAnimationFrame(() => {
    dialog.classList.add("is-open");
    dialogPanel?.focus({ preventScroll: true });
  });
}

function closeExperienceDialog() {
  const dialog = document.querySelector("#experienceDialog");

  if (!dialog || dialog.hidden) {
    return;
  }

  dialog.classList.remove("is-open");
  dialog.hidden = true;
  document.body.classList.remove("modal-open");
  document.querySelectorAll(".company-sign").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });
  lastExperienceTrigger?.focus({ preventScroll: true });
}

function renderExperience() {
  const container = document.querySelector("#experienceList");
  const shouldRenderScenes = !window.matchMedia("(max-width: 700px)").matches;

  container.innerHTML = `
    <div class="experience-journey" aria-label="Experience journey checkpoints">
      <div class="checkpoint-track" aria-hidden="true"></div>
      <div class="experience-checkpoints">
        ${experience
          .map((item, index) => {
            const { company, location } = parseCompanyLocation(item.company);
            const theme = getExperienceTheme(item);

            return `
              <article class="experience-card experience-card-${theme}" data-experience-index="${index}">
                ${shouldRenderScenes ? renderExperienceScene(theme, company) : ""}
                <button
                  class="company-sign"
                  type="button"
                  data-experience-index="${index}"
                  aria-controls="experienceDialog"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                >
                  <span class="checkpoint-dot" aria-hidden="true">${getExperienceIcon(item.title)}</span>
                  <span>${company}</span>
                </button>
                <div class="experience-card-copy">
                  <h3>${item.title}</h3>
                  <p>${item.period}</p>
                  <p>${location}</p>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </div>
    <div
      class="experience-dialog"
      id="experienceDialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="experienceDialogTitle"
      hidden
    >
      <div class="experience-dialog-backdrop" data-dialog-close></div>
      <section class="experience-dialog-panel" id="experienceDialogPanel" tabindex="-1">
        <button
          class="experience-dialog-close"
          type="button"
          aria-label="Close experience details"
          data-dialog-close
        >×</button>
        <aside
          class="experience-detail"
          id="experienceDetail"
          aria-live="polite"
          aria-label="Selected experience details"
        ></aside>
      </section>
    </div>
  `;

  document.querySelectorAll(".experience-card").forEach((card) => {
    card.classList.remove("is-active");
  });
}

function renderProjects() {
  renderWorkstationObjects();
  renderProjectPanel(0);
  renderMobileProjectCards();
}

function renderWorkstationObjects() {
  const container = document.querySelector("#projectObjectList");

  container.innerHTML = `
    <div class="workstation-doodle project-star">+</div>
    <div class="workstation-doodle project-arrow">-&gt;</div>
    <div class="workstation-note">click an object</div>
    <div class="workstation-surface"></div>
    ${projects
      .map(
        (project, index) => `
          <button
            class="project-object object-${project.objectType}"
            type="button"
            data-project-index="${index}"
            aria-controls="projectPanel"
            aria-expanded="${index === 0 ? "true" : "false"}"
            aria-label="Open details for ${project.title}"
          >
            ${getProjectObjectMarkup(project.objectType)}
            <span>${project.title}</span>
          </button>
        `,
      )
      .join("")}
  `;
}

function getProjectObjectMarkup(type) {
  const objectMarkup = {
    laptop: `
      <i class="object-screen"><b></b><b></b><b></b></i>
      <i class="object-base"></i>
    `,
    folder: `
      <i class="object-folder-tab"></i>
      <i class="object-folder-body"></i>
    `,
    terminal: `
      <i class="object-terminal-bar"></i>
      <i class="object-terminal-line"></i>
      <i class="object-terminal-line short"></i>
    `,
    phone: `
      <i class="object-phone-screen"></i>
      <i class="object-phone-button"></i>
    `,
    database: `
      <i class="object-db-top"></i>
      <i class="object-db-body"></i>
      <i class="object-db-line"></i>
    `,
    cloud: `
      <i class="object-cloud-one"></i>
      <i class="object-cloud-two"></i>
      <i class="object-cloud-three"></i>
    `,
  };

  return `<span class="object-illustration" aria-hidden="true">${objectMarkup[type] || objectMarkup.folder}</span>`;
}

function renderProjectPanel(index, shouldFocus = false) {
  const project = projects[index];
  const panel = document.querySelector("#projectPanel");
  const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
  const features = project.details.features.map((feature) => `<li>${feature}</li>`).join("");

  panel.innerHTML = `
    <p class="panel-kicker">Selected project</p>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="tag-list">${tags}</div>
    <dl class="project-detail-grid">
      <div>
        <dt>Problem</dt>
        <dd>${project.caseStudy.problem}</dd>
      </div>
      <div>
        <dt>Solution</dt>
        <dd>${project.details.solution}</dd>
      </div>
      <div>
        <dt>Technologies</dt>
        <dd>${project.tags.join(", ")}</dd>
      </div>
      <div>
        <dt>Frontend</dt>
        <dd>${project.details.frontend}</dd>
      </div>
      <div>
        <dt>Backend</dt>
        <dd>${project.details.backend}</dd>
      </div>
      <div>
        <dt>Database</dt>
        <dd>${project.details.database}</dd>
      </div>
      <div>
        <dt>APIs</dt>
        <dd>${project.details.apis}</dd>
      </div>
      <div>
        <dt>Demo</dt>
        <dd>${project.details.demo}</dd>
      </div>
    </dl>
    <div class="project-features">
      <h4>Key features</h4>
      <ul>${features}</ul>
    </div>
    <a class="button primary project-panel-link" href="${project.url}">GitHub</a>
  `;

  document.querySelectorAll(".project-object").forEach((button) => {
    const isSelected = Number(button.dataset.projectIndex) === index;
    button.classList.toggle("is-selected", isSelected);
    button.setAttribute("aria-expanded", String(isSelected));
  });

  if (shouldFocus) {
    panel.focus({ preventScroll: true });
  }
}

function renderMobileProjectCards() {
  const container = document.querySelector("#projectList");

  container.innerHTML = projects
    .map((project) => {
      const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
      const features = project.details.features.map((feature) => `<li>${feature}</li>`).join("");

      return `
        <article class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tag-list">${tags}</div>
          <dl class="mobile-project-details">
            <div>
              <dt>Problem</dt>
              <dd>${project.caseStudy.problem}</dd>
            </div>
            <div>
              <dt>Solution</dt>
              <dd>${project.details.solution}</dd>
            </div>
            <div>
              <dt>Technologies</dt>
              <dd>${project.tags.join(", ")}</dd>
            </div>
            <div>
              <dt>Frontend</dt>
              <dd>${project.details.frontend}</dd>
            </div>
            <div>
              <dt>Backend</dt>
              <dd>${project.details.backend}</dd>
            </div>
            <div>
              <dt>Database</dt>
              <dd>${project.details.database}</dd>
            </div>
            <div>
              <dt>APIs</dt>
              <dd>${project.details.apis}</dd>
            </div>
            <div>
              <dt>Demo</dt>
              <dd>${project.details.demo}</dd>
            </div>
          </dl>
          <div class="project-features">
            <h4>Key features</h4>
            <ul>${features}</ul>
          </div>
          <a class="project-link" href="${project.url}" aria-label="View ${project.title} on GitHub">View GitHub</a>
        </article>
      `;
    })
    .join("");
}

function renderSkills() {
  const container = document.querySelector("#skillList");
  container.innerHTML = skills
    .map(
      (skill) => `
        <article class="skill-card">
          <h3>${skill.title}</h3>
          <p>${skill.description}</p>
        </article>
      `,
    )
    .join("");
}

function setActiveVersion(index) {
  const cards = document.querySelectorAll(".version-card");
  const dots = document.querySelectorAll("[data-version-dot]");

  if (cards.length === 0) {
    return;
  }

  activeVersionIndex = (index + cards.length) % cards.length;

  cards.forEach((card, cardIndex) => {
    const isActive = cardIndex === activeVersionIndex;
    card.classList.toggle("is-active", isActive);
    card.setAttribute("aria-hidden", String(!isActive));
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("is-active", dotIndex === activeVersionIndex);
  });
}

function rotateRole() {
  roleIndex = (roleIndex + 1) % roles.length;
  roleText.animate(
    [
      { opacity: 1, transform: "translateY(0)" },
      { opacity: 0, transform: "translateY(8px)" },
    ],
    { duration: 160, easing: "ease-out" },
  ).onfinish = () => {
    roleText.textContent = roles[roleIndex];
    roleText.animate(
      [
        { opacity: 0, transform: "translateY(-8px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: 180, easing: "ease-out" },
    );
  };
}

function trackCursor(event) {
  cursorGlow.style.opacity = "1";
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;

  if (cursorSparkles.length === 0) {
    return;
  }

  const sparkle = cursorSparkles[sparkleIndex];
  sparkleIndex = (sparkleIndex + 1) % cursorSparkles.length;
  sparkle.style.left = `${event.clientX}px`;
  sparkle.style.top = `${event.clientY}px`;
  sparkle.classList.remove("is-active");
  void sparkle.offsetWidth;
  sparkle.classList.add("is-active");
}

function setProjectTilt(event) {
  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
  const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -8;
  card.style.setProperty("--tilt-x", `${y}deg`);
  card.style.setProperty("--tilt-y", `${x}deg`);
}

function resetProjectTilt(event) {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
}

function bindProjectInteractions() {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("pointermove", setProjectTilt);
    card.addEventListener("pointerleave", resetProjectTilt);
  });

  document.querySelectorAll(".project-object").forEach((button) => {
    button.addEventListener("click", () => {
      renderProjectPanel(Number(button.dataset.projectIndex), true);
    });
  });
}

function bindVersionCarousel() {
  document.querySelector("#versionPrev")?.addEventListener("click", () => {
    setActiveVersion(activeVersionIndex - 1);
  });

  document.querySelector("#versionNext")?.addEventListener("click", () => {
    setActiveVersion(activeVersionIndex + 1);
  });

  document.querySelectorAll("[data-version-dot]").forEach((dot) => {
    dot.addEventListener("click", () => {
      setActiveVersion(Number(dot.dataset.versionDot));
    });
  });
}

function bindExperienceInteractions() {
  document.querySelectorAll(".company-sign").forEach((button) => {
    button.addEventListener("click", () => {
      openExperienceDialog(Number(button.dataset.experienceIndex), button);
    });
  });

  document.querySelectorAll("[data-dialog-close]").forEach((control) => {
    control.addEventListener("click", closeExperienceDialog);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeExperienceDialog();
    }
  });
}

function bindMailboxInteraction() {
  if (!mailboxButton) {
    return;
  }

  mailboxButton.addEventListener("click", () => {
    const firstContactAction = document.querySelector("#contactActions a");
    mailboxButton.classList.add("is-open");
    firstContactAction?.focus({ preventScroll: false });
  });
}

function revealOnScroll() {
  const isMobileViewport = window.matchMedia("(max-width: 700px)").matches;
  const revealItems = document.querySelectorAll(
    isMobileViewport
      ? ".section-band, .project-object, .project-panel, .project-card, .skill-card, .education-list article"
      : ".section-band, .experience-card, .project-object, .project-panel, .project-card, .skill-card, .education-list article",
  );

  if (isMobileViewport) {
    document.querySelectorAll(".experience-card").forEach((item) => {
      item.classList.add("is-visible");
    });
  }

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
  );

  revealItems.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
    observer.observe(item);
  });
}

setTheme("light");
renderExperience();
renderProjects();
renderSkills();
setActiveVersion(0);
bindVersionCarousel();
bindExperienceInteractions();
bindProjectInteractions();
bindMailboxInteraction();
revealOnScroll();
setInterval(rotateRole, 2200);

themeToggle.addEventListener("click", () => {
  themeToggle.classList.remove("is-switching");
  void themeToggle.offsetWidth;
  themeToggle.classList.add("is-switching");
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

window.addEventListener("pointermove", trackCursor);
document.querySelector("#year").textContent = new Date().getFullYear();
