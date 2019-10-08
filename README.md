# html-bricks-plugin-postcss

PostCSS support for [html-bricks](https://github.com/html-bricks/html-bricks).

This plugin bundles autoprefixer, postcss-preset-env and precss to make a solid default setup. Browserslist is supported.

> Only `.css` files are parsed, so if you use [html-bricks-plugin-inline-css](https://github.com/html-bricks/html-bricks-plugin-inline-css), run this plugin before that one.

## Requirements

`html-bricks` >= 0.3.

## Installation

Install using npm

`npm install --save-dev html-bricks-plugin-postcss`

Then include the plugin in your config

```json
{
  "plugins": [
    "plugin-postcss"
  ]
}
```
