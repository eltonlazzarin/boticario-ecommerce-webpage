import React from 'react';

import { Container, Content } from './styles';

import products from '../data/products.json';

export default function Main() {
  return (
    <Container>
      <Content>
        <div>
          <hr />
          <hr />
        </div>
        <h2>Últimos Produtos</h2>
        <main>
          {products.map((product, index) => (
            <article key={index}>
              <img src={product.images.imageUrl} alt="Img" />
              <p>{product.name}</p>
              <p>R$ {product.Value}</p>
            </article>
          ))}
        </main>
      </Content>
    </Container>
  );
}
