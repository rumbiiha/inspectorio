import styled from 'styled-components'

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  min-Width: 500px;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
`;

export default Grid;
