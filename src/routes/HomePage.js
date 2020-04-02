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
            'L:1/16\nM:4/4\nK:Ab clef=treble\n!f!EFGE|:c3c- c2B2-B4 EFGE|B3B- B2A2- AGF2-F4 DEFE|\nA4 B2G2- GFE2- E2E2| B4 A4 z4 EFGE:|'
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
