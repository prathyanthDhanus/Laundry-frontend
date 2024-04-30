import React from 'react'

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img src="https://res.cloudinary.com/due7btgno/image/upload/v1714423336/Security-pana_xzleup.png" alt="Unauthorized" className="mx-auto h-100 w-auto" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 ">
            You are not authorized to perform this task 🚫
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Unauthorized