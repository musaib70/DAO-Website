import React, { FC } from 'react'

interface IProps{
  Header: string
  Description: string
  Number: number
  HaveBorder ?: boolean
}

const quaterBox:FC <IProps> = ({ Header, Description, Number, HaveBorder}) => {
  return (

    <div className={` shadow-lg rounded-md border-gray-300 sm:w-4/12 px-8 py-14 mt-10 relative ${HaveBorder && "border"}`} >
    <p className='text-lg font-semibold'> {Header} </p>
    <p className='text-slate-900 font-medium text-md'> {Description} </p>
    <div className=' absolute -z-10 right-5 -top-2 text-9xl font-bold text-gray-200'> {Number} </div>
    </div>

  )
}

export default quaterBox