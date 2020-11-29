let printSegitiga = 5
let panjang = printSegitiga
let output  = ""

if(typeof printSegitiga != 'number'){
    console.log("Input harus angka!")
} 

for (let i = 0; i<printSegitiga; i++) {
    for (let x = 1 ;x<=panjang; x++ ) {
        output += x;
    }
    
    console.log(output)
    

    output = ""
    panjang -= 1
    
} 


