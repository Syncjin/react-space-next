import { createAction, handleActions } from 'redux-actions';

const HANDLE_POSITION = 'slide/HANDLE_POSITION';
const GET_REQUESTED = 'slide/GET_REQUESTED';
const GET_SUCCEEDED = 'slide/GET_SUCCEEDED';
const GET_FAILED = 'slide/GET_FAILED';
const HANDLE_SLIDING = 'slide/HANDLE_SLIDING';

export const handlePosition = createAction(HANDLE_POSITION, val => val);
export const handleSliding = createAction(HANDLE_SLIDING);
export const getRequested = createAction(GET_REQUESTED);

const initialState = {
  config: {
    responseList: [],
    loading: false,
    level: 0,
    sliding: null,
    direction: null,
  }
  
}

export default handleActions({
  [HANDLE_SLIDING]: (state, action) => {
    return {
      ...state,
      config: {
        ...state.config,
        sliding: action.payload
      }
    }
  },
  [HANDLE_POSITION]: (state, action) => {
    return {
      ...state,
      config: {
        ...state.config,
        level: action.payload.level,
        sliding: action.payload.sliding,
        direction: action.payload.direction,
      }
    }
  },
  [GET_REQUESTED]: (state, action) => {
    return {
      ...state,
      config: {
        ...state.config,
        loading: true
      }
    }
  },
  [GET_SUCCEEDED]: (state, action) => {
    return {
      ...state,
      config: {
        ...state.config,
        responseList: action.payload,
        loading: false,

      }
    }
  },
  [GET_FAILED]: (state, action) => {
    return {
      ...state,
      config: {
        ...state.config,
        loading: false
      }
    }
  },
}, initialState);