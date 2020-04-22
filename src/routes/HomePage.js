import React, { Component } from 'react'
import Abcjs from 'react-abcjs'
import '../index.scss'

const homePage = (
  <div>
    <div className='homepage'>
      <h3>
        <Abcjs
          abcNotation={
            'L:1/16\nM:4/4\nK:Ab clef=treble\n!f!FGAF|c3c- c2B2-B4 EFGE|B3B- B2A2- AGF2-F4 DEFD\nA4 B2G2- GFE2- E2E2| B4 A4 z4 FGAF'
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
    <div>
      <h2>An app for musicians on the go</h2>
    </div>
    <div>
      <p className='homepage-text'>
        Welcome to Composer&apos;s Companion, an application for composers,
        songwriters, performers, and musicians everywhere. This apps allows you to
        create and store sketches of your musical ideas from any device, wherever you are and
        whenever you need.</p>
      <p className='homepage-text'>
        Composer&apos;s Companion is not meant to be a replacement for Finale, Sibelius,
        or any other similar software, nor does it try to be. Its primary goal is
        to allow users to quickly and easily jot down musical ideas and sketches
        - or whatever you&apos;d like to call them - whenever inspiration strikes,
        but without the constraints of complex notation programs.</p>
      <p className='homepage-text text-last'>
        Currently, this application is in early development; as such, expect your
        experiences with it to evolve over time as new features are added.
        Directions on how to input musical material can be viewed when creating or editing a sketch.
      </p>
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
      homePage
    )
  }
}

export default HomePage
