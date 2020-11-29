function cekPalindrome(words) {
    
    const word = words.toLowerCase()
    
    const reversed = word.split("").reverse().join("")
    if(reversed === word) {
        console.log(word +  ' Palindrome')
    } else {
        console.log(word + ' Bukan Palindrome')
    }
    return reversed
}

// ['M'],['A'],['L'],['A'],['M'], dipecah dulu string menjadi array menggunakan split
// lalu di balik menggunakan reverse
// setelah itu kita gabungkan lagi dengan method join

cekPalindrome("Malam")
cekPalindrome("Siang")
cekPalindrome("Kasur ini rusak")








