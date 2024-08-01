import React, { useEffect, useState } from 'react';
import Like from '../assets/heart.png';
import Liked from '../assets/heart (1).png';



function Top10({movie,addWatch }) {
    const [like,setlike]=useState([]);
    
    function likehandler(index){
        const updatedLikes = [...like]; 
        updatedLikes[index] = !updatedLikes[index]; 

        setlike(updatedLikes);
    }

    const upwatchList=JSON.stringify(like);
    localStorage.removeItem("WatchList");
    localStorage.setItem("WatchList",upwatchList);
    addWatch(like)


    


  return (
    <div>
            <div className='flex justify-center font-bold pt-3 text-5xl my-5 text-yellow-600 underline '>Top 20 Trending Movies of the Week</div>
        <div className='flex flex-wrap justify-center pt-3'>
            {
                movie.map((e, index) => {
                    return (
                    <>
                        <div key={e.id} className='m-4  hover:scale-105 relative' style={{ width: 'calc(24% - 2rem)' }}>
                        <img src={`https://image.tmdb.org/t/p/original/${e.poster_path}`} alt="Movie Banner" className=' w-full object-cover rounded-2xl  ' />
                        <div className='h-11 text-[1.1rem] font-medium w-full  bg-slate-600 bg-opacity-40 absolute flex  justify-center  items-center font-name top-[1rem]  text-white'>{e.original_title}</div>
                                                
                        <div onClick={()=>likehandler(index)} className=' size-8 hover:scale-110 absolute bottom-1 right-1 '>
                        {
                            like[index]? <img src={Liked}></img>:<img src={Like}></img>

                            
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




