import axios from 'axios';
import { useState, useEffect } from 'react';

export const useRequestPokemon = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = () => {
        setIsLoading(true);
        axios
        .get(url)
        .then((response) => {
            setData(response);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error.message);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        getData();
    }, []);

    console.log(data)

    return [data, isLoading];
}
