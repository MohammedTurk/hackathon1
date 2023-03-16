import { BankIcon } from 'components/svg'
import React from 'react'

export const BankOption = ({selected}:{selected:any}) => {
  return (
    <div className="flex gap-2 items-center">
      <span className='block truncate text-gray-dark bg-gray-light p-4  rounded-full'><BankIcon className='w-7 h-7' /></span>

    <div className="flex flex-col gap-2">
    <span
        className={`block truncate text-gray-dark text-sm ${
          selected ? "font-medium" : "font-light"
        }`}
      >
        {selected?.accountName}
      </span>
      <span
        className={`block truncate text-gray-dark text-sm ${
          selected ? "font-medium" : " font-light"
        }`}
      >
         {selected?.createdAt}
      </span>
     
    </div>

     
  </div>
  )
}
export default BankOption