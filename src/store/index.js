import {createStore} from 'redux'

const initialAppState = {
  libraries: [],
  selected: ''
}

export const actionTypes = {
  UPDATE_LIBRARY: 'UPDATE_LIBRARY',
  UPDATE_SELECTED: 'UPDATE_SELECTED'
}

export const updateLibrary = (lib) => {
  return {type: actionTypes.UPDATE_LIBRARY, payload: lib}
}

export const updateSelected = (id) => {
  return {type: actionTypes.UPDATE_SELECTED, payload: id}
}

const reduser = (state = initialAppState, action) => {
  switch(action.type) {
    case actionTypes.UPDATE_LIBRARY: 
      return {
        ...state,
        libraries: [...action.payload]
      };
    case actionTypes.UPDATE_SELECTED: 
      return {
        ...state, 
        selected: action.payload
      }
    default: return state;
  }
}

export const initializeStore = (state = initialAppState) => {
  return createStore(reduser, state)
}

export const store = initializeStore()