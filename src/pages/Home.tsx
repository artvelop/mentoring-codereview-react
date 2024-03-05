import ItemBox from '@components/ItemBox';
import { FlexCenterCSS, WidthAutoCSS } from '@src/Styles/common';
import React from 'react';

import styled from 'styled-components';
import useGetExhibitionListData from '@hooks/Queries/get-ExhibitionList';
import LoadingPage from '@components/Spinner/Spinner';

export const Home = () => {
  const { data, isLoading } = useGetExhibitionListData();

  if (isLoading) return <LoadingPage />;
  if (data?.length === 0)
    return (
      <NotList>
        지금 하고있는 전시회가 없습니다.
        <div>전시회가 열리면 알려드릴게요</div>
      </NotList>
    );

  return (
    <div>
      <Wrapper>
        {data?.map((list, key) => (
          <ItemBox key={list.id} data={list} />
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
