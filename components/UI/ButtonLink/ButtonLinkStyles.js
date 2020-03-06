import styled from 'styled-components';

export const Link = styled.a`
  padding: 1rem 2rem;
  text-align: center;
  text-decoration: none;
  color: ${props => props.theme.color.white};
  font-weight: old;
  border-radius: .3rem;
  background-color: ${props => props.theme.color.blue};
  display: inline-block;

  :hover {
    text-decoration: underline;
  }
`;
