import React from 'react';
import '../style/header.css';
import {FaLocationDot} from "react-icons/fa6";
function header(){
    return(
        <header>
            <div className=" logo-container flex gap-2 justify-center border-t-8 border-t-orange-600 border-b-8 border-b-green-800 bg-white p-1 sm:p-2 rounded-b-xl">
                <FaLocationDot className="text-3xl sm:text-4xl text-blue-800"></FaLocationDot>
            <h1 className="text-blue-800 text-2xl sm:text-3xl orbitron-family justify mt-auto mb-auto">Travel Blog</h1>
            </div>
        </header>
    )
}

export default header;