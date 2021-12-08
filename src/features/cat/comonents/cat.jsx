import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCatAsync, selectCatAutoRefresh, selectCatEnabled, selectCatUrl, selectStatus,
} from '../catSlice';
import CatTools from './CatTools';

const CatWrapper = styled.div`
  width: 340px;
  height: 500px;
  margin: 0 auto;
`;
const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const ImgCat = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
`;

const Cat = () => {
  const imgUrl = useSelector(selectCatUrl);
  const dispatch = useDispatch();
  const isEnabled = useSelector(selectCatEnabled);
  const isAutoRefresh = useSelector(selectCatAutoRefresh);
  const status = useSelector(selectStatus);

  const fetchData = async () => {
    dispatch(getCatAsync());
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(
    () => {
      const timer = setInterval(() => {
        if (isAutoRefresh && isEnabled) {
          fetchData();
        }
      }, 5 * 1000);
      return () => {
        clearInterval(timer);
      };
    },

    [isAutoRefresh, isEnabled],
  );

  return (
    <CatWrapper>
      <CatTools />
      <ImgWrap>
        {
          status === 'loading' ? <div><p>Loading...</p></div> : <ImgCat src={imgUrl} alt="" />
        }
      </ImgWrap>
    </CatWrapper>
  );
};

export default Cat;
