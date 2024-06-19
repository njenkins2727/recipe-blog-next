import React from 'react'

const ViewRecipeSkeleton = () => {
  return (
    <div className="bg-stone-800 rounded-lg shadow-md p-6 mt-12 max-w-md mx-auto md:max-w-lg lg:max-w-2xl xl:max-w-3xl mb-10 animate-pulse">
    <div className="h-6 bg-gray-200 rounded w-2/4 mb-4"></div>
    <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
    <div className="h-64 bg-gray-200 rounded w-full mb-4"></div>
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2">
        <div className="h-5 bg-gray-200 rounded w-1/3 mb-2"></div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mt-3 mb-4 ml-6"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mt-3 mb-4 ml-6"></div>
          <div className="h-4 bg-gray-200 rounded w-full mt-3 mb-4 ml-6"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded w-1/3 ml-6 mt-4"></div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="h-5 bg-gray-200 rounded w-1/3 mb-2"></div>
        <div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mt-3 mb-4 ml-6"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mt-3 mb-4 ml-6"></div>
          <div className="h-4 bg-gray-200 rounded w-full mt-3 mb-4 ml-6"></div>
        </div>
      </div>
    </div>
    <div className="text-sm text-gray-500">
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  </div>
  )
}

export default ViewRecipeSkeleton