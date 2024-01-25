import React, { useState } from 'react';
import { Exhibition } from '@src/lib/types/exhibition';
import { ReactComponent as FilledStarIcon } from '@assets/icons/FilledStar.svg';
import { ReactComponent as EmptyStarIcon } from '@assets/icons/EmptyStar.svg';
import { usePickedExhibitionStore } from '@src/store';
import { BookingModal } from './BookingModal';

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
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const { addExhibition, deleteExhibition, pickedExhibitionIDs } = usePickedExhibitionStore();
  const isPickedCard = pickedExhibitionIDs.includes(id);

  const togglePickCard = () => {
    if (isPickedCard) {
      deleteExhibition(id);
      return;
    }
    addExhibition(id);
  };

  const 예매버튼클릭 = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div>
      <img src={imageUrl} alt="Exhibition" />
      <section className="flex flex-col p-3">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="text-xl font-semibold text-orange-600 py-1">{price}원</div>
        <div className="flex justify-between items-end py-3">
          <div className="font-semibold">
            <div>{place}</div>
            <div>
              {started} ~ {ended}
            </div>
          </div>
          <div onClick={togglePickCard}>
            {isPickedCard ? <FilledStarIcon className="w-8" /> : <EmptyStarIcon className="w-7" />}
          </div>
        </div>
        <button
          onClick={예매버튼클릭}
          className="p-3 bg-[#FFBF66] rounded-md text-2xl text-white font-bold"
        >
          예매하기
        </button>
      </section>
      <BookingModal
        isOpen={isBookingModalOpen}
        onRequestClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default ExhibitionDetail;
