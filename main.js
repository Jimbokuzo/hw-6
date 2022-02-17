"use strict"
// function sort(str){
    
//     var isGood = false
//     for(var text of str){
//         var text = str.slice(-1)
//         isGood = true
//         console.log(text)
//         if(isGood === true){
//             var text = str.pop()
//             continue
//         }
        
        
//     }
//     return str
// }
function sort(str){
    var res = []
    for(var i = 0; i < str.lenght; i++){
        var arr = str[i]
        res.push(arr[i])
        if(res === i){
            str.pop()
            continue
        }
    }
    return res
}
var res = sort(["a", "b", "c"])
console.log(res)
