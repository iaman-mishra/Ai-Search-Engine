import React, { useContext } from 'react'
import GoogleCard from '../components/GoogleCard'
import AppContext from '../AppContext'

const Goggle = () => {
  const { searchResults} = useContext(AppContext);
  const googleResults = searchResults.googleResults;

  return (
    <div className='flex flex-col justify-between'>
    {googleResults? googleResults.map((result, index) => (
      <GoogleCard key={index} result={result} />
    )) : "No result found"}
    </div>
  )
}

export default Goggle