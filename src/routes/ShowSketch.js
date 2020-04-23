import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Abcjs from 'react-abcjs'
import messages from '../components/AutoDismissAlert/messages'

import axios from 'axios'
import apiUrl from '../apiConfig'

class Sketch extends Component {
  constructor () {
    super()

    this.state = {
      sketch: null,
      deleted: false
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
        this.setState({
          sketch: res.data.sketch
        })
      })
      .catch(console.error)
  }

  delete = (event) => {
    const { msgAlert } = this.props

    axios({
      method: 'delete',
      url: `${apiUrl}/sketches/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then((response) => {
        this.setState({
          deleted: true
        })
      })
      .then(() => msgAlert({
        heading: 'Sketch was successfully deleted',
        message: messages.deleteSketchSuccess,
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: error.message,
          message: messages.deleteSketchFailure,
          variant: 'danger'
        })
      })
      .catch(console.error)
  }

  render () {
    // Destructure from state
    const {
      sketch,
      deleted
    } = this.state
    let sketchJSX
    // 2 states (no 'no sketch')
    // if null sketch
    if (!sketch) {
      sketchJSX = <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'/>
    } else if (deleted) {
      sketchJSX = <Redirect to='/sketches'/>
    } else {
      sketchJSX = (
        <div>
          <h3>My Sketch</h3>
          <h6>Description: </h6>
          <p>{sketch.description}</p>
          <h6>Composer: </h6>
          <p>{sketch.composer}</p>
          <h6>Music: </h6>
          <Abcjs
            abcNotation={
              `K:${sketch.key} clef=${sketch.clef.selectedClefOption}\nM:${sketch.meter}\nQ:${sketch.tempo}\nL:${sketch.length.selectedLengthOption}\n${sketch.notes}`
            }
            parserParams={{}}
            engraverParams={{ responsive: 'resize' }}
            renderParams={{ viewportHorizontal: true }}
          />
          <Link to={`/update-sketch/${this.props.match.params.id}`}>
            <button className='edit-button'>Edit this sketch</button>
          </Link>
          <button className='delete-button' onClick={this.delete}>Delete this sketch</button>
        </div>
      )
    }
    return (
      sketchJSX
    )
  }
}

export default Sketch
