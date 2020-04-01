import React, { Component } from 'react'
import Abcjs from 'react-abcjs'

// Import Axios
// import axios from 'axios'
// Import apiUrl
// import apiUrl from '../apiConfig'

class HomePage extends Component {
  constructor () {
    // Call the constructor on Component with super
    super()

    this.state = {}
  }

  render () {
    return (
      <div>
        <h1>Home Page</h1>
        <Abcjs
          abcNotation={
            'X:1\nM:4/4\nK:G\n|:Gccc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|'
          }
          parserParams={{}}
          engraverParams={{ responsive: 'resize' }}
          renderParams={{ viewportHorizontal: true }}
        />
      </div>
    )
  }
}

export default HomePage
