import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import Link from "next/link";


const Navbar = () => {
    const router = useRouter();
    const [isAuthed, setIsAuthed] = useState(false);

    useEffect(() => {
        fetch('./api/getUser').then(res => res.json()).then(data => {
            setIsAuthed(data.user && data.user.role === "authenticated");
        })
    }, []);
    return (
        <div className={" bg-gradient-to-r from-indigo-700  to-purple-900 ... p-7  "}>
            <div className=" inline ">

                <div>
                    <ul className={"inline-flex space-x-7 "}>
                        <li className={" hover:scale-75 transition ease-in-out delay-300 bg-no-repeat duration-30 delay-10"}>
                            <img className={"w-32 h-32 rounded-2xl"}
                                 src={"https://www.nextplc.co.uk/~/media/Images/N/Next-PLC-V2/content-images/image-gallery/logos/next-black-v2-logo.jpg"}/>
                        </li>
                        <li className={" hover:animate-pulse hover:scale-125 transition ease-in-out delay-100 bg-no-repeat duration-30 delay-10 font-bold text-2xl font-mono tracking-widest uppercase mt-10"}>Home</li>
                        <li className={"hover:animate-pulse hover:scale-125 transition ease-in-out delay-100 bg-no-repeat duration-30 delay-10 font-bold text-2xl font-mono tracking-widest uppercase mt-10"}>About</li>
                        <li className={"hover:animate-pulse hover:scale-125 transition ease-in-out delay-100 bg-no-repeat duration-30 delay-10 font-bold text-2xl font-mono tracking-widest uppercase mt-10"}>Contact</li>


                    </ul>
                    <div className={"float-right inline-flex "}>
                        {isAuthed ? (
                            <ul className={"inline-flex space-x-7 mr-7"}>


                                <li className={"hover:scale-125 transition ease-in-out delay-100 bg-no-repeat duration-30 delay-10 font-bold text-2xl font-mono tracking-widest uppercase mt-10"}>SignOut</li>

                            </ul>) : <ul className={"inline-flex space-x-7 mr-7"}>

                            <Link href={"Signin"}>
                                <li className={"hover:scale-125 transition ease-in-out delay-100 bg-no-repeat duration-30 delay-10 font-bold text-2xl font-mono tracking-widest uppercase mt-10"}>Login</li>
                            </Link>
                            <Link href={"Signup"}>
                                <li className={"hover:scale-125 transition ease-in-out delay-100 bg-no-repeat duration-30 delay-10 font-bold text-2xl font-mono tracking-widest uppercase mt-10"}>Register</li>
                            </Link>

                        </ul>}
                        <div className={"inline-flex hover:animate-bounce"}>
                            <img
                                src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"}
                                className={"w-10 h-10 mt-10 rounded-l rounded-b rounded-t rounded-r-none bg-white p-2 border-r border-black "}/>
                            <input type={"search"} placeholder={"Search"}
                                   className={"p-2 w-72 bg-white text-black rounded rounded-l-none  mt-10"}/>

                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
}
export default Navbar;