import { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/react-hooks'
import { SEARCH_LOCATION } from '../graphql/queries/geography'
import { debounce } from "../../src/utils" 
import { LocationParms, LocationState } from '../interfaces'


const useLocation = () => {
  const [locationState, setLocationState] = useState<LocationState>({
    loading: false,
    error: [],
    data: [],
  })
  const [trigger, { loading, error, data }] = useLazyQuery(SEARCH_LOCATION)
  
  const getLocations = (query: LocationParms) =>{
    debounce(()=>{
      trigger({
        variables: query
      })
    },2000)
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
