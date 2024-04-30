import React from 'react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full  space-y-8">
        <div className="text-center">
          <img src="https://res.cloudinary.com/due7btgno/image/upload/v1714425166/404_error_with_people_holding_the_numbers-pana_lbr1yn.png" alt="Not-found" className="mx-auto h-100 w-auto" />
          <h2 className="mb-6 text-center text-2xl font-extrabold text-gray-900 ">
            Sorry we can't find anything 🥺
          </h2>
        </div>
      </div>
    </div>
  )
}

export default NotFound