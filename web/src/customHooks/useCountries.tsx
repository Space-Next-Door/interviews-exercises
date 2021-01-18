import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { FETCH_COUNTRIES } from '../graphql/queries/geography'
import { CountriesState } from '../interfaces'


const useCountries = () => {
  const [countriesData, setCountriesData] = useState<CountriesState>({
    loading: false,
    error: [],
    countries: [],
  })
  const { loading, error, data } = useQuery(FETCH_COUNTRIES)
  

  useEffect(() => {
    async function poplulate() {
        if (data) {
          setCountriesData({
            loading: false,
            error: [],
            countries: data.countries.edges
          })
        }
    }
    poplulate()
  }, [data])

  useEffect(() => {
    setCountriesData((prev) => ({ ...prev, loading }))
  }, [loading])

  useEffect(() => {
    setCountriesData((prev) => ({ ...prev, error }))
  }, [error])

  
  return {
    ...countriesData
  }
}

export default useCountries
