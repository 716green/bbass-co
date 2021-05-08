import React from 'react';
import { Card } from '../shared/UI/Card';

import './Technologies.css';

const technologiesStyle = {
  paddingTop: '15px',
};

const Technologies = (props) => {
  return (
    <div className="technologies" style={technologiesStyle}>
      {props.icons.map((icon, i) => {
        return icon.category === props.category ? (
          <Card iconObject={icon} key={i}>
            {icon.name}
          </Card>
        ) : null;
      })}
    </div>
  );
};

export default Technologies;
