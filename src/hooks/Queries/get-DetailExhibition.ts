import { useQuery } from '@tanstack/react-query';

import { getDetailExhibition } from '@src/apis';
import { ExhibitionType } from './get-ExhibitionList';

const getDetailExhibitionData = async (id: number) => {
  const res = await getDetailExhibition({ id });
  return res;
};

const useGetDetailExhibitionData = (id: number) => {
  const { data, isLoading, refetch } = useQuery<ExhibitionType | any, boolean>(
    ['useGetDetailExhibitionData'],
    () => getDetailExhibitionData(id),
  );

  return { data, isLoading, refetch };
};

export default useGetDetailExhibitionData;
