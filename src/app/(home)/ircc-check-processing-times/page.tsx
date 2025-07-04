'use client'

import { useEffect } from 'react'

export default function ProcessingTimesPage() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.canada.ca/content/dam/ircc/documents/json/data-ptime-non-country-en.json',
        )
        const jsonData = await response.json()
        console.log('Processing Times Data:', jsonData)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">IRCC Processing Times</h1>
      <p>Please check the console for the data output.</p>
    </div>
  )
}


// https://www.canada.ca/content/dam/ircc/documents/json/data-ptime-en.json
// https://www.canada.ca/content/dam/ircc/documents/json/data-country-name-en.json
