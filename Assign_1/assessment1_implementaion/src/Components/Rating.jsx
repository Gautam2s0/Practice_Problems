import React, { useState } from 'react'
import {FaStarHalfAlt,FaStar} from "react-icons/fa";
import {AiOutlineStar} from "react-icons/ai";
import style from "../Components/styles/Rating.css"
export const Rating = ({rating}) => {
  const [rat,setRate]=useState(0)
  const [hover,setHover]=useState(null)
  // rating=rat
    const ratingShow=Array.from({length:5},(elem,index)=>{
      let num=index+0.1;
      return (
        <span key={index}>
          {
            rating>=index+1?<FaStar className='icons' size={50}/>
            :rating>=num?<FaStarHalfAlt className='icons' size={50}/>
            :<AiOutlineStar color='#e4e5e9' size={50}/>
          }

        </span>
      )
    })

  return (
    <div>
        <div>
          <strong>Showing Rating</strong>
          <div>
          {ratingShow}
          </div>
          </div>
        <div>
          <strong>Giving Rating</strong>
          <div>
          {
            Array(5).fill(0).map((el,i)=>{
              return(
                <label key={i}>
                  <input type="radio" name="icon" value={i+1} onClick={()=>setRate(i+1)} />
                  <FaStar className='star' color={i+1<=(hover||rat)?"#ffc107":"#e4e5e9"} size={50}

                  onMouseEnter={()=>{
                    setHover(i+1)
                  }}
                  onMouseLeave={()=>setHover(null)}
                  />
                </label>
              )
            })
          }
          </div>
        </div>
        <strong>Rating is {rat}</strong>
    </div>
  )
}

