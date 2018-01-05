import React, { Component } from 'react';
import WebsterPuzzleDemoMp4 from './images/webster-puzzle-demo.mp4';
import WebsterPuzzleDemoPng from './images/webster-puzzle-demo.png';

class WebsterPuzzleProject extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        ref={(ref) => { this.props.bubbleRef(ref); }}
      >
        <div className="title">webster puzzle</div>
        <div>
          <a href="http://rubyonrails.org/">Rails</a>-<a href="https://facebook.github.io/react/">react</a>-powered dictionary puzzle game, where the goal is to find a chain of definitions that leads from one given word to other.
        </div>
        <div className="main-block">
          <video controls poster={WebsterPuzzleDemoPng}>>
            <source src={WebsterPuzzleDemoMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-block">
            <ul>
              <li>over 80000 words dictionary</li>
              <li>customizable difficulty</li>
              <li>easy to share — just copy URL</li>
            </ul>
            <div className="links-block">
              <a href="https://kengho.tech/webster-puzzle/">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                  play
                </button>
              </a>
              <a href="https://github.com/kengho/webster-puzzle">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebsterPuzzleProject;
