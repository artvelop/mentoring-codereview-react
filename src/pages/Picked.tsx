import { usePickedExhibitionStore } from '@src/store';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useStore } from 'zustand';

const Picked = () => {
  const { data: exhibitionList } = useQuery({ queryKey: ['exhibitionList'] });
  const { pickedExhibitionIDs } = usePickedExhibitionStore();

  console.log(pickedExhibitionIDs);

  return <div></div>;
};

export default Picked;
