import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';


export default class Root extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  render() {
    const { Component, pageProps } = this.props;
    console.log('app store', store)
    return (
      <Container>
        <Head>
          <title>React Space Next</title>
        </Head>
        <Provider store={store}>
          <Component { ...pageProps} />
        </Provider>
      </Container>
    )
  }
}