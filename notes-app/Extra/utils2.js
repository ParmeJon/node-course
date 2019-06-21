console.log('utils.js')

const name = 'Mike'

const add = function (a, b) {
  return a + b
}

// exporting name since all files have their own scope.
module.exports = add
