import React from 'react'
import  Image  from "next/image";
import Logo  from "public/panaverse.png";
import Link from 'next/link';





const header = () => {
  return (
    
    <header className='flex justify-between  my-2 px-4 py-4 item-center max-w-screen-xl mx-auto bg-white sticky top-0'>
         <div><Image
         src= {Logo}
         alt = "loading..."
         height={100}
         width= {150}
           /></div>
           
  

         {/* <div><h1>Panaverse DAO</h1></div> */}
      
    <ul className='flex space-x-6 font-semibold py-8 px-4 '>
    <li> 
         <Link href = {"/"}> Home </Link>       
                
        </li>
        <li>
            <Link href={"https://nextjs.org/"}> Courses</Link>
        </li>
    </ul>

    
      

    </header>
  )
}

export default header