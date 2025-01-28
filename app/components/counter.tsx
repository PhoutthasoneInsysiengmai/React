"use client"
import React, {useState} from "react";

export default function Counter(){
    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(count + 1); 
    };
    const decrease = () => {
        setCount(count - 1);
    };
  return (
    <>
    <div className="border border-gray-600 p-4 m-4">
        <button className="bg-gray-500 rounded px-2 py-1" onClick={increment}>
            Increase +
        </button>
        
        <button className="bg-gray-500 rounded px-2 py-1 m-1" onClick={decrease}>
            Decrease -
        </button>

        <p>Count number = {count}</p>
    </div>
    </>
  )
}