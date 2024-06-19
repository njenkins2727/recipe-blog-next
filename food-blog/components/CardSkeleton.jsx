import React from 'react'
//error in this skeleton
const CardSkeleton = () => {
  return (
    <div className="card card-compact w-96 bg-stone-800 shadow-xl mx-6 my-4 animate-pulse">
  <figure>
    <div className="w-screen h-60 bg-gray-200"></div>
  </figure>
  <div className="card-body">
    <div className="card-title h-6 bg-gray-200 rounded mb-2 w-2/3"></div>
    <div className='line-clamp-3'>
      <div className="h-4 bg-gray-200 rounded mb-1 w-full"></div>
      <div className="h-4 bg-gray-200 rounded mb-1 w-2/3"></div>
    </div>
    <div className="card-actions justify-end">
      <div className='size-8 mt-2 w-10 h-10 bg-gray-200 inline-block rounded'></div>
      <div className="btn btn-primary h-10 w-24 bg-gray-200 inline-block rounded ml-2"></div>
    </div>
  </div>
</div>
  )
}

export default CardSkeleton