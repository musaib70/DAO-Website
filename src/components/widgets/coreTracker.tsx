import React from 'react'
import Wrapper from "@/components/shared/wrapper";
import Button  from "@/components/shared/button";
import header from '../layout/header';
import QuaterBox from "@/components/shared/quaterBox";


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
    <section className='py-6 px-2 sm:mx-2 sm:my-6 '>
    
        <Wrapper>

            <div className='max-w-screen-sm items-center flex-1 '>
                <p className='text-slate-600 text-sm font-semibold mx-2 my-2'> PROGRAM OF STUDIES</p>
                <h2 className='mx-2 my-2 font-bold text-3xl sm:text-4xl'>Core Courses</h2>
                <h2 className='mx-2 my-2 font-bold text-3xl sm:text-4x1'>(Common in All Specializations):</h2>
                <p className=' mx-2 my-2 text-slate-900	text-sm  text-justify'>Every participant of the program will start by completing the following three core courses:</p>
                <br />
                <div className=''>
                <Button>Learn More</Button>
                </div>
            </div>

{/* Quater Box */}

<div className=' sm:flex gap-x-4 gap-y-4 sticky -z-40 '>
 
    {
Tracker.map ((item) => { 
    console.log(Tracker);
    return(
        
        <QuaterBox
        key={item.Number}
         Description={item.descriptions}
          Header={item.header}
           Number={item.Number} 
           HaveBorder = {true}  />
       
    )
 })
 
}
</div>
        </Wrapper> 
    </section>
  )
}

export default coreTracker