import React, { Component } from 'react'
import Abcjs from 'react-abcjs'
import '../index.scss'

const homePageMusic = (
  <div>
    <div className='homepage'>
      <h3>
        <Abcjs
          abcNotation={
            'L:1/16\nM:4/4\nK:Ab clef=treble\n!f!EFGE|c3c- c2B2-B4 EFGE|B3B- B2A2- AGF2-F4 DEFD\nA4 B2G2- GFE2- E2E2| B4 A4 z4 EFGE'
          }
          parserParams={{}}
          engraverParams={{ responsive: 'resize' }}
          renderParams={{ viewportHorizontal: true }}
        />
      </h3>
      <a className='yt-link' href='https://youtu.be/dQw4w9WgXcQ?t=43'>Click to listen</a>
    </div>
    <hr/>
    <div>
      <h1>Composer&apos;s Companion</h1>
    </div>
  </div>
)

class HomePage extends Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    return (
      homePageMusic
    )
  }
}

export default HomePage
