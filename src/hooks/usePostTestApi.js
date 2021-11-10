import useRequest from './useRequest';

const usePostTestApi = () => {
  const [loading, response, error, performRequest] = useRequest();

  const execPost = (data) =>
    performRequest({
      method: 'POST',
      data: data,
      url: '/api/register',
    });

  return { loading, response, error, execPost };
};

export default usePostTestApi;
