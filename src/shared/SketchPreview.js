import React from 'react'
import Abcjs from 'react-abcjs'

const SketchPreview = ({ sketch }) => (
  <div className = 'sketch-preview'>
    <p>Sketch preview:
      <Abcjs
        abcNotation={
          `K:${sketch.key} clef=${sketch.clef.selectedClefOption}\nM:${sketch.meter}\nQ:${sketch.tempo}\nL:${sketch.length.selectedLengthOption}\n${sketch.notes}`
        }
        parserParams={{}}
        engraverParams={{ responsive: 'resize' }}
        renderParams={{ viewportHorizontal: true }}
      />
    </p>
  </div>
)

export default SketchPreview
