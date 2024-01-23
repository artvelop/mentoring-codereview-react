import ExhibitionCard from '@components/ExhibitionCard';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getApiExhibitionList } from '@src/apis';

export const Home = () => {
  const { data: exhibitionList, isLoading } = useQuery({
    queryKey: ['exhibitionList'],
    queryFn: getApiExhibitionList,
  });

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {exhibitionList &&
        exhibitionList.map((exhibition) => <ExhibitionCard exhibition={exhibition} />)}
    </div>
  );
};
