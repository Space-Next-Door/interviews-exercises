import { gql } from "@apollo/client";
import { client } from "../../../apollo";

const useToFindSpace = () => {
  const searchSpace = async (textValue) => {
    const res = await client.query({
      query: gql`
       query {
            locations(where: {
              country:{
                _eq: Singapore
              },
              name: {
                _like: "%${textValue}%"
              }
            }) {
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

          `,
    });

    // return;

    return res;
  };

  return { searchSpace };
};

export default useToFindSpace;
