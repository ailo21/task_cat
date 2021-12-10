import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Control from './control';
import Image from './image';
import { fetchCat } from '../api/api';

const CatWrapper = styled.div`
  width: 340px;
  height: 500px;
  margin: 0 auto;
`;

const Cat = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isAutoRefresh, setIsAutoRefresh] = useState(false);
  const [status, setStatus] = useState('idle');
  const [imageUrl, setImageUrl] = useState('');

  function getCat() {
    setStatus('loading');
    fetchCat().then((response) => {
      setImageUrl(response[0].url);
    })
      .finally(() => {
        setStatus('idle');
      });
  }

  useEffect(() => {
    getCat();
  }, []);

  useEffect(
    () => {
      const timer = setInterval(() => {
        if (isAutoRefresh && isEnabled) {
          getCat();
        }
      }, 5 * 1000);
      return () => {
        clearInterval(timer);
      };
    },

    [isAutoRefresh, isEnabled],
  );

  function toggleEnabled() {
    setIsEnabled(!isEnabled);
  }

  function toggleAutoRefresh() {
    setIsAutoRefresh(!isAutoRefresh);
  }

  return (
    <CatWrapper>
      <Control
        isEnabled={isEnabled}
        toggleEnabled={toggleEnabled}
        isAutoRefresh={isAutoRefresh}
        toggleAutoRefresh={toggleAutoRefresh}
        getCat={getCat}
      />
      <Image status={status} imageUrl={imageUrl} />
    </CatWrapper>
  );
};

export default Cat;
