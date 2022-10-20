class Account {
    get_Account_Details() {
        console.log("Account Class - get_Account_Details Method")
    }
}
class Savings_Account extends Account {
    //method overriding
    get_Account_Details() {
        console.log("Savings_Account - class get_Account_Details Method")
    }
}

let a1 = new Savings_Account()
a1.get_Account_Details()
