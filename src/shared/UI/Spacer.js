import React from 'react';

const spacer = {
  display: 'flex',
  alignItems: 'stretch',
  marginTop: '25%',
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
