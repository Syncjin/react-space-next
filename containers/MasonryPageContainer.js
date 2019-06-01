import React, { Component } from 'react';
import MasonryPage from '../components/Content/MasonryPage';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as masonryActions from '../store/modules/masonry';
import * as masonryPageActions from '../store/modules/masonryPage';
import { MasonryActions, MasonryPageActions } from '../store/actionCreators';

class MasonryPageContainer extends Component {
  
  getRequested = masonryNum => {
    MasonryActions.getRequested(masonryNum);
  }

  moreTrue = () => {
    MasonryPageActions.moreTrue();
    this.getRequested(this.props.requestedNum)
    MasonryPageActions.floatingShow();
  }

  floatingShow = () => {
    MasonryPageActions.floatingShow();
  }

  floatingHide = () => {
    MasonryPageActions.floatingHide();
  }

  
  render() {
    // console.log('page container', this.props)
    const { more, loading, floating, requestedNum } = this.props;
    return (
      <MasonryPage 
        getRequested={this.getRequested} more={more} moreTrue={this.moreTrue} loading={loading} floatingShow={this.floatingShow} floatingHide={this.floatingHide} floating={floating} requestedNum={requestedNum}
      />
      
    )
  }
}

export default connect(
  ({masonryPage, masonry}) => ({
    more: masonryPage.more,
    floating: masonryPage.floating,
    loading: masonry.config.loading,
    requestedNum: masonry.requestedNum
  }),
  (dispatch) => ({
    MasonryActions: bindActionCreators(masonryActions, dispatch),
    MasonryPageActions: bindActionCreators(masonryPageActions, dispatch)
  })
)(MasonryPageContainer);