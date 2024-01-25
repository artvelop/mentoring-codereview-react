import Button from '@components/Button/Button';
import LoadingPage from '@components/Spinner/Spinner';
import useGetDetailExhibitionData from '@hooks/Queries/get-DetailExhibition';
import { BackIcon, NotFillStarIcon } from '@src/Icons/Icons';
import { FlexAlignCSS } from '@src/Styles/common';
import { WidthAutoCSS } from '@src/Styles/common';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

function Reserve() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.id);
  const { data, isLoading } = useGetDetailExhibitionData(Number(params.id));
  console.log(data);
  return (
    <S.Wrapper>
      <S.Head>
        <div onClick={() => navigate('/')}>
          <BackIcon />
        </div>
        <h3>예매하기</h3>
      </S.Head>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <S.Container>
          <img src={data.imageUrl} alt="" />
          <S.Title>{data.title}</S.Title>
          <S.Price>{data.price}원</S.Price>
          <S.Dec>
            <S.DecLeft>
              <div>{data.place}</div>
              <div>{data.date.started}</div>
            </S.DecLeft>
            <div>
              <NotFillStarIcon size={'35'} />
            </div>
          </S.Dec>
          <Button variant="orange">예매하기</Button>
        </S.Container>
      )}
    </S.Wrapper>
  );
}
export default Reserve;

const Wrapper = styled.div`
  ${WidthAutoCSS}
`;
const Head = styled.div`
  ${FlexAlignCSS}
  &>div {
    margin: 0 0.5rem;
    cursor: pointer;
  }
  height: 4rem;
`;
const Container = styled.div`
  & > img {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 30px;
  margin: 0.5rem;
`;
const Price = styled.div`
  margin-left: 0.5rem;
  color: red;
  font-weight: 600;
  font-size: 20px;
`;
const Dec = styled.div`
  margin-left: 0.5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-weight: 600;
`;
const DecLeft = styled.div``;

const S = { Wrapper, Head, Container, Title, Price, Dec, DecLeft };
