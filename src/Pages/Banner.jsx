import React from 'react';
import { useEffect, useState } from 'react'

 function Banner({url}){

  const [banner,setbanner]=useState([]);
  const[title,settitle]=useState([]);
  
const [loading,setloading]=useState(false);




  useEffect(()=>{
      const local=localStorage.getItem("movie");
      const d=JSON.parse(local);
      const m=d.backdrop_path;
      settitle(d.original_title);

      if(m)
      {
        setbanner({});
        setbanner(m);
      }
      else
          {
            setbanner('');
            setbanner(url.backdrop_path);
            settitle('');
            settitle(url.original_title);
          }
      setloading(true);
        },[url])
       

  return (
    <div >
    <div className="flex flex-col justify-center mx-auto  w-11/12 relative">
     {
      loading ?<> <img src={`https://image.tmdb.org/t/p/original/${banner}`} alt="Banner Image"  className=' rounded-2xl mt-5 ' />
      <div >
      <div className='flex h-9 md:h-[5.5rem] pt-2 bg-opacity-30 bg-white justify-center  md:text-6xl absolute left-0 right-0 bottom-5 font-title text-white text-opacity-80'>#1 {title}</div>  
    </div></>
      
      :<div className='flex justify-center items-center mt-5 text-5xl text-yellow-600 bg-slate-300 h-[22rem] bg-opacity-30'>Loading...</div>
     } 
     
    </div>
    </div>
  );
}

export default Banner;
