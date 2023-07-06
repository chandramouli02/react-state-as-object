// Write your code here
import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="main-container">
        <div className="elements-container">
          <h1>
            Bob ate <span className="count-style">{mangoCount}</span> mangoes
            <span className="count-style">{bananaCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-center">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="btn-style"
                onClick={this.eatMango}
                type="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="fruit-center">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="btn-style"
                onClick={this.eatBanana}
                type="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
