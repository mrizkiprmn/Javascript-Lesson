// 1.

const cekName = (name) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataName = ['zayyan','abi','atia','yoan','tommy','zaki','dzulfikar','inyil','dani']
            let cek = dataName.find((x)=>{
                return x === name
            })

            if(cek){
                resolve(cek)
            } else {
                reject(new Error("Nama tidak ditemukan"))
            }
        },2000)
    })
}

cekName('abi')

.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err.message)
})

async function cariNama (name) {
    try {
        const nama = await cekName(name)
        console.log(nama)
    }
    catch(err) {
        console.log(err.message)
    }
}

cariNama('atia')



// 2. 

const cekKota = (kota) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataKota = ['Jakarta', 'Bandung', 'Semarang', 'Cirebon', 'Bekasi']
            let check = dataKota.find((a)=>{
                return a === kota
            })
            
            if(check) {
                resolve(check)
            } else {
                reject(new Error("Kota yang dicari tidak terdaftar"))
            }
        },2500)
    })
}


cekKota('Bekasi')

.then((result)=>{
    console.log(result)
})
.catch((err)=>{
    console.log(err.message)
})

async function cariKota (kota) {
    try {
        const check = await cekKota(kota)
        console.log(check)
    }
    catch(err) {
        console.log(err.message)
    }
}

cariKota('Jakarta')



