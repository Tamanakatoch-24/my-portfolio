
import './App.css'

const skills = [
  'React.js',
  'JavaScript',
  'HTML',
  'CSS',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Python',
  'Java',
  'C++',
  'MySQL',
  'Git',
  'GitHub'
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

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          Tamana<span>.</span>
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>

        {/* HOME SECTION */}
        <section className="hero" id="home">

          <div className="hero-content">

            <span className="eyebrow">
              WELCOME TO MY PORTFOLIO
            </span>

            <h1>
              Hi, I'm <span>Tamana Katoch</span>
            </h1>

            <h2>Full Stack Web Developer</h2>

            <p>
              I build modern, responsive and user-friendly
              websites. I enjoy transforming ideas into
              functional digital experiences.
            </p>

            {/* HOME BUTTONS */}
            <div className="buttons">

              <a href="#projects" className="btn primary">
                View My Work
              </a>

              <a href="#contact" className="btn secondary">
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                download="Tamana_Katoch_Resume.pdf"
                className="btn secondary"
              >
                Download Resume ↓
              </a>

            </div>

            {/* SOCIAL LINKS */}
            <div
              className="social-links"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px'
              }}
            >

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
                Email ✉
              </a>

            </div>

          </div>

          {/* HERO DESIGN */}
          <div className="hero-visual">
            <div className="profile-circle">
              <span>TK</span>
              <p>DESIGN • DEVELOP • DEPLOY</p>
            </div>
          </div>

        </section>

        {/* ABOUT SECTION */}
        <section className="section" id="about">

          <span className="eyebrow">
            GET TO KNOW ME
          </span>

          <h2 className="section-title">
            About <span>Me</span>
          </h2>

          <p className="about-text">
            I'm Tamana Katoch, a Computer Science and
            Engineering student at Chandigarh University.

            I am passionate about full-stack web development,
            problem-solving and creating real-world applications.

            I have experience working with React, JavaScript,
            Python, Node.js and databases.

            My goal is to help individuals and businesses
            build modern, responsive and professional websites.
          </p>

        </section>

        {/* SKILLS SECTION */}
        <section className="section" id="skills">

          <span className="eyebrow">
            WHAT I WORK WITH
          </span>

          <h2 className="section-title">
            Technical <span>Skills</span>
          </h2>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}

          </div>

        </section>

        {/* PROJECTS SECTION */}
        <section className="section" id="projects">

          <span className="eyebrow">
            MY RECENT WORK
          </span>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <div className="projects-grid">

            {projects.map((project) => (

              <article
                className="project-card"
                key={project.title}
              >

                {/* PROJECT IMAGE */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="project-image"
                    loading="lazy"
                  />
                )}

                {/* PROJECT TITLE */}
                <div className="project-top">

                  <span>{project.category}</span>

                  <h3>{project.title}</h3>

                </div>

                {/* PROJECT DETAILS */}
                <div className="project-body">

                  <p>{project.description}</p>

                  <div className="tags">

                    {project.tech.map((tech) => (
                      <span key={tech}>
                        {tech}
                      </span>
                    ))}

                  </div>

                  {/* PROJECT LINKS */}
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

              </article>

            ))}

          </div>

        </section>

        {/* SERVICES SECTION */}
        <section className="section" id="services">

          <span className="eyebrow">
            HOW I CAN HELP
          </span>

          <h2 className="section-title">
            My <span>Services</span>
          </h2>

          <div className="services-grid">

            <div className="service-card">
              <span>01</span>
              <h3>Website Development</h3>
              <p>
                Modern and responsive websites for
                businesses and personal brands.
              </p>
            </div>

            <div className="service-card">
              <span>02</span>
              <h3>Frontend Development</h3>
              <p>
                Interactive React interfaces with clean
                layouts and mobile-friendly designs.
              </p>
            </div>

            <div className="service-card">
              <span>03</span>
              <h3>Website Improvements</h3>
              <p>
                UI enhancements, responsive layout fixes
                and website feature updates.
              </p>
            </div>

          </div>

        </section>

        {/* CONTACT SECTION */}
        <section className="section contact" id="contact">

          <span className="eyebrow">
            LET'S CONNECT
          </span>

          <h2 className="section-title">
            Let's Work <span>Together</span>
          </h2>

          <p>
            Have a website idea or a project in mind?
            I'd love to hear about it.
            Feel free to contact me for freelance projects
            and collaborations.
          </p>

          <div
            className="buttons"
            style={{
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >

            <a
              href="mailto:tamanakatoch2005@gmail.com?subject=Freelance%20Project%20Inquiry"
              className="btn primary"
            >
              Hire Me ✉
            </a>

            <a
              href="https://www.linkedin.com/in/tamana-katoch-16bab42a3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              Connect on LinkedIn ↗
            </a>

            <a
              href="https://github.com/Tamanakatoch-24"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              View GitHub ↗
            </a>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>
          © {new Date().getFullYear()} Tamana Katoch.
          All rights reserved.
        </p>
      </footer>

    </div>
  )
}

export default App
