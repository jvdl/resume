import { useState } from 'react';
import { AtSymbol } from './icons/AtSymbol';
import { Chevron } from './icons/Chevron';
import { Download } from './icons/Download';
import { GitHub } from './icons/GitHub';
import { LinkedIn } from './icons/LinkedIn';
import './App.css'

function App() {

  const [allOpen, setAllOpen] = useState(false);

  const toggleAllPreviousExperience = () => {
    setAllOpen((prev) => !prev);
  }

  return (
    <div className="resume">
      <aside className="resume-sidebar">
        <section>
          <h2>Top Skills</h2>
          <ul className="skills">
            <li>TypeScript</li>
            <li>React</li>
            <li>User Experience</li>
          </ul>
        </section>

        <section>
          <h2>More Skills</h2>
          <ul className="skills">
            <li>JavaScript</li>
            <li>HTML / CSS</li>
            <li>Accessibility</li>
            <li>Node.JS</li>
            <li>Vue.js</li>
            <li>Git</li>
            <li>GraphQL</li>
            <li>Testing (Vitest, Jest, Playwright, Selenium)</li>
            <li>Design Systems</li>

          </ul>
        </section>

        <section>
          <h2>Location Preference</h2>
          <ul>
            <li>Remote</li>
          </ul>
        </section>

        <section>
          <h2>Languages</h2>
          <ul>
            <li>English</li>
            <li>Dutch</li>
          </ul>
        </section>

      </aside>
      <main className="resume-main">
        <header className="resume-header">
          <h1>John van der Loo</h1>
          <p className="headline">Senior Frontend Developer</p>
          <p className="location">Central Coast, NSW, Australia</p>
          <ul>
            <li><AtSymbol /><a href="mailto:jvanderloo@gmail.com">jvanderloo@gmail.com</a></li>
            <li><LinkedIn /><a href="https://www.linkedin.com/in/jvanderloo" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><GitHub /><a href="https://github.com/jvdl" target="_blank" rel="noreferrer">GitHub</a></li>
            <li className="download-link"><Download /><a href="./files/john-van-der-loo-resume.pdf" download target="_blank" rel="noreferrer">Download</a></li>
          </ul>
        </header>

        <section className="resume-section summary">
          <h2>Summary</h2>
          <p>
            With over 20 years of web development experience, I am a frontend expert who enjoys building great, accessible UI/UX implementations
            that help make the world a better place.
          </p>
          <p>
            I specialize in <b>JavaScript</b>, <b>TypeScript</b>, <b>CSS</b>, <b>HTML</b>, and <b>React</b>.
            Using my skills and experience, I focus on <b>accessibility</b>, <b>usability</b>, and <b>user experience</b> to build solutions that make a positive impact.
            I am passionate about working on projects that help <b>developer and team productivity</b>, and I always aim to remain <b>adaptable</b> and <b>flexible</b>.
            I have experience working in a wide variety of environments and tech stacks, and I am always eager to take on new challenges and expand my skill set.
            </p>
        </section>

        <section className="resume-section recent-experience">
          <h2>Experience</h2>

          <article className="job">
            <h3>Biarri Networks</h3>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Senior Frontend Developer</span>
                <span className="role-dates">February 2024 — Present</span>
              </div>
              <p className="role-location">New South Wales, Australia</p>
              <ul>
                <li>
                  <b>Led migration</b> from Webpack to Vite, reducing build times and the developer feedback loop. Modernizing the tech stack to <b>improve team productivity</b>.
                </li>
                <li>Recognized gaps in <b>end-to-end testing</b> coverage. Architected and implemented a new <b>Playwright</b> e2e test suite, replacing legacy Selenium setup to <b>increase test reliability</b> and reduce manual QA burden.</li>
                <li><b>Streamlined CI/CD infrastructure</b> by <b>improving processes</b> and migrating pipelines, reducing deployment failures and <b>increasing release confidence</b>.</li>
                <li>Drove migration to <b>Vitest</b>, establishing a modern, unified <b>testing strategy</b> that improved test execution speed and <b>developer experience</b>.</li>
                <li>
                  Eliminated risky manual database operations by building a new admin application for SaaS configuration and resource management. Reduced operational overhead and <b>significantly decreased production incident risk</b>.
                </li>
                <li>
                  Resolved lack of <b>visibility into analytics data</b> by implementing a fully typed analytics client schema. Enabled teams to clearly understand available events and data structures, <b>improving data quality</b> and <b>analytics reliability</b>.
                </li>
              </ul>
            </div>
          </article>

          <article className="job">
            <h3>Whispli</h3>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Senior Frontend Developer</span>
                <span className="role-dates">May 2023 — January 2024</span>
              </div>
              <p className="role-location">New South Wales, Australia</p>
              <ul>
                <li>Rapidly ramped up on a large legacy codebase and domain knowledge to contribute meaningfully within weeks</li>
                <li>Led modernization efforts that <b>increased testing surface</b>, enabling faster feature delivery by reducing manual testing effort.</li>
                <li>Collaborated on the secure communication platform serving whistleblowers and organizations, ensuring reliability and data integrity.</li>
              </ul>
            </div>
          </article>

          <article className="job">
            <h3>Pathzero</h3>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Senior Frontend Developer</span>
                <span className="role-dates">July 2022 — March 2023</span>
              </div>
              <p className="role-location">New South Wales, Australia</p>
              <ul>
                  <li>Spearheaded Pathzero's <b>design system</b> and set it up for success, enabling the team to build features faster with a more <b>consistent user experience</b> across the platform.</li>
                  <li>Led frontend development efforts <b>establishing architecture standards</b> and <b>code quality practices</b> that reduced bugs and improved team velocity.</li>
                  <li>Managed greenfield projects and legacy modernization initiatives that improved application performance and reduced technical debt, resulting in faster feature delivery and improved user satisfaction.</li>
              </ul>
            </div>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Engineering Manager</span>
                <span className="role-dates">March 2022 — July 2022</span>
              </div>
              <p className="role-location">Sydney, New South Wales, Australia</p>
              <ul>
                <li>Led the "Customer Journey" team, <b>driving UX and usability improvements</b> across the core application</li>
                <li>Established and developed the design system with <b>standards, guidelines, and tooling</b> to improve team efficiency</li>
                <li>Transitioned back to individual contributor as organizational needs evolved</li>
              </ul>
            </div>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Senior Frontend Developer</span>
                <span className="role-dates">July 2021 — March 2022</span>
              </div>
              <p className="role-location">New South Wales, Australia</p>
              <ul>
                <li>Made the world a little greener at Pathzero, an easy to use carbon communications platform</li>
                <li>Quickly ramped up on <b>Vue.js</b> and <b>GraphQL</b> while maintaining <b>high code quality standards</b></li>
                <li>Implemented <b>responsive UI components</b> and improved application performance</li>
                <li>Collaborated with design and backend teams to deliver cohesive features across the stack</li>
              </ul>
            </div>
          </article>


          <article className="job">
            <h3>Atlassian</h3>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">JavaScript Developer</span>
                <span className="role-dates">August 2013 — July 2021</span>
              </div>
              <ul>
                <li>Primarily worked on Bitbucket Server, building features including diff/source views, pull requests, admin/settings pages, and code editing</li>
                <li>Built an in-house tool for <b>code quality enforcement</b></li>
                <li><b>Drove the transition</b> to more modern JS and transformed large parts of the codebase using <b>jscodeshift</b></li>
                <li>Secondment to the <b>Design System</b> team to represent the broader team's interests</li>
              </ul>
            </div>
          </article>

        </section>

        <section className="resume-section previous-experience">
          <h2>Previous experience <button onClick={toggleAllPreviousExperience}>{allOpen ? "Collapse All" : "Expand All"}</button></h2>


          <article className="job">
            <details open={allOpen}>
              <summary>
                <Chevron className="summary-icon" />
                <h3>Afterlight Web Development</h3>
                <div className="role-meta">
                  <span className="role-title">Owner</span>
                  <span className="role-dates">January 2005 — December 2016</span>
                </div>
              </summary>
              <div className="role">
                <ul>
                  <li>Specialised in front-end website development with WordPress development</li>
                  <li>HTML5, CSS, JavaScript (jQuery, React, Backbone.js), with occasional PHP and Node.js</li>
                  <li>Built custom WordPress themes and plugins for clients</li>
                  <li>Managed client projects and provided hosting and technical support</li>
                </ul>
              </div>
            </details>
          </article>

          <article className="job">
            <details open={allOpen}>
              <summary>
                <Chevron className="summary-icon" />
                <h3>Orchard Marketing</h3>
                  <div className="role-meta">
                    <span className="role-title">Senior Frontend Developer</span>
                    <span className="role-dates">March 2012 — August 2013</span>
                </div>
              </summary>
              <div className="role">

                <ul>
                  <li>Programming front-end interfaces including websites, landing pages, microsites, HTML emails, and mobile websites &amp; applications</li>
                  <li>Introduced LESS CSS into the internal Bootstrap template</li>
                  <li>Created a framework for building HTML5 mobile apps (iPad Detail Aids)</li>
                  <li>Built an internal eDetailing framework based on Backbone, jQuery, Handlebars, HammerJS, and custom components (with Node.js build tasks using Grunt)</li>
                  <li>Built templates for third-party CMS systems (EPiServer)</li>
                </ul>
              </div>
            </details>
          </article>

          <article className="job">
            <details open={allOpen}>
              <summary>
                <Chevron className="summary-icon" />
                <h3>BMF Advertising</h3>
                <div className="role-meta">
                  <span className="role-title">Team Lead Developer</span>
                  <span className="role-dates">May 2011 — March 2012</span>
                </div>
              </summary>
              <div className="role">
                <ul>
                  <li>Led the development team and liaised with the Project Management team</li>
                  <li>Wrote documentation and guides</li>
                  <li>Programming front-end interfaces including websites, landing pages, microsites, and HTML emails</li>
                  <li>Built templates for third-party CMS systems (Kentico, BlogEngine.NET, FrogCMS, bespoke .NET solutions)</li>
                </ul>
              </div>
            </details>
          </article>

          <article className="job">
            <details open={allOpen}>
              <summary>
                <Chevron className="summary-icon" />
                <h3>BMF Advertising</h3>
                <div className="role-meta">
                  <span className="role-title">Front End Developer</span>
                  <span className="role-dates">February 2010 — May 2011</span>
                </div>
              </summary>
              <div className="role">
                <ul>
                  <li>Programming front-end interfaces including websites, landing pages, microsites, and HTML emails</li>
                  <li>XHTML/HTML5, CSS, JavaScript, jQuery</li>
                  <li>Built templates for third-party CMS systems (Kentico, BlogEngine.NET, FrogCMS, bespoke .NET solutions)</li>
                  <li>Ensuring cross-browser compatibility</li>
                </ul>
              </div>
            </details>
          </article>

          <article className="job">
            <details open={allOpen}>
              <summary>
                <Chevron className="summary-icon" />
                <h3>The Dubs</h3>
                <div className="role-meta">
                  <span className="role-title">Senior Multimedia Programmer</span>
                  <span className="role-dates">March 2007 — February 2010</span>
                </div>
              </summary>
              <div className="role">
                <ul>
                  <li>Programming front-end interfaces including websites, landing pages, microsites, HTML emails, and iPhone web applications</li>
                  <li>Ensured markup is semantic, standards-conformant, and accessible</li>
                  <li>Lead frontend developer on a new website built for ING Direct</li>
                  <li>Converted PSDs to standards-compliant, cross-browser-compatible XHTML/CSS/JavaScript/jQuery/AJAX</li>
                  <li>Overseeing implementation of templates into an in-house .NET CMS and third-party CMSs</li>
                </ul>
              </div>
            </details>
          </article>

          <article className="job">
            <details open={allOpen}>
              <summary>
                <Chevron className="summary-icon" />
                <h3>Wesley Mission</h3>
                <div className="role-meta">
                  <span className="role-title">Front End Developer</span>
                  <span className="role-dates">December 2006 — March 2007</span>
                </div>
              </summary>
              <div className="role">
                <ul>
                  <li>Implementing new templates using standards-compliant code and ensuring accessibility requirements are met</li>
                  <li>Converting older templates to standards-compliant code</li>
                  <li>Implementation of Google Maps</li>
                </ul>
              </div>
            </details>
          </article>

          <article className="job">
            <details open={allOpen}>
              <summary>
                <Chevron className="summary-icon" />
                <h3>MobileActive</h3>
                <div className="role-meta">
                  <span className="role-title">Junior PHP Developer</span>
                  <span className="role-dates">March 2005 — May 2006</span>
                </div>
              </summary>
              <div className="role">
                <ul>
                  <li>Developing PHP applications on a LAMP platform</li>
                  <li>Building PHP intranet applications</li>
                  <li>Using HTML, CSS, and JS to build front-ends of sites</li>
                </ul>
              </div>
            </details>
          </article>
        </section>

        <section className="resume-section education">
          <h2>Education</h2>

          <article className="education-entry role">
            <div className="role-meta">
              <h3>TAFE NSW</h3>
              <span className="role-dates">February 2002 — March 2005</span>
            </div>
            <p className="role-title">Diploma in Information Technology, Website Development</p>
          </article>

        </section>
      </main>

    </div>
  )
}

export default App
