import axios from 'axios';
import { useState, useEffect } from 'react';

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const getData = () => {
        setIsLoading(true);
        setTimeout(() => {
            axios
            .get(url)
            .then((response) => {
                setData(response.data);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error.message);
                setIsLoading(false);
            });
        }, 1000)
        
    };

    useEffect(() => {
        getData();         
    }, []);

    return [data, isLoading];
}
