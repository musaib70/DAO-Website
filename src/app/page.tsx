import React from 'react'
import Hero from '@/components/widgets/hero'
import CoreTracker from "@/components/widgets/coreTracker";
import SpecializedTracker  from "@/components/widgets/specializedTracker";
import  Footer  from "@/components/layout/footer";




const page = () => {
  return (
    <>
      <main>

        <Hero />

        <CoreTracker/>

        <SpecializedTracker/>
         
         <Footer/>

      </main>
    </>
  )
}

export default page