import React from 'react';
import { ReactComponent as FilledStarIcon } from '@assets/icons/FilledStar.svg';
import { ReactComponent as EmptyStarIcon } from '@assets/icons/EmptyStar.svg';
import { usePickedExhibitionStore } from '@src/store';
import { type Exhibition } from '@src/lib/types/exhibition';
import { Link } from 'react-router-dom';
interface ExhibitionCardProps {
  exhibition: Exhibition;
}

const ExhibitionCard = ({
  exhibition: {
    id,
    imageUrl,
    place,
    price,
    title,
    date: { started, ended },
  },
}: ExhibitionCardProps) => {
  const { addExhibition, deleteExhibition, pickedExhibitionIDs } = usePickedExhibitionStore();

  const isPickedCard = pickedExhibitionIDs.includes(id);

  const togglePickCard = () => {
    if (isPickedCard) {
      deleteExhibition(id);
      return;
    }
    addExhibition(id);
  };

  return (
    <div className="p-2 flex gap-4">
      <div>
        <img src={imageUrl} alt={place + ' 이미지'} className="w-20 h-20 rounded-xl" />
      </div>

      <section className="flex flex-col">
        <h2 className="text-md font-bold">{title}</h2>
        <div className="text-[12px] text-gray-400">{place}</div>
        <div className="text-[12px] font-semibold text-orange-600">{price} 원</div>
        <div className="mt-auto text-[8px] text-gray-600">
          {started} ~ {ended}
        </div>
      </section>

      <section className="ml-auto min-w-10 flex flex-col justify-between">
        <button className="flex justify-end" onClick={togglePickCard}>
          {isPickedCard ? (
            <FilledStarIcon className="w-4 h-4" />
          ) : (
            <EmptyStarIcon className="w-4 h-4" />
          )}
        </button>
        <Link
          to={`/book/${id}`}
          className="bg-black rounded-sm text-center text-white text-[8px] px-1 py-[1px] "
        >
          예매하기
        </Link>
      </section>
    </div>
  );
};

export default ExhibitionCard;
