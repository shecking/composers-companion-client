import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Abcjs from 'react-abcjs'

// Import Axios
import axios from 'axios'
// Import apiUrl
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
    // Run once when the component mounts
    // API request lives here
    //
    // see Components in Dev Tools, props attributes
    // specifically, the match object containing params, containing id
    axios({
      method: 'get',
      url: `${apiUrl}/sketches/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => {
        // creating an array of all sketches
        this.setState({
          sketch: res.data.sketch
        })
      })
      .catch(console.error)
  }

  delete = (event) => {
    axios({
      method: 'delete',
      url: `${apiUrl}/sketches/${this.props.match.params.id}`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(() => {
        this.setState({
          deleted: true
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
      // else, set sketchJSX to display sketch

      sketchJSX = (
        <div>
          <p>Description: {sketch.description}</p>
          <p>Composer: {sketch.composer}</p>
          <p>Music:
            <Abcjs
              abcNotation={
                `K:${sketch.key}\nM:${sketch.meter}\nQ:${sketch.tempo}\nL:${sketch.length}\n${sketch.notes}`
              }
              parserParams={{}}
              engraverParams={{ responsive: 'resize' }}
              renderParams={{ viewportHorizontal: true }}
            />
          </p>
          <button onClick={this.delete}>Delete sketch</button>
          <Link to={`/update-sketch/${this.props.match.params.id}`}>
            <button>Update sketch</button>
          </Link>
        </div>
      )
    }
    return (
      sketchJSX
    )
  }
}

export default Sketch
