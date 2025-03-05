import React from 'react'
import YoutubeCard from '../components/YoutubeCard'
const Youtube = () => {
  return (
    <div className='flex-col grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4'>
        <YoutubeCard />
        <YoutubeCard />
        <YoutubeCard />
        <YoutubeCard />
        <YoutubeCard />
        <YoutubeCard />
    </div>
  )
}

export default Youtube