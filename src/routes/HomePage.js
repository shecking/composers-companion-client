import React, { Component } from 'react'

// Import Axios
// import axios from 'axios'
// Import apiUrl
// import apiUrl from '../apiConfig'

class HomePage extends Component {
  constructor () {
    // Call the constructor on Component with super
    super()

    this.state = {
      sketches: null
    }
  }
  // componentDidMount () {
  //   // Run once when the component mounts
  //   // API request lives here
  //   axios({
  //     method: 'GET',
  //     url: `${apiUrl}/home`
  //   })
  //
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(console.error)
  // }

  render () {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    )
  }
}

export default HomePage
