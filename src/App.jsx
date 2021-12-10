import React from 'react';
import styled from 'styled-components';
import Cat from './components/cat';

const AppDiv = styled.div`
  display: flex;
  align-items: center; 
`;

function App() {
  return (
    <AppDiv>
      <Cat />
    </AppDiv>
  );
}

export default App;
