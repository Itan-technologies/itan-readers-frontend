import React from 'react'

const AuthorDashboard = () => {
  return ( 
  <div className="p-4 ml-64  mt-16 grid grid-cols-3">
   <div className='col-span-2 bg-slate-500 h-10'>
    <div className='grid grid-cols-2 gap-10'>
      <div className='w-44 h-44 bg-orange-400'></div>
      <div className='w-44 h-44 bg-orange-400'></div>
      <div className='w-44 h-44 bg-orange-400'></div>
    </div>
   </div>
   <div className='h-10 bg-slate-900'></div>
  </div>
  )
}

export default AuthorDashboard