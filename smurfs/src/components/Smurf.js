import React from 'react'

const Smurf = props => {
  return (
    <div>
    <h3>Name: {props.smurf.name}</h3>
    <h5>Age: {props.smurf.age}</h5>
    <h5>Height: {props.smurf.height}</h5>
    </div>
  )
}

export default Smurf