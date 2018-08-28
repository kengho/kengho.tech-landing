import React, { Component } from 'react';
import SpreadsheetDemoMp4 from './images/spreadsheet-demo.mp4';
import SpreadsheetDemoPng from './images/spreadsheet-demo.png';

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
          <video controls poster={SpreadsheetDemoPng}>
            <source src={SpreadsheetDemoMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-block">
            <ul>
              <li>auto sync with server</li>
              <li>auto saving cells' values history</li>
              <li>export/import to/from CSV/JSON</li>
              <li>basic hotkeys handlers (<code>ArrowX</code>, <code>Enter</code>, <code>Escape</code>, <code>F2</code>, <code>PageDown</code>, <code>PageUp</code>, <code>Delete</code>)</li>
              <li>copy/cut/paste cells (<code>Ctrl+C</code>, <code>Ctrl+X</code>, <code>Ctrl+V</code>)</li>
              <li><a href="https://github.com/omnidan/redux-undo">redux-undo</a>-powered undo/redo (<code>Ctrl+Z</code>, <code>Ctrl+Y</code>)</li>
              <li>multiline text (<code>Ctrl+Enter</code>)</li>
              <li>infinite 2D grid</li>
              <li>built-in invisible Google reCAPTCHA</li>
              <li>clean material design</li>
            </ul>
            <div className="links-block">
              <a href="https://spreadsheet.kengho.tech/">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                  try
                </button>
              </a>
              <a href="https://github.com/kengho/react-redux-spreadsheet">
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
