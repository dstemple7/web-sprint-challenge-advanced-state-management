import {connect} from 'react-redux'
import {addSmurf, handleChanges, fetchSmurfs} from '../store/actions/index'
import React from 'react'

const AddSmurfForm = props => {
  return (
    <form onSubmit={(e)=>{
      e.preventDefault()
      props.addSmurf({name:props.values.name, age: props.values.age, height: props.values.height})
      window.location.reload()
    }}>
    <h1>The more the merrier</h1>
    <br />
    <label>Name</label>
    <input type='text' name='name' value={props.name} onChange={props.handleChanges} />
    <br />
    <label>Age</label>
    <input type='text' name='age' value={props.age} onChange={props.handleChanges} />
    <br />
    <label>Height</label>
    <input type='text' name='height' value={props.height} onChange={props.handleChanges} />
    <button name='submit'>Submit</button>
  </form>
  )
}

const mapStateToProps = state => {
  return {
    values: state.values
  }
}

export default connect(mapStateToProps, {addSmurf, handleChanges, fetchSmurfs})(AddSmurfForm)