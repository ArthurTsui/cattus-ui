if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  module.exports = require('./dist/cattus.js')
} else {
  module.exports = require('./dist/cattus.min.js')
}
