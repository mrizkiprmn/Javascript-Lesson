function seleksiNilai (nilaiAwal, nilaiAkhir, dataArray=[]) {
        
        if(nilaiAwal > nilaiAkhir) {
            console.log('Nilai akhir harus lebih besar dari nilai awal')
        } else if(nilaiAwal === 0 && nilaiAkhir === 0) {
            console.log('Nilai awal dan nilai akhir harus terisi')
        } else if(dataArray.length < 5){
            console.log('Jumlah data array harus lebih dari 5')
        } else {
            
            hasil = dataArray.filter(function(x) {
                return x > nilaiAwal && x < nilaiAkhir})
            hasil.sort(function(a,b) {
                return a-b
        
        })
         console.log(hasil)
    }   
           
}

// seleksiNilai(12,8,[9,11,120,15,16,10])
// seleksiNilai(0,0,[12,5,8,9,10,12])
// seleksiNilai(8,12,[9,11,10])
seleksiNilai(8,20,[20,29,12,14,50,120,90])

