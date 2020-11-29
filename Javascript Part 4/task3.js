function divideAndSort (num) {
    
    if(typeof(num) !== "number") {
        console.log("Input harus bertipe number")
    
    } else {
    const div = num.toString().split(0)
    console.log(div)
    
    const rev = div.map(a => Array.from(a).sort((a,b)=>a-b).join(""))
    console.log(rev)
    
    const sorted = rev.join("")
    console.log(sorted)
    
    }
}
divideAndSort(5956560159466056)