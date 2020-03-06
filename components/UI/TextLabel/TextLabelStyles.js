import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: .5rem;
    color: ${props => props.theme.color.grey};
  }

  span {
    font-size: 1.6rem;
  }
`;
