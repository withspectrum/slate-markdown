import React, { Component } from 'react';
import { Editor as $Editor, Plain } from 'slate';
import styled from 'styled-components';
import MarkdownPlugin from '../../dist/index.js';

import Heading from './Heading';

const Editor = styled($Editor)`
  background-color: #FFF;
  padding: 1em;
  margin: 0 1em;
  border-radius: 5px;
  border: 1px solid #CCC;
`;

class App extends Component {
  constructor(props) {
    super(props);
    // Create markdown plugin
    const markdown = MarkdownPlugin();

    this.state = {
      state: Plain.deserialize(''),
      plugins: [markdown],
    };
  }

  onChange = state => {
    this.setState({
      state,
    });
  };

  render() {
    const { state, plugins } = this.state;
    return (
      <div>
        <Heading>Slate Markdown</Heading>
        <Editor
          state={state}
          plugins={plugins}
          onChange={this.onChange}
          placeholder={'You can write markdown here! (try "## Hello")'}
        />
      </div>
    );
  }
}

export default App;
