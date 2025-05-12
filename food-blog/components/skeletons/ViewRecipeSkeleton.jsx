import React from 'react'

const ViewRecipeSkeleton = () => {
  return (
  <div className="bg-secondary rounded-lg shadow-md p-6 mt-28 max-w-md mx-auto md:max-w-lg lg:max-w-2xl xl:max-w-3xl mb-10 animate-pulse">
    <div className="skeleton-title"></div>
    <div className="skeleton-description"></div>
    <div className="skeleton-image"></div>
    <div className="flex flex-wrap">
      <div className="skeleton-intruction">
        <div className="skeleton-subheading"></div>
        <div>
          <div className="skeleton-list"></div>
          <div className="skeleton-list"></div>
          <div className="skeleton-list"></div> 
        </div>
        <div className="skeleton-button"></div>
      </div>
      <div className="skeleton-intruction">
        <div className="skeleton-subheading"></div>
        <div>
          <div className="skeleton-list"></div>
          <div className="skeleton-list"></div>
          <div className="skeleton-list"></div>
        </div>
      </div>
    </div>
      <div className="skeleton-credit"></div>
      <div className="skeleton-credit"></div>
  </div>
  )
}

export default ViewRecipeSkeleton