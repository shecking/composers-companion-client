import React, { Component } from 'react'

class SketchTables extends Component {
  constructor (props) {
    super(props)
    this.state = {
      basic_elements: [
        { example: 'Clef', input: 'alto | treble | bass', output: 'alto | treble | bass Clef' },
        { example: 'Key', input: 'F | Fm', output: 'F Major (1 flat) | F minor (4 flats)' },
        { example: '', input: 'Eb | C#m', output: 'Eb Major (3 flats) | C# minor (3 sharps)' },
        { example: 'Meter', input: '3/4', output: '3/4 time' },
        { example: ' ', input: '2+3/8', output: '2+3/8 time' },
        { example: 'Pitch Level', input: 'C\' | C | c | c\'', output: 'C3 | C4 (middle C) | C5 | C6' },
        { example: 'Flats ( _ )', input: '_B | __B', output: 'Bb | Bbb' },
        { example: 'Sharps ( ^ )', input: '^B | ^^B', output: 'C# | Cx' },
        { example: 'Naturals ( = )', input: '=B', output: '(B natural)' },
        { example: 'Rests ( z )', input: 'z | z2 ', output: 'full measure rest | 2 note lengths of rest' },
        { example: 'Bar Lines ( | )', input: '|', output: 'bar line' }
      ],
      extended_elements: [
        { example: 'Ties ( - )', input: 'G-|G', output: 'Two G3 pitches, tied across bar line' },
        { example: 'Dynamics', input: '!p!C | !mp!C | !mf!C | !f!C', output: 'Middle C at p, mp, mf, f' }
      ]
    }
  }

  renderBasicTableHeader () {
    const header = Object.keys(this.state.basic_elements[0])
    return header.map((key, example) => {
      return <th key={example}>{key}</th>
    })
  }

  renderBasicTableData () {
    return this.state.basic_elements.map((element, index) => {
      const { example, input, output } = element
      return (
        <tr key={example}>
          <td>{example}</td>
          <td>{input}</td>
          <td>{output}</td>
        </tr>
      )
    })
  }
  renderExtendedTableHeader () {
    const header = Object.keys(this.state.extended_elements[0])
    return header.map((key, example) => {
      return <th key={example}>{key}</th>
    })
  }

  renderExtendedTableData () {
    return this.state.extended_elements.map((element, index) => {
      const { example, input, output } = element
      return (
        <tr key={example}>
          <td>{example}</td>
          <td>{input}</td>
          <td>{output}</td>
        </tr>
      )
    })
  }

  render () {
    return (
      <div>
        <h6>Basic Formatting:</h6>
        <table className='basic-elements'>
          <tbody>
            <tr>{this.renderBasicTableHeader()}</tr>
            {this.renderBasicTableData()}
          </tbody>
        </table>
        <h6>Extended Formatting:</h6>
        <table className='extended-elements'>
          <tbody>
            <tr>{this.renderExtendedTableHeader()}</tr>
            {this.renderExtendedTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default SketchTables
