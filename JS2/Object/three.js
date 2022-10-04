let product = {
    name: "macbool pro",
    price: 194999,
    color: 'gray',
    discount: 'No Discount',
    availabe: "Money is there it's avaiable"
}
for (prop in product) {
    //console.log(product.prop)
    console.log(product[prop])
}