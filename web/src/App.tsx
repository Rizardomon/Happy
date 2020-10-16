import React from 'react';

import GlobalStyle from './globalStyles';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
