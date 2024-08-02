//manuel
function revString(strr)
{
    let arr = strr.split('')
    let lft = 0
    let rgt = arr.length-1


    while(lft<rgt)
    {
        let temp = arr[lft]
        arr[lft] = arr[rgt]
        arr[rgt] = temp
        lft++
        rgt--
    }
return arr.join("")
}

console.log(revString("HELLO"))

const str = "HELLO"
    function revStrInbuilt(str)
    {
        return str.split("").reverse().join("")
    }
console.log(revStrInbuilt("HELLO"));
console.log("sdaasd".split(""))