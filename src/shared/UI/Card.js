import React from 'react';
import { Icon } from './Icon';

const cardStyle = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  border: '2px white solid',
  minWidth: '250px',
  width: '25%',
  borderRadius: '1.2rem',
  margin: '15px auto',
  marginTop: '15px',
  padding: '15px 0',
};

export const Card = (props) => {
  const { name, iconClass, category } = props.iconObject;

  return (
    <section style={cardStyle}>
      <Icon name={name} iconClass={iconClass} category={category} />
    </section>
  );
};
