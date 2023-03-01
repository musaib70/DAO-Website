import React, { FC, ReactNode } from 'react'

const Button:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='bg-slate-500 hover:bg-slate-600 hover:duration-1000 shadow-md text-white font-semibold py-3 px-4 text-center text-lg rounded-full w-36 h-15 '>

        <button> {children} </button>

        
    </div>
    
  )
}

export default Button 