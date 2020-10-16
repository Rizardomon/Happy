import React from 'react';
import { useHistory } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';

import mapMarkerImg from '../../images/map-marker.svg';

import { AsideContainer, AsideImg, AsideFooter, AsideBtn } from './styles';

const AsideSmall: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <AsideContainer>
      <AsideImg src={mapMarkerImg} alt="Happy" />

      <AsideFooter>
        <AsideBtn type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </AsideBtn>
      </AsideFooter>
    </AsideContainer>
  );
};

export default AsideSmall;
