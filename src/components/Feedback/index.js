import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  onChange = () => this.setState({isFeedbackSelected: true})

  feedBack = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button type="button" onClick={this.onChange} className="button">
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="emoji-img"
                />
                <br />
                <span className="emoji-name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  thankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thankyou-heading">Thank You</h1>
        <p className="description">
          we will use your feedback to improve customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-container">
        <div className="card-container">
          {isFeedbackSelected ? this.thankYou() : this.feedBack()}
        </div>
      </div>
    )
  }
}

export default Feedback
