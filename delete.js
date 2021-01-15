'use script';

let petID = document.querySelector

const deletePet = () => {

    let todelete = parseInt(petID.deletePet)
    fetch(`https://petstore.swagger.io/v2/pet`)
    method: deletePet
}) 
.then(response => response.json())
.then(myJson => console.log(myJson))
.catch(err => console.error(err));