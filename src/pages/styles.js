import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 830px;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 940px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
  }

  hr {
    width: 180px;
    border: 1px solid #f8f8ff;
    margin: 4px 130px;
  }

  h2 {
    font-size: 20px;
    letter-spacing: 1px;
    color: #656363;
    text-transform: uppercase;
    font-family: 'Myriad Pro';
    text-align: center;
  }

  main {
    margin-top: 20px;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;

    @media only screen and (max-width: 450px) {
      grid-template-columns: 1fr;
    }
  }

  article {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 368px;
    background: #f2f2f2;
    border: 4px solid #f7f6f6;
    cursor: pointer;

    &:hover {
      background: #fff;
    }
  }

  img {
    width: 112px;
    height: 112px;
    margin-bottom: 70px;
  }

  p {
    width: 260px;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 30px;
    color: #717171;
    font-family: 'Myriad Pro';
    text-align: center;
  }

  @media (max-width: 450px) {
    width: 100%;

    main {
      padding: 0 30px;
    }

    hr {
      width: 0;
      border: 0;
      margin: 0;
    }

    h2 {
      font-size: 20px;
      letter-spacing: 1px;
      color: #656363;
      text-transform: uppercase;
      font-family: 'Myriad Pro';
      text-align: center;
    }
  }
`;
