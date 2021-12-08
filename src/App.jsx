import React from 'react';
import styled from 'styled-components';
import Cat from './features/cat/comonents/cat';

const AppDiv = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
`;

function App() {
  return (
    <AppDiv>
      <Cat />
    </AppDiv>
  );
}

export default App;
