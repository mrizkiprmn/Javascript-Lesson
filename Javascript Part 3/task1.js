const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
          },3000)
    })
}



cekHariKerja('RABU'.toLowerCase())
.then((hasil)=>{
    console.log(hasil + ' adalah hari kerja')
})
.catch((err)=>{
    console.log(err.message)
})



// penggunaan then() : untuk mengembalikan promise,jika semua promise sudah terpenuhi maka then() bisa berjalan
// pengunaan catch() : menampilkan pesan error dimana jika suatu promise tidak terpenuhi maka ditangkap oleh catch.

// try catch

// async function getCekHariKerja(day) {
    
//     try {
//     const cek = await cekHariKerja(day)
//     console.log(cek + ' adalah hari kerja')
    

    

//     } 
//     catch(err) {
//     console.log(err.message)
    
    

//     }
// }

// getCekHariKerja('sabtu'.toLowerCase)




// jika kita menangani error menggunakan async await,kita menggunakan try and catch

// try ini berfungsi untuk mengecek blok code yang akan di eksekusi atau dijalankan
// catch disini sama saja fungsinya,untuk menangkap sebuah kesalahan pada promise jika promise tidak terpenuhi