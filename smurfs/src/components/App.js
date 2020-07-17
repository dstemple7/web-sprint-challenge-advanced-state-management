import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

import SmurfList from './SmurfsList'

import {fetchSmurfs} from '../store/actions'

const App = props => {
  useEffect(() => {
    props.fetchSmurfs()
  }, [])

  const [smurfDeets, setSmurfDeets] = useState('')

  useEffect(() => {
    setSmurfDeets(props.smurfs.map(smurf => {
      return <Smurf key={smurf.id} smurf={smurf}/>
    }))
  }, [props.isLoading])

  return (
    <div>
      <SmurfList />
      <h1 class='title'>smurfs</h1>
      <div className="smurfsContainer">
        <div className="smurfInfo">
          {props.smurf.name}
        </div>
      </div>

      {props.isLoading && <h4>Loading smurf data...</h4>}
      {props.error && (
        <p className="error">What, woah...{props.error}</p>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  {fetchSmurfs}
  )(App)

