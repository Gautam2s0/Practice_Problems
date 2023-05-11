import React, { useEffect, useState } from 'react'
import stryel from "./styles/carr.css"
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg"
import img3 from "./Images/img3.jpg"
import img4 from "./Images/img4.png"
import img5 from "./Images/img5.jpg"
import img6 from "./Images/img6.png"
 
export const Carosuel = () => {
    let [index,setIndex]=useState(0)
    let arr=[img1,img2,img3,img4,img5,img6]
    const change=(index,arr,setIndex)=>{
        setInterval(()=>{
           setIndex((index)=>index>=arr.length?0:index+1)
        },2000)
    }
useEffect(()=>{
    change(index,arr,setIndex)
},[])
  return (
    <div id="carr">
        <button id="one" onClick={()=>{
            index===0?setIndex(arr.length-1):setIndex((index)=>index-1)
        }
        } 
        >{`<`}</button>
        {/* <div> */}
        <img  class="img" src={arr[index]} alt={index} />
        {/* </div> */}
        <button id="two" onClick={()=>index===arr.length-1?setIndex(0):setIndex(index+1)}>{`>`}</button>
    </div>
  )
}

