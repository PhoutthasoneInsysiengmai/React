'use client'
import React, {useState} from "react";
import Link from "next/link";
export default function Nav(){
    const[isOpen, setIsOpen] =  useState<boolean>(false);
    const toggle = () =>{
        setIsOpen(old => !old);
    }
    return (
        <nav className="bg-green-300 p-3">
            <ul className="flex border-b">
                <li className="mr-6"><Link className="hover:text-bule-800" href="/" >Home</Link></li>
                <li className="mr-6"><Link className="hover:text-bule-800" href="/about" >About</Link></li>
                <li className="mr-6"><Link className="hover:text-bule-800" href="/contact">Contact</Link></li>
                <li className="mr-6" onMouseOver={toggle} onMouseOut={toggle}>
                    <Link href="#" className="hover:text-blue-800">User</Link>
                    {isOpen && <ul className="fixed bg-green-900 text-green-400">
                        <li className="hover:bg-green-100 p-2"><Link className="hover:text-blue-800" href="/user/adam">Adam</Link></li>
                        <li className="hover:bg-green-100 p-2"><Link className="hover:text-blue-800" href="/user/eve">Eve</Link></li>
                    </ul> }
                </li>
            </ul>
        </nav>
    );
}