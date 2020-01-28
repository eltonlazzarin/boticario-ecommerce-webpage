import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0;
  background: #f8f8ff;
  box-shadow: 0px 1px 0px #ebebeb;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto;

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 20px;
    letter-spacing: 1px;
    color: #656363;
    font-family: 'Arial';
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    margin-right: 18px;
  }

  hr {
    height: 40px;
    box-shadow: 1px 0px 0px #ffffff;
    border: 1px solid #e1e1e1;
  }

  ul {
    display: flex;
  }

  li {
    list-style: none;
    padding: 0 18px;
  }

  a {
    font-size: 16px;
    letter-spacing: 0px;
    text-transform: uppercase;
    color: #7f7f7f;
    font-family: 'Myriad Pro';
    text-decoration: none;
  }

  aside {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 45px;
    border-radius: 22px;
    border: 2px solid #7f7e7e;
    cursor: pointer;

    &:hover {
      width: 135px;
    }
  }

  p {
    font-size: 16px;
    color: #7f7e7e;
    font-family: 'Open Sans';
    font-weight: 600;
    margin-left: 10px;
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 15px;
    }

    hr {
      border: 0;
    }

    ul {
      display: none;
    }

    aside {
      width: 50px;
      height: 25px;
      margin-right: 40px;

      &:hover {
        width: 85px;
      }

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export const HamburgerMenuIcon = styled.div`
  display: none;

  @media (max-width: 450px) {
    display: flex;
  }
`;
