import React from 'react'
import  Wrapper  from "@/components/shared/wrapper";
import Image from 'next/image';
import web  from "public/header1.png";
import Button from "@/components/shared/button";



const hero = () => {
  return (

    <section className=' px-2 py-2'>
    <Wrapper>
        
     <div className='flex items-center flex-1 flex-col sm:flex-row'>

    <div>
    <h4 className='flex mx-2 my-2 text-red-600 font-medium sm:text-slate-600'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
    <h1 className='font-bold text-3xl sm:text-4xl mx-2 my-4'> Certified Web 3.0 and Metaverse Developer </h1>
    <p className='flex mx-2 my-2 text-slate-900	text-sm text-justify'>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
    <p className='flex mx-2 my-2 text-slate-900	text-sm text-justify'>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
    <div className=' mt-6 '>
    <Button>Enroll Now</Button>
  
    </div>
    </div>
    
    <div className='mx-4 my-2'>
            <Image src = {web}
                    alt = "loading...."
                    height={700}
                    width = {700}
                     /> 
    </div>


    
    </div>

   
           </Wrapper>
    </section>
    
  )
}
  
  
export default hero