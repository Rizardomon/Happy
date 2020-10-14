import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import {
  Container,
  ContentWrapper,
  LogoImg,
  MainContent,
  MainH1,
  MainP,
  Location,
  ButtonEnterApp,
} from './styles';

import logoImg from '../../images/logo.svg';

const LandingPage: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <LogoImg src={logoImg} alt="Happy logo" />

        <MainContent>
          <MainH1> Leve felicidade para o mundo</MainH1>
          <MainP>Visite orfanatos e mude o dia de muitas crianças.</MainP>
        </MainContent>

        <Location>
          <strong>São Paulo</strong>
          <span>São Bernardo do Campo</span>
        </Location>

        <ButtonEnterApp to="/app">
          <FiArrowRight size={26} color="rgba(0,0,0,0.6)" />
        </ButtonEnterApp>
      </ContentWrapper>
    </Container>
  );
};

export default LandingPage;
