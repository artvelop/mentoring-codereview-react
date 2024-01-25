import React from 'react';
import { Exhibition } from '@src/lib/types/exhibition';
import { ReactComponent as FilledStarIcon } from '@assets/icons/FilledStar.svg';
import { ReactComponent as EmptyStarIcon } from '@assets/icons/EmptyStar.svg';
import { usePickedExhibitionStore } from '@src/store';

interface ExhibitionDetailProps {
  exhibition: Exhibition;
}

const ExhibitionDetail = ({
  exhibition: {
    id,
    imageUrl,
    title,
    price,
    place,
    date: { started, ended },
  },
}: ExhibitionDetailProps) => {
  const { pickedExhibitionIDs } = usePickedExhibitionStore();

  const isPickedCard = pickedExhibitionIDs.includes(id);
  return (
    <div>
      <img src={imageUrl} alt="Exhibition" />
      <section className="flex flex-col p-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="text-lg font-semibold text-orange-600 py-1">{price}원</div>
        <div className="flex justify-between items-end py-2">
          <div>
            <div>{place}</div>
            <div>
              {started} ~ {ended}
            </div>
          </div>
          <div>
            {isPickedCard ? <FilledStarIcon className="w-8" /> : <EmptyStarIcon className="w-7" />}
          </div>
        </div>
        <button className="p-3 bg-[#FFBF66] rounded-md text-xl text-white font-bold">
          예매하기
        </button>
      </section>
    </div>
  );
};

export default ExhibitionDetail;
