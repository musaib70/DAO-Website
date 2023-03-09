import React from 'react'
import Wrapper from "@/components/shared/wrapper";
import Button  from "@/components/shared/button";
import header from '../layout/header';

const Tracker = [
    {
    header: "Quarter I",
    descriptions: "CS-101: Object-Oriented Programming using TypeScript", 
    Number: 1
},
{
    header: "Quarter II",
    descriptions: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform", 
    Number: 2
},
{
    header: "Quarter III",
    descriptions: " $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development", 
    Number: 3
}
]

const coreTracker = () => {
  return (
    <section className='my-6 md:mx-2 md:my-2'>
        <Wrapper>

            <div className='max-w-screen-sm '>
                <p className='text-slate-600 text-sm font-semibold'> PROGRAM OF STUDIES</p>
                <h2 className='mt-2 font-bold text-3xl sm:text-4xl'>Core Courses</h2>
                <h2 className='mb-2 font-bold text-3xl sm:text-4xl'>(Common in All Specializations):</h2>
                <p className=' mt-3 text-slate-900	text-sm  text-justify'>Every participant of the program will start by completing the following three core courses:</p>
                <br />
                <Button>Learn More</Button>
            </div>

{/* Quater Box */}

<div className='sm:flex gap-x-4 gap-y-4'>
 
    {
Tracker.map ((item) => { 
    console.log(Tracker);
    return(
        
        <div className=' border rounded-md border-gray-300 sm:w-4/12 px-8 py-14 mt-10 relative mx-4' >
            <p className='text-lg font-semibold'> {item.header} </p>
            <p className='text-slate-900 font-medium text-md'> {item.descriptions} </p>
            <div className=' absolute -z-10 right-5 -top-2 text-9xl font-bold text-gray-200'> {item.Number} </div>
            </div>
          
        
    )
 })
 
}
</div>
        </Wrapper> 
    </section>
  )
}

export default coreTracker