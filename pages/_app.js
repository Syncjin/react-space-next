import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import '../styles/Base.scss';

export default class Root extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  render() {
    console.log('env', process.env.TEST)
    const { Component, pageProps } = this.props;
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