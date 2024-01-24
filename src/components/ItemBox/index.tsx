import Button from '@components/Button/Button';
import { FillStarIcon, NotFillStarIcon } from '@src/Icons/Icons';
import { FlexAlignCSS, FlexColumnCSS } from '@src/Styles/common';
import { useState } from 'react';
import styled from 'styled-components';

function ItemBox() {
  const [fillStar, setFillStar] = useState(false);

  const onClickNotFillStart = (event: any) => {
    event.stopPropagation();
    setFillStar(true);
  };
  const onClicFillStart = (event: any) => {
    event.stopPropagation();
    setFillStar(false);
  };
  return (
    <S.Wrapper>
      <Img
        src="https://artvelop.s3.ap-northeast-2.amazonaws.com/code-review/light/1.jpeg"
        alt="Img"
      />
      <S.Main>
        <S.MainLeft>
          <div>
            <S.Title>전시회 제목</S.Title>
            <S.Dec>그라운드 시소 센트럴</S.Dec>
            <S.Price>5,000원</S.Price>
          </div>
          <div>
            <S.Date>2024.05.05</S.Date>
          </div>
        </S.MainLeft>
        <S.MainRight>
          <div>
            {fillStar ? (
              <FillStarIcon onClick={onClicFillStart} />
            ) : (
              <NotFillStarIcon onClick={onClickNotFillStart} />
            )}
          </div>
          <Button size={'small'}>예매하기</Button>
        </S.MainRight>
      </S.Main>
    </S.Wrapper>
  );
}
export default ItemBox;

const Wrapper = styled.div`
  cursor: pointer;
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

const S = { Wrapper, Img, Main, MainRight, MainLeft, Title, Dec, Price, Date };
