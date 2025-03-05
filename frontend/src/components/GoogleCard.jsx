import React from 'react'

const GoogleCard = ({result}) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg">
      <a href={result.link} target="_blank">
        <div className="px-6 py-4">
          <div className="text-blue-700 font-semibold text-sm mb-2">{result.title}</div>
          <p className="text-gray-700 text-sm">{result.snippet}</p>
        </div>
      </a>
    </div>
  )
}

export default GoogleCard