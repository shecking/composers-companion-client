import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../index.scss'
import messages from '../components/AutoDismissAlert/messages'

import axios from 'axios'
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
        clef: {
          selectedClefOption: 'treble'
        },
        key: '',
        meter: '',
        tempo: '',
        length: {
          selectedLengthOption: '1/4'
        },
        notes: ''
      },
      created: null
    }
  }
  //
  //
  handleChange = (event) => {
    const createdField = {
      [event.target.name]: event.target.value
    }
    const editedSketch = Object.assign(this.state.sketch, createdField)
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
      .then(() => msgAlert({
        heading: 'New sketch created',
        message: messages.createSketchSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: error.message + ', new sketch was not created',
          message: messages.createSketchFailure,
          variant: 'danger'
        })
      })
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
      <div className='create-sketch'>
        <h3>Create Sketch</h3>
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
// The code below represents proof of concept (using 'name') for rendering user input immediately
// This will be used to render a user's notation immediately when creating a new sketch
// <div>
//   <p>Updated name: {this.state.name} </p>
//   <p>Change name:</p>
//   <input
//     type="text"
//     onChange={event => {
//       this.setState({
//         name: event.target.value
//       })
//     }}/>
// </div>

export default CreateSketch
