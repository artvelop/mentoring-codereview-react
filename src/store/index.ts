import { create } from 'zustand';

type Store = {
  pickedExhibitionIDs: number[];
  addExhibition: (exhibitionId: number) => void;
  deleteExhibition: (exhibitionId: number) => void;
};

export const usePickedExhibitionStore = create<Store>((set) => ({
  pickedExhibitionIDs: [],
  addExhibition: (exhibitionId) =>
    set((state) => ({ pickedExhibitionIDs: [...state.pickedExhibitionIDs, exhibitionId] })),
  deleteExhibition: (exhibitionId) =>
    set((state) => ({
      pickedExhibitionIDs: state.pickedExhibitionIDs.filter((id) => id !== exhibitionId),
    })),
}));
