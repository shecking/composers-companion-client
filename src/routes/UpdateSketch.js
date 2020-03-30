import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import Axios
import axios from 'axios'
// import apiUrl
import apiUrl from '../apiConfig'

import SketchForm from '../shared/SketchForm'

class SketchEdit extends Component {
  constructor () {
    super()

    this.state = {
      sketch: {
        composer: '',
        music: '',
        description: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios({
      method: 'get',
      url: `${apiUrl}/sketches/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => {
        this.setState({ sketch:
        res.data.sketch })
      })
      .catch(console.error)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      method: 'patch',
      url: `${apiUrl}/sketches/${this.props.match.params.id}`,
      data: { sketch: this.state.sketch },
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => {
        this.setState({ updated: true })
      })
      .catch(console.error)
  }

  handleChange = (event) => {
    // 1. Create a new object with key of 'name' property on input, value with 'value' property
    const updatedField = {
      [event.target.name]: event.target.value
    }
    // 2. Combine the current `sketch` with updatedField
    const editedSketch = Object.assign(this.state.sketch, updatedField)
    // 3. Set the state
    this.setState({ sketch: editedSketch })
  }

  render () {
    // destructure from states
    // For example, use this so value can be
    // sketch.title, instead of this.state.sketch.title
    const { sketch, updated } = this.state
    if (updated) {
      // Redirect to the show page (import Redirect)
      return <Redirect to={`/sketches/${this.props.match.params.id}`}/>
    }
    return (
      <div>
        <h1>Sketch Edit page</h1>
        <SketchForm
          sketch={sketch}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    )
  }
}
export default SketchEdit
