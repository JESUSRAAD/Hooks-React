import React, { useState } from 'react'
import ComponetGrandSon from './ComponetGrandSon'

const ComponetSon = ({num}) => {

    const [result, setResult]=useState(num)

  const  increment2=(num)=>{
       result=num+1
    setResult(result) 
  }
  return (
    <div className='border-[2px] border-black p-2'>
        <h1>COMPONENTE B</h1>
        x= {result}
        <ComponetGrandSon num={num} increment2={increment2}/>
    </div>
  )
}

export default ComponetSon