import React from 'react';

import { Container } from './styles';

import data from '../../data/links.json';

const MenuContent = () => {
  return (
    <Container>
      {data.map((link, index) => (
        <a href={link.navLink} key={index}>
          {link.name}
        </a>
      ))}
    </Container>
  );
};

export default MenuContent;
