import { Exhibition } from '@src/lib/types/exhibition';
import React from 'react';

interface ExhibitionDetailProps {
  exhibition: Exhibition;
}

const ExhibitionDetail = ({
  exhibition: {
    imageUrl,
    title,
    price,
    place,
    date: { started, ended },
  },
}: ExhibitionDetailProps) => {
  return (
    <div>
      <img src={imageUrl} alt="Exhibition" />
      <section className="flex flex-col p-2">
        <h2 className="text-3xl font-bold">{title}</h2>
        <div>{price}</div>
        <div>{place}</div>
        <div>
          {started} ~ {ended}
        </div>
        <button className="p-3 bg-[#FFBF66] rounded-md text-xl text-white font-bold">
          예매하기
        </button>
      </section>
    </div>
  );
};

export default ExhibitionDetail;
