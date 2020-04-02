import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../index.scss'

import axios from 'axios'
import apiUrl from '../apiConfig'

class Sketches extends Component {
  constructor () {
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
      sketchJSX =
      <h3>You don&apos;t have any sketches saved.\nClick New Sketch above to get started. </h3>
    } else {
      const sketchesList = sketches.map(sketch => (
        <li key={sketch.id}>
          <Link className='sketch-single' to={`/sketches/${sketch.id}`}>{sketch.description}</Link>
        </li>
      ))
      sketchJSX = (
        <ul className='sketch-list'>
          {sketchesList}
        </ul>
      )
    }
    return (
      <div className='view-sketches'>
        <h3>My Sketches</h3>
        {sketchJSX}
      </div>
    )
  }
}

export default Sketches
