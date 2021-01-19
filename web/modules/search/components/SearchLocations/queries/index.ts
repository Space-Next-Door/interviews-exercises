import gql from "graphql-tag";

export const GET_LOCATIONS = gql`
  query getLocations($query: String!) {
    locations(
      where: { country: { _eq: Singapore }, name: { _iLike: $query } }
    ) {
      edges {
        country {
          id
          name_en
        }
        city {
          id
        }
        district {
          name_en
        }
      }
    }
  }
`;
