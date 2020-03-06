import styled from 'styled-components';
import { media } from '../../styles/utils';

export const Container = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  background-color: ${props => props.theme.color.white};

  ${media.mobile`
    padding: 4rem;
  `}

  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
  }
`;

export const Table = styled.div`
  margin-top: 2.5rem;
`;

export const Headings = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: .1rem solid ${props => props.theme.color.lightgrey};
`;

export const Heading = styled.h5`
  font-size: 1.2rem;
  text-transform: uppercase;
  margin-bottom: .5rem;
  color: ${props => props.theme.color.grey};

  :last-of-type {
    display: none;
    margin-left: auto;

    ${media.mobile`
      display: block;
    `}
  }
`;

export const Film = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: .1rem solid ${props => props.theme.color.lightgrey};

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const FilmDirector = styled.span`
  display: none;
  padding-left: 2rem;
  margin-left: auto;
  text-align: right;

  ${media.mobile`
    display: block;
  `}
`;

export const FilmTitle = styled.span`
  padding-right: 2rem;

  span {
    display: block;
    margin-bottom: .2rem;
  }

  time {
    color: ${props => props.theme.color.grey};
    font-style: italic;
    font-size: 1.3rem;
  }

  ${FilmDirector} {
    text-align: left;
    padding: 0;
    font-size: 1.3rem;
    margin-top: .2rem;

    ${media.mobile`
      display: none;
    `}
  }
`;
