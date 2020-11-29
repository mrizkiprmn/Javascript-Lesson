let mtk = 80
let bahasaIndonesia = 80
let bahasaInggris = 80
let ipa = 80
let rataRata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / (4)

if (typeof mtk && bahasaIndonesia && bahasaInggris && ipa && rataRata === "string"){
    console.log("Harap masukan nilai bertipe number!")
} else {

console.log("Rata-rata = " + rataRata)
}


if(rataRata > 100) {
    console.log("Rata-rata terlalu besar!")
} else if(rataRata>=90) {
    console.log("Grade = A")
} else if (rataRata>=80) {
    console.log("Grade = B")
} else if(rataRata>=70) {
    console.log("Grade = C")
} else if (rataRata>=60) {
    console.log("Grade = D")
} else if(rataRata<=59) {
    console.log("Grade = E")
} else {
    console.log("Rata-Rata = " + rataRata)
}


