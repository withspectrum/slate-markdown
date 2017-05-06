# `slate-markdown`

Add live markdown preview support to your Slate editor.

## Installation

```sh
npm install slate-markdown
```

## Usage

```JS
import { Editor } from 'slate';
import MarkdownPlugin from 'slate-markdown';

const markdown = MarkdownPlugin();

<Editor
  plugins={[markdown]}
/>
```

## License

Licensed under the MIT License, Copyright ©️ 2017 Maximilian Stoiber. See [LICENSE.md](LICENSE.md) for more information.

Most of this code was taken directly from the Slate examples, thanks to [@ianstormtaylor](https://github.com/ianstormtaylor). [Source for the example copied here](https://github.com/ianstormtaylor/slate/blob/460498b5ddfcecee7439eafe4f4d31cacde69f41/examples/markdown-preview/index.js).
