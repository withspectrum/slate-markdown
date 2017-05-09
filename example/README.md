# Example

This is a simple editor to showcase `slate-markdown`. (it's also useful for developing the plugin)

## Running this locally

```sh
yarn install
yarn run start
```

This should open your browser at `localhost:3000` with the example running.

## Developing the plugin with this example

The example uses the `dist/index.js` file for rendering the plugin. To get that to automatically recompile whenever you change the source you need to run this command in the root of the project:

```sh
yarn run build -- --watch
```

## Kudos

This project is based on [`create-react-app`](https://github.com/facebookincubator/create-react-app).
