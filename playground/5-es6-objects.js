// object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
  name,
  age: userAge,
  location: 'Philadelphia'
}

console.log(user)

// Object Destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2
}

// manual way
// const label = product.label
// const stock = product.stock

// extract obj properties into individual variables
// You can also rename variables with destructuring
// You can also set up a default value if there isn't a property

const {label: productLabel, stock, rating = 5} = product
console.log(productLabel, stock, rating)

// Can destructure inline!
const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock)
}

transaction('order', product)
transaction('order')
