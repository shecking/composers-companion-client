import React from 'react'
import '../index.scss'
import SketchPreview from './SketchPreview'

const SketchForm = ({ sketch, handleSubmit, handleChange, handleOptionChange }) => (
  <div className='full-input-form'>
    <form onSubmit={handleSubmit}>
      <div className='description-form'>
        <h5>Description (required): </h5>
        <input
          required={true}
          placeholder="Put description here"
          name="description"
          value={sketch.description}
          onChange={handleChange}
        />
      </div>
      <br></br>

      <div className='composer-form'>
        <h5>Composer: </h5>
        <input
          placeholder="Put composer here"
          name="composer"
          value={sketch.composer || null}
          onChange={handleChange}
        />
      </div>
      <br></br>

      <div className='clef-form'>
        <h5>Music: </h5>
        <label className='music-element'>Clef: </label>
        <label className='radio-text'>
          Treble
          <input
            type="radio"
            name="clef"
            value="treble"
            checked={sketch.clef.selectedClefOption === 'treble'}
            onChange={handleOptionChange}
            className='clef-radio'
          />
        </label>
        <label className='radio-text'>
          Alto
          <input
            type="radio"
            name="clef"
            value="alto"
            checked={sketch.clef.selectedClefOption === 'alto'}
            onChange={handleOptionChange}
            className='clef-radio'
          />
        </label>
        <label className='radio-text'>
          Bass
          <input
            type="radio"
            name="clef"
            value="bass"
            checked={sketch.clef.selectedClefOption === 'bass'}
            onChange={handleOptionChange}
            className='clef-radio'
          />
        </label>
      </div>
      <br></br>

      <label className='music-element'>Key: </label>
      <input
        placeholder="F | Fm | Eb | C#m"
        // id="key"
        name="key"
        // pattern="([A-G]{1})"
        // pattern="([A-G]{1}|\'none\')(?:b|#|m)(?:m)"
        // oninvalid ?
        value={sketch.key || null}
        onChange={handleChange}
      />
      <br></br>
      <p className='form-notes'>Enter &apos;none&apos; for no key signature.</p>

      <label className='music-element'>Meter: </label>
      <input
        placeholder="4/4"
        name="meter"
        minLength={0}
        maxLength={5}
        pattern="(([0-9]{1,2})\/([2\|4\|8\|16]{1,2}))"
        // The above pattern code controls user input
        // Currently no allowance for 'none' option
        value={sketch.meter || null}
        onChange={handleChange}
      />
      <br></br>
      <p className='form-notes'>Currently supported time signatures: X/2, X/4, X/8, X/16,<br />where X is any number 1-99</p>

      <label className='music-element'>Tempo: </label>
      <input
        placeholder="1/4=60"
        name="tempo"
        value={sketch.tempo || null}
        onChange={handleChange}
      />
      <br></br>
      <p className='form-notes'>Use format x/x=###</p>

      <label className='music-element'>Default Note Length: </label>
      <label className='radio-text'>
        Half Note
        <input
          type="radio"
          name="length"
          value="1/2"
          checked={sketch.length.selectedLengthOption === '1/2'}
          onChange={handleOptionChange}
          className='length-radio'
        />
      </label>
      <label className='radio-text'>
        Quarter Note
        <input
          type="radio"
          name="length"
          value="1/4"
          checked={sketch.length.selectedLengthOption === '1/4'}
          onChange={handleOptionChange}
          className='length-radio'
        />
      </label>
      <label className='radio-text'>
        Eighth Note
        <input
          type="radio"
          name="length"
          value="1/8"
          checked={sketch.length.selectedLengthOption === '1/8'}
          onChange={handleOptionChange}
          className='length-radio'
        />
      </label>
      <label className='radio-text'>
        Sixteenth Note
        <input
          type="radio"
          name="length"
          value="1/16"
          checked={sketch.length.selectedLengthOption === '1/16'}
          onChange={handleOptionChange}
          className='length-radio'
        />
      </label>
      <br></br>

      <p className='music-element'>Music Notes (required): </p>
      <p className='form-notes'>Use the table provided below to guide your sketch&apos;s notation.</p>
      <textarea
        required={true}
        className='music-note-input'
        placeholder="CCGG | AAG2"
        name="notes"
        value={sketch.notes}
        onChange={handleChange}
      />
      <SketchPreview
        sketch={sketch}
      />
      <br></br>
      <button type="submit">Save my Sketch</button>
    </form>
  </div>
)

export default SketchForm
