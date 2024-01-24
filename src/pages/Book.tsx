import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getDetailExhibition } from '@src/apis';
import { useParams } from 'react-router-dom';

const Book = () => {
  const { id } = useParams();

  const { data: exhibitionDetail } = useQuery({
    queryKey: ['exhibitionDetail', id],
    queryFn: () => getDetailExhibition({ id: Number(id) }),
  });
  console.log(exhibitionDetail);

  return <div>예매페이지</div>;
};

export default Book;
