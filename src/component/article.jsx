import React from "react";
import '../style/article.css'
import {FaLocationArrow} from "react-icons/fa6"

function Article(props){
    return(
        <div className="bg-blue-950 lg:flex-3/12 sm:flex-1/3 border-2 border-orange-600 grid justify-center p-2 rounded-lg sm:gap-3 hover:scale-101 m-2 ">
            <div className="flex-col w-full ">
                <div className="relative lg:h-7/12 md:h-6/12">
                    <img src={props.img.src} alt={props.img.alt} className="picture w-full h-full border-t-2 border-green-700 rounded-t-lg block"/>
                    <a href={props.googleMapLocation} className='flex gap-2 text-blue-800 absolute bottom-1 right-0 bg-gray-200 p-1 rounded-l-lg border-2 border-gray-500' >
                    <FaLocationArrow className="text-xl"></FaLocationArrow>
                    On Map
                    </a>
                </div>
                <div className="content bg-white w-full lg:h-5/12 md:h-6/12 border-b-2  border-green-700 rounded-b-lg ">
                    <div className="justify-center  flex bg-gray-800 border-gray-300 ">
                        <p className='placeName oswald-family text-lg sm:text-xl w-full   text-gray-200 text-center p-2 '> {props.name}</p>
                    </div>
                <p className='date text-sm nunito-family sm:text-md p-2 pb-1'>{props.date}</p>
                <p className='description text-gray-700 nunito-family text-sm p-2 pt-1 hidden md:block'>{props.description}</p>
                </div>
            </div>
        </div>
    )}
    
    export default Article