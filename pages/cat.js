import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import HeaderContainer from '../containers/HeaderContainer';
import NavContainer from '../containers/NavContainer';
import Content from '../components/Content';
import CatInfoContainer from '../containers/CatInfoContainer'

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 8888;
  top: 0;
`;

class Cat extends Component {
  static async getInitialProps(context) {
    const { id } = context.query
    
    return {
      param: id
    }
  }

  render() {
    const { param } = this.props;
    return (
      <div>
        <Wrapper>
          <HeaderContainer />
          <NavContainer />
        </Wrapper>

        <Content>
          <CatInfoContainer paramKey={param} param={param}/>
        </Content>
      </div>
    )
  }
}

export default Cat