import React from 'react'
import Banner from './Banner'
import Top10 from './Top10'
import { useEffect, useState } from 'react'
import axios from 'axios';


function HomePage() {

  
  const api="https://api.themoviedb.org/3/trending/movie/week?api_key=7c7118e2479a799a8b8d95c7ee185dec&language=en-US&page=1";
  const [movie,setmovie]=useState([]);
  const data_local=localStorage.getItem(movie);
  



  if(data_local)
  {
    setmovie([]);
    const string_json=JSON.parse(data_local);
    const arr=Object.values(string_json);
    setmovie(arr);

  }
  else{
    useEffect(()=>{
      axios.get(api).then((res)=>{
          {
              var data=res.data.results;
              setmovie(data)
              if(data)
                {
                  const data_string=JSON.stringify(data);
                  localStorage.clear();
                  localStorage.setItem("movie",data_string);
                }       
          }
      })
     },[api])
  }

  const [watch,setwatch]=useState([]);


  const addWatch=(movie)=>{
    setwatch([...watch],movie);
  }



console.log(watch);


  return (
    <div> 
      <Banner url={movie[0]}/>
      <Top10 addWatch={addWatch}  movie={movie}/>
    </div>
  )
}

export default HomePage