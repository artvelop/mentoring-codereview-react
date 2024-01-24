import { Exhibition } from '@src/lib/types/exhibition';
import { create } from 'zustand';

type Store = {
  pickedExhibitionList: Exhibition[];
  addExhibition: (newExhibition: Exhibition) => void;
  deleteExhibition: (exhibitionId: number) => void;
};

export const useStore = create<Store>((set) => ({
  pickedExhibitionList: [],
  addExhibition: (newExhibition) =>
    set((state) => ({ pickedExhibitionList: [...state.pickedExhibitionList, newExhibition] })),
  deleteExhibition: (exhibitionId) =>
    set((state) => ({
      pickedExhibitionList: state.pickedExhibitionList.filter(
        (exhibition) => exhibition.id !== exhibitionId,
      ),
    })),
}));
