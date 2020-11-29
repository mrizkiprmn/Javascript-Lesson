const getmonth = (callback)=>{
    setTimeout(()=>{
        let error = false
        let month = ['January','February','March','April','May','Juni','July','August',
        'September','October','November','Desember']
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data not Found'),[])
        }
    },4000)
}

getmonth((err, res) => {
    if (err) {
    return console.log(err.message)
}
    if (typeof res != 'object') {
        return console.log('data harus object')
    }
    res.map((res, index)=>{
        console.log(`bulan ${index + 1} : ${res}`)
    })
})