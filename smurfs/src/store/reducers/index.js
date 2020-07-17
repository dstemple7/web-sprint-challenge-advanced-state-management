import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURFS_START,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAIL,
  HANDLE_CHANGES
} from "../actions"


const initialState = {
  isLoading: false,
  smurfs: [],
  error: '',
  values: {
    name: '',
    age: '',
    height: ''
  }
}

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_SMURFS_START:
      return {
        ...state,
        isLoading: true
      }
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: ''
      }
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case ADD_SMURFS_START:
      return {
        ...state,
      }
    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }
    case HANDLE_CHANGES:
    const name = action.payload.target.name
    const value = action.payload.target.value  
    return {
      ...state,
      values: {
        ...state.values,
        [name]: value
      }
      }
      default:
        return state
  }
}

