'use client'

import { useEffect, useState } from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {app} from "../lib/firebase";

export interface recipes {
    id: string;
    name: string;
    address: string;
    tel: string;
}


export default function RestaurantPage(){

    const [recipes, setRecipes] = useState<recipes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const loadData = async () =>{
        const db = getFirestore(app);
        const qrySnapshot = await getDocs(collection(db, 'Foods'));
        const data = qrySnapshot.docs.map((doc) => (
            {
                ...doc.data(),
                id: doc.id
            } as recipes
        )); 
        setRecipes(data);
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
        <h1>recipes</h1>
        <ul>
            {recipes.map((r) => (
                <li key={r.id}> 
                <h2>{r.name}</h2>
                <p>{r.address}</p>
                <p> {r.tel}</p>
                 </li>
            ))}
        </ul>
        </>
    );
}