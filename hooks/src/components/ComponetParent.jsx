import React from 'react'
import ComponetSon from './ComponentSon';

const ComponetParent = () => {
   let num=42
    console.log(num);
  return (
    <div className='border-[2px] border-black p-2'>
        <h1>COMPONENTE A</h1>
        x={num}
        <ComponetSon num={num}/>
    </div>
  )
}

export default ComponetParent