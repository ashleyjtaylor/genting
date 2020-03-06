import styled from 'styled-components';
import { media } from '../../styles/utils';

export const PlanetInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.white};
  padding: 2rem;

  ${media.mobile`
    padding: 4rem;
  `}
`;

export const Name = styled.h1`
  margin-bottom: 2rem;
`;

export const Info = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: .1rem solid ${props => props.theme.color.lightgrey};
`;
