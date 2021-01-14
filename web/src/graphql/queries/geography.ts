import { gql } from '@apollo/client'

export const SEARCH_LOCATION = gql`
    query SEARCH_LOCATION(
        $country:FixedCountry!,
        $name:String,
    ){
        locations(where: {
            country:{
              _eq: $country
            },
            name: {
              _like: $name
            }
          }) {
            edges {
              country {
                name_en
              }
              city {
                name_en
              }
              district {
                name_en
              }
            }
          }
    }
`


export const FETCH_COUNTRIES = gql`
    query FETCH_COUNTRY{
      countries(
        pagination: {
         limit: 100
         skip: 0
       }
     ){
       edges{
         name_en
       }
     }
    }
`