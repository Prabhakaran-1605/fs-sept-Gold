let state = {
    product_Id: 101,
    product_Name: "Iphone 12",
    price: 450000
}
console.log(state.product_Id)
console.log(state.product_Name)
let { product_Id, product_Name } = state
console.log(product_Id)
console.log(product_Name)