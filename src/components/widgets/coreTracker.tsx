import React from 'react'
import Wrapper from "@/components/shared/wrapper";
import Button  from "@/components/shared/button";

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

            <div className='sm:flex space-x-6'>

                <div className='border rounded-md border-gray-300 ml-6 sm:w-4/12 px-8 py-14 mt-10 relative' >
                    <p className='text-lg font-semibold'> Quarter I </p>
                    <p className='text-slate-900 font-medium text-md'> CS-101: Object-Oriented Programming using TypeScript </p>
                    <div className=' absolute -z-10 right-10 top-1 text-9xl font-bold text-gray-200'> 1 </div>

                </div>

                <div className='border rounded-md border-gray-300 sm:w-4/12 px-8 py-12 mt-10 relative' >
                    <p className='text-lg font-semibold'> Quarter II </p>
                    <p className='text-slate-900 font-medium text-md'> W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform </p>
                    <div className=' absolute -z-10 right-10  top-0 text-9xl font-bold text-gray-200'> 2 </div>

                </div>

                <div className='border rounded-md border-gray-300 sm:w-4/12 px-8 py-12 mt-10 relative' >
                    <p className='text-lg font-semibold'> Quarter III </p>
                    <p className='text-slate-900 font-medium text-md'> $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development </p>
                    <div className=' absolute -z-10 right-10 top-0 text-9xl font-bold text-gray-200'> 3 </div>

                </div>


            </div>

        </Wrapper> 
    </section>
  )
}

export default coreTracker