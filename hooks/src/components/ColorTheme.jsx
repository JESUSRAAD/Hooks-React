import React from "react";
import { useState } from "react";
import ButtonTheme from "./ButtonTheme";

const ColorTheme = () => {
   
  const [IsLight, setIsLight] = useState(true);
  const handleTheme=()=>{
    if (IsLight===true) {
      setIsLight(false)
    }
    else{
        setIsLight(true)
    }
    return IsLight
  }
  
const cssClass=IsLight===true?"w-[300px] text-center border-[3px] bg-neutral-100 border-neutral-800 rounded-xl p-1 gap-3":"w-[300px] text-center text-white border-[3px] bg-neutral-900 border-neutral-400 rounded-xl p-1 gap-3" 
  return (
    <div className={cssClass} >
      <h1 className="text-xl">MoodTheme</h1>
        <p>Pequeño lorem</p><br></br >
      <p className="text-xs ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste
        eaque perferendis nobis quaerat, harum necessitatibus. Libero quisquam
        expedita, dolor, dolorem aliquam, maiores illo quasi eum porro obcaecati
        dolorum deleniti.
      </p>
    
      <button  onClick={handleTheme}><ButtonTheme   IsLight={IsLight} /></button>

    </div>
  );
};

export default ColorTheme;
