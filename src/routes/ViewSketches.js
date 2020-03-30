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
    // Run once when the component mounts
    // API request lives here
    axios({
      method: 'get',
      url: `${apiUrl}/sketches`,
      headers: {
        'Authorization': `Token token=${this.props.user.token}`
      }
    })

      .then(res => {
        console.log(res)
        // creating an array of all sketches
        this.setState({ sketches: res.data.sketches })
      })
      .catch(console.error)
  }

  // insert Async/Await from react-crud solution branch
  //
  // async componentDidMount () {
  //   try {
  // this.setState({ sketches: resposne.data.sketches })
  // } catch {

  // }
  //   }
  // }

  render () {
    // Destructure sketches from state
    const { sketches } = this.state
    let sketchJSX
    // 3 states:
    // 1. if sketches is null, we are loading
    if (!sketches) {
      sketchJSX = <img src='https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'/>
      // 2. If sketches array is empty, we have no sketches to show
    } else if (sketches.length === 0) {
      sketchJSX = 'No sketches yet, go make one'
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
