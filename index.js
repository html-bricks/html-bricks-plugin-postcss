const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const precss = require('precss')
const postcssPresetEnv = require('postcss-preset-env')
const cssReg = /\.css$/

const processor = postcss([precss, postcssPresetEnv, autoprefixer])

exports.postBuild = function postBuild (files, config) {
  return new Promise(function (resolve, reject) {
    try {
      const promises = files.map(file => {
        if (file.dest.match(cssReg)) {
          return processor.process(file.content, { from: file.src })
            .then(res => ({
              ...file,
              content: Buffer.from(res.css)
            }))
        }
        return Promise.resolve(file)
      })

      Promise.all(promises).then(next => resolve(next))
    } catch (e) {
      reject(e)
    }
  })
}
