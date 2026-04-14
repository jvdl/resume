import './App.css'

function App() {

  const clickEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const user = "jvanderloo";
    const domain = "gmail.com";
    window.location.href = `mailto:${user}@${domain}`;
  }

  return (
    <div className="resume">
      <aside className="resume-sidebar">
        <section>
          <h2>Contact</h2>
          <ul>
            <li><a href="#" onClick={clickEmail}>Email me</a></li>
            <li><a href="https://www.linkedin.com/in/jvanderloo" target="_blank" rel="noreferrer">LinkedIn</a></li>
          </ul>
        </section>

        <section>
          <h2>Top Skills</h2>
          <ul className="skills">
            <li>TypeScript</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>User Experience</li>
            <li>Accessibility</li>
            <li>Git</li>
            <li>Testing</li>
          </ul>
        </section>

        <section>
          <h2>Languages</h2>
          <ul>
            <li>English <span className="note">(Native or Bilingual)</span></li>
            <li>Dutch <span className="note">(Native or Bilingual)</span></li>
          </ul>
        </section>

        <section>
          <h2>Publications</h2>
          <ul>
            <li><a href="https://www.correcthorsebatterystaple.net" target="_blank" rel="noreferrer">Correct Horse Battery Staple</a></li>
          </ul>
        </section>
      </aside>

      <main className="resume-main">
        <header className="resume-header">
          <h1>John van der Loo</h1>
          <p className="headline">Frontend Developer</p>
          <p className="location">Central Coast, NSW, Australia</p>
        </header>

        <section className="resume-section">
          <h2>Summary</h2>
          <p>With over 20 years of web development experience, I am a frontend expert who enjoys building great, accessible UI/UX implementations that help make the world a better place.</p>
          <p>I specialize in JavaScript, TypeScript, CSS, and HTML, and have extensive experience with React and Vue.js frameworks. I also have strong skills in Git, Node.js, SASS/SCSS/Less, unit testing, accessibility, usability, and E2E testing. I am proficient in using Adobe Photoshop, Atlassian core suite, and Figma tools. I am passionate about working on projects that help developer and team productivity, and I always strive to learn new technologies and best practices.</p>
        </section>

        <section className="resume-section">
          <h2>Recent experience</h2>

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
                  Lead the migration from Webpack to Vite.
                  This resulted in a significantly shorter devloop and brought the project up to modern standards.
                </li>
                <li>Started a new Playwright e2e setup to improve testing capabilities and move away from a legacy Selenium setup.</li>
                <li>Improvements to and migration of CI/CD pipelines. </li>
                <li>Driving migration to Vitest to improve our overall testing strategy and modernize our testing approach.</li>
                <li>
                  Started a new admin application to administer our SaaS app's configuration and resources.
                  This reduced manual effort for maintenance and support and significantly reduced risky operations previously done by manually accessing the production database.</li>
                <li>
                  Implemented an updated analytics client that used a fully typed schema to allow for full visibility of analytics events and data.
                  This made it easier to understand all the available events and the data structure sent by those events.
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
                <li>Working on the frontend for Whispli's core application that facilitates secure and anonymous communication for whistleblowers and organizations</li>
                <li>Large legacy codebase being transformed to a more modern stack whilst keeping existing functionality active</li>
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
                <li>Spearheaded Pathzero's design system, "Terra", and setting it up for success</li>
                <li>Lead the frontend development efforts, including architecture, code quality, and best practices.</li>
                <li>Greenfield projects as well as legacy project maintenance and improvements</li>
              </ul>
                <p className="skills"><strong>Skills:</strong> <em>TypeScript</em>, <em>Vue.js</em>, <em>HTML</em>, <em>CSS</em>, <em>GraphQL</em></p>
            </div>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Engineering Manager</span>
                <span className="role-dates">March 2022 — July 2022</span>
              </div>
              <p className="role-location">Sydney, New South Wales, Australia</p>
              <ul>
                <li>Stepped up into an Engineering Manager role as the team grew and split into multiple teams</li>
                <li>Responsible for running the "Customer Journey" team, overseeing UX and usability improvements within the core application</li>
                <li>Expanded remit to create and develop the in-house design system "Terra", including standards, guidelines, and peripheral tooling</li>
                <li>Returned to an individual contributor role once the team had grown again — which happened after ~5 months</li>
              </ul>
            </div>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Senior Frontend Developer</span>
                <span className="role-dates">July 2021 — March 2022</span>
              </div>
              <p className="role-location">New South Wales, Australia</p>
              <ul>
                <li>Making the world a little greener over at Pathzero, an easy to use carbon communications platform</li>
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
              <details>
                <summary>
                  Worked primarily on Bitbucket Server and related tools, building features and improving the codebase to modern standards.
                </summary>
                  <ul>
                    <li>Primarily worked on Bitbucket Server, building features including diff/source views, pull requests, admin/settings pages, and code editing</li>
                    <li>Built an in-house tool for code quality enforcement</li>
                    <li>Drove the transition to more modern JS and transformed large parts of the codebase using jscodeshift</li>
                    <li>Secondment to the Design System team to represent the broader team's interests</li>
                  </ul>
                </details>
            </div>
          </article>

        </section>

        <section className="resume-section">
          <h2>Previous experience</h2>

          <article className="job">
            <h3>Afterlight Web Development</h3>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Owner</span>
                <span className="role-dates">January 2005 — December 2016</span>
              </div>
              <details>
                <summary>
                  A web development business I ran for over a decade, building custom websites and applications for clients across various industries.
                </summary>
                <ul>
                  <li>Specialised in front-end website development with WordPress development</li>
                  <li>HTML5, CSS, JavaScript (jQuery, React, Backbone.js), with occasional PHP and Node.js</li>
                  <li>Built custom WordPress themes and plugins for clients</li>
                  <li>Managed client projects and provided hosting and technical support</li>
                </ul>
              </details>
            </div>
          </article>

          <article className="job">
            <h3>Orchard Marketing</h3>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Senior Frontend Developer</span>
                <span className="role-dates">March 2012 — August 2013</span>
              </div>
              <details>
                <summary>
                  Worked on a variety of projects for clients in the pharmaceutical, pet, and electronics industries, building front-end interfaces and frameworks to support their digital marketing efforts.
                </summary>
                <ul>
                  <li>Programming front-end interfaces including websites, landing pages, microsites, HTML emails, and mobile websites &amp; applications</li>
                  <li>Introduced LESS CSS into the internal Bootstrap template</li>
                  <li>Created a framework for building HTML5 mobile apps (iPad Detail Aids)</li>
                  <li>Built an internal eDetailing framework based on Backbone, jQuery, Handlebars, HammerJS, and custom components (with Node.js build tasks using Grunt)</li>
                  <li>Built templates for third-party CMS systems (EPiServer)</li>
                </ul>
              </details>
            </div>
          </article>

          <article className="job">
            <h3>BMF Advertising Pty. Ltd.</h3>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Team Lead Developer</span>
                <span className="role-dates">May 2011 — March 2012</span>
              </div>
              <details>
                <summary>
                  Led the development team for a variety of projects for clients in multiple industries.
                </summary>
                <ul>
                  <li>Led the development team and liaised with the Project Management team</li>
                  <li>Wrote documentation and guides</li>
                  <li>Programming front-end interfaces including websites, landing pages, microsites, and HTML emails</li>
                  <li>Built templates for third-party CMS systems (Kentico, BlogEngine.NET, FrogCMS, bespoke .NET solutions)</li>
                </ul>
              </details>
            </div>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Front End Developer</span>
                <span className="role-dates">February 2010 — May 2011</span>
              </div>

              <details>
                <summary>
                  Worked on a variety of projects for clients in multiple industries, building front-end interfaces and frameworks to support their digital marketing efforts.
                </summary>
                <ul>
                  <li>Programming front-end interfaces including websites, landing pages, microsites, and HTML emails</li>
                  <li>XHTML/HTML5, CSS, JavaScript, jQuery</li>
                  <li>Built templates for third-party CMS systems (Kentico, BlogEngine.NET, FrogCMS, bespoke .NET solutions)</li>
                  <li>Ensuring cross-browser compatibility</li>
                </ul>
              </details>
            </div>
          </article>

          <article className="job">
            <h3>The Dubs</h3>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Senior Multimedia Programmer</span>
                <span className="role-dates">March 2007 — February 2010</span>
              </div>
              <details>
                <summary>
                  Worked on a variety of projects for clients in multiple industries, building websites, microsites, and CMS templates.
                </summary>
                <ul>
                  <li>Programming front-end interfaces including websites, landing pages, microsites, HTML emails, and iPhone web applications</li>
                  <li>Ensured markup is semantic, standards-conformant, and accessible</li>
                  <li>Lead frontend developer on a new website built for ING Direct</li>
                  <li>Converted PSDs to standards-compliant, cross-browser-compatible XHTML/CSS/JavaScript/jQuery/AJAX</li>
                  <li>Overseeing implementation of templates into an in-house .NET CMS and third-party CMSs</li>
                </ul>
              </details>
            </div>
          </article>

          <article className="job">
            <h3>Wesley Mission</h3>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Front End Developer</span>
                <span className="role-dates">December 2006 — March 2007</span>
              </div>
              <ul>
                <li>Implementing new templates using standards-compliant code and ensuring accessibility requirements are met</li>
                <li>Converting older templates to standards-compliant code</li>
                <li>Implementation of Google Maps</li>
              </ul>
            </div>
          </article>

          <article className="job">
            <h3>MobileActive</h3>
            <div className="role">
              <div className="role-meta">
                <span className="role-title">Junior PHP Developer</span>
                <span className="role-dates">March 2005 — May 2006</span>
              </div>
              <p className="role-location">Sydney, New South Wales, Australia</p>
              <ul>
                <li>Developing PHP applications on a LAMP platform</li>
                <li>Building PHP intranet applications</li>
                <li>Using HTML, CSS, and JS to build front-ends of sites</li>
              </ul>
            </div>
          </article>
        </section>

        <section className="resume-section">
          <h2>Education</h2>

          <article className="education-entry">
            <div className="role-meta">
              <h3>TAFE NSW</h3>
              <span className="role-dates">February 2002 — March 2005</span>
            </div>
            <p className="role-title">Diploma, Website Development</p>
          </article>

          <article className="education-entry">
            <div className="role-meta">
              <h3>Henry Kendall High School</h3>
              <span className="role-dates">1999 — 2000</span>
            </div>
            <p className="role-title">High School Certificate, Science</p>
          </article>
        </section>
      </main>
    </div>
  )
}

export default App
