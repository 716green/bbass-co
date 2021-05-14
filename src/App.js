import './App.css';

import React, {
  useRef,
  useEffect,
  // useState
} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useParams,
} from 'react-router-dom';

import reactLogo from './data/reactLogo.png';

// import { icons } from './data/icons';
// import Technologies from './sections/Technologies';
import image from './data/bob-headshot-cartoon.png';
import { AnimatedText } from './animated/AnimatedText';
// import { Spacer } from './shared/UI/Spacer';
import { Resume } from './sections/Resume';
import { Portfolio } from './sections/Resume';

import 'bulma/css/bulma.min.css';

import { Button } from 'react-bulma-components';

// const btnStyleSection = {
//   width: '40%',
//   display: 'flex',
//   flexGrow: 1,
//   alignSelf: 'auto',
//   margin: 'auto',
//   marginBottom: '10px',
// };

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const technologyRef = useRef(null);
  // const secondaryRef = useRef(null);
  // const otherRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  const portfolioScrollHandler = () => {
    console.log(technologyRef);
    portfolioRef.current.scrollIntoView();
  };
  // const technologiesScrollHandler = () => {
  //   console.log(technologyRef);
  //   technologyRef.current.scrollIntoView();
  // };
  const resumeScrollHandler = () => {
    console.log(resumeRef);
    resumeRef.current.scrollIntoView();
  };
  // const secondaryScrollHandler = () => {
  //   console.log(secondaryRef);
  //   secondaryRef.current.scrollIntoView();
  // };
  // const otherScrollHandler = () => {
  //   console.log(otherRef);
  //   otherRef.current.scrollIntoView();
  // };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/resume"
            children={
              <Resume>
                <Link to="/">PORTFOLIO</Link>
              </Resume>
            }>
            {/* <Resume /> */}
          </Route>
        </Switch>
        {/* {resumeOnly ? (
        ) : ( */}
        <Switch>
          <Route path="/" exact>
            <div>
              <header className="app-header">
                <img className="avatar" src={image} alt="headshot" />
                <h1>Robert Bass</h1>
                <AnimatedText>
                  <div className="btns">
                    <Button
                      onClick={portfolioScrollHandler}
                      // style={btnStyle}
                      color="primary">
                      PORTFOLIO
                    </Button>
                    <Button
                      onClick={resumeScrollHandler}
                      // style={btnStyle}
                      color="secondary">
                      RESUME
                    </Button>
                  </div>
                </AnimatedText>
              </header>
              {/* <section className="app-body" ref={technologyRef}>
                <h2 className="stitle">Preferred Technologies</h2>
                <Technologies icons={icons} category={'preferred'} />
                <Spacer></Spacer>
                <Button
                  onClick={secondaryScrollHandler}
                  style={btnStyleSection}
                  color="primary">
                  SECONDARY TECH
                </Button>
              </section>
              <section className="app-body" ref={secondaryRef}>
                <h2 className="stitle">Secondary Technologies</h2>
                <Technologies icons={icons} category={'able'} />
                <Spacer></Spacer>
                <Button
                  onClick={otherScrollHandler}
                  style={btnStyleSection}
                  color="primary">
                  OTHER TECH
                </Button>
              </section>
              <section className="app-body" ref={otherRef}>
                <h2 className="stitle">Other Technologies</h2>
                <Technologies icons={icons} category={'willing'} />
                <Spacer></Spacer>
                <Button
                  onClick={resumeScrollHandler}
                  style={btnStyleSection}
                  color="secondary">
                  RESUME
                </Button>
              </section> */}
              <section className="app-body" ref={resumeRef}>
                {/* <h2 className="stitle">Resume</h2> */}
                <Resume />
                {/* <div onClick={portfolioScrollHandler}>PORTFOLIO</div> */}
                {/* </Resume> */}
              </section>
              <section className="app-body" ref={portfolioRef}>
                <h2 className="stitle">Portfolio</h2>
                <br />
                <br />
                <Portfolio>
                  <section className="react">
                    <ul className="portfolio">
                      <li className="portfolio-li">
                        <a
                          className="port-link"
                          href="https://github.com/716green"
                          target="_blank"
                          rel="noreferrer">
                          GitHub Profile
                        </a>
                        <div className="summary">
                          Breakdown of projects and programming languages
                        </div>
                        <br />
                        <a
                          className="port-link"
                          href="https://narro.dev"
                          target="_blank"
                          rel="noreferrer">
                          GitHub Profile - Vue.js PWA Implimentation
                        </a>
                        <div className="summary">
                          Breakdown of projects and programming languages
                        </div>
                      </li>
                      <li className="portfolio-li">
                        <a
                          className="port-link"
                          href="https://debtcollect.io"
                          target="_blank"
                          rel="noreferrer">
                          DebtOS
                        </a>
                        <div className="summary">
                          Large full-stack application currently in private beta
                        </div>
                      </li>
                      <li className="portfolio-li">
                        <a
                          className="port-link"
                          href="https://projectnext.app"
                          target="_blank"
                          rel="noreferrer">
                          Project NextApp
                        </a>
                        <div className="summary">
                          On Hold - A social network for software developers who
                          want to learn new technologies by building apps
                        </div>
                      </li>
                      {/* </ul> */}
                      {/* <strong>Companies</strong> */}
                      {/* <ul> */}
                      <li className="portfolio-li">
                        <a
                          className="port-link"
                          href="https://narro.app"
                          target="_blank"
                          rel="noreferrer">
                          Narro Automation
                        </a>
                        <div className="summary">
                          {' '}
                          Landing Page for Narro Automation
                        </div>
                      </li>
                      <li className="portfolio-li">
                        <a
                          className="port-link"
                          href="https://acprocess.com"
                          target="_blank"
                          rel="noreferrer">
                          AC Processing
                        </a>
                        <div className="summary">
                          Closed - Landing Page for AC Processing
                        </div>
                      </li>
                      <li className="portfolio-li">
                        <a
                          className="port-link"
                          href="http://backslash.surge.sh"
                          target="_blank"
                          rel="noreferrer">
                          Backslash
                        </a>
                        <div className="summary">
                          In Progress - A productivity tool to be used for
                          keyboard-only navigation upon loading a browser
                        </div>
                      </li>
                      <li className="portfolio-li">
                        <a
                          className="port-link"
                          href="https://www.youtube.com/watch?v=leN03eAjtfk&list=PL-JFZnRQGwR1PEuZ0k3qd27rlRMNQAwuU"
                          target="_blank"
                          rel="noreferrer">
                          Learn To Code in 2021 - Video Series
                        </a>
                        <div className="summary">
                          In Progress - A YouTube video series to teach software
                          development
                        </div>
                      </li>
                      <li>
                        <div className="built-with">
                          <h1>This app is built with React & Bulma</h1>
                          <img
                            src={reactLogo}
                            alt="react logo"
                            className="App-logo"
                          />
                        </div>
                      </li>
                    </ul>
                    {/* <div>
              <h1>Icons courtesy of DevIcons</h1>
              <div>{deviconsLogo()}</div>
            </div> */}
                  </section>
                </Portfolio>
              </section>
            </div>
            {/* )} */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
