import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import * as Md from 'react-icons/md';
import { blue, normal, white, ActBlue, gray } from '../utils';
import { DominoSpinner } from 'react-spinners-kit';
import Router from 'next/router';

const Wrapper = styled.div`
  text-align: center;
  min-width: 300px;
  min-height: 300px;
`;



const WrapperCenter = styled.div`
  padding: 20px;
  background: #fff;
  margin: 32px auto;
  border-radius: 8px;
  box-shadow: rgb(238, 238, 238) 0px 4px 4px;
  position: relative;
  overflow: hidden;
  display: inline-block;
  min-width: 300px;
  min-height: 200px;
  max-width: 800px;
`;

const ActionBar = styled.div`
  height: 80px;
  position: relative;
`;


const ActionBack = styled.div`
  width: 40px;
  height: 40px;
  background: transparent;
  position: absolute;
  left: 20px;
  top: 20px;
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
    color: rgb(200, 200, 200);
  }
  border-radius: 50%;
  transition: all 0.5s;
  &: hover {
    background: rgba(0,0,0, .06);
  }
  
`;

const ActionRightMenu = styled.div`
  width: 100px;
  height: 40px;
  background: red;
  position: absolute;
  right: 20px;
  top: 20px;
`;

const Content = styled.div`
  position: relative;
  display:block;
  img {
    width: 100%; height: 100%;
  }
`;

const AvatarContainer = styled.div`
  width: 100%;
  height: 100px;
  align-items: center;
  display: flex;
  .avatar {
    ${props => !props.avatarLoaded &&
      css`background: rgb(238, 238, 238);`
    }
    display: inline-block;
    overflow: hidden;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 1px solid #fff;
  }
  .name {
    font-size: 1.2rem;
    color: #333;
    padding: 1rem;
  }
`;

const RequestLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  // background: rgba(0,0,0,0.3);
  z-index: 100;
`;



class CatInfo extends Component {
 

  constructor(props){
    super(props);
    this.state = {
      image: null,
      avatarLoaded: false
    }
  }

  componentDidMount(){
    this.props.getRequested(this.props.paramKey);
  }
  
  _makeLoading = loading => {
    if(loading){
      return (
      <RequestLoading>
        <DominoSpinner
          size={150}
          color={`${ActBlue}`}
          loading={loading}
        />
      </RequestLoading>);
    } else {
      return null;
    }
  }

  render() {
    const { imageData, loading, param } = this.props;
    const { avatarLoaded } = this.state;
    return (
      <Wrapper>
        <WrapperCenter>
          <ActionBar>
            <ActionBack onClick={
              () => {
                Router.back();
              }}>
              <Md.MdArrowBack />
            </ActionBack>
            {/* <ActionRightMenu /> */}
          </ActionBar>
          {loading ? this._makeLoading(loading) : null}
          {imageData === null ? null :
            loading ? null :
            param === undefined ? null :
            <Content>
              <img src={imageData.urls.small} alt={imageData.alt_description} />
              <AvatarContainer avatarLoaded={avatarLoaded}>
                <div className="avatar">
                  <img src={imageData.urls.avatar} alt={imageData.name} 
                    onLoad={() => {
                      this.setState({avatarLoaded: true})
                    }}
                  />
                </div>
                <span className="name">{imageData.name}</span>
              </AvatarContainer>
            </Content>
          }
        </WrapperCenter>
      </Wrapper>
    )
  }

}

export default CatInfo;
