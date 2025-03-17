import React, { useContext } from 'react'
import YoutubeCard from '../components/YoutubeCard'
import AppContext from '../AppContext'

const Youtube = () => {
  const { searchResults} = useContext(AppContext);
  const youtubeResults = searchResults.youtubeResults;
  return (
    <div className='flex-col grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4'>
        {youtubeResults ? youtubeResults.map((result, index) => (
            <YoutubeCard key={index} result={result} />
        )) : "No result found"}
    </div>
  )
}

export default Youtube