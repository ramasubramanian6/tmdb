import React, { useState } from 'react'

function WatchList() {
  const key = "watch";

  const data = JSON.parse(localStorage.getItem(key));
  console.log(data);



  return (
    <div className='h-full w-full text-white'>
      {data}

    </div>
  )
}

export default WatchList