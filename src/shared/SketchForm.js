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
            className='radio clef-radio'
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
            className='radio clef-radio'
          />
          Bass
        </label>
      </div>
      <label>Key: </label>
      <input
        placeholder="F | Fm | Eb | C#m"
        // id="key"
        name="key"
        // pattern="([A-G]{1})"
        // pattern="([A-G]{1}|\'none\')(?:b|#|m)(?:m)"
        // oninvalid="this.setCustomValidity('Not a valid key signature')"
        value={sketch.key || ''}
        onChange={handleChange}
      />
      <br></br>
      <label>Meter: </label>
      <input
        placeholder="4/4"
        name="meter"
        // pattern="(?:[1-9]{1,2}|\'none\')\/(?:2|4|8|16)"
        value={sketch.meter || ''}
        onChange={handleChange}
      />
      <br></br>
      <p className='form-notes'>Currently supported time signatures: X/2, X/4, X/8, X/16</p>
      <label>Tempo: </label>
      <input
        placeholder="1/4=60"
        name="tempo"
        value={sketch.tempo || ''}
        onChange={handleChange}
      />
      <br></br>
      <label>Default Note Length: </label>
      <label>
        <input
          type="radio"
          name="length"
          value="1/2"
          checked={sketch.length.selectedLengthOption === '1/2'}
          onChange={handleOptionChange}
          className='radio length-radio'
        />
        Half Note
      </label>
      <label>
        <input
          type="radio"
          name="length"
          value="1/4"
          checked={sketch.length.selectedLengthOption === '1/4'}
          onChange={handleOptionChange}
          className='radio length-radio'
        />
        Quarter Note
      </label>
      <label>
        <input
          type="radio"
          name="length"
          value="1/8"
          checked={sketch.length.selectedLengthOption === '1/8'}
          onChange={handleOptionChange}
          className='radio length-radio'
        />
        Eighth Note
      </label>
      <label>
        <input
          type="radio"
          name="length"
          value="1/16"
          checked={sketch.length.selectedLengthOption === '1/16'}
          onChange={handleOptionChange}
          className='radio length-radio'
        />
        Sixteenth Note
      </label>
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
      <p className='form-notes'>Use the table below to guide your sketch&apos;s notation.</p>
      <br></br>
      <button type="submit">Save my Sketch</button>
    </form>
  </div>
)

export default SketchForm
