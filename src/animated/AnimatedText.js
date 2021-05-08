import React from 'react';
import Typist from 'react-typist';
import './AnimatedText.css';

const btnContainer = {
  width: '500px',
};

const nonTechContainer = (side) => {
  return {
    textAlign: side,
    flexGrow: 1,
  };
};

export const AnimatedText = (props) => {
  return (
    <div>
      <div className="columns">
        {/* <div className="text"> */}
        <span style={nonTechContainer('right')} className="column">
          I'm a
        </span>
        <Typist
          cursor={{
            show: false,
            blink: false,
            element: '',
            hideWhenDone: true,
            hideWhenDoneDelay: 0,
          }}>
          <span className="column">
            <Typist.Backspace count={0} delay={600} />
            <strong className="technology-name">Vue.js</strong>
            <Typist.Backspace count={6} delay={300} />
            <strong className="technology-name">React.js</strong>
            <Typist.Backspace count={8} delay={300} />
            <strong className="technology-name">Node.js</strong>
            <Typist.Backspace count={7} delay={300} />
            <strong className="technology-name">JavaScript</strong>
            <Typist.Backspace count={10} delay={300} />
            <strong className="technology-name">Typescript</strong>
            <Typist.Backspace count={10} delay={300} />
            <strong className="technology-name">MySQL</strong>
            <Typist.Backspace count={6} delay={300} />
            <strong className="technology-name">Firebase</strong>
            <Typist.Backspace count={8} delay={300} />
            <strong className="technology-name">Full Stack</strong>
          </span>
        </Typist>
        <span style={nonTechContainer('left')} className="column">
          developer
        </span>
        {/* </div> */}
      </div>
      <div className="buttons" style={btnContainer}>
        {props.children}
      </div>
    </div>
  );
};

export default AnimatedText;
