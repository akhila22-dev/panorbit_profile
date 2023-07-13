import React, { useEffect, useState } from 'react'
import proo from "../../images/proo.avif"

const Main = () => {

// let isLoading = true;

// let API = "https://panorbit.in/api/users.json"

// const fetchApiData =  async (url) => {
//  try {
//   const res = await fetch(url)
//   const data = await res.json();
//   console.log(data)
//   isLoading = false;
//  } catch (error)
//  {
//    console.log(error)
//  }

// }

// useEffect(() => {
//   fetchApiData(API)
// },[])

// if(isLoading) {
//   return <>
//    {/* <h1>Loading...</h1> */}
//   </>
// }


  return (    
    <div className="flex justify-center    overflow-x-hidden overflow-y-auto fixed inset-0 z-50  mt-10 outline-none focus:outline-none  ">
    <div className="relative   mx-auto   ">
      <div className=" rounded-lg  shadow-lg relative flex flex-col w-full- outline-none focus:outline-none  ">        
         
          <div className="text-2xl font-medium not-italic  bg-slate-100 p-10 ">
           Select an Account
          </div>
          <div className='p-5 w-96'>
          <div className='  border-b pb-3  '>     <img src={proo} alt='pro' className=' w-12  rounded-full '/>
        
          </div>
          <div className='border-b    pb-3 pt-3 '>  <img src={proo} alt='pro' className=' w-12  rounded-full '/></div>
          </div>

          
       
     
     
  
       
    </div>
    
    {/* <div className="flex flex-col items-center pb-10">
    
    </div> */}
    </div>
    </div>

  


   
  )
}

export default Main
