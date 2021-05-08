import React from 'react';
import { Icon } from './Icon';

import './Card.css';

const cardStyle = {
  backgroundColor: 'black',
  borderRadius: '1rem',
};

export const Card = (props) => {
  const { name, iconClass, category } = props.iconObject;

  return (
    <section style={cardStyle} className="card">
      <Icon name={name} iconClass={iconClass} category={category} />
    </section>
  );
};
