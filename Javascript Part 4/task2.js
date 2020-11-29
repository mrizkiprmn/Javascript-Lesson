function reverseWords (word) {
    if(typeof(word) !== "string") {
       return console.log("Input harus bertipe string!")
    } else {
    const words = word.split(' ')
    const revWords = words.reverse().join(" ")
    console.log(revWords)
    
    }
}

reverseWords('Saya Belajar Javascript')
reverseWords(12345)

