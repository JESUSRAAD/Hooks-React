import React, { useState } from 'react'

const ComponetGrandSon = ({num, increment}) => {
// increment(num)

  return (
    <div className='border-[2px] border-black p-2'>
        <h1>COMPONENTE C</h1>
        x={num}
        <button  className=' flex justify-center items-center bg-sky-700 text-white  rounded-xl px-2 py-1'>x++</button>
    </div>
  )
}

export default ComponetGrandSon