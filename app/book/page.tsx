'use client'

import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from "../lib/firebase";

export interface Books {
    id: string;
     author: string
     title: string
     isbn: number
}


export default function BooksPage(){

    const [book, setBooks] = useState<Books[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const loadData = async () =>{
        const db = getFirestore(app);
        const qrySnapshot = await getDocs(collection(db, 'Books'));
        const data = qrySnapshot.docs.map((doc) => (
            {
                ...doc.data(),
                id: doc.id
            } as Books
        )); 
        setBooks(data);
        setLoading(false);
    };

    useEffect(()=> {
        loadData();
    },[]);

    if (loading){
        return(<h1>Loading....</h1>);
    }

    return(
        <>
        <h1>Books</h1>
        <ul>
            {book.map((r) => (
                <li key={r.id}> 
                <h2>{r.author}</h2>
                <p> {r.title}</p>
                <p>{r.isbn}</p>
                 </li>
            ))}
        </ul>
        </>
    );
}