let goToMovie = (success, failure) => {
    let amount = 100;
    if (amount > 600) {
        success("Go to Kantara with Pop Corn")
    }
    else {
        failure("Go to PG ! Open Laptop")
    }

}
goToMovie((msg) => {
    console.log(msg)
}, (err) => {
    console.log(err)
})
//goToMovie(() => { }, () => { })
//goToMovie(1,2)