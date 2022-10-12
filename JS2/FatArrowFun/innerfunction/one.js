function outer() {
    console.log("Outer Ring Road")
    function inner() {
        console.log("Inner Ring Road")
    }
    inner()
}
outer()