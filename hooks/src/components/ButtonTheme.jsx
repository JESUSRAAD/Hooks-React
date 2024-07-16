import React from 'react'

const ButtonTheme = ({IsLight}) => {
    
    const cssClass=IsLight===true?" bg-neutral-800 text-white  rounded-xl px-2 py-1":"bg-neutral-100 text-black rounded-xl px-2 py-1"
    
  return (
  
    <button className={cssClass}>{IsLight===true?"DRK":"LGHT"}</button>
  )
}

export default ButtonTheme