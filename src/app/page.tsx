import React from 'react'
import Hero from '@/components/widgets/hero'
import CoreTracker from "@/components/widgets/coreTracker";
import SpecializedTracker  from "@/components/widgets/specializedTracker";



const page = () => {
  return (
    <>
      <main>

        <Hero />

        <CoreTracker/>

        <SpecializedTracker/>

      </main>
    </>
  )
}

export default page