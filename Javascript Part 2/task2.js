const name = [
    'Abigail','Alexandra','Alison',
    'Amanda','Angela','Bella',
    'Carol','Caroline','Carolyn',
    'Deidre','Diana','Elizabeth',
    'Ella','Faith','Olivia','Penelope']
    

function searchName(kata, limit, callback){
        for(let i = 0; i<limit; i++){
        const filterName = name.filter((names)=>{
            return names.toLowerCase().includes(kata)
        })
        callback(filterName[i])
    }
}

function filtered(query){
    console.log(query)
}

searchName('an', 3, filtered)