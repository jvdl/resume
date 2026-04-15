import { useState } from 'react';
import { Chevron } from './icons/Chevron';
import { AtSymbol } from './icons/AtSymbol';
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
          </ul>
        </header>

        <section className="resume-section summary">
          <h2>Summary</h2>
          <p>
            With over 20 years of web development experience, I am a frontend expert who enjoys building great, accessible UI/UX implementations
            that help make the world a better place.
          </p>
          <p>
            I specialize in JavaScript, TypeScript, CSS, and HTML, and React.
            Using my skills and experience, I focus on accessibility, usability, and user experience to build solutions that make a positive impact.
            I am passionate about working on projects that help developer and team productivity, and I always aim to remain adaptable and flexible.
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
                <li>Spearheaded Pathzero's design system, "Terra", and set it up for success. This allowed the team to build features faster with a more consistent user experience.</li>
                <li>Lead the frontend development efforts, including architecture, code quality, and best practices.</li>
                <li>Greenfield projects as well as legacy project maintenance and improvements</li>
              </ul>
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
              <ul>
                <li>Primarily worked on Bitbucket Server, building features including diff/source views, pull requests, admin/settings pages, and code editing</li>
                <li>Built an in-house tool for code quality enforcement</li>
                <li>Drove the transition to more modern JS and transformed large parts of the codebase using jscodeshift</li>
                <li>Secondment to the Design System team to represent the broader team's interests</li>
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

        <section className="resume-section">
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
