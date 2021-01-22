import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiTheme } from "../src/MuiTheme";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-dev.spacenextdoor.com/graphql",
  cache: new InMemoryCache(),
});

type Props = {
  Component: any;
  pageProps: object;
};

import Link from "next/link";
const MyApp = (props: Props) => {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={MuiTheme}>
        <CssBaseline />
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default MyApp;
