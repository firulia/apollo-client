import React from 'react'
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Continents from './Continents';
import './App.css';

//const axios = require("axios")
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
});

/*axios({
  url: 'https://countries.trevorblades.com',
  method: 'POST',
  data: {
    query: `
    {
      continents {
        code
        name
        countries{
          name
          capital
        }
      }
    }
      `
  }
}).then((result) => {
  console.log(result.data)
});
*/

const App = () => (
  <ApolloProvider client={client}>
    <Continents></Continents>
  </ApolloProvider>
  )

export default App;


//https://m.heise.de/developer/artikel/GraphQL-Clients-mit-React-und-Apollo-Teil-2-4273017.html?seite=all