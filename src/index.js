// @flow
/**
 * Most of this was stolen from https://github.com/ianstormtaylor/slate/blob/460498b5ddfcecee7439eafe4f4d31cacde69f41/examples/markdown-preview/index.js
 */
import React from 'react';
import decorate from './decorator';

type Options = {
  sizes?: Array<string>,
};

const MarkdownPlugin = (options: Options = {}) => {
  const sizes = options.sizes || [
    '2.441em',
    '1.953em',
    '1.563em',
    '1.25em',
    '1em',
  ];

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
            <span
              {...attributes}
              style={{
                fontWeight: 'bold',
                fontSize,
                margin: `0.5em 0 0.25em 0`,
                display: 'inline-block',
              }}
            >
              {children}
            </span>
          );
        },
        bold: {
          fontWeight: 'bold',
        },
        italic: {
          fontStyle: 'italic',
        },
        punctuation: {
          opacity: 0.2,
        },
        code: {
          fontFamily: 'monospace',
          display: 'inline-block',
          padding: '2px 1px',
        },
        list: {
          paddingLeft: '10px',
          lineHeight: '10px',
          fontSize: '20px',
        },
        hr: {
          borderBottom: '2px solid #000',
          display: 'block',
          opacity: 0.2,
        },
        url: {
          color: 'blue',
          textDecoration: 'underline',
        },
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
