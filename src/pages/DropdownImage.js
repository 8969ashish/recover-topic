import React, { useEffect, useState } from 'react'

import singer from './Images';
function DropdownImage() {

	const[photo,setPhoto]=useState(singer[0].image_url)
	const[selectphoto,setSelectphoto]=useState('Udit naraya')
	const swap=()=>{
		setPhoto(singer.find((item)=>item.name===selectphoto))
	}
	useEffect(()=>{
		swap()
	},[selectphoto])
  return (
	<div>
		  <div className=' bg-slate-500 ' ><h1 className='text-center text-2xl text-green-500 ' >Select Singer & See Photo  </h1></div>

	  <div className='h-screen flex justify-center items-center bg-slate-500 ' >

	  <div  className=' bg-slate-200 rounded '>
	<select name="" value={selectphoto} id=""
	
	onChange={(e)=>setSelectphoto(e.target.value)}>
		{
            singer.map((first)=>{
            return(
				<option value={first.name}>{first.name}</option>
			)
           

			}
			
			
			)
           

		}




	</select>
	<img src={photo.image_url} alt=""className='h-[30rem]'  />
	</div>
	</div>
	</div>
  )
}

export default DropdownImage
