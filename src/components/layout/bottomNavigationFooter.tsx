import { FillStarIcon, TicketIcon } from '@src/Icons/Icons';
import { FlexCenterCSS } from '@src/Styles/common';
import { Outlet, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function BottomNavigationFooter() {
  const navigate = useNavigate();

  return (
    <>
      <Outlet />
      <S.Footer>
        <S.FooterDiv onClick={() => navigate('/')}>
          <div>전시회</div>
          <TicketIcon />
        </S.FooterDiv>
        <S.FooterDiv onClick={() => navigate('/like')}>
          <div>찜목록</div>
          <FillStarIcon />
        </S.FooterDiv>
      </S.Footer>
    </>
  );
}
export default BottomNavigationFooter;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  ${FlexCenterCSS}

  width: 100%;
`;
const FooterDiv = styled.div`
  cursor: pointer;
  width: 13.5rem;
  height: 7rem;
  ${FlexCenterCSS}
  flex-direction: column;
`;

const S = { Footer, FooterDiv };
