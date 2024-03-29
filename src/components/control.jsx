import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 8px 0;
  margin: 28px 0;
`;

const Control = ({ isEnabled, isAutoRefresh, getCat, toggleEnabled, toggleAutoRefresh }) => (
  <div>
    <div key={1}>
      <input
        id="enabled"
        type="checkbox"
        checked={isEnabled}
        onChange={() => toggleEnabled()}
      />
      <label htmlFor="enabled">Enabled</label>
    </div>

    <div key={2}>
      <input
        id="refresh"
        type="checkbox"
        checked={isAutoRefresh}
        onChange={() => toggleAutoRefresh()}
      />
      <label htmlFor="refresh">Auto-refresh every 5 seconds</label>
    </div>

    <Button
      onClick={getCat}
      disabled={!isEnabled}
    >
      Get cat
    </Button>
  </div>
);

export default Control;
