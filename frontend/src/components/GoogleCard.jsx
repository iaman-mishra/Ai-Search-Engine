import React from 'react'

const GoogleCard = () => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <a href="#" target="_blank">
        <div className="px-6 py-4">
          <div className="text-blue-700 font-semibold text-sm mb-2">This is a title</div>
          <p className="text-gray-700 text-sm">This is a description</p>
        </div>
      </a>
    </div>
  )
}

export default GoogleCard