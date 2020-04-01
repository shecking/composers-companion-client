import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Import Axios
import axios from 'axios'
// Import apiUrl
import apiUrl from '../apiConfig'

class Sketches extends Component {
  constructor () {
    // Call the constructor on Component with super
    super()

    this.state = {
      sketches: null
    }
  }

  componentDidMount () {
    axios({
      method: 'get',
      url: `${apiUrl}/sketches`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })
      .then(res => {
        this.setState({ sketches:
          res.data.sketches })
      })
      .catch(console.error)
  }

  render () {
    const { sketches } = this.state
    let sketchJSX
    if (!sketches) {
      sketchJSX = <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'/>
    } else if (sketches.length === 0) {
      sketchJSX = 'You don\'t have any sketches.\nClick \'New Sketch\' above to get started.'
    } else {
      const sketchesList = sketches.map(sketch => (
        <li key={sketch.id}>
          <Link to={`/sketches/${sketch.id}`}>{sketch.description}</Link>
        </li>
      ))
      sketchJSX = (
        <ul>
          {sketchesList}
        </ul>
      )
    }
    return (
      <div>
        <h1>My Sketches</h1>
        {sketchJSX}
      </div>
    )
  }
}

export default Sketches
