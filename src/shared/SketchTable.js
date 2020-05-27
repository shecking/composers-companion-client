import React, { Component } from 'react'

class SketchTables extends Component {
  constructor (props) {
    super(props)
    this.state = {
      basic_elements: [
        { example: 'Key', input: 'F | Fm | Eb | C#m | none', output: 'F Maj | F min | Eb Maj | C# min | no key signature' },
        { example: 'Meter', input: '3/4 | 2+3/8 | none', output: '3/4 time | 2+3/8 time | no time signature' },
        { example: 'Pitch Level', input: 'C,, | C, | C | c | c\' | c\'\'', output: 'C2 | C3 | C4 (middle C) | C5 | C6 | C7' },
        { example: 'Flats (_)', input: '_B | __B', output: 'Bb | Bbb' },
        { example: 'Sharps (^)', input: '^B | ^^B', output: 'C# | Cx' },
        { example: 'Naturals (=)', input: '=B', output: 'B natural' },
        { example: 'Note Duration', input: 'C | C2 | C3 | C4', output: 'quarter | half | dotted half | whole (when default = quarter)' },
        { example: 'Rests (z)', input: 'z2 | z4 ', output: '2 | 4 note lengths of rest' }
      ],
      extended_elements: [
        { example: 'Bar Lines (|)', input: '|', output: 'bar line' },
        { example: 'Ties (-)', input: 'G-|G', output: 'Two G3 pitches, tied across bar line' },
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
