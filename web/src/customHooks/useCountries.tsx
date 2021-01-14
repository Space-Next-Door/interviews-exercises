import { useEffect, useState } from 'react'
import { ApolloError, useQuery } from '@apollo/react-hooks'
import { FETCH_COUNTRIES } from '../graphql/queries/geography'

interface Countries {
      name_en: string    
}


interface State {
    loading:boolean;
    error:string[] | ApolloError;
    countries: Countries[];
}
const useCountries = () => {
  const [countriesData, setCountriesData] = useState<State>({
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
