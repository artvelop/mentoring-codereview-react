import Button from '@components/Button/Button';
import { ExhibitionType } from '@hooks/Queries/get-ExhibitionList';
import { FillStarIcon, NotFillStarIcon } from '@src/Icons/Icons';
import { FlexAlignCSS, FlexColumnCSS } from '@src/Styles/common';
import StarService from '@utils/StarService';
import { IsLikeStar } from '@utils/isLikeStar';
import { PriceWithComma } from '@utils/priceWithComma';
import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LikeItemBox({ data, setLikeList }: { data: ExhibitionType; setLikeList: ([]) => void }) {
  const navigator = useNavigate();
  const onClickNotFillStart = (event: MouseEvent<HTMLOrSVGElement>, id: number) => {
    event.stopPropagation();
    StarService.setStar(String(id));
    setLikeList(StarService.getStar());
  };
  const onClicFillStart = (event: MouseEvent<HTMLOrSVGElement>, id: number) => {
    event.stopPropagation();
    StarService.removeStar(String(id));
    setLikeList(StarService.getStar());
  };

  return (
    <Wrapper>
      <Img src={data.imageUrl} alt="Img" />
      <Main>
        <MainLeft>
          <div>
            <Title>{data.title}</Title>
            <Dec>{data.place}</Dec>
            <Price>{PriceWithComma(data.price)}원</Price>
          </div>
          <div>
            <Button size={'small'} onClick={() => navigator(`/reserve/${data.id}`)}>
              예매하기
            </Button>
          </div>
        </MainLeft>
        <MainRight>
          <div>
            {IsLikeStar(String(data.id)) ? (
              <FillStarIcon size={'25'} onClick={(e) => onClicFillStart(e, data.id)} />
            ) : (
              <NotFillStarIcon size={'25'} onClick={(e) => onClickNotFillStart(e, data.id)} />
            )}
          </div>
          <Date>{data.date.started}</Date>
        </MainRight>
      </Main>
    </Wrapper>
  );
}
export default LikeItemBox;

const Wrapper = styled.div`
  ${FlexAlignCSS}
  border-radius: 10px 0 0 10px;
  margin-bottom: 0.8rem;
`;
const Img = styled.img`
  width: 85px;
  height: 85px;
  border-radius: 5px;
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const MainLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 16rem;
  max-width: 18rem;
  height: 85px;
  margin-left: 1rem;
`;
const MainRight = styled.div`
  ${FlexColumnCSS}
  justify-content: space-between;
  align-items: end;
  margin-right: 0.3rem;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 19px;
`;
const Dec = styled.div`
  color: gray;
  font-size: 13px;
`;
const Price = styled.div`
  color: red;
  font-size: 13px;
`;
const Date = styled.div`
  color: gray;
  font-size: 11px;
`;
