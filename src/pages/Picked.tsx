import ExhibitionCard from '@components/ExhibitionCard';
import { Exhibition } from '@src/lib/types/exhibition';
import { usePickedExhibitionStore } from '@src/store';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Picked = () => {
  const { data: exhibitionList } = useQuery<Exhibition[]>({
    queryKey: ['exhibitionList'],
  });
  const { pickedExhibitionIDs } = usePickedExhibitionStore();

  const pickedExhibitionList = exhibitionList?.filter((exhibition) =>
    pickedExhibitionIDs.includes(exhibition.id),
  );

  return (
    <div>
      {pickedExhibitionList && pickedExhibitionList.length > 0 ? (
        pickedExhibitionList.map((exhibition) => (
          <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
        ))
      ) : (
        <div className="h-[100dvh] flex flex-col items-center justify-center">
          <p>찜해놓은 전시회가 없습니다</p>
          <p className="text-gray-400">맘에 드는 전시회가 있다면 찜해보세요</p>
        </div>
      )}
    </div>
  );
};

export default Picked;
