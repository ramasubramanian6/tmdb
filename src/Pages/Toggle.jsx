import React from 'react'

function Toggle() {
    var a=0;
    const week=()=>{
        return "week";
    }
    const day=()=>{
        return "day";
    }
  return (
    <>
       <button  type="submit" onClick={week}>Week</button> 
        <button type="submit"  onClick={day}>day</button>
    </>
  )
}

export default Toggle