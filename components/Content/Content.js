import React from 'react';
import styled, {css} from 'styled-components';
import { device } from '../SizeCheck';
// import { BrowserRouter as Router , Route, Link } from 'react-router-dom';
import SlideContainer from '../../containers/SlideContainer'
import MasonryPageContainer from '../../containers/MasonryPageContainer';
// import CatInfoContainer from '../../containers/CatInfoContainer';

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



const Index = () => {
  return (
    <React.Fragment>
      <SlideContainer />
      <MasonryPageContainer />
    </React.Fragment>
  )
}

// const Cat = (param) => {
//   console.log('param',param.match.params.name)
//   return (
//     <React.Fragment>
//       <CatInfoContainer paramKey={param.match.params.name} param={param}/>
//     </React.Fragment>
//   )
// }

const Content = () => {
  
  return (
    <ContentWrapper >
      <SlideContainer />
      <MasonryPageContainer />
      {/* <Route path="/" exact component={Index} />
      <Route path="/newLink" component={Test} />
      <Route path="/cat/:name" component={Cat} /> */}
      
    </ContentWrapper>
  )
}

export default Content;