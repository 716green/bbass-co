import React from 'react';
import 'devicon';

const iconStyle = {
  fontSize: '5rem',
};

export const Icon = (props) => {
  const { iconClass } = props;
  return (
    <div>
      <i style={iconStyle} className={iconClass} />
    </div>
  );
};
