import StarService from './StarService';

export const IsLikeStar = (id: string) => {
  let localListString = StarService.getStar();
  let localList: string[] = localListString ? localListString : [];
  return localList.find((starid: string) => starid == id);
};
