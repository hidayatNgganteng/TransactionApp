import {useEffect, useState} from 'react';
import {BASE_URL} from '../../config';

export const useGetFetch = (endpoint: string) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiData, setApiData] = useState<any[] | null>(null);
  const [serverError, setServerError] = useState<any | null>(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const data: any = await fetch(`${BASE_URL}${endpoint}`);
        const jsonData = await data.json();
        const arrayData = Object.keys(jsonData).map(key => jsonData[key]);
        setApiData(arrayData);
        setIsLoading(false);
      } catch (error) {
        setServerError(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return {isLoading, apiData, serverError};
};
