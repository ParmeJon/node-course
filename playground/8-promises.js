const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve([7,4,1])
    reject('things went wrong!')
  }, 2000)
})

doWorkPromise.then((result) => {
  console.log('Success!', result)
}).catch((error) => {
  console.log('Error', error)
})

// Don't have to worry about another callback hitting,
// resolve or reject will make sure only 1 runs, rules enforced
// behind the scenes.

// Promise -- pending --> fulfilled or rejected
