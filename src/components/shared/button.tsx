import React, { FC, ReactNode } from 'react'

const Button:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className='bg-slate-500 hover:bg-slate-600 duration-300 text-white font-semibold py-3 px-4 text-center text-lg rounded-full w-36 h-15 '>

        <button> {children} </button>

        
    </div>
    
  )
}

export default Button 