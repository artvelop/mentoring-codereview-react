import Button from '@components/Button/Button';
import Modal from '@components/Modal/modal';
import LoadingPage from '@components/Spinner/Spinner';
import useGetDetailExhibitionData from '@hooks/Queries/get-DetailExhibition';
import { BackIcon, FillStarIcon, NotFillStarIcon } from '@src/Icons/Icons';
import { FlexAlignCSS } from '@src/Styles/common';
import { WidthAutoCSS } from '@src/Styles/common';
import StarService from '@utils/StarService';
import { IsLikeStar } from '@utils/isLikeStar';
import { PriceWithComma } from '@utils/priceWithComma';
import { MouseEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { styled } from 'styled-components';

function Reserve() {
  const navigate = useNavigate();
  const params = useParams();
  const [likeStarId, setLikeStarId] = useState<undefined | string>(undefined);
  const [isModalView, setIsModalView] = useState<boolean>(false);

  const { data, isLoading } = useGetDetailExhibitionData(Number(params.id));

  const onClickNotFillStart = (event: MouseEvent<HTMLOrSVGElement>, id: number) => {
    event.stopPropagation();
    StarService.setStar(String(id));
    setLikeStarId(StarService.getStar());
  };
  const onClicFillStart = (event: MouseEvent<HTMLOrSVGElement>, id: number) => {
    event.stopPropagation();
    StarService.removeStar(String(id));
    setLikeStarId(StarService.getStar());
  };

  useEffect(() => {
    if (data) {
      setLikeStarId(IsLikeStar(String(data.id)));
    }
  }, []);

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
          <img src={data.imageUrl} alt="imgUrl" />
          <S.Title>{data.title}</S.Title>
          <S.Price>{PriceWithComma(data.price)}원</S.Price>
          <S.Dec>
            <S.DecLeft>
              <div>{data.place}</div>
              <div>{data.date.started}</div>
            </S.DecLeft>
            <div>
              {IsLikeStar(String(data.id)) ? (
                <FillStarIcon size={'35'} onClick={(e) => onClicFillStart(e, data.id)} />
              ) : (
                <NotFillStarIcon size={'35'} onClick={(e) => onClickNotFillStart(e, data.id)} />
              )}
            </div>
          </S.Dec>
          <S.ButtonStyle variant="orange" fontSize="big" onClick={() => setIsModalView(true)}>
            예매하기
          </S.ButtonStyle>
        </S.Container>
      )}
      {isModalView && (
        <Modal>
          <div>티켓 예매하시겠습니까?</div>
          <div>예약 내역은 이메일로 전송됩니다</div>

          <S.ButtonStyleModal variant="orange" fontSize="big" onClick={() => navigate('/')}>
            확인
          </S.ButtonStyleModal>
          <S.ButtonStyleModal variant="gray" fontSize="big" onClick={() => setIsModalView(false)}>
            취소
          </S.ButtonStyleModal>
        </Modal>
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
const ButtonStyle = styled(Button)`
  width: 90%;
  margin: 1.5rem;
`;
const ButtonStyleModal = styled(Button)`
  width: 90%;
  height: 2rem;
  margin: 0.2rem;
`;

const S = {
  Wrapper,
  Head,
  Container,
  Title,
  Price,
  Dec,
  DecLeft,
  ButtonStyle,
  ButtonStyleModal,
};
