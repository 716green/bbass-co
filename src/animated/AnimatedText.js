import React from 'react';
import Typist from 'react-typist';

const btnContainer = {
  width: '100%',
  display: 'flex',
  margin: 'auto',
};

export const AnimatedText = (props) => {
  return (
    <div>
      <Typist
        cursor={{
          show: true,
          blink: false,
          element: '',
          hideWhenDone: true,
          hideWhenDoneDelay: 0,
        }}>
        <span>Front End</span>
        <Typist.Backspace count={9} delay={200} />
        <span>Back End</span>
        <Typist.Backspace count={8} delay={200} />
        <span>Database</span>
        <Typist.Backspace count={8} delay={200} />
        <span>DevOps</span>
        <Typist.Backspace count={6} delay={200} />
        <span>Full Stack Developer</span>
        <Typist.Delay ms={750} />
        <br />
        <span>Specializing in MySQL</span>
        <Typist.Backspace count={5} delay={200} />
        <span>Express</span>
        <Typist.Backspace count={7} delay={200} />
        <span>Vue</span>
        <Typist.Backspace count={3} delay={200} />
        <span>Node.js</span>
        <Typist.Backspace count={7} delay={200} />
        <span>Firebase/Firestore</span>
        <Typist.Backspace count={18} delay={200} />
        <span>the MEVN+ Stack</span>
        <Typist.Delay ms={750} />
        <br />
        <span>Proficient in JavaScript</span>
        <Typist.Backspace count={10} delay={200} />
        <span>Typescript</span>
        <Typist.Backspace count={10} delay={200} />
        <span>HTML5/CSS3</span>
        <Typist.Backspace count={10} delay={200} />
        <span>Modern Web Technologies</span>
        <Typist.Delay ms={750} />
        <br />
        <span>Interested in Rust</span>
        <Typist.Backspace count={4} delay={200} />
        <span>Golang</span>
        <Typist.Backspace count={6} delay={200} />
        <span>C++</span>
        <Typist.Backspace count={3} delay={200} />
        <span>Docker</span>
        <Typist.Backspace count={6} delay={200} />
        <span>Flutter</span>
        <Typist.Backspace count={7} delay={200} />
        <span>a bit of everything</span>
        <br />

        <div className="buttons" style={btnContainer}>
          {props.children}
        </div>
      </Typist>
    </div>
  );
};

export default AnimatedText;
