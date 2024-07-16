import React, { useState } from 'react'
import ComponetGrandSon from './ComponetGrandSon'

const ComponetSon = ({num}) => {
// const []
//    const increment=(acc)=>{
//     acc+1
//    }
 
  return (
    <div className='border-[2px] border-black p-2'>
        <h1>COMPONENTE B</h1>
        x= 
        <ComponetGrandSon num={num} />
    </div>
  )
}

export default ComponetSon