import React from 'react';

const spacer = {
  display: 'flex',
  alignItems: 'stretch',
  marginTop: '25%',
};
const smallSpacer = {
  display: 'flex',
  alignItems: 'stretch',
  marginTop: '50px',
};

const item = {
  margin: '0 5% 5% 5%',
};

export const Spacer = (props) => {
  return (
    <section style={spacer}>
      <div style={item}>{props.children}</div>
    </section>
  );
};

export const SmallSpacer = (props) => {
  return (
    <section style={smallSpacer}>
      <div style={item}>{props.children}</div>
    </section>
  );
};
