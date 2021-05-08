import React from 'react';
import { icons } from '../data/icons';
import pioneer from '../data/pioneer.png';
import { Button } from 'react-bulma-components';

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

// export const Resume = () => {
//   return <div>{resume}</div>;
// };

//     <title>Bob Bass</title>
//     <meta name="description" content="I have over a decade in the ARM industry with a strong focus on software development and relational database management. I have used the AR industry as a vehicle to learn and implement software solutions, both proprietary and cross-industry to find unique solutions to outdated problems within alternative finance.
// I am currently expanding my skill set into automation while constantly staying on the cutting edge of the .NET Framework and MySQL as well as more recently Zapier and Airtable while implimenting custom CRM and inventory management solutions.">

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
            <p>
              I have over a decade in the ARM industry with a strong focus on
              software development and relational database management. I have
              used the AR industry as a vehicle to learn and implement software
              solutions, both proprietary and cross-industry to find unique
              solutions to outdated problems within alternative finance.
            </p>
            <br />
            <p>
              I am currently expanding my skill set into automation while
              constantly staying on the cutting edge of the .NET Framework and
              MySQL as well as more recently Zapier and Airtable while
              implimenting custom CRM and inventory management solutions.
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
                Accounts Receivable Management industry including
                DebtCollect.io, DebtPortfol.io, and Debt - Out of Office.We're
                helping lenders, debt buyers, and collection agencies to
                increase liquidation and compliance to increase revenue and
                compliance.
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
                partnership/integration
              </p>
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
                  <strong>Computer Games and Programming Skills</strong>
                </div>
              </header>
              <p className="summary">Certificate</p>
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
              <p className="summary">Certificate (Web Design)</p>
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
                the readers.
              </p>
            </article>
          </div>
        </section>
        <section id="skills">
          <h3>Technologies</h3>
          <div className="grid-list">
            {icons.map((icon) => {
              return (
                <div>
                  <h4>{icon.title}</h4>
                </div>
              );
            })}
          </div>
          <div className="grid-list">
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
              <div className="soft-skills">MySQL Workbench</div>
            </div>
            <div>
              <div className="soft-skills">NoSQL</div>
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
              <div className="soft-skills">Google Suite</div>
            </div>
            <div>
              <div className="soft-skills">SQL</div>
            </div>
            <div>
              <div className="soft-skills">Web Applications</div>
            </div>
            <div>
              <div className="soft-skills">Visual Studio</div>
            </div>
            <div>
              <div className="soft-skills">Cloud Firestore</div>
            </div>
            <div>
              <div className="soft-skills">Vuetify</div>
            </div>
            <div>
              <div className="soft-skills">Debt Collection</div>
            </div>
            <div>
              <div className="soft-skills">Software Development</div>
            </div>
            <div>
              <div className="soft-skills">MongoDB</div>
            </div>
            <div>
              <div className="soft-skills">Executive Management</div>
            </div>
            <div>
              <div className="soft-skills">Version Control</div>
            </div>
            <div>
              <div className="soft-skills">Database Administration</div>
            </div>
            <div>
              <div className="soft-skills">
                Database Management System (DBMS)
              </div>
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
            <div>
              <div className="soft-skills">Relational Databases</div>
            </div>
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
          </div>
        </section>
        <br />
      </div>
      <section>
        <Button className="btnStyleSection" color="success">
          {props.children}
        </Button>
      </section>
    </React.Fragment>
  );
};
