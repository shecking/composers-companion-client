import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
// import Axios
import axios from 'axios'
// import apiUrl
import apiUrl from '../apiConfig'

import SketchForm from '../shared/SketchForm'
import SketchTables from '../shared/SketchTable'

class SketchEdit extends Component {
  constructor () {
    super()
    this.state = {
      sketch: {
        description: '',
        composer: '',
        clef: {
          selectedClefOption: 'treble'
        },
        key: '',
        meter: '',
        tempo: '',
        length: '',
        notes: ''
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

  handleChange = (event) => {
    const updatedField = {
      [event.target.name]: event.target.value
    }
    const editedSketch = Object.assign(this.state.sketch, updatedField)
    this.setState({ sketch: editedSketch })
  }
  //
  // handleOptionChange = (event) => {
  //   this.setState({ sketch: { clef: { selectedClefOption: event.target.value } } })
  // }
  handleOptionChange = (event) => {
    const updatedOption = {
      [event.target.name]: {
        selectedClefOption: event.target.value
      }
    }
    const editedOption = Object.assign(this.state.sketch, updatedOption)
    this.setState(prevState => ({
      sketch: {
        ...prevState.sketch,
        clef: {
          ...prevState.sketch.clef,
          editedOption
        }
      }
    }))
  }
  //
  handleSubmit = (event) => {
    event.preventDefault()

    axios({
      method: 'patch',
      url: `${apiUrl}/sketches/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      },
      data: {
        sketch: this.state.sketch
      }
    })
      .then(() => {
        this.setState({ updated: true })
      })
      .catch(console.error)
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
        <h1>Edit Sketch</h1>
        <SketchForm
          sketch={sketch}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleOptionChange={this.handleOptionChange}
        />
        <br></br>
        <SketchTables/>
      </div>
    )
  }
}
export default SketchEdit
