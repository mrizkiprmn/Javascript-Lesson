global.fetch = require("node-fetch");

// then catch

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response)=>{
//     return response.json()
//   })
//   .then((searchName)=>{
//     for (const SearchName2 of searchName) {
//       console.log(SearchName2.name);
//     }
  
//   })
//  .catch((err)=>{
//   console.log(err.message + 'Internet anda tidak stabil')
// }) 


// try catch

const API = 'https://jsonplaceholder.typicode.com/users'

async function getName(){
try {
  const response = await fetch(API)
  const data = await response.json()
  const result = data.filter(obj =>{
    console.log(obj.name)
  })
}

catch {
  console.log('Sorry data not found 404')
  }
}

getName()