import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import MyInfo from '../components/MyInfo';
import HeaderContainer from '../containers/HeaderContainer';
import NavContainer from '../containers/NavContainer';
import Content from '../components/Content';

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

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        show: false
      })
    }, 10000);
  }

  render() {
    return (
      <div>
        {this.state.show ? <MyInfo /> : null }
        <Wrapper>
          <HeaderContainer />
          <NavContainer />
        </Wrapper>

        <Content />
      </div>
    )
  }
}



// Index.getInitialProps = async function() {
//   const res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')
  
//   console.log(`Show data count: ${res.data.length}`)
//   // 서버에 출력됌. 서버에서 페이지가 렌더링되기 때문이다.

//   return {
//     shows: res.data
//   }
// }

export default Index