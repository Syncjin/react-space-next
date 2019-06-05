import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import { device } from '../SizeCheck';
import SlideContainer from '../../containers/SlideContainer'
import MasonryPageContainer from '../../containers/MasonryPageContainer';

const ContentWrapper = styled.div`
  display: block;
  width: 100%;
  height: auto;
  background: linear-gradient(rgb(238, 238, 238) 300px, rgb(255, 255, 255) 100%);
  h2 { margin: 0; }
  padding-top: 160px;
  @media ${device.tablet} {
    padding-top: 160px;
  }
  @media ${device.laptop} {
    padding-top: 80px;
  }
`;



class Content extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ContentWrapper >
       {this.props.children}
     </ContentWrapper>
    )
  }
}

export default Content;