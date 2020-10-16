import React, { useEffect, useState } from 'react';

import { PageMap, ButtonPopup, ButtonMap } from './styles';

import { FiPlus, FiArrowRight } from 'react-icons/fi';

import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapMarkerImg from '../../images/map-marker.svg';
import mapIcon from '../../utils/mapIcon';

import api from '../../services/api';

interface Orphanage {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    api.get('orphanages').then((response) => {
      setOrphanages(response.data);
    });
  }, []);

  return (
    <PageMap>
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>São Bernardo do Campo</span>
        </footer>
      </aside>

      <Map
        center={[-23.6667916, -46.5644216]}
        zoom={17}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        {orphanages.map((orphanage) => {
          return (
            <Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                className="map-popup"
              >
                {orphanage.name}
                <ButtonPopup to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </ButtonPopup>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <ButtonMap to="/orphanages/create">
        <FiPlus size={32} color="#FFF" />
      </ButtonMap>
    </PageMap>
  );
};

export default OrphanagesMap;
