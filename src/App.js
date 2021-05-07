import './App.css';

import React, { useRef } from 'react';

import { icons, deviconsLogo } from './data/icons';
import Technologies from './sections/Technologies';
import image from './data/bob-headshot-cartoon.png';
import { AnimatedText } from './animated/AnimatedText';

import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';

const btnStyle = {
  width: '50%',
  display: 'flex',
  margin: 'auto',
};

function App() {
  const technologyRef = useRef(null);
  const resumeRef = useRef(null);
  const technologiesScrollHandler = () => {
    technologyRef.current.scrollIntoView();
  };
  const resumeScrollHandler = () => {
    resumeRef.current.scrollIntoView();
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
      </section>
      <section className="app-body" ref={resumeRef}>
        <h2 className="stitle">Secondary Technologies</h2>
        <Technologies icons={icons} category={'able'} />
      </section>
      <section className="app-body" ref={resumeRef}>
        <h2 className="stitle">Other Technologies</h2>
        <Technologies icons={icons} category={'willing'} />
      </section>
      <section className="app-body" ref={resumeRef}>
        <h2 className="stitle">Resume</h2>
        {/* <Technologies icons={icons} category={'able'} /> */}
      </section>
      <div className="deviconLogoStyle">{deviconsLogo()}</div>
    </div>
  );
}

export default App;
