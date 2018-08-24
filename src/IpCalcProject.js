import React, { Component } from 'react';
import IpCalcDemoMp4 from './images/ip-calc-demo.mp4';
import IpCalcDemoPng from './images/ip-calc-demo.png';

class IpCalcProject extends Component {
  render() {
    return (
      <div
        id={this.props.id}
        ref={(ref) => { this.props.bubbleRef(ref); }}
      >
        <div className="title">ip calc</div>
        <div>
          Simple <a href="https://vuejs.org/" rel="nofollow">vuejs</a>-powered app for getting info from IPv4 CIDR (basically, my Vue "Hello World").
        </div>
        <div className="main-block">
          <video controls poster={IpCalcDemoPng} className="video-25">
            <source src={IpCalcDemoMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="text-block">
            <div />
            <div className="links-block">
              <a href="https://kengho.tech/ipcalc/">
                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                  try
                </button>
              </a>
              <a href="https://github.com/kengho/vue-ip-calc">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IpCalcProject;
