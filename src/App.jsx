
import { useRef, useState } from 'react'
import './App.css'

const skills = [
  'React.js', 'JavaScript', 'HTML', 'CSS',
  'Node.js', 'Express.js', 'MongoDB',
  'Python', 'Java', 'C++', 'MySQL',
  'Git', 'GitHub'
]

const projects = [
  {
    title: 'Urban Plate',
    category: 'Full Stack Restaurant Website',
    description:
      'A responsive restaurant website with online table reservations, secure admin login, reservation management and booking analytics.',
    tech: ['React', 'JavaScript', 'Node.js'],
    image: '/images/customer-home.png',
    live: 'https://urban-plate-two.vercel.app/',
    github: 'https://github.com/Tamanakatoch-24/urban-plate'
  },
  {
    title: 'Password Manager',
    category: 'Python Desktop Application',
    description:
      'A desktop password manager with encrypted password storage, a master password and password generation.',
    tech: ['Python', 'Tkinter', 'SQLite', 'Fernet'],
    image: '',
    live: '',
    github: ''
  }
]

const services = [
  {
    number: '01',
    icon: '◈',
    title: 'Website Development',
    description:
      'Modern, responsive websites designed for businesses and personal brands.'
  },
  {
    number: '02',
    icon: '⌘',
    title: 'Frontend Development',
    description:
      'Interactive React interfaces with polished layouts and mobile-friendly experiences.'
  },
  {
    number: '03',
    icon: '✦',
    title: 'Website Improvements',
    description:
      'UI enhancements, responsive fixes and website feature updates.'
  }
]

function TiltCard({ children, className = '' }) {
  const cardRef = useRef(null)

  const handleMouseMove = (event) => {
    const card = cardRef.current
    if (!card) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const rect = card.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    const rotateX = (0.5 - y) * 7
    const rotateY = (x - 0.5) * 7

    card.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`

    card.style.setProperty('--mouse-x', `${x * 100}%`)
    card.style.setProperty('--mouse-y', `${y * 100}%`)
  }

  const resetTilt = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = ''
    }
  }

  return (
    <div
      ref={cardRef}
      className={`tilt-card ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
    >
      {children}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="portfolio">

      {/* BACKGROUND EFFECTS */}
      <div className="ambient-orb orb-one" aria-hidden="true" />
      <div className="ambient-orb orb-two" aria-hidden="true" />

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Tamana<span>.</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav
          id="main-navigation"
          className={menuOpen ? 'nav-open' : ''}
          aria-label="Main navigation"
        >
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main>

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">

            <div className="availability-pill">
              <span className="status-dot" />
              Open to Freelance Projects
            </div>

            <span className="eyebrow">
              WELCOME TO MY DIGITAL SPACE
            </span>

            <h1>
              Hi, I'm
              <span className="gradient-text"> Tamana Katoch</span>
            </h1>

            <h2>
              Full Stack <span>Web Developer</span>
            </h2>

            <p>
              I design and develop modern, responsive and
              user-friendly digital experiences. Turning
              creative ideas into functional websites
              with clean code and thoughtful design.
            </p>

            <div className="buttons">
              <a href="#projects" className="btn primary">
                Explore My Work <span>↗</span>
              </a>

              <a href="#contact" className="btn secondary">
                Let's Connect
              </a>

              <a
                href="/resume.pdf"
                download="Tamana_Katoch_Resume.pdf"
                className="btn secondary"
              >
                Download Resume ↓
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Tamanakatoch-24"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/tamana-katoch-16bab42a3"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a href="mailto:tamanakatoch2005@gmail.com">
                Email ↗
              </a>
            </div>
          </div>

          {/* PREMIUM 3D VISUAL */}
          <div className="hero-visual">
            <div className="hero-orbit orbit-outer" />
            <div className="hero-orbit orbit-inner" />

            <div className="floating-chip chip-top">
              <span className="chip-icon">✦</span>
              Creative Developer
            </div>

            <div className="developer-card">
              <div className="card-shine" />

              <div className="developer-card-top">
                <span className="window-dots">
                  <i /><i /><i />
                </span>
                <span>developer.profile</span>
              </div>

              <div className="developer-card-body">
                <div className="avatar-3d">
                  <span>TK</span>
                </div>

                <div className="developer-label">
                  FULL STACK DEVELOPER
                </div>

                <h3>Tamana Katoch</h3>

                <p>
                  Design. Develop. Deploy.
                </p>

                <div className="code-preview">
                  <div>
                    <span className="code-purple">const</span>
                    {' developer = {'}
                  </div>
                  <div>
                    {'  '}passion:
                    <span className="code-green"> 'building'</span>,
                  </div>
                  <div>
                    {'  '}focus:
                    <span className="code-green"> 'web experiences'</span>
                  </div>
                  <div>{'}'}</div>
                </div>
              </div>
            </div>

            <div className="floating-chip chip-bottom">
              <span className="chip-icon">◈</span>
              React • Node.js • Python
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section" id="about">
          <span className="eyebrow">GET TO KNOW ME</span>

          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <div className="about-panel">
            <div className="about-accent" />

            <p className="about-text">
              I'm Tamana Katoch, a Computer Science and
              Engineering student at Chandigarh University.
              I am passionate about full-stack web development,
              problem-solving and creating real-world applications.
              I work with React, JavaScript, Python, Node.js
              and databases to build modern digital solutions.
            </p>

            <div className="about-highlights">
              <span>✦ Clean Design</span>
              <span>✦ Responsive Websites</span>
              <span>✦ Full Stack Development</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <span className="eyebrow">MY TECH STACK</span>

          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>

          <p className="section-description">
            Technologies and tools I use to bring ideas to life.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-symbol">
                  {['◇', '✦', '⌘', '◈'][index % 4]}
                </span>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <span className="eyebrow">SELECTED WORK</span>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            A selection of projects I've designed and developed.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <TiltCard
                className="project-card"
                key={project.title}
              >
                <div className="project-media">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="project-image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="project-placeholder">
                      <span>⌘</span>
                      <p>PYTHON • SECURITY</p>
                    </div>
                  )}

                  <span className="project-number">
                    0{index + 1}
                  </span>
                </div>

                <div className="project-top">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>

                <div className="project-body">
                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="project-links">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo ↗
                      </a>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="section" id="services">
          <span className="eyebrow">WHAT I CAN DO</span>

          <h2 className="section-title">
            My <span>Services</span>
          </h2>

          <p className="section-description">
            Helping businesses and individuals create
            meaningful online experiences.
          </p>

          <div className="services-grid">
            {services.map((service) => (
              <TiltCard
                className="service-card"
                key={service.number}
              >
                <div className="service-header">
                  <span className="service-icon">
                    {service.icon}
                  </span>
                  <span className="service-number">
                    {service.number}
                  </span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </TiltCard>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="section contact" id="contact">
          <div className="contact-panel">
            <span className="eyebrow">
              HAVE A PROJECT IN MIND?
            </span>

            <h2 className="section-title">
              Let's Build Something <span>Great.</span>
            </h2>

            <p>
              Looking for a developer to bring your ideas
              to life? Let's connect and discuss your project.
            </p>

            <div className="buttons contact-buttons">
              <a
                href="mailto:tamanakatoch2005@gmail.com?subject=Freelance%20Project%20Inquiry"
                className="btn primary"
              >
                Hire Me ↗
              </a>

              <a
                href="https://www.linkedin.com/in/tamana-katoch-16bab42a3"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://github.com/Tamanakatoch-24"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>
          © {new Date().getFullYear()} Tamana Katoch.
          Crafted with creativity and code.
        </p>
      </footer>
    </div>
  )
}

export default App
