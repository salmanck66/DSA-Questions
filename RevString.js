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