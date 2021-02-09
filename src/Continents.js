import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const Continents = () => {
    return (<Query query={gql`
    {
        countries {
            code
            name
            capital
        }
      }
    `}>
    {({ loading, error, data }) => {
      console.log(data);
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
 
      return (
        <ul>
          {data.countries.map((country) => {
            return (
              <li key={country.code}>
                {country.capital}
              </li>
            )
          })}
        </ul>
      )
    }}
  </Query>);
}


export default Continents