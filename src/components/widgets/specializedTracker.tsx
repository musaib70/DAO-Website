import React from 'react'
import Wrapper from "@/components/shared/wrapper"
import Button from "@/components/shared/button"

const Tracker = [
    {
        header: "Quarter IV",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 4
    },
    {
        header: "Quarter V",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
        number: 5
    }
]


const specializedTracker = () => {
  return (

<section className='px-4 py-6'>
    <Wrapper> 
        <div className='items-center flex-1 flex-col sm:flex-row max-w-screen-sm'>
               
            <h2 className='mt-2 font-bold text-3xl sm:text-4xl'>Specialized Tracks:</h2>
            <p className='mt-3 text-slate-900	text-sm  text-justify'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
        </div>



        <div className='border rounded-lg  border-gray-300 sm:w-8/12 px-8 py-24 mt-10'>
        <p className='text-slate-600 text-sm font-semibold'> Specialized Program</p>
        <h4 className='mt-2 font-bold text-2xl  max-w-md'>Web 3.0 (Blockchain) and Metaverse Specialization</h4>
            <p className='mt-3 text-slate-900 text-sm max-w-xl '> This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
 </p>
 <div className='flex  items-center underline text-slate-600 font-semibold space-x-1 mt-2'>
 <button className='mb-1'>Learn More</button>

 <svg width="8" height="10" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2"/>
</svg>

</div>
<div className='sm:flex gap-x-4 gap-y-4 '>
{
    Tracker.map((item) => {
    console.log(Tracker)
    return(

        <div className='border rounded-md border-white sm:w-2/2 px-8 py-14 mt-20 relative' >
            <p className='text-lg font-semibold'> {item.header} </p>
            <p className='text-slate-900 font-medium text-md'> {item.description} </p>
            <div className=' absolute -z-10 right-5 -top-2 text-9xl font-bold text-gray-200'> {item.number} </div>
            </div>

    )
    
})
}
</div>

</div>

    </Wrapper>
</section>
  
  )
}

export default specializedTracker