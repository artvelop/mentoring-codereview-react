import ExhibitionCard from '@components/ExhibitionCard';
import { Exhibition } from '@src/lib/types/exhibition';
import { usePickedExhibitionStore } from '@src/store';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Picked = () => {
  const { data: exhibitionList, isLoading } = useQuery<Exhibition[]>({
    queryKey: ['exhibitionList'],
  });
  const { pickedExhibitionIDs } = usePickedExhibitionStore();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {exhibitionList &&
        exhibitionList
          .filter((exhibition) => pickedExhibitionIDs.includes(exhibition.id))
          .map((exhibition) => <ExhibitionCard key={exhibition.id} exhibition={exhibition} />)}
    </div>
  );
};

export default Picked;
