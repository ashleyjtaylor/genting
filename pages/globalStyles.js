import styled from 'styled-components';
import { media } from '../styles/utils';

import { PlanetCard } from '../components/PlanetCard/PlanetCardStyles';

export const Main = styled.main`
  padding: 1rem;

  ${media.tablet`
    padding: 3rem;
  `}
`;

export const Wrap = styled.section`
  width: 100%;
  max-width: 76rem;
  margin: 0 auto;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  ${media.tablet`
    flex-direction: row;
  `}

  ${PlanetCard} {
    width: 100%;
    margin-bottom: 2rem;

    ${media.tablet`
      margin-right: 2rem;
      width: calc(33.33% - 1rem);

      :nth-child(3n) {
        margin-right: 0;
      }
    `}
  }
`;

export const BackButtonWrap = styled.div`
  margin-bottom: 2rem;
`;
