import GithubMark from 'react-github-mark';
import React, { Component } from 'react';

import './App.css';
import getMinDistYProject from './lib/getMinDistYProject';
import SpreadsheetProject from './SpreadsheetProject';
import WebsterPuzzleProject from './WebsterPuzzleProject';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: window.location.hash ? window.location.hash.slice(1) : 'spreadsheet',
    };
    this.projects = {
      'spreadsheet': {
        component: SpreadsheetProject,
      },
      'webster-puzzle': {
        component: WebsterPuzzleProject,
      },
    };

    this.documentScrollHandler = this.documentScrollHandler.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.documentScrollHandler, true);
  }

  documentScrollHandler(evt) {
    const minDistYProject = getMinDistYProject(this.projects);
    if (minDistYProject !== this.state.activeTab) {
      this.setState({ activeTab: minDistYProject });
      window.history.replaceState(undefined, undefined, `#${minDistYProject}`);
    }
  }

  setActiveTab(id) {
    this.projects[id].ref.scrollIntoView({
      behavior: 'smooth',
    });
    this.setState({ activeTab: id });
  }

  render() {
    const activeTab = this.state.activeTab;

    const tabLinksOutput = [];
    const contentOutput = [];
    Object.keys(this.projects).forEach((projectName) => {
      tabLinksOutput.push(
        <div key={projectName}>
          <a
            className={`mdl-navigation__link tab ${projectName === activeTab ? 'active' : ''}`}
            href={`#${projectName}`}
            onClick={() => this.setActiveTab(projectName)}
          >
            {projectName.replace('-', ' ')}
          </a>
        </div>
      );

      // TODO: use HOC for projects since they composed the same way.
      const Component = this.projects[projectName].component;
      contentOutput.push(
        <Component
          bubbleRef={(ref) => { this.projects[projectName].ref = ref; }}
          id={projectName}
          key={projectName}
        />
      );
    });

    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
          <div className="mdl-layout__drawer tabs">
            <span className="mdl-layout-title title">
              projects
            </span>
            <nav className="mdl-navigation">
              {tabLinksOutput}
            </nav>
          </div>
          <main className="mdl-layout__content">
            <div className="page-content content">
              {contentOutput}
            </div>
          </main>
        </div>
        {/* Additional padding compensates width of artificial MDL Layout scrollbar. */}
        <GithubMark
          href="https://github.com/kengho/kengho.tech"
          padding="8px-16px"
        />
      </div>

    );
  }
}

export default App;
