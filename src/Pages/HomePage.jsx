import React from 'react'
import Banner from './Banner'
import Top10 from './Top10'
import { useEffect, useState } from 'react'
import axios from 'axios';



function HomePage() {

  //Toggle

const [toggle,settoggle]=useState("week");

const handletoggle=()=>{
  if(toggle=="week")
  {
    settoggle("day");
    

  }
  else{
    settoggle("week");
    

  }
}



  
  const api=`https://api.themoviedb.org/3/trending/movie/${toggle}?api_key=7c7118e2479a799a8b8d95c7ee185dec&language=en-US&page=1`;
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


  const addWatch=(index)=>{
    const preArrat=[...watch];
    preArrat.push(movie[index].original_title)
    setwatch(preArrat);
  }

  const RemoveWatch=(index)=>{
    const preliked=[...watch];
   const filtermovie= preliked.filter((e)=>{
      return (e !== movie[index].original_title);
    })
    setwatch(filtermovie);
  }


  const ismovielike = (index) => {
    const preliked = [...watch];
    return preliked.some((e) => {
        return e === movie[index].original_title;
    });
};





  return (
    <div> 
      <Banner url={movie[0]}/>
    
      <Top10 addWatch={addWatch} RemoveWatch={RemoveWatch} ismovielike={ismovielike} movie={movie} handletoggle={handletoggle}/>
    </div>
  )
}

export default HomePage;