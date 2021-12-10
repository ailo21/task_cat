import React from 'react';
import styled from 'styled-components';

const ImgWrap = styled.div`
  text-align: center;
`;

const ImgCat = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
`;

const Image = ({ imageUrl, status }) => (
  <ImgWrap>
    {
      status === 'loading' ? <div><p>Loading...</p></div> : <ImgCat src={imageUrl} alt="" />
    }
  </ImgWrap>
);

export default Image;
