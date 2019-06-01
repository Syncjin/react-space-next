import React, {Component} from 'react';
import styled, {css} from 'styled-components';

const CarouselContainer = styled.ul`
  
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 100%;
  display: flex;
  transition: ${(props) => props.sliding ? 'none' : 'transform 0.5s ease'};
  transform: ${(props) => {
    if (!props.sliding) return 'translateX(-100%)'
    if (props.direction === 'prev') return 'translateX(calc(2 * (-100%)))'
    return 'translateX(0%)'
  }};
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Item = styled.li`
  flex: 1 0 100%;
  justify-content: center;
  align-items: center;
  order: ${(props) => props.order};
  div { 
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    width: auto;
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
  }
  // iframe {
  //   background: black;
  //   width: 100%;
  //   height: 100%;
  // }
  
`;

class SlideItem extends Component {
  
  getOrder(itemIndex) {
    const { responseList, level } = this.props
    const numItems = responseList.length || 1;

    if (itemIndex - level < 0) {
      return numItems - Math.abs(itemIndex - level)
    }
    return itemIndex - level
  }

  makeItem = (arr) => {
    if(arr.length === 0) {
      return null;
    } else {
      return arr.map((o, i) => {
        if(o.urls === undefined){
          return <Item key={i} order={this.getOrder(i)}/>
        }
        return (
          <Item key={i} order={this.getOrder(i)}>
            <div>
              <img src={o.urls.small} onClick={() => window.open(o.urls.small)} alt={o.alt_description} />
            </div>
          </Item>
        )
      })
    }

  }

    
  constructor(props){
    super(props);
  }
    
  render() {
    const { loading, responseList, sliding, direction } = this.props;

    if(loading) {
      return <CarouselContainer><h1>Loading...</h1></CarouselContainer>
    }
    return (
      <Wrapper>
        <CarouselContainer sliding={sliding} direction={direction}>
          {this.makeItem(responseList)}
        </CarouselContainer>
      </Wrapper>
    )
  }
}

export default SlideItem;