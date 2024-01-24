import { useQuery } from '@tanstack/react-query';
import { getApiExhibitionList } from '@src/apis';

export type ExhibitionType = {
  id: number;
  title: string;
  imageUrl: string;
  place: string;
  price: number;
  date: {
    started: string;
    ended: string;
  };
};

type ExhibitionListType = ExhibitionType[];

const getExhibitionList = async () => {
  const res = await getApiExhibitionList();
  return res;
};

const useGetExhibitionListData = () => {
  const { data, isLoading, refetch } = useQuery<ExhibitionListType, boolean>(
    ['useGetActivityData'],
    () => getExhibitionList(),
  );

  return { data, isLoading, refetch };
};

export default useGetExhibitionListData;
