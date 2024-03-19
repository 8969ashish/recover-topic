import React, { useState } from 'react'

const USe = () => {
const [count,setCount]=useState()
const [balram,setbalram]=useState(' ya ya  mai balram')
 
  return (
	<div>
	  <h3 className='bg-slate-700 text-white border w-[200px] ' >print the usestate hook {count} </h3>
 
	  <button  className='bg-green-500  rounded p-3 '  onClick={()=> setCount(count+10)}>increment</button>
	<button className='bg-blue-400  rounded p-3 ml-4 '    onClick={()=> setCount(count-10)}   > decriment </button>
<button  className='bg-red-700 rounded p-3 ml-2' onClick={()=>setCount(count*0)}> Reset </button>
	<h2 className='font-mono  text-center text-2xl ' > {balram} </h2>
	{/* <button  className='bg-orange-600' onClick={()=> setbalram(balram==='main hu kanhayiya ')} >meme</button> */}
	<button className='bg-orange-600' onClick={() => setbalram(balram === 'main hu kanhayiya' ? '' : 'main hu kanhayiya')}>meme</button>
	</div>
  )
}

export default USe
