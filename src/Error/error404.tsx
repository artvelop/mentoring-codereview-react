import styled from 'styled-components';

function Error404() {
  return (
    <Wrapper>
      <h1>
        <span>404</span> Error Page
      </h1>
    </Wrapper>
  );
}
export default Error404;

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  & > h1 {
    & > span {
      color: red;
    }
  }
`;
