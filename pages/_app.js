import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

export default class Root extends App {
  
  render() {
    const { Component, pageProps } = this.props;
    console.log('app store', store)
    return (
      <Container>
        <Provider store={store}>
          <Component { ...pageProps} />
        </Provider>
      </Container>
    )
  }
}