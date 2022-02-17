"use strict"
function sort(str) {
    var res = []
    for (var i = str.length - 1; i >= 0; i--) {
        res.push(str[i])
    }
    return res
}
var res = sort(["a", "b", "c"])
console.log(res)
