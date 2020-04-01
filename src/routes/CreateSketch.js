import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../index.scss'

// import Axios
import axios from 'axios'
// import apiUrl
import apiUrl from '../apiConfig'

import SketchForm from '../shared/SketchForm'
import SketchTables from '../shared/SketchTable'

class CreateSketch extends Component {
  constructor () {
    super()

    this.state = {
      sketch: {
        description: '',
        composer: '',
        clef: '',
        key: '',
        meter: '',
        tempo: '',
        length: '',
        notes: ''
      },
      created: null
    }
  }
  //
  handleChange = (event) => {
    // 1. Create a new object with key of 'name' property on input, value with 'value' property
    const createdField = {
      [event.target.name]: event.target.value
    }
    // 2. Combine the current `sketch` with updatedField
    const editedSketch = Object.assign(this.state.sketch, createdField)
    // 3. Set the state
    this.setState({ sketch: editedSketch })
  }
  //
  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      method: 'post',
      url: `${apiUrl}/sketches`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        sketch: this.state.sketch
      }
    })
      .then((response) => {
        this.setState({ created: response.data.sketch.id })
      })
      .catch(console.error)
  }
  //
  render () {
    //
    const { sketch, created } = this.state
    if (created) {
      return <Redirect to={`/sketches/${this.state.created}`}/>
    }
    //
    return (
      <div>
        <h3>Create a sketch</h3>
        <SketchForm
          sketch={sketch}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <br></br>
        <SketchTables/>
      </div>
    )
  }
}

export default CreateSketch
