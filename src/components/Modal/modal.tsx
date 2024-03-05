import { FlexCenterCSS } from '@src/Styles/common';
import { styled } from 'styled-components';

interface childrenType {
  children: React.ReactNode;
}

function Modal(Props: childrenType) {
  const { children } = Props;
  return (
    <Wrapper>
      <Box>{children}</Box>
    </Wrapper>
  );
}
export default Modal;

const Wrapper = styled.div`
  position: fixed;
  top: -3rem;
  left: 0;
  height: 200vh;
  width: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.4);
  ${FlexCenterCSS}
`;
const Box = styled.div`
  width: 20rem;
  padding: 2rem 0;
  text-align: center;
  border-radius: 0.5rem;
  background-color: white;
  border: none;
  & > span {
    * {
      margin: 0 1rem;
    }
  }
  animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  position: fixed;

  @keyframes fadeIn {
    0% {
      top: -20rem;
    }

    100% {
      top: 30%;
    }
  }
  ${FlexCenterCSS}
  flex-direction: column;
  & > div {
    margin-bottom: 1rem;
  }
`;
