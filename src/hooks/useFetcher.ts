import { useEffect, useState } from 'react';

export const useFetcher = <TFetchData>(url: string) => {
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState<TFetchData | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, { signal });

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const json = (await response.json()) as TFetchData;

        setData(json);
        setError('');
      } catch (err) {
        if (err instanceof Error) {
          // eslint-disable-next-line no-console
          console.error(`[${new Date().toISOString()}]: useFetcher.ts `, err);
          setError(`-> ${err.message}`);
        }
      } finally {
        setIsPending(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, isPending, error };
};
