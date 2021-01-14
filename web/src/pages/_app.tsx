import React from 'react'
import App from 'next/app'
import { ApolloProvider } from '@apollo/react-hooks'

import withData from '../config/configureClient'
import RootComponet from './_root'

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apollo } = this.props
    return (
      <ApolloProvider client={apollo}>
        <RootComponet
            Component={Component}
            {...pageProps} 
        />
      </ApolloProvider>
    )
  }
}

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

// Wraps all components in the tree with the data provider
export default withData(MyApp)
