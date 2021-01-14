import React, {useState} from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiTheme } from "../MuiTheme"
import { AppContext,AppDispatchContext,initialState } from "../context/app.context"
import { AppState } from '../interfaces'

type Props = {
    Component:any,
    pageProps:object
}

const Root = (props:Props) => {
  const { Component, pageProps } = props;
  const [appState, setAppState] = useState<AppState>(initialState);

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
      <React.Fragment>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={MuiTheme}>
          <CssBaseline />
          <AppContext.Provider value={appState}>
            <AppDispatchContext.Provider value={setAppState}>
              <Component {...pageProps} />
            </AppDispatchContext.Provider>
          </AppContext.Provider>
        </ThemeProvider>
      </React.Fragment>
  );
}

export default Root
