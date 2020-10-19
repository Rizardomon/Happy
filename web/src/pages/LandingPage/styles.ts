import styled from 'styled-components';

import { Link } from 'react-router-dom';

import landingImg from '../../images/landing.svg';
import logoMobile from '../../images/logo-mobile.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 680px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url('${landingImg}') no-repeat 80% center;

  @media screen and (max-width: 480px) {
    background: url('${logoMobile}') no-repeat 50% 20%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const LogoImg = styled.img`
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const MainContent = styled.main`
  max-width: 350px;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const MainH1 = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

export const MainP = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`;

export const Location = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  font-size: 24px;
  line-height: 34px;

  display: flex;
  flex-direction: column;

  text-align: right;

  strong {
    font-weight: 800;
  }

  @media screen and (max-width: 480px) {
    position: initial;
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const ButtonEnterApp = styled(Link)`
  position: absolute;
  right: 0;
  bottom: 0;

  width: 80px;
  height: 80px;
  background: #ffd666;
  border-radius: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;

  &:hover {
    background: #96feff;
  }

  @media screen and (max-width: 480px) {
    position: initial;
    margin-bottom: 20px;
    width: 200px;
    height: 60px;
  }
`;
