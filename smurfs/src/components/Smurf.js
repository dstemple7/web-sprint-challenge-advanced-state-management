import React from 'react'

const Smurf = props => {
  return (
    <div>
    <h4>Name: {props.smurf.name}</h4>
    <h5>Age: {props.smurf.age}</h5>
    <h5>Height: {props.smurf.height}</h5>
    </div>
  )
}

export default Smurf