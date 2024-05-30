import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    letters: 0,
  }

  handleChange = event => {
    const searchInput = event.target.value
    const letters = searchInput.length
    this.setState({searchInput, letters})
  }

  render() {
    const {searchInput, letters} = this.state

    return (
      <div className="main-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="image"
            alt="letters calculator"
          />
        </div>
        <div className="text-container">
          <h1 className="head">Calculate the Letters you enter</h1>
          <label htmlFor="phraseInput" className="para">
            Enter the phrase
          </label>
          <input
            id="phraseInput"
            type="text"
            value={searchInput}
            className="input"
            onChange={this.handleChange}
            placeholder="Enter the phrase"
          />
          <div className="letters-container">
            <p className="letters-calculator">No. of letters: {letters}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
