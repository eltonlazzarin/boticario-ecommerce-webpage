import React, { Component } from 'react';

import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import MenuContent from '../MenuContent';

import { Container, Content, HamburgerMenuIcon } from './styles';

import cart from '../../assets/cart.svg';

export default class Header extends Component {
  state = {
    menuOpen: false,
  };

  openMenu() {
    this.setState({ menuOpen: true });
  }

  closeMenu() {
    this.setState({ menuOpen: false });
  }

  render() {
    return (
      <Container>
        <Content>
          <CheeseburgerMenu
            isOpen={this.state.menuOpen}
            closeCallback={this.closeMenu.bind(this)}
          >
            <MenuContent closeCallback={this.closeMenu.bind(this)} />
          </CheeseburgerMenu>

          <HamburgerMenuIcon>
            <HamburgerMenu
              isOpen={this.state.menuOpen}
              menuClicked={this.openMenu.bind(this)}
              width={20}
              height={12}
              strokeWidth={3}
              rotate={0}
              color="#656363"
              borderRadius={0}
              animationDuration={0.5}
            />
          </HamburgerMenuIcon>

          <nav>
            <h1>Minha Loja</h1>
            <hr />
            <ul>
              <li>
                <a href="/">Perfurmaria</a>
              </li>
              <li>
                <a href="/">Maquiagem</a>
              </li>
              <li>
                <a href="/">Cabelos</a>
              </li>
              <li>
                <a href="/">Infantil</a>
              </li>
            </ul>
          </nav>

          <aside>
            <img src={cart} alt="Cart" />
          </aside>
        </Content>
      </Container>
    );
  }
}
