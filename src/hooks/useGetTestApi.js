import { useMemo } from 'react';
import useRequest from './useRequest';

const useGetTestApi = () => {
  const options = useMemo(
    () => ({
      method: 'get',
      url: '/api/users/2',
    }),
    []
  );
  const [loading, response, error] = useRequest(options);

  return { loading, response, error };
};

export default useGetTestApi;
