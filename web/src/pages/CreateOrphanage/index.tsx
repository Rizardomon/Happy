import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';

import { FiPlus } from 'react-icons/fi';

import AsideSmall from '../../components/AsideSmall';

import {
  Container,
  Main,
  FormCreateOrphanage,
  FieldsetFirst,
  FieldsetLegend,
  InputBlock,
  InputLabel,
  Input,
  TextArea,
  UploadedImgContainer,
  BtnAddImg,
  FieldsetSecond,
  BtnSelectWrapper,
  BtnSubmit,
} from './styles';

import mapIcon from '../../utils/mapIcon';

const CreateOrphanage: React.FC = () => {
  return (
    <Container>
      <AsideSmall />

      <Main>
        <FormCreateOrphanage className="create-orphanage-form">
          <FieldsetFirst>
            <FieldsetLegend>Dados</FieldsetLegend>

            <Map
              center={[-27.2092052, -49.6401092]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker
                interactive={false}
                icon={mapIcon}
                position={[-27.2092052, -49.6401092]}
              />
            </Map>

            <InputBlock className="input-block">
              <InputLabel htmlFor="name">Nome</InputLabel>
              <Input id="name" />
            </InputBlock>

            <InputBlock className="input-block">
              <InputLabel htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </InputLabel>
              <TextArea id="name" maxLength={300} />
            </InputBlock>

            <InputBlock className="input-block">
              <InputLabel htmlFor="images">Fotos</InputLabel>

              <UploadedImgContainer className="uploaded-image"></UploadedImgContainer>

              <BtnAddImg className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </BtnAddImg>
            </InputBlock>
          </FieldsetFirst>

          <FieldsetSecond>
            <FieldsetLegend>Visitação</FieldsetLegend>

            <InputBlock className="input-block">
              <InputLabel htmlFor="instructions">Instruções</InputLabel>
              <TextArea id="instructions" />
            </InputBlock>

            <InputBlock className="input-block">
              <InputLabel htmlFor="opening_hours">Nome</InputLabel>
              <Input id="opening_hours" />
            </InputBlock>

            <InputBlock className="input-block">
              <InputLabel htmlFor="open_on_weekends">
                Atende fim de semana
              </InputLabel>

              <BtnSelectWrapper>
                <button type="button" className="active">
                  Sim
                </button>
                <button type="button">Não</button>
              </BtnSelectWrapper>
            </InputBlock>
          </FieldsetSecond>

          <BtnSubmit type="submit">Confirmar</BtnSubmit>
        </FormCreateOrphanage>
      </Main>
    </Container>
  );
};

export default CreateOrphanage;
