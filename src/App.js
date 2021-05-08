import './App.css';

import React, { useRef, useEffect } from 'react';

import reactLogo from './data/reactLogo.png';

import { icons, deviconsLogo } from './data/icons';
// import { icons } from './data/icons';
import Technologies from './sections/Technologies';
import image from './data/bob-headshot-cartoon.png';
import { AnimatedText } from './animated/AnimatedText';
import { Spacer } from './shared/UI/Spacer';
import { Resume } from './sections/Resume';
import { Portfolio } from './sections/Resume';

import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';

const btnStyle = {
  width: '40%',
  display: 'flex',
  flexGrow: 1,
  alignSelf: 'auto',
  margin: '10px',
};
const btnStyleSection = {
  width: '40%',
  display: 'flex',
  flexGrow: 1,
  alignSelf: 'auto',
  margin: 'auto',
};

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const technologyRef = useRef(null);
  const secondaryRef = useRef(null);
  const otherRef = useRef(null);
  const resumeRef = useRef(null);
  const portfolioRef = useRef(null);
  const technologiesScrollHandler = () => {
    console.log(technologyRef);
    technologyRef.current.scrollIntoView();
  };
  const resumeScrollHandler = () => {
    console.log(resumeRef);
    resumeRef.current.scrollIntoView();
  };
  const secondaryScrollHandler = () => {
    console.log(secondaryRef);
    secondaryRef.current.scrollIntoView();
  };
  const otherScrollHandler = () => {
    console.log(otherRef);
    otherRef.current.scrollIntoView();
  };
  const portfolioScrollHandler = () => {
    console.log(otherRef);
    portfolioRef.current.scrollIntoView();
  };

  return (
    <div className="App">
      <header className="app-header">
        <img className="avatar" src={image} alt="headshot" />
        <h1>Bob Bass</h1>
        <AnimatedText>
          <Button
            onClick={technologiesScrollHandler}
            style={btnStyle}
            color="primary">
            TECHNOLOGIES
          </Button>
          <Button
            onClick={resumeScrollHandler}
            style={btnStyle}
            color="secondary">
            RESUME
          </Button>
        </AnimatedText>
      </header>
      <section className="app-body" ref={technologyRef}>
        <h2 className="stitle">Preferred Technologies</h2>
        <Technologies icons={icons} category={'preferred'} />
        <Spacer>TESTING</Spacer>
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
          OTHER TECHNOLOGIES
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
      </section>
      <section className="app-body" ref={resumeRef}>
        {/* <h2 className="stitle">Resume</h2> */}
        <Resume>
          <div onClick={portfolioScrollHandler}>PORTFOLIO</div>
        </Resume>
      </section>
      <section className="app-body" ref={portfolioRef}>
        <h2 className="stitle">Portfolio</h2>
        <br />
        <br />
        <Portfolio>
          <section className="react">
            <h3>This app is in progress and incomplete</h3>
            <h3>Please check back at a later time</h3>
            <hr />
            <h1>This app is built with React</h1>
            <img src={reactLogo} alt="react logo" className="App-logo" />
            <div>
              <h1>Icons courtesy of DevIcons</h1>
              <div>{deviconsLogo()}</div>
            </div>
          </section>
        </Portfolio>
        {/* <div className="App-logo">
        </div> */}
      </section>
    </div>
  );
}

export default App;
