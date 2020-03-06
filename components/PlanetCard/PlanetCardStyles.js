import styled from 'styled-components';

export const PlanetCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.white};
  border-radius: .4rem;
  box-shadow: 0 0 1.2rem rgba(0,0,0, 0.2);

  a {
    display: block;
    text-decoration: none;
    color: ${props => props.theme.color.black};

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Name = styled.h3`
  padding: 2rem;
`;

export const ImageWrap = styled.div`
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
`;
