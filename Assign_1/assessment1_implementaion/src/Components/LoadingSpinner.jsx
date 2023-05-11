import React, { useEffect, useState } from 'react';
import style from "./styles/loadingspinner.css"

export const LoadingSpinner = () => {
    const [load,setLoad]=useState(true)
    setTimeout(()=>{
        setLoad(false)
    },3000)
    
 
  return (
    <div>
        <div className={load?"loding":"loading--hidden"}></div>
        <h3>
            Loading Spinner Made By <strong style={{color:"teal"}}> Gautam Sonkar</strong> In  {new Date().getFullYear()} 
        </h3>
    </div>
     
  )
}
