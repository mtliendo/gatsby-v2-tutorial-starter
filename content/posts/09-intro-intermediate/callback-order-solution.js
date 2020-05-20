//step 2
const placeOrder = (foodItems, callback) => {
  const outOfStockItems = ['chicken', 'shrimp', 'bat']

  const customerOutOfStockItems = foodItems.filter((foodItem) => {
    return outOfStockItems.some((soldOutItem) => foodItem.includes(soldOutItem))
  })

  customerOutOfStockItems.length > 0
    ? callback(customerOutOfStockItems)
    : callback(undefined, [
        { name: 'Chicken Supreme', price: 19.99 },
        { name: 'Large Caesar Salad', price: 14.99 },
      ])
}

//step 1
placeOrder(['chicken', 'large caesar salad'], (err, food) => {
  if (err) {
    console.log(
      `Sorry, can you order something else the ${err} is out of stock.`
    )
    return
  }
  console.log('here is your food', food)
})
