import React from 'react';
import { SmallSpacer } from '../shared/UI/Spacer';
import pioneer from '../data/pioneer.png';
// import { Button } from 'react-bulma-components';

import './Resume.css';

const portfolioStyle = {
  display: 'flex',
  alignContent: 'center',
  margin: 'auto',
  flexGrow: 1,
};

export const Portfolio = (props) => {
  return <div style={portfolioStyle}>{props.children}</div>;
};

export const Resume = (props) => {
  return (
    <React.Fragment>
      <div className="resume">
        <header className="masthead">
          <h1>Bob Bass</h1>
          <h4 className="article">
            Founder of DebtOS - The world's first debt collection automation
            platform
            <br />
            <br />
            <a
              href="https://pioneer.app"
              target="_blank"
              rel="noreferrer"
              className="pioneer">
              <img
                width="25px"
                src={pioneer}
                alt="backed by pioneer"
                className="image-left"
              />{' '}
              A 2020 Pioneer Winner
            </a>
          </h4>
        </header>
        <section id="contact">
          <h3>Contact</h3>
          <div className="grid-list">
            <div>
              <h4>Email</h4>
              <a href="mailto:bob@narro.app">bob@narro.app</a>
            </div>
            <div>
              <h4>Phone</h4>
              <a href="tel:bob@narro.app">(716) 983-2079</a>
            </div>
          </div>
        </section>
        <section id="about">
          <h3>About</h3>
          <article className="article">
            <p className="summary">
              My name is Bob. I have over a decade in the consumer credit
              industry with a strong focus on software development and
              relational database management. I build software to create modern
              solutions, historically for antiquated industries such as
              alternative finance, and consumer credit.
            </p>

            <p className="summary-small">
              I am a full-stack software engineer specializing in Node.js,
              front-end JavaScript frameworks, databases (relational, and
              document), modern web development technologies, REST API
              development, and basic DevOps processes. I have founded,
              bootstrapped, established, and sold 2 separate companies between
              2013 and 2019. During that time, I have personally employed
              hundreds of people.
            </p>

            <p className="summary-small">
              Although I am a seasoned entrepreneur and business administrator,
              I'm looking for a technical, non-management, opportunity as a
              software developer. Throughout my entire career, I have had few
              opportunities to work on software projects with a team. My goal is
              to gain more experience working with a team to gain a better
              understanding of the team dynamic in the software space. I am very
              passionate about, and enjoy learning programming languages,
              frameworks, libraries, and development technologies.
            </p>
          </article>
        </section>
        <section id="profiles">
          <h3>Profiles</h3>
          <div className="grid-list">
            <div className="article">
              {/* <h4>LinkedIn</h4> */}
              <a href="https://www.github.com/716green/">GitHub Profile</a>
              <br />
              <a href="https://www.linkedin.com/in/bbass9490/">
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>

        <section id="work">
          <h3>Work</h3>
          <div className="stack">
            <article>
              <header>
                <div className="spaced-list">
                  <h4>DebtOS Inc</h4>
                  <span>
                    <time dateTime="2020-02-28">Feb 2020</time> – Present
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>Lead Software Engineer</strong>
                </div>
              </header>
              <p className="summary">
                DebtOS Inc. is a suite of automation software aimed at the
                Accounts Receivable Management industry. We're helping lenders,
                debt buyers, and collection agencies to increase liquidation,
                compliance, and revenue with the use of modern web technologies.
              </p>
              <p className="summary-small">
                <strong>Database, Server, and ORM</strong>
                <br />I built the core software from the ground up starting with
                a MySQL database that could accommodate new and legacy data. My
                next task was to build a REST API as a middle-layer for
                accessing data from an Express server built on Node.js. I
                prototyped, and integrated a custom ORM tasked with allowing
                developers to modify existing database tables safely while
                logging, backing up, and updating all of the client databases
                simultaneously without downtime.
              </p>
              <p className="summary-small">
                <strong>Front End</strong>
                <br />
                Once the database, server, API, and ORM were operational, I used
                Vue.js and Vuetify to craft a material design inspired
                client-side interface, designed to be familiar to industry
                veterans, while steering them into modern best-practices. I then
                created connections to a number of services such as Stripe,
                SendGrid, Twilio, Firebase, Firestore, and numerous high risk
                payment processors and gateways.
              </p>
              <p className="summary-small">
                <strong>Team and Refactor</strong>
                <br />
                After winning the Pioneer startup competition with this project,
                I hired another Node.js developer to help build integrations to
                third party services. In order to assure productivity for a new
                team member who was unfamiliar with the structure, I refactored
                the back-end codebase from JavaScript to Typescript. This
                allowed for exponentially better intellisense, documentation,
                code navigation, and debugging.
              </p>
              <p className="summary-small">
                <strong>DevOps</strong>
                <br />
                The app was originally hosted across Firebase, Digital Ocean and
                Router Hosting. I was tasked with migrating to Google Cloud to
                consolidate the development process, and then to containerize
                and migrate to Zeet.co for a lower cost to operate.
              </p>
            </article>
            <article>
              <header>
                <div className="spaced-list">
                  <h4>Narro, LLC - d/b/a Narro Automation</h4>
                  <span>
                    <time dateTime="2020-01-31">Jan 2020</time> – Present
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>President, Full Stack Developer</strong>
                </div>
              </header>
              <p className="summary">
                Developing small business automation tools and online utilities
                aimed at financial institutions.
              </p>
              <p className="summary">
                <strong>Consulting Areas: </strong> Vue.js, Node.js, MySQL
              </p>
              <ul className="small-list">
                <li>
                  Review potential client processes and document potential
                  optimizations.
                </li>
                <li>
                  Draft proposal for the client, breaking the job into 3
                  distinct phases.
                </li>
                <li>
                  Leverage a combination of code, no-code solutions, and
                  integrations with SaaS products to develop an admin dashboard
                  for companies to use to manage their businesses from one
                  place.
                </li>
              </ul>
            </article>
            <article>
              <header>
                <div className="spaced-list">
                  <h4>Cyberbytes Inc.</h4>
                  <span>
                    <time dateTime="2019-09-30">Sep 2019</time> –
                    <time dateTime="2020-02-28">Feb 2020</time>
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>Integration Specialist</strong>
                </div>
              </header>
              <p className="summary">
                Business process automation for the SMB space and SaaS
                partnership/integration.
              </p>
              <ul className="small-list">
                <li>
                  Review and document important client processes, current SaaS
                  products, use cases for each product, and potential
                  alternative products.
                </li>
                <li>
                  Draft a visualization of the processes and workflows, as-is,
                  and again as the optimized version which is being pitched.
                  Prepare this visualization into a Slite document to review
                  with the client.
                </li>
                <li>
                  Leverage modern automation technologies to automate the
                  client's processes and workflows. Make modifications as
                  requested, or as new information is presented.
                </li>
              </ul>
            </article>
            <article>
              <header>
                <div className="spaced-list">
                  <h4>Ashland Development, LLC</h4>
                  <span>
                    <time dateTime="2016-01-31">Jan 2016</time> –
                    <time dateTime="2019-12-31">Dec 2019</time>
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>Chief Technology Officer</strong>
                </div>
              </header>
              <p className="summary">ARM Software Solution Implementations</p>
              <ul className="small-list">
                <li>
                  Leveraging solutions using MySQL, the .NET Framework, C#, and
                  SaaS products to maximize the return on investment for
                  consumer debt portfolios.
                </li>
                <li>
                  Integrating and modifying legacy desktop software to improve
                  the productivity of the call center team.
                </li>
                <li>
                  Building proprietary utilities based on PCI compliance,
                  encryption, and productivity to provide a competitive edge
                  against competing agencies.
                </li>
              </ul>
            </article>
            <article>
              <header>
                <div className="spaced-list">
                  <h4>AC Processing, LLC</h4>
                  <span>
                    <time dateTime="2014-04-30">Apr 2014</time> –
                    <time dateTime="2019-09-30">Sep 2019</time>
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>President</strong>
                </div>
              </header>
              <p className="summary">
                Owned and operated a debt collection agency
              </p>
              <ul className="small-list">
                <li>
                  Networking with lenders, debt buyers, debt brokers, and
                  competing agencies to constantly improve our reach within the
                  industry and to source valuable charged-off receivables.
                </li>
                <li>
                  Hiring, training, and team building for an office of 8 to 15
                  call center associates.
                </li>
                <li>
                  Maintaining a profitable business around our average annual
                  revenue of $780k.
                </li>
                <li>
                  I was responsible for Compliance, HR, Accounting, Management,
                  Hiring, Training, Team Building, and Business Development were
                  all as a small-business owner.
                </li>
              </ul>
            </article>
            <article>
              <header>
                <div className="spaced-list">
                  <h4>Ashland Development, LLC</h4>
                  <span>
                    <time dateTime="2011-02-28">Feb 2011</time> –
                    <time dateTime="2016-01-31">Jan 2016</time>
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>Founder and CEO</strong>
                </div>
              </header>
              <p className="summary">
                Operate debt collection agency and provide services for other
                agencies.
              </p>
              <ul className="small-list">
                <li>
                  Ashland Development was similar AC Processing, but with more
                  of a focus on providing technical services for other agencies
                  to supplement the strategic investments.
                </li>
                <li>
                  Building on-site and remote servers for the Accounts
                  Receivable Management industry.
                </li>
                <li>
                  Consulting, Integration, and Reporting services for debt
                  related startups.
                </li>
                <li>
                  Database migration (on-site to cloud), and providing ongoing
                  database administration contracts for cloud-based servers.
                </li>
              </ul>
            </article>
          </div>
        </section>
        <section id="education">
          <h3>Education</h3>
          <div className="stack">
            <article>
              <header>
                <div className="spaced-list">
                  <h4>Michigan State University</h4>
                  <span>
                    <time dateTime="2015-12-31">Dec 2015</time> –
                    <time dateTime="2016-12-31">Dec 2016</time>
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>Web/Multimedia Management and Webmaster</strong>
                </div>
              </header>
              <p className="summary">Web Development Capstone Program</p>
            </article>
            <article>
              <header>
                <div className="spaced-list">
                  <h4>University of Michigan</h4>
                  <span>
                    <time dateTime="2016-12-31">Dec 2016</time> –
                    <time dateTime="2017-12-31">Dec 2017</time>
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>Video Game Development with Unity3d and C#</strong>
                </div>
              </header>
              <p className="summary">
                Certificate - Unity Game Development Capstone
              </p>
            </article>
            <article>
              <header>
                <div className="spaced-list">
                  <h4>Erie Community College</h4>
                  <span>
                    <time dateTime="2009-12-31">Dec 2009</time> –
                    <time dateTime="2010-12-31">Dec 2010</time>
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>Computer Science</strong>
                </div>
              </header>
              <p className="summary">Certificate (Multimedia - Web Design)</p>
            </article>
            <article>
              <header>
                <div className="spaced-list">
                  <h4>Niagara County Community College</h4>
                  <span>
                    <time dateTime="2010-12-31">Dec 2010</time> –
                    <time dateTime="2012-12-31">Dec 2012</time>
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>Audio Engineering</strong>
                </div>
              </header>
              <p className="summary">
                Certificates (Pro Tools I, Pro Tools II)
              </p>
            </article>
            <article>
              <header>
                <div className="spaced-list">
                  <h4>Udemy Alumni</h4>
                  <span>
                    <time dateTime="2021-12-31">Dec 2021</time> –
                    <time dateTime="2021-12-31">Dec 2021</time>
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>Computer Programming, Specific Applications</strong>
                </div>
              </header>
              <p className="summary">Certificate</p>
            </article>
            <article>
              <header>
                <div className="spaced-list">
                  <h4>Zero To Mastery Academy</h4>
                  <span>
                    <time dateTime="2020-12-31">Dec 2020</time> –
                    <time dateTime="2021-12-31">Dec 2021</time>
                  </span>
                </div>
                <div className="spaced-list">
                  <strong>Computer Programming, Specific Applications</strong>
                </div>
              </header>
              <p className="summary">Deno Certificate</p>
            </article>
          </div>
        </section>
        <section id="publications">
          <h3>Publications</h3>
          <div className="stack">
            <article>
              <header>
                <div className="spaced-list">
                  <a
                    href="https://coda.io/@bob/debt-buyer"
                    target="_blank"
                    rel="noreferrer">
                    <h4>How to become a debt buyer - A Beginner's Guide</h4>
                  </a>
                  <time dateTime="2016-01-01">Jan 2016</time>
                </div>
                <div className="spaced-list">
                  <span>
                    Published by <strong>Bob Bass</strong>
                  </span>
                </div>
              </header>
              <p className="summary">
                This article was originally published for the RMA International
                Summit (formerly known as the DBA International Summit). This
                was adapted to a digital article and expanded at the request of
                the readers. This serves as a lead-funnel to this day.
              </p>
            </article>
          </div>
        </section>
        {/* <section id="skills"> */}
        {/* <div className="grid-list"> */}
        <section id="technologies" className="grid-list">
          <h3>Technologies</h3>
          <div>
            <div className="soft-skills">Node.js</div>
          </div>
          <div>
            <div className="soft-skills">Vue.js</div>
          </div>
          <div>
            <div className="soft-skills">React</div>
          </div>
          <div>
            <div className="soft-skills">MySQL</div>
          </div>
          <div>
            <div className="soft-skills">Firebase</div>
          </div>
          <div>
            <div className="soft-skills">Firestore</div>
          </div>
          <div>
            <div className="soft-skills">JavaScript</div>
          </div>
          <div>
            <div className="soft-skills">Typescript</div>
          </div>
          <div>
            <div className="soft-skills">HTML5</div>
          </div>
          <div>
            <div className="soft-skills">CSS3</div>
          </div>
          <div>
            <div className="soft-skills">GitHub</div>
          </div>
          <div>
            <div className="soft-skills">Linux</div>
          </div>
          <div>
            <div className="soft-skills">Vuetify</div>
          </div>
          <div>
            <div className="soft-skills">SQL & NoSQL</div>
          </div>
        </section>
        <SmallSpacer />
        <section id="skills" className="grid-list">
          <h3>Skills</h3>
          <div>
            <div className="soft-skills">Full-Stack Development</div>
          </div>
          <div>
            <div className="soft-skills">Start-ups</div>
          </div>
          <div>
            <div className="soft-skills">Programming</div>
          </div>
          <div>
            <div className="soft-skills">Airtable</div>
          </div>
          <div>
            <div className="soft-skills">Integromat</div>
          </div>
          <div>
            <div className="soft-skills">Accounts Receivable</div>
          </div>
          <div>
            <div className="soft-skills">VS Code</div>
          </div>
          <div>
            <div className="soft-skills">Zapier</div>
          </div>
          <div>
            <div className="soft-skills">Algorithms</div>
          </div>
          <div>
            <div className="soft-skills">Data Modeling</div>
          </div>
          <div>
            <div className="soft-skills">Microsoft Excel</div>
          </div>
          <div>
            <div className="soft-skills">Databases</div>
          </div>
          <div>
            <div className="soft-skills">Google Sheets</div>
          </div>
          <div>
            <div className="soft-skills">Computer Science</div>
          </div>
          <div>
            <div className="soft-skills">Linux</div>
          </div>
          <div>
            <div className="soft-skills">Automation</div>
          </div>
          <div>
            <div className="soft-skills">Web Applications</div>
          </div>
          <div>
            <div className="soft-skills">Visual Studio</div>
          </div>
          <div>
            <div className="soft-skills">Debt Consulting</div>
          </div>
          <div>
            <div className="soft-skills">Software Development</div>
          </div>
          <div>
            <div className="soft-skills">Executive Management</div>
          </div>
          <div>
            <div className="soft-skills">Version Control</div>
          </div>
          <div>
            <div className="soft-skills">Database Management</div>
          </div>
          <div>
            <div className="soft-skills">Corporate Development</div>
          </div>
          <div>
            <div className="soft-skills">Process Automation</div>
          </div>
          <div>
            <div className="soft-skills">Git</div>
          </div>
          <div>
            <div className="soft-skills">Database Design</div>
          </div>
        </section>
        <section id="languages">
          <h3>Languages</h3>
          <div className="grid-list">
            <div>
              <h4>English</h4>
              Native Speaker
            </div>
          </div>
        </section>
        <section id="references">
          <h3>References</h3>
          <div className="stack">
            <blockquote>
              <p>
                It is great to be a part of Bob's professional network. I've
                worked with him for about 4 years, he is very knowledgeable in
                all things technology related. It's a pleasure and honor to
                recommend you to others as a dedicated professional.
              </p>
              <p>
                <cite>
                  Ashley Campanella{' '}
                  <a
                    className="citeLink"
                    href="https://www.linkedin.com/company/arbeit-software/"
                    target="_blank"
                    rel="noreferrer">
                    {' '}
                    Arbeit Software
                  </a>
                </cite>
              </p>
            </blockquote>
            <br />
          </div>
        </section>
        <br />
      </div>
      <section>
        {/* <Button className="btnStyleSection" color="success">
          {props.children}
        </Button> */}
      </section>
    </React.Fragment>
  );
};
