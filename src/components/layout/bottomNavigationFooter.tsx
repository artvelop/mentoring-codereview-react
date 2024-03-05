import { FillStarIcon, TicketIcon } from '@src/Icons/Icons';
import { FlexCenterCSS } from '@src/Styles/common';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function BottomNavigationFooter() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <Outlet />
      <Footer>
        <FooterDiv disabled={location.pathname === '/'} onClick={() => navigate('/')}>
          <div>전시회</div>
          <TicketIcon />
        </FooterDiv>
        <FooterDiv disabled={location.pathname === '/like'} onClick={() => navigate('/like')}>
          <div>찜목록</div>
          <FillStarIcon />
        </FooterDiv>
      </Footer>
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
const FooterDiv = styled.div<{ disabled: boolean }>`
  cursor: pointer;
  width: 13.5rem;
  height: 7rem;
  ${FlexCenterCSS}
  flex-direction: column;
  opacity: ${({ theme, disabled }) => (disabled ? '1.0' : '0.5')};
`;
