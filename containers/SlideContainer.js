import React, { Component } from 'react';
import Slide from '../components/Slide';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as slideActions from '../store/modules/slide';
import { SlideActions } from '../store/actionCreators';

class SlideContainer extends Component {
  
  constructor(props){
    super(props);
    this.setAuto = null;
  }

  componentDidMount(){
    this.getApi();
    this.autoNext()
  }

  componentWillUnmount(){
    this.autoNextClear();
  }

  autoNext = () => {
    this.setAuto = setInterval(() => {
      this.handleNext();
    }, 5000);
  }

  autoNextClear = () => {
    clearInterval(this.setAuto);
  }

  handleNext = () => {
    this.autoNextStop(true);
    const { responseList, level } = this.props.config;
    const numItems = responseList.length || 1
    this.doSliding('next', level === numItems - 1 ? 0 : level + 1)
  }

  doSliding = (direction, level) => {
    SlideActions.handlePosition({
      sliding: true,
      direction, 
      level
    });
    setTimeout(() => {
      SlideActions.handleSliding(false);
      this.autoNextStop(false);
    }, 50)
  }

  autoNextStop = flag => {
    if(flag){
      if(this.setAuto !== null) this.autoNextClear();
    } else {
      if(this.setAuto !== null) this.autoNext();
    }
  }

  handlePrev = () => {
    this.autoNextStop(true);
    const { responseList, level } = this.props.config;
    const numItems = responseList.length;
    this.doSliding('prev', level === 0 ? numItems - 1 : level - 1)
  }

  getApi = () => {
    SlideActions.getRequested();
  }

  render() {
    const { autoNext, handleNext, handlePrev, getApi, autoNextClear } = this;
    const { config } = this.props;
    return (
      <Slide autoNext={autoNext} autoNextClear={autoNextClear} handleNext={handleNext} handlePrev={handlePrev} getApi={getApi} config={config}/>
    )
  }
}

export default connect(
  ({slide}) => ({
    config: slide.config
  }),
  (dispatch) => ({
    SlideActions: bindActionCreators(slideActions, dispatch)
  })
)(SlideContainer);