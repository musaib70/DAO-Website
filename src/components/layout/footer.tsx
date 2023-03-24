import React from 'react'
import  Wrapper  from "@/components/shared/wrapper";
import { BsFacebook } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";


const footer = () => {
  return (

    
    <section className='border-t border-gray-200 mx-8'>
        <Wrapper>
        

        
         <div>

<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[50%,25%,25%] gap-x-8 mt-12 mb-6'>

<div>
    <img 
     src="panaverse.png" alt="loading"
     height={100}
         width= {150} />
         <p className='mt-6 text-gray-700 text-md text-justify'>Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
        
        <div className='flex my-6 '>
            <span className='mr-2'> <BsFacebook/> </span>
            <span className='mr-2'> <IoLogoYoutube/> </span>
            <span className='mr-2'> <BsTwitter/> </span>
            <span className='mr-2'> <GoMarkGithub/> </span>
            </div> 


</div>

<div className=''>
    <h2 className='font-bold text-xl text-gray-800'>Programs</h2>
    <ul className='my-4  text-gray-700'>
        <li className='my-2'>Web 3.0 and Metaverse Developer</li>
        <li className='my-2'>Artificial Intelligence</li>
        <li className='my-2'>Cloud-Native Computing</li>
        <li className='my-2'>Ambient Computing and IoT</li>
        <li className='my-2'>Genomics and Bioinformatics</li>
        <li className='my-2'>Network Programmability and Automation</li>
    </ul>
</div>

<div>
    <h2 className='font-bold text-xl text-gray-800'>Pages</h2>
    <ul className='my-4 text-gray-700'>
        <li>Home</li>
        <li className='my-2'>Quater 1</li>
        <li className='my-2'>Quater 2</li>
        <li className='my-2'>Quater 3</li>
    </ul>
</div>







</div>
         </div>
         
         </Wrapper>
    </section>
    
   
  )
}

export default footer