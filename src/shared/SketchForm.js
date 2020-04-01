import React from 'react'
import '../index.scss'

const SketchForm = ({ sketch, handleSubmit, handleChange, handleOptionChange }) => (
  <div className='full-input-form'>
    <form onSubmit={handleSubmit}>
      <div className='description-form'>
        <h5>Description: </h5>
        <input
          required={true}
          placeholder="Put description here"
          name="description"
          value={sketch.description || ''}
          onChange={handleChange}
        />
      </div>
      <br></br>

      <div className='composer-form'>
        <h5>Composer: </h5>
        <input
          placeholder="Put composer here"
          name="composer"
          value={sketch.composer || ''}
          onChange={handleChange}
        />
      </div>
      <br></br>

      <div className='clef-form'>
        <h5>Music: </h5>
        <label>Clef: </label>
        <label>
          <input
            type="radio"
            name="clef"
            value="treble"
            checked={sketch.clef.selectedClefOption === 'treble'}
            onChange={handleOptionChange}
            className='clef-radio-input'
          />
          Treble
        </label>
        <label>
          <input
            type="radio"
            name="clef"
            value="bass"
            checked={sketch.clef.selectedClefOption === 'bass'}
            onChange={handleOptionChange}
            className='clef-radio-input'
          />
          Bass
        </label>
      </div>
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
      <textarea
        className='music-note-input'
        required={true}
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
