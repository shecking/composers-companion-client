import React from 'react'
import '../index.scss'

const SketchForm = ({ sketch, handleSubmit, handleChange }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <label>Description: </label>
      <input
        placeholder="Put description here"
        name="description"
        value={sketch.description || ''}
        onChange={handleChange}
      />
      <br></br>
      <label>Composer: </label>
      <input
        placeholder="Put composer here"
        name="composer"
        value={sketch.composer || ''}
        onChange={handleChange}
      />
      <br></br>
      <h6>Music: </h6>
      <label>Clef (V):</label>
      <input
        placeholder="treble"
        name="clef"
        value={sketch.clef || ''}
        onChange={handleChange}
      />
      <br></br>
      <label>Key (K):</label>
      <input
        placeholder="F | Dm | Eb | C#m"
        name="key"
        value={sketch.key || ''}
        onChange={handleChange}
      />
      <br></br>
      <label>Meter (M):</label>
      <input
        placeholder="4/4"
        name="meter"
        value={sketch.meter || ''}
        onChange={handleChange}
      />
      <br></br>
      <label>Tempo (Q):</label>
      <input
        placeholder="1/4=60"
        name="tempo"
        value={sketch.tempo || ''}
        onChange={handleChange}
      />
      <br></br>
      <label>Note Length (L):</label>
      <input
        placeholder="1/4 | 1/8 | 1/2"
        name="length"
        value={sketch.length || ''}
        onChange={handleChange}
      />
      <br></br>
      <p>Music Notes: </p>
      <input
        className='music-note-input'
        placeholder="CCGG | AAG2"
        name="notes"
        value={sketch.notes}
        onChange={handleChange}
      />
      <br></br>
      <button type="submit">Save my Sketch</button>
    </form>
  </div>
)

export default SketchForm
