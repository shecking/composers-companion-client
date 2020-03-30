import React from 'react'

const SketchForm = ({ sketch, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Description</label>
    <input
      placeholder="Put description here"
      name="description"
      value={sketch.description || ''}
      onChange={handleChange}
    /><br></br>
    <label>Composer</label>
    <input
      placeholder="Put composer here"
      name="composer"
      value={sketch.composer || ''}
      onChange={handleChange}
    /><br></br>
    <label>Music</label>
    <input
      placeholder="Put music here"
      name="music"
      value={sketch.music || ''}
      onChange={handleChange}
    /><br></br>
    <button type="submit">Submit</button>
  </form>
)

export default SketchForm
