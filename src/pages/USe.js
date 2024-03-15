import React, { useState } from 'react'

const USe = () => {
const [count,setCount]=useState(0)

  return (
	<div>
	  <h3>print the usestate hook {count} </h3>
	  <button  className='bg-green-500  rounded p-3 '  onClick={()=> setCount(count+10)}>increment</button>
	<button className='bg-blue-400  rounded p-3 ml-4 '    onClick={()=> setCount(count-10)}   > decriment </button>
<button  className='bg-red-700 rounded p-3  ml-[-20px]' onClick={()=>setCount(count*0)}> Rest </button>
	</div>
  )
}

export default USe
