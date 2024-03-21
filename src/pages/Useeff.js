import React, { useState } from 'react'

function Useeff() {
	const [value, setValue] = useState(0)

	return (
		<div className='flex justify-center m-5'>
			<div className='border h-[20rem] w-[30rem] bg-slate-400 rounded '>
				<div className=' text-3xl font-mono  text-white  mt-5' > Number is {value}  </div>
				<div className='flex justify-evenly'>
					<div><button onClick={() => setValue(value + 1)} className='bg-slate-200 text-white  pt-2 pb-2 pr-[2rem] pl-[2rem] font-mono text-xl rounded mt-5' > + </button></div>
					<div><button onClick={() => setValue(value * 0)} className='bg-red-300 text-white pt-2 pb-2 pr-[2rem] pl-[2rem] font-mono text-xl rounded mt-5' > 🐬 </button></div>
					<div><button onClick={() => setValue(value - 1)} className='bg-blue-300 text-white  pt-2 pb-2 pr-[2rem] pl-[2rem] font-mono text-xl rounded mt-5' > - </button></div>


				</div>

			</div>




		</div>
	)
}

export default Useeff



