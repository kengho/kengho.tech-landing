import React, { Component } from 'react';
import SpreadsheetDemoMp4 from './images/spreadsheet-demo.mp4';

class SpreadsheetProject extends Component {
  render() {
    // Most of the html code copied from https://github.com/kengho/react-redux-spreadsheet
    return (
      <div
        id={this.props.id}
        ref={(ref) => { this.props.bubbleRef(ref); }}
      >
        <div className="title">spreadsheet</div>
        <div>
          <a href="http://rubyonrails.org/">Rails</a>-<a href="https://facebook.github.io/react/">react</a>-<a href="http://redux.js.org/docs/introduction/">redux</a>-powered spreadsheet, where you can do basic spreadsheeting.
        </div>
        <div className="main-block">
          <video controls>
            <source src={SpreadsheetDemoMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-block">
            <ul>
              <li>automatic sync with server with requests queue</li>
              <li>basic hotkeys handlers (<code>ArrowX</code>, <code>Enter</code>, <code>Escape</code>, <code>F2</code>, <code>PageDown</code>, <code>PageUp</code>, <code>Home</code>, <code>End</code>, <code>Delete</code>)</li>
              <li>copy/cut/paste cells (<code>Ctrl+C</code>, <code>Ctrl+X</code>, <code>Ctrl+V</code>)</li>
              <li><a href="https://github.com/omnidan/redux-undo">redux-undo</a>-powered undo/redo (<code>Ctrl+Z</code>, <code>Ctrl+Y</code>)</li>
              <li>multiline text (<code>Ctrl+Enter</code>)</li>
              <li>autosizing cells</li>
              <li>delete/insert row/column buttons</li>
              <li>automatically expanding table</li>
              <li>built-in invisible Google reCAPTCHA</li>
              <li>clean material-ish design</li>
            </ul>
            <div className="links-block">
              <a href="https://kengho.tech/spreadsheet">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                  try
                </button>
              </a>
              <a href="https://github.com/kengho/react-redux-spreadsheet/">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SpreadsheetProject;