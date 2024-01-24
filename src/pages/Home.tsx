import ItemBox from '@components/ItemBox';
import { FlexCenterCSS, WidthAutoCSS } from '@src/Styles/common';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { dummyExhibitionList } from '../assets/dummy/exhibitionList';
import { FillStarIcon, TicketIcon } from '@src/Icons/Icons';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <S.Wrapper>
        <>
          {dummyExhibitionList.map((list, key) => (
            <ItemBox />
          ))}
        </>
        <S.Footer>
          <S.FooterDiv>
            <div>전시회</div>
            <TicketIcon />
          </S.FooterDiv>
          <S.FooterDiv>
            <div>찜목록</div>
            <FillStarIcon />
          </S.FooterDiv>
        </S.Footer>
      </S.Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  ${WidthAutoCSS}
  position: relative;
  height: 100dvh;
`;
const Footer = styled.div`
  position: fixed;
  bottom: 0;
  ${FlexCenterCSS}
`;
const FooterDiv = styled.div`
  cursor: pointer;
  width: 13.5rem;
  height: 7rem;
  ${FlexCenterCSS}
  flex-direction: column;
`;
const S = { Wrapper, Footer, FooterDiv };
