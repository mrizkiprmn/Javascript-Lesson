let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }
    
   // a. Mengubah data menggunakan spread operators

    const data2 = {...data} 
    data2.name = "M Rizki Permana"
    data2.email = "rizkiypermana@gmail.com"
    data2.hobbies = "Bermain Bulutangkis"
    
    data = data2

    console.log(data)

    // b. Mengambil data menggunakan destructuring

    const {street, city} = data.address
    console.log({street}) 
    console.log({city})

    console.log(street)
    console.log(city)