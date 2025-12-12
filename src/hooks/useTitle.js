import {useEffect} from 'react';

export const useTitle = (title) => {
    useEffect(() => {
        const originalTitle = document.title;

        document.title = title;

        return () => {
            document.title = originalTitle;
        };
    }, [title]);
};