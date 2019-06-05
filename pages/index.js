import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import MyInfo from '../components/MyInfo';
import HeaderContainer from '../containers/HeaderContainer';
import NavContainer from '../containers/NavContainer';
import Content from '../components/Content';
import SlideContainer from '../containers/SlideContainer';
import MasonryPageContainer from '../containers/MasonryPageContainer';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 8888;
  top: 0;
`;

class Index extends Component {
  static async getInitialProps() {
    return {}
  }

  state = {
    show: true
  }

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({
  //       show: false
  //     })
  //   }, 10000);
  // }

  render() {
    return (
      <div>
        {/* {this.state.show ? <MyInfo /> : null } */}
        <Wrapper>
          <HeaderContainer />
          <NavContainer />
        </Wrapper>

        <Content>
          <SlideContainer />
          <MasonryPageContainer />
        </Content>
      </div>
    )
  }
}

export default Index