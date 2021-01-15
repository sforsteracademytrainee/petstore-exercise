'use script';

let petID = document.querySelector("#toDelete")

const deletePet = () => {

    let todelete = petID.value;
    fetch(`https://petstore.swagger.io/v2/pet/${todelete}`,{
        method: "DELETE"
    }) 
    .then(response => response.json())
    .then(myJson => console.log(myJson))
    .catch(err => console.error(err))

}

