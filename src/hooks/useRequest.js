import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useRequest = (options, initialValue = {}) => {
  const [loading, setLoading] = useState(false);
  const [latestOptions, setLatestOptions] = useState(options);
  const [response, setResponse] = useState(initialValue);
  const [error, setError] = useState(null);

  const performRequest = useCallback(
    async (asyncOptions = options) => {
      setLatestOptions(asyncOptions);
      try {
        setLoading(true);

        const { data } = await axios.request({
          baseURL: 'https://reqres.in/',
          ...asyncOptions,
        });

        setResponse(data);
        setLoading(false);

        return data;
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [options]
  );

  useEffect(() => {
    if (options || latestOptions) {
      performRequest(latestOptions);
    }
  }, [performRequest, options]);

  return [loading, response, error, performRequest];
};

export default useRequest;
