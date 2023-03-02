import React from 'react'
import Wrapper from "@/components/shared/wrapper";
import Button  from "@/components/shared/button";

const coreTracker = () => {
  return (
    <section className=' mx-2 my-6 md:mx-2 md:my-2'>
        <Wrapper>

            <div className='max-w-screen-sm'>
                <p className='text-slate-600 text-sm font-semibold'> PROGRAM OF STUDIES</p>
                <h2 className='mt-2 font-bold text-3xl sm:text-4xl'>Core Courses</h2>
                <h2 className='mb-2 font-bold text-3xl sm:text-4xl'>(Common in All Specializations):</h2>
                <p className=' mt-3 text-slate-900	text-sm  text-justify'>Every participant of the program will start by completing the following three core courses:</p>
                <br />
                <Button>Learn More</Button>
            </div>

        </Wrapper> 
    </section>
  )
}

export default coreTracker