// const square = function (x) {
//   return x * x
// }

// const square = (x) => {
//   return x * x
// }

// const square = (x) => x*x
//
// console.log(square(2))

const event = {
  name: 'Birthday party',
  guestList: ['Andrew', 'John', 'Mike'],
  // ES6 syntax
  // arrow functions are poor candidates for methods but good for other stuff.
  printGuestList() {
    console.log('Guest list for ' + this.name)
// arrow functions don't bind their own this value.
    this.guestList.forEach((guest) => {
      console.log(guest + ' is attending ' + this.name )
    })
  }
}

event.printGuestList()
