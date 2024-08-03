import React, { useEffect, useState } from 'react';
import Like from '../assets/heart.png';
import Liked from '../assets/heart (1).png';
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";



function Top10({movie,addWatch,RemoveWatch,ismovielike,handletoggle }) {
    const [like,setlike]=useState([]);
    
    function likehandler(index){
        const updatedLikes = [...like]; 
        if(updatedLikes[index])
            {
                updatedLikes[index]=false;
                RemoveWatch(index);
            } 
            else{
                updatedLikes[index]=true;
                addWatch(index);
            }
        setlike(updatedLikes);
       
    }

    const [flag,setflag]=useState(false);

   const handletogglebutton=()=>
   {
        handletoggle();
        setflag(!flag);

   }
   


  return (
    <div>
            
            <div className='flex justify-center font-bold pt-3 text-3xl md:text-6xl my-5 text-yellow-600 underline '>Top 20 Trending Movies</div>
            <div className='flex  justify-end md:pr-12 pr-3 top-10 '>
                <button className='flex  text-white text-[1rem] md:text-3xl' onClick={handletogglebutton} ontouch >
                <span className='pr-2 pt-2 md:pt-0 font-title text-yellow-500'>Week</span> {flag ? <FaToggleOn className=' size-[2.5rem] text-red-600'></FaToggleOn>: <FaToggleOff className=' size-[2.5rem] text-fuchsia-800'></FaToggleOff>}<span className='pl-2 pt-2 md:pt-0 font-title text-yellow-500 '>Day</span>
                    
                </button>
            </div>
           
        <div className='flex flex-wrap justify-center pt-3'>
            {
                movie.map((e, index) => {
                    return (
                    <>
                        <div key={e.id} className='m-4 hover:scale-105 relative w-[calc(50%_-_2rem)] md:w-[calc(24%_-_2rem)]'>
                        <img src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} alt="Movie Banner" className=' w-full object-cover rounded-2xl  ' />
                        <div className='h-11 text-[1rem]  md:text-[1.1rem] md:font-medium w-full  bg-slate-600 bg-opacity-40 absolute flex  justify-center  items-center font-name top-[1rem] md:top-[1rem]  text-white'>{e.original_title}</div>
                                                
                        <div onClick={()=>likehandler(index)} className='bg-white bg-opacity-55 rounded-sm size-9 font-semibold hover:scale-110 absolute bottom-1 right-2 '>
                        {
                            ismovielike(index)? <img src={Liked}></img>:<img src={Like}></img>
                        }</div>
                                    
                        </div>
                    </>
                        )
                    })
                }
            </div>
        </div>
  )
}

export default Top10




