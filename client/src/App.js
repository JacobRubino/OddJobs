import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Feedback from './pages/feedback';
import Navbar from './pages/navbar';
import Footer from './pages/Footer';
import Signup from './pages/Signup'
import Login from './pages/Login'

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token')
  return{
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path='/Signup' element={<Signup />} />
            <Route exact path='/Login' element={<Login />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ApolloProvider>
  );
};

export default App;
