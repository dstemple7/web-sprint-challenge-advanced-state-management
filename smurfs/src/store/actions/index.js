import axios from 'axios'
import {useHistory} from 'react-router-dom'

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START'
export const ADD_SMURFS_START = 'ADD_SMURFS_START'
export const ADD_SMURFS_SUCCESS = 'ADD_SMURFS_SUCCESS'
export const ADD_SMURFS_FAIL = 'ADD_SMURFS_FAIL'
export const HANDLE_CHANGES = 'HANDLE_CHANGES'
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE'

export const fetchSmurfs = () => {
  return dispatch => {
    dispatch({type:FETCH_SMURFS_START})
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({type:FETCH_SMURFS_SUCCESS, payload: res.data})
    })
    .catch(err => {
      dispatch({type: FETCH_SMURFS_FAILURE, payload: err.message})
    })
  }
}

export const addSmurf = input => {
  return dispatch => {
    dispatch({type: ADD_SMURFS_START})
    axios.post('http://localhost:3333/smurfs', input)
    .then(res => {
      const history = useHistory()
      history.push('/')
      dispatch({type:ADD_SMURFS_SUCCESS})
    })
    .catch(err => {
      dispatch({type: ADD_SMURFS_FAIL, payload: err})
    })
  }
}

export const handleChanges = e => {
  return dispatch => {
    dispatch({type: HANDLE_CHANGES, payload: e})
  }
}