import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import messages from '../components/AutoDismissAlert/messages'

import axios from 'axios'
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
        clef: '',
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

  handleOptionChange = (event) => {
    const updatedOption = {
      [event.target.name]: {
        selectedClefOption: event.target.value,
        selectedLengthOption: event.target.value
      }
    }
    const editedOption = Object.assign(this.state.sketch, updatedOption)
    this.setState(prevState => ({
      sketch: {
        ...prevState.sketch,
        clef: {
          ...prevState.sketch.clef,
          editedOption
        },
        length: {
          ...prevState.sketch.length,
          editedOption
        }
      }
    }))
  }
  //
  handleSubmit = (event) => {
    event.preventDefault()

    const { msgAlert } = this.props

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
      .then(() => msgAlert({
        heading: 'Your sketch has been updated.',
        message: messages.updateSketchSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: error.message,
          message: messages.updateSketchFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { sketch, updated } = this.state
    if (updated) {
      return <Redirect to={`/sketches/${this.props.match.params.id}`}/>
    }
    return (
      <div>
        <h3>Edit Sketch</h3>
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
