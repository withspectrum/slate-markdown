// @flow
/**
 * Most of this was stolen from https://github.com/ianstormtaylor/slate/blob/460498b5ddfcecee7439eafe4f4d31cacde69f41/examples/markdown-preview/index.js
 */
import React from 'react';
import decorate from './decorator';
import {
  Title,
  Bold,
  Italic,
  Punctuation,
  Code,
  List,
  Hr,
  Url,
} from './components';

type Classnames =
  | 'title'
  | 'bold'
  | 'italic'
  | 'punctuation'
  | 'code'
  | 'list'
  | 'hr'
  | 'url';

type Options = {
  sizes?: Array<string>,
  classnames?: {
    [key: Classnames]: string,
  },
};

const MarkdownPlugin = (options: Options = {}) => {
  const sizes = options.sizes || [
    '2.441em',
    '1.953em',
    '1.563em',
    '1.25em',
    '1em',
  ];

  const classnames = options.classnames || {};

  return {
    schema: {
      nodes: {
        line: ({ attributes, children }: any) => (
          <p {...attributes}>{children}</p>
        ),
      },
      marks: {
        title: (props: any) => {
          const { attributes, children, mark: { data } } = props;
          const level = data.get('level');
          const fontSize =
            (level && sizes[level - 1]) || sizes[sizes.length - 1];
          return (
            <Title
              {...attributes}
              className={classnames.title}
              fontSize={fontSize}
            >
              {children}
            </Title>
          );
        },
        bold: (props: any) => (
          <Bold
            {...props.attributes}
            children={props.children}
            className={classnames.bold}
          />
        ),
        italic: (props: any) => (
          <Italic
            {...props.attributes}
            children={props.children}
            className={classnames.italic}
          />
        ),
        punctuation: (props: any) => (
          <Punctuation
            {...props.attributes}
            children={props.children}
            className={classnames.punctuation}
          />
        ),
        code: (props: any) => (
          <Code
            {...props.attributes}
            children={props.children}
            className={classnames.code}
          />
        ),
        list: (props: any) => (
          <List
            {...props.attributes}
            children={props.children}
            className={classnames.list}
          />
        ),
        hr: (props: any) => (
          <Hr
            {...props.attributes}
            children={props.children}
            className={classnames.hr}
          />
        ),
        url: (props: any) => (
          <Url
            {...props.attributes}
            children={props.children}
            className={classnames.url}
          />
        ),
      },
      rules: [
        {
          match: () => true,
          decorate,
        },
      ],
    },
  };
};

export default MarkdownPlugin;
