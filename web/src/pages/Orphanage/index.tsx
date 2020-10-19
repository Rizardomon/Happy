import React, { useState, useEffect } from 'react';
// import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import api from '../../services/api';

import AsideSmall from '../../components/AsideSmall';

import {
  Container,
  Main,
  OrphanageDetails,
  OrphanageMainImg,
  OrphanageImgContainer,
  ImgBtn,
  OrphanageDetailsContent,
  MapContainer,
  MapFooter,
  OpenDetailsContainer,
  HourContainer,
  OpenOnContainer,
  DontOpenOnContainer,
  // WhatsBtn,
} from './styles';

import mapIcon from '../../utils/mapIcon';

interface Orphanage {
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  images: Array<{
    id: number;
    url: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then((response) => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <AsideSmall />

      <Main>
        <OrphanageDetails>
          <OrphanageMainImg
            src={orphanage.images[activeImageIndex].url}
            alt={orphanage.name}
          />

          <OrphanageImgContainer>
            {orphanage.images.map((image, index) => {
              return (
                <ImgBtn
                  key={image.id}
                  className={activeImageIndex === index ? 'btn-active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={orphanage.name} />
                </ImgBtn>
              );
            })}
          </OrphanageImgContainer>

          <OrphanageDetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <MapFooter>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude}, ${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </MapFooter>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetailsContainer className="open-details">
              <HourContainer className="hour">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage.opening_hours}
              </HourContainer>
              {orphanage.open_on_weekends ? (
                <OpenOnContainer>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </OpenOnContainer>
              ) : (
                <DontOpenOnContainer>
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </DontOpenOnContainer>
              )}
            </OpenDetailsContainer>

            {/* <WhatsBtn type="button" className="contact-button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </WhatsBtn> */}
          </OrphanageDetailsContent>
        </OrphanageDetails>
      </Main>
    </Container>
  );
};

export default Orphanage;
