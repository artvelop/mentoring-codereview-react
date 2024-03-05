import { FlexCenterCSS, WidthAutoCSS } from '@src/Styles/common';
import React, { useState } from 'react';

import styled from 'styled-components';
import useGetExhibitionListData from '@hooks/Queries/get-ExhibitionList';
import LoadingPage from '@components/Spinner/Spinner';
import LikeItemBox from '@components/ItemBox/likeItemBox';
import StarService from '@utils/StarService';

export const Like = () => {
  const { data, isLoading } = useGetExhibitionListData();
  const [likeList, setLikeList] = useState(StarService.getStar() || []);

  if (isLoading) return <LoadingPage />;
  if (likeList.length === 0)
    return (
      <NotList>
        찜해놓은 전시회가 없습니다
        <div>맘에 드는 전시회가 있다면 찜해보세요</div>
      </NotList>
    );

  return (
    <div>
      <Wrapper>
        {data?.length !== 0 &&
          data?.map((list, idx: number) => (
            <>
              {likeList.map(
                (likeId: string, idx: number) =>
                  Number(likeId) === list.id && (
                    <LikeItemBox key={list.id} data={list} setLikeList={setLikeList} />
                  ),
              )}
            </>
          ))}
      </Wrapper>
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
const NotList = styled.div`
  ${FlexCenterCSS}
  flex-direction: column;
  height: 70dvh;
  font-size: 20px;
  font-weight: 600;
  & > div {
    color: gray;
    margin-top: 1rem;
  }
`;
