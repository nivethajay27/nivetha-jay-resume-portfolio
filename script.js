const roles = [
  "full-stack engineer",
  "AI product builder",
  "backend systems developer",
  "frontend engineer",
];

const experience = [
  {
    period: "Nov 2024 - Dec 2025",
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
      "AI-powered portfolio platform that tailors summaries and project framing for recruiters, saves shareable sessions, and supports PDF export.",
    tags: ["React", "TypeScript", "FastAPI", "Groq", "SQLite"],
    url: "https://github.com/nivethajay27/adaptive-ai-portfolio",
    caseStudy: {
      problem: "Recruiters and hiring teams often need different slices of the same portfolio story.",
      built:
        "Built adaptive summaries, shareable sessions, PDF export, and backend flows for AI-assisted portfolio framing.",
      impact:
        "Shows how product thinking, full-stack execution, and AI workflows can turn a static resume into a tailored experience.",
    },
  },
  {
    title: "ShopSphere E-commerce Platform",
    description:
      "Full-featured commerce starter with product catalog, JWT auth, saved carts, checkout, admin CRUD, PostgreSQL, and Stripe payment intent support.",
    tags: ["Next.js", "Express", "PostgreSQL", "Stripe", "JWT"],
    url: "https://github.com/nivethajay27/shopsphere-ecommerce-platform",
    caseStudy: {
      problem: "Commerce apps need smooth customer flows and reliable admin operations behind the scenes.",
      built:
        "Created product browsing, authentication, cart persistence, checkout, admin CRUD, and Stripe payment intent support.",
      impact:
        "Demonstrates end-to-end product architecture across frontend, backend, database, and payments.",
    },
  },
  {
    title: "FullStack AI Chatbot",
    description:
      "Authenticated chatbot app with persistent sessions, token tracking, streaming assistant responses, theme support, and PDF/image attachments.",
    tags: ["React", "Vite", "Express", "PostgreSQL", "JWT"],
    url: "https://github.com/nivethajay27/Fullstack_AIChatbot",
    caseStudy: {
      problem: "AI chat products need persistence, attachment handling, and clear user feedback to feel production-ready.",
      built:
        "Implemented auth, streaming responses, session history, token tracking, themes, and document/image attachment support.",
      impact:
        "Highlights practical LLM app engineering beyond a simple prompt box.",
    },
  },
  {
    title: "Personalized Pixel Avatar",
    description:
      "TypeScript project focused on generating personalized pixel avatar experiences and interactive profile visuals.",
    tags: ["TypeScript", "UI", "Creative Tools"],
    url: "https://github.com/nivethajay27/personalized-pixel-avatar",
    caseStudy: {
      problem: "Personal profile visuals can feel generic when they do not respond to the user.",
      built:
        "Designed a TypeScript-based creative interface for generating personalized pixel avatar experiences.",
      impact:
        "Adds a playful UI systems project that shows range beyond conventional dashboards.",
    },
  },
  {
    title: "AI-Powered Expense Tracker",
    description:
      "Expense tracking application concept centered on AI-assisted insights and practical personal finance workflows.",
    tags: ["JavaScript", "AI", "Product"],
    url: "https://github.com/nivethajay27/ai-powered-expense-tracker",
    caseStudy: {
      problem: "Expense tools collect data, but users still need help understanding what to do with it.",
      built:
        "Explored AI-assisted spending insights, categorization, and product flows for personal finance decisions.",
      impact:
        "Connects AI features to everyday usefulness instead of novelty.",
    },
  },
  {
    title: "My Fashion Closet",
    description:
      "Responsive full-stack wardrobe app for adding clothing items, building outfits, saving looks, and viewing them in a clean modal interface.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "CSS"],
    url: "https://github.com/nivethajay27/my-fashion-closet",
    caseStudy: {
      problem: "Wardrobe planning is easier when items, outfits, and saved looks live in one visual workflow.",
      built:
        "Built clothing-item management, outfit creation, saved looks, responsive views, and modal-based browsing.",
      impact:
        "Shows full-stack CRUD, visual UX, and consumer-product instincts in a familiar domain.",
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

let roleIndex = 0;
let sparkleIndex = 0;

const cursorSparkles = Array.from({ length: 10 }, () => {
  const sparkle = document.createElement("span");
  sparkle.className = "cursor-sparkle";
  document.body.appendChild(sparkle);
  return sparkle;
});

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

function setTheme(theme) {
  root.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  themeIcon.textContent = theme === "dark" ? "☀" : "☾";
}

function renderExperience() {
  const container = document.querySelector("#experienceList");
  container.innerHTML = experience
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-meta">
            <span class="timeline-icon" aria-hidden="true">${getExperienceIcon(item.title)}</span>
            <div class="timeline-period">${item.period}</div>
          </div>
          <div>
            <h3>${item.title}</h3>
            <p><strong>${item.company}</strong></p>
            <p>${item.description}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderProjects() {
  const container = document.querySelector("#projectList");
  const projectCount = projects.length;

  container.innerHTML = projects
    .map((project, index) => {
      const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
      const caseStudyId = `project-case-study-${index}`;
      return `
        <article class="project-card" style="--stack-index: ${index + 1}; --stack-total: ${projectCount};">
          <div class="project-card-top">
            <div class="project-icon">0${index + 1}</div>
            <span class="project-count">Featured / ${projectCount}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tag-list">${tags}</div>
          <button
            class="case-study-toggle"
            type="button"
            aria-expanded="false"
            aria-controls="${caseStudyId}"
          >
            Case Study
            <span aria-hidden="true">+</span>
          </button>
          <div class="case-study-panel" id="${caseStudyId}" hidden>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>${project.caseStudy.problem}</dd>
              </div>
              <div>
                <dt>Built</dt>
                <dd>${project.caseStudy.built}</dd>
              </div>
              <div>
                <dt>Impact</dt>
                <dd>${project.caseStudy.impact}</dd>
              </div>
            </dl>
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

function setMagnetMovement(event) {
  const magnet = event.currentTarget;
  const bounds = magnet.getBoundingClientRect();
  const relativeX = (event.clientX - bounds.left) / bounds.width - 0.5;
  const relativeY = (event.clientY - bounds.top) / bounds.height - 0.5;
  const moveX = relativeX * 32;
  const moveY = relativeY * 32;
  const rotateX = relativeY * -10;
  const rotateY = relativeX * 10;

  magnet.classList.add("is-magnetic");
  magnet.style.setProperty("--magnet-x", `${moveX.toFixed(2)}px`);
  magnet.style.setProperty("--magnet-y", `${moveY.toFixed(2)}px`);
  magnet.style.setProperty("--magnet-rotate-x", `${rotateX.toFixed(2)}deg`);
  magnet.style.setProperty("--magnet-rotate-y", `${rotateY.toFixed(2)}deg`);
}

function resetMagnetMovement(event) {
  const magnet = event.currentTarget;

  magnet.classList.remove("is-magnetic");
  magnet.style.setProperty("--magnet-x", "0px");
  magnet.style.setProperty("--magnet-y", "0px");
  magnet.style.setProperty("--magnet-rotate-x", "0deg");
  magnet.style.setProperty("--magnet-rotate-y", "0deg");
}

function bindMagnetImages() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  document.querySelectorAll("[data-magnet]").forEach((magnet) => {
    magnet.addEventListener("pointermove", setMagnetMovement);
    magnet.addEventListener("pointerleave", resetMagnetMovement);
    magnet.addEventListener("pointercancel", resetMagnetMovement);
  });
}

function bindProjectInteractions() {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("pointermove", setProjectTilt);
    card.addEventListener("pointerleave", resetProjectTilt);
  });
}

function updateStackedProjects() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const stickyTop = parseFloat(getComputedStyle(card).top) || 96;
    const start = card.offsetTop - stickyTop;
    const travel = window.innerHeight * 0.4;
    const progress = Math.min(Math.max((window.scrollY - start) / travel, 0), 1);
    const scale = 1 - progress * 0.075;
    const opacity = 1 - progress * 0.16;

    card.style.setProperty("--stack-scale", scale.toFixed(3));
    card.style.setProperty("--stack-opacity", opacity.toFixed(3));
  });
}

function bindStackedProjects() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  let isTicking = false;

  function requestStackUpdate() {
    if (isTicking) {
      return;
    }

    isTicking = true;
    window.requestAnimationFrame(() => {
      updateStackedProjects();
      isTicking = false;
    });
  }

  updateStackedProjects();
  window.addEventListener("scroll", requestStackUpdate, { passive: true });
  window.addEventListener("resize", requestStackUpdate);
}

function bindCaseStudyToggles() {
  document.querySelectorAll(".case-study-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const panel = document.querySelector(`#${button.getAttribute("aria-controls")}`);
      const isOpen = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isOpen));
      button.querySelector("span").textContent = isOpen ? "+" : "-";
      panel.hidden = isOpen;
      panel.classList.toggle("is-open", !isOpen);
    });
  });
}

function revealOnScroll() {
  const revealItems = document.querySelectorAll(
    ".section-band, .timeline-item, .project-card, .skill-card, .impact-grid div, .education-list article",
  );

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

const savedTheme = localStorage.getItem("portfolio-theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

setTheme(savedTheme || systemTheme);
renderExperience();
renderProjects();
renderSkills();
bindMagnetImages();
bindProjectInteractions();
bindCaseStudyToggles();
revealOnScroll();
bindStackedProjects();
setInterval(rotateRole, 2200);

themeToggle.addEventListener("click", () => {
  themeToggle.classList.remove("is-switching");
  void themeToggle.offsetWidth;
  themeToggle.classList.add("is-switching");
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

window.addEventListener("pointermove", trackCursor);
document.querySelector("#year").textContent = new Date().getFullYear();
