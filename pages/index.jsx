import React from 'react';

import PlanetCard from '../components/PlanetCard/PlanetCard';

import * as GS from './globalStyles';

const HomePage = () => {
  return (
    <GS.Main>
      <GS.Wrap>
        <h1>Star Wars</h1>
        <GS.CardsContainer>
          <PlanetCard name="Tatooine" image="tatooine.jpeg" slug="tatooine" />
          <PlanetCard name="Alderaan" image="alderaan.jpeg" slug="alderaan" />
          <PlanetCard name="Yavin" image="yavin.jpeg" slug="yavin" />
        </GS.CardsContainer>
      </GS.Wrap>
    </GS.Main>
  );
}

export default HomePage;
