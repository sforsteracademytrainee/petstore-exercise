const viewPetsByID = document.querySelector("#viewPetsByID");
const petID = document.querySelector("#petID");
const status = document.querySelector("#status");
const viewPetsByStatus = document.querySelector("#viewPetsByStatus");
const petsDisplay = document.querySelector("#petsDisplay");


const viewPetByID = () =>
{
    const petIDValue = petID.value;
    fetch(`https://petstore.swagger.io/v2/pet/${petIDValue}`)
    .then((response) =>
    {
        console.log(response);
        if (response.status !== 200)
        {
            console.error(`Looks like there was a problem. Status Code: ` +
            response.status);
            return;
        }
        else
        {
            response.json().then(json =>
                {
                    console.log(json);
                    let p = document.createElement("p");
                    p.className = "pets";

                    let info = document.createTextNode(`Name: ${json[petIDValue].name}`)
                    p.appendChild(info);
                    petsDisplay.appendChild(p);
                    
                })
        }
    })
    .catch(err => console.error(`Stop! ${err}`));
}

const viewPetByStatus = () =>
{
    const petStatus = status.value;
    fetch(`https://petstore.swagger.io/v2/pet/findByStatus?status=${petStatus}`)
    .then((response) =>
    {
        console.log(response);
        if (response.status !== 200)
        {
            console.error(`Looks like there was a problem. Status Code: ` +
            response.status);
            return;
        }
        else
        {
            response.json().then(json =>
                {
                    console.log(json);
                    console.log(json.data);
                    let p = document.createElement("p");
                    
                })
        }
    })
    .catch(err => console.error(`Stop! ${err}`));
}

viewPetsByID.addEventListener('click', viewPetByID);
viewPetsByStatus.addEventListener(`click`, viewPetByStatus);