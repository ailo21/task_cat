import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  autoRefreshToggle,
  enabledToggle,
  getCatAsync,
  selectCatAutoRefresh,
  selectCatEnabled,
} from '../catSlice';

const Button = styled.button`
  width: 100%;
  padding: 8px 0;
  margin: 28px 0;
`;

const CatTools = () => {
  const dispatch = useDispatch();
  const isEnabled = useSelector(selectCatEnabled);
  const isAutoRefresh = useSelector(selectCatAutoRefresh);

  return (
    <div>
      <div key={1}>
        <input id="enabled" type="checkbox" checked={isEnabled} onChange={() => dispatch(enabledToggle())} />
        <label htmlFor="enabled">Enabled</label>
      </div>

      <div key={2}>
        <input
          id="refresh"
          type="checkbox"
          checked={isAutoRefresh}
          onChange={() => dispatch(autoRefreshToggle())}
        />
        <label htmlFor="refresh">Auto-refresh every 5 seconds</label>
      </div>

      <Button
        onClick={() => dispatch(getCatAsync())}
        disabled={!isEnabled}
      >
        Get cat
      </Button>
    </div>
  );
};

export default CatTools;
