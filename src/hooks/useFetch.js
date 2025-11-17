import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const res = await fetch(url, {signal});

                if (!res.ok) {
                    throw new Error(`Помилка: ${res.status} ${res.statusText}`);
                }

                const json = await res.json();
                setData(json);

            } catch (e) {
                if (e.name !== 'AbortError') {
                    setError(e);
                }
            } finally {
                if (!signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            controller.abort();
        };
    }, [url]);

    return {data, loading, error};
};