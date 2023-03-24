"use client"

import React, { useState } from 'react'
import Wrapper from "@/components/shared/wrapper"
import Button from "@/components/shared/button"
import  Image  from 'next/image';


const sideObject = [
    {
        slug: "web3",
        Header: "Specialized Program",
        Description: "Web 3.0 (Blockchain) and Metaverse Specialization",
        Description1:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
        image: <img
            src={'w1.png'}
             alt= "loading..."
              className='h-20 w-32 flex-shrink-0'
               />,
         Quaters:      
    [
        {
            header: "Quarter IV",
            description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
            number: 4
        },
        {
            header: "Quarter V",
            description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse",
            number: 5
        }
    ],
},
    {
        slug: "ai",
        Header: "Specialized Program",
        Description: "Artificial Intelligence (AI) and Deep Learning Specialization",
        Description1:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: <img
        src={'i1.png'}
         alt= "loading..."
          className='h-20 w-32 flex-shrink-0'
           />,
           Quaters:      
           [
               {
                   header: "Quarter IV",
                   description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                   number: 4
               },
               {
                   header: "Quarter V",
                   description: "AI-361: Deep Learning and MLOps",
                   number: 5
               }
           ],
        
    },
    {
        slug: "cnc",
        Header: "Specialized Program",
        Description: "Cloud-Native Computing Specialization",
        Description1: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        image: <img
        src={'a1.png'}
         alt= "loading..."
          className='h-20 w-32 flex-shrink-0'
           />,
           Quaters:      
           [
               {
                   header: "Quarter IV",
                   description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
                   number: 4
               },
               {
                   header: "Quarter V",
                   description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                   number: 5
               }
           ],
    },

    {
        slug: "iot",
        Header: "Specialized Program",
        Description: "Ambient Computing and IoT Specialization",
        Description1:`The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices. `,
        image: <img
            src={'iot.png'}
             alt= "loading..."
              className='h-20 w-32 flex-shrink-0'
               />,
         Quaters:      
    [
        {
            header: "Quarter IV",
            description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
            number: 4
        },
        {
            header: "Quarter V",
            description: "AC-361: Embedded Programming using C and Rust",
            number: 5
        }
    ],
},
{
    slug: "gps",
    Header: "Specialized Program",
    Description: "Genomics and Bioinformatics Specialization",
    Description1:`Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications. `,
    image: <img
        src={'gbs.png'}
         alt= "loading..."
          className='h-20 w-32 flex-shrink-0'
           />,
     Quaters:      
[
    {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 4
    },
    {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5
    }
],
},

{
    slug: "npa",
    Header: "Specialized Program",
    Description: "Network Programmability and Automation Specialization",
    Description1:`More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.`,
    image: <img
        src={'aii.png'}
         alt= "loading..."
          className='h-20 w-32 flex-shrink-0'
           />,
     Quaters:      
[
    {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4
    },
    {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5
    }
],
},
    
]



const specializedTracker = () => {

   const[selectedItem, selecttItem] = useState("web3")

   const setselectedData = sideObject.find ((item) => item.slug === selectedItem )

  return (

<section className='px-4 py-6 flex-col md:flex-row flex-1 '>
    <Wrapper> 
        <div className='items-center flex-1 '>
               
            <h2 className='mt-2 font-bold text-3xl sm:text-4xl'>Specialized Tracks:</h2>
            <p className='mt-3 text-slate-900	text-sm  text-justify'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
        </div>


        <div className='flex gap-x-8 gap-y-6 sm:flex-row  md:flex-row flex-col-reverse'>
        
        <div className='border rounded-lg self-start  border-gray-300 sm:w-8/12 px-8 py-10 mt-10 shadow-lg sticky top-24 -z-50 '>
        <p className='text-slate-600 text-sm font-semibold'> {setselectedData?.Header}</p>
        <h4 className='mt-2 font-bold text-2xl  max-w-md'>{setselectedData?.Description}</h4>
            <p className='mt-3 text-slate-900 text-sm max-w-xl '> {setselectedData?.Description1} </p>
 <div className='flex items-center underline text-slate-600 font-semibold space-x-1 mt-2'>
 <button className='mb-1'>Learn More</button>

 <svg width="8" height="10" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
</svg>

</div>
<div className='sm:flex gap-x-4 gap-y-4  '>
{
    setselectedData?.Quaters.map((item) => {
    
    return(

        <div className='border rounded-md border-white px-6 sm:w-2/2 flex-1 py-14 mt-20 relative ' >
            <p className='text-lg font-semibold'> {item.header} </p>
            <p className='text-slate-900 font-medium text-md'> {item.description} </p>
            <div className=' absolute -z-10 right-5 -top-2 text-9xl font-bold text-gray-200'> {item.number} </div>
            
            </div>

    )
    
})
}
</div>
</div>

<div className='  w-auto  md:w-4/12  py-6  cursor-pointer divide-y-2 divide-slate-400/[.24] divide-y-reverse  '> 
{
sideObject.map((item,i) => {
    return(
      
<div onClick={() => selecttItem (item.slug)} key={i} className='flex flex-shrink-0 object-cover space-x-4  mt-10   ' >

{item.image}

<div className='flex flex-col '>

<p className='text-slate-600 text-md font-semibold'>{item.Header}</p>
 <h4 className='font-bold text-lg  mb-10'>{item.Description}</h4>

</div>
</div>
        
    )
 })
}

</div >

</div>





<div className='flex my-40  basis-2 shadow-blue-700 sm:flex-row  flex-col-reverse'>

    <div className='flex-1 '>
        <img src="footer1.png" alt="loading"  />
    </div>

    <div className='my-8 sm:mx-32 flex-1'>

        <h2 className='font-bold text-3xl sm:text-4xl my-2'>The Outcome for Participants of the Program</h2>
        <p className='my-8 sm:text-justify text-slate-800 text-md'>As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</p>
    

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-slate-900 text-md font-semibold shadow-blue-700'>
      
        <p className='flex items-center gap-2'>
        <img src="icon1.png" alt="alt" />
        Product Ownership
        </p>
        
        <p className='flex items-center gap-2'>

        <img src="icon1.png" alt="alt" />
        Freelancing
        </p>
       
        <p className='flex items-center gap-2'>

        <img src="icon1.png" alt="alt" />
        Global Marketing by DAO
        </p>
        
        <p className='flex items-center gap-2'>

        <img src="icon1.png" alt="alt" />
        Boosting Economy
        </p>
        </div>
 
    </div>
</div>


    </Wrapper>
</section>
  
  )
}

export default specializedTracker