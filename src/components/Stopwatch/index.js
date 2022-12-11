// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {min: 0, sec: 0, isTimerOn: false}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick = () => {
    const {min, sec, isTimerOn} = this.state
    if (isTimerOn) {
      const seconds = sec < 59 ? sec + 1 : 0
      const minutes = sec === 59 ? min + 1 : min
      this.setState({min: minutes, sec: seconds})
    }
  }

  startTimer = () => {
    this.timerId = setInterval(this.tick, 1000)
    this.setState({isTimerOn: true})
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerOn: false})
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerOn: false, min: 0, sec: 0})
  }

  render() {
    const {min, sec, isTimerOn} = this.state

    const mi = min > 9 ? min : `0${min}`
    const se = sec > 9 ? sec : `0${sec}`

    return (
      <div className="container">
        <h1 className="heading">Stopwatch</h1>
        <div className="functionality">
          <div className="image-cont">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
              alt="stopwatch"
              className="image"
            />
            <p className="title">Timer</p>
          </div>

          <h1 className="timer">
            {mi}:{se}
          </h1>

          <div className="buttons">
            <button
              type="button"
              className="btnStart"
              onClick={this.startTimer}
              disabled={isTimerOn}
            >
              Start
            </button>
            <button type="button" className="btnStop" onClick={this.stopTimer}>
              Stop
            </button>
            <button
              type="button"
              className="btnReset"
              onClick={this.resetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
