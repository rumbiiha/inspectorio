import styled from 'styled-components'

const Card = styled.a`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid rgb(53, 53, 53);
  background: rgb(31, 31, 31);
  border-radius: 10px;
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease;
  &:hover,&:focus,&:active {
    color: #0070f3;
    border-color: #0070f3;
  }
  & h2 {
    margin: 0 0 1rem 0;
    font-size: 1.5rem;
  }
`;

export default Card;