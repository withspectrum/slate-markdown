import React, { Component } from 'react';
import { Editor as $Editor, Plain } from 'slate';
import styled from 'styled-components';

let MarkdownPlugin;

if (process.env.NODE === 'production') {
  MarkdownPlugin = require('slate-markdown').default;
} else {
  MarkdownPlugin = require('../../dist/index.js').default;
}

import Heading from './Heading';

const Wrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
`;

const Text = styled.p`
  font-size: 1em;
`;

const Editor = styled($Editor)`
  background-color: #FFF;
  padding: 1em;
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
      <Wrapper>
        <Heading>slate-markdown</Heading>
        <Text>
          Add live markdown preview to your Slate editor. Try it below!
        </Text>
        <Editor
          state={state}
          plugins={plugins}
          onChange={this.onChange}
          placeholder={'You can write markdown here! (try "## Hello")'}
        />
        <Text>
          Installation and usage instructions on
          {' '}
          <a href="https://github.com/withspectrum/slate-markdown">
            GitHub
          </a>!
        </Text>
      </Wrapper>
    );
  }
}

export default App;
