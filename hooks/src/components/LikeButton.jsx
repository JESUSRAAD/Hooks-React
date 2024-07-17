import { Heart } from 'lucide-react';
import React from 'react'
import { useState } from "react";
import { colorsLikeButton } from '../data/data';


const LikeButton = () => {


    const [counter, setCounter] = useState(0);
    const [indexColor, setIndex]=useState(0)
	
	const add = () =>{ 
        
        if (indexColor>colorsLikeButton.length-2) {
            setIndex(0)
        } else {
            setIndex(indexColor+1)
        }
        setCounter(counter+1);
    }
	



///// ocurre un error que cno reconoce el valor hasta que es escrito y remplazado
const cssClass=`text-red-400 fill-current` 
  const cssClassButton=`flex  ${colorsLikeButton[indexColor]} rounded-xl p-1` 


  return  (
    <div>
        
        <button className={cssClassButton} onClick={add}><span className='justify-center items-center'>{counter}Likes</span><Heart  className={cssClass} /></button>
        
    </div>
);
}

export default LikeButton