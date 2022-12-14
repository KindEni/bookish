import React, {useState, useEffect} from 'react';
import axios from "axios";
import BookList from "./BookList";
import { useRemoteService } from './hook';

const BookListContainer = () => {
    const {data, loading, error} = useRemoteService([]);

//    if(loading) {
//     return <p>Loading...</p>
//    }

//    if(error) {
//     return <p>Error...</p>
//    }
      
    return <BookList books={data} loading={loading} error={error}/>
}

export default BookListContainer;