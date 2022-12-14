import React, {useState, useEffect} from 'react';
import axios from "axios";


export const useRemoteService = (initial) => { 
    const [data, setBooks] = useState(initial);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchBooks = async () => {
            setError(false);
            setLoading(true);

            try {
                const res = await axios.get(`http://localhost:8080/books`);
                setBooks(res.data);
            } catch (e) {
                setError(true)
            } finally {
                setLoading(false)
            }

        };

        fetchBooks();
    }, []);

    return {data, loading, error};
}

