import styled from 'styled-components';

function LoadingPage() {
  return (
    <S.Wrapper>
      <S.LoadingText>로딩중</S.LoadingText>
      <S.Loading></S.Loading>
    </S.Wrapper>
  );
}
export default LoadingPage;
const Wrapper = styled.div`
  position: absolute;
  width: 20vw;
  height: 70vh;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const LoadingText = styled.div`
  margin-bottom: 1rem;
  font-size: 20px;
`;
const Loading = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
const S = { Wrapper, Loading, LoadingText };
