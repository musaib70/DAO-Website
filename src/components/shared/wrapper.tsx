import React, { FC } from 'react'

const wrapper:FC<{children:React.ReactNode}> = ({children}) => {
  return (
    <div className='max-w-screen-xl mx-auto'>
        {children}
        </div>
  )
}

export default wrapper