import React from 'react'

const techIcons = {
  React: "⚛️",
  Angular: "🅰️",
  "AngularJS": "🔺",
  NodeJS: "🟩",
  Express: "🌐",
  MongoDB: "🍃",
  PostgreSQL: "🐘",
  SpringBoot: "🌱",
  Hibernate: "📘",
  JavaFX: "☕",
  Symfony: "🎵",
  CodeNameOne: "📱",
  MySQL: "🐬",
  Stripe: "💳",
  Docker: "🐳",
  Microservices: "🧩",
  AI: "🤖",
  JavaScript: "📜",
  Jenkins: "👷",
  Kubernetes: "☸️",
  SonarQube: "🧪",
  Grafana: "📊",
  Prometheus: "🔥",
  Snyk: "🛡️",
  OCR: "🔍",
}

const Project = () => {
  const projects = [
    {
      title: "Landing Page - Hamza’s Projects",
      description: "A portfolio landing page showcasing various personal projects with a clean and responsive design.",
      url: "https://landing-page-kwvw9fa3l-hamzas-projects-adb6965f.vercel.app",
      tech: ["React", "JavaScript"]
    },
    {
      title: "Capture Gallery",
      description: "A minimalist photo gallery website featuring sections like Home, Gallery, and Work. Ideal for visual portfolios.",
      url: "https://capture-gallery.vercel.app",
      tech: ["React", "JavaScript"]
    },
    {
      title: "Smart Workflow Application",
      description: "A smart workflow management app with AI-powered features and a modern user interface.",
      url: "https://smartworkflow-app.vercel.app",
      tech: ["React", "AI"]
    },
    {
      title: "Remote Work Landing Page",
      description: "Landing page designed for remote work teams, focusing on task management, scheduling, and productivity.",
      url: "https://landing-page-remote-work-psi.vercel.app",
      tech: ["React", "JavaScript"]
    },
    {
      title: "Final Year Project",
      description: "An advanced CV parsing application using OCR, AI, Spring Boot, PostgreSQL, Angular, and Hibernate.",
      tech: ["OCR", "AI", "SpringBoot", "PostgreSQL", "Angular", "Hibernate"]
    },
    {
      title: "Website for ISSAT Mateur",
      description: "Dynamic website using React (frontend), Node.js + Express (backend), and MongoDB.",
      tech: ["React", "NodeJS", "Express", "MongoDB"]
    },
    {
      title: "Academic Web Project",
      description: "Bill payment system with a forum, available on desktop and mobile. Built with JavaFX, Symfony, CodeNameOne, and MySQL.",
      tech: ["JavaFX", "Symfony", "CodeNameOne", "MySQL"]
    },
    {
      title: "Student Mobility Management",
      description: "Full-stack app for managing student exchanges using Spring Boot, AngularJS, and MySQL.",
      tech: ["SpringBoot", "AngularJS", "MySQL"]
    },
    {
      title: "Internship & Job Platform",
      description: "Managing internships and jobs using React.js, Node.js/Express, and MongoDB.",
      tech: ["React", "NodeJS", "Express", "MongoDB"]
    },
    {
      title: "Online Payment System",
      description: "Secure online payment solution using Spring Boot, Stripe, and JavaScript.",
      tech: ["SpringBoot", "Stripe", "JavaScript"]
    },
    {
      title: "Cultech - Cultural Exchange Platform",
      description: "A microservice-based platform promoting cultural exchange, with Spring Boot, AngularJS, and Docker.",
      tech: ["SpringBoot", "AngularJS", "Microservices", "Docker"]
    },
    {
      title: "AI Chatbot",
      description: "Real-time chatbot developed with Node.js, React.js, and MongoDB. Focused on AI and UX.",
      tech: ["NodeJS", "React", "MongoDB", "AI"]
    },
    {
      title: "DevOps Project",
      description: "CI/CD pipeline using Jenkins, Docker, Kubernetes, SonarQube, Grafana, Prometheus, and Snyk.",
      tech: ["Jenkins", "Docker", "Kubernetes", "SonarQube", "Grafana", "Prometheus", "Snyk"]
    }
  ]

  return (
    <section id="project">
      <div className="row">
        <div className="twelve columns">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((proj, index) => (
              <div className="project-card" key={index}>
                <h3>{proj.title}</h3>
                <p>{proj.description}</p>

                {proj.tech && (
                  <p>
                    <strong>Tech used:</strong>{" "}
                    {proj.tech.map((t, i) => (
                      <span key={i} style={{ marginRight: "8px" }}>
                        {techIcons[t] || "🛠️"} {t}
                      </span>
                    ))}
                  </p>
                )}

                {proj.url && (
                  <p>
                    🔗 Project link:{" "}
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      {proj.url}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project
