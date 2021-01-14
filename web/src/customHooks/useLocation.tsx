import { useEffect, useState } from 'react'
import { ApolloError, useLazyQuery } from '@apollo/react-hooks'
import { SEARCH_LOCATION } from '../graphql/queries/geography'

interface Location {
    country: {
      name_en: string
    }
    city: {
      name_en: string
    }
    district: {
      name_en: string
    }
    
}

interface LocationParms {
  name: string,
  country: string,
}

interface State {
    loading:boolean;
    error:string[] | ApolloError;
    data: Location[];
}
const useLocation = () => {
  const [locationState, setLocationState] = useState<State>({
    loading: false,
    error: [],
    data: [],
  })
  const [trigger, { loading, error, data }] = useLazyQuery(SEARCH_LOCATION)
  
  const getLocations = (query: LocationParms) =>{
    trigger({
      variables: query
    })
  }

  useEffect(() => {
    async function poplulate() {
        if (data) {
          setLocationState({
            loading: false,
            error: [],
            data: data.locations.edges
          })
        }
    }
    poplulate()
  }, [data])

  useEffect(() => {
    setLocationState((prev) => ({ ...prev, loading }))
  }, [loading])

  useEffect(() => {
    setLocationState((prev) => ({ ...prev, error }))
  }, [error])

  
  return {
    locationState,
    getLocations
  }
}

export default useLocation
