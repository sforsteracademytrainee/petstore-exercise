const viewPetsByID = document.querySelector("#viewPetsByID");
const petID = document.querySelector("#petID");
const status = document.querySelector("#status");
const viewPetsByStatus = document.querySelector("#viewPetsByStatus");
const petsDisplay = document.querySelector("#petsDisplay");
const clearData = document.querySelector("#clear");


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

                    let info = document.createTextNode(`ID : ${json.id}  Name: ${json.name}  Status: ${json.status}`)
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
                    for(let i = 0; i <json.length; i++)
                    {
                        let p = document.createElement("p");
                        p.className = "pets";

                        let info = document.createTextNode(`ID : ${json[i].id}  Name: ${json[i].name}  Status: ${json[i].status}`)
                        p.appendChild(info);
                        petsDisplay.appendChild(p);
                    }
                    
                })
        }
    })
    .catch(err => console.error(`Stop! ${err}`));
}

const clear = () =>
{
    petsDisplay.innerHTML = "";
}

viewPetsByID.addEventListener('click', viewPetByID);
viewPetsByStatus.addEventListener(`click`, viewPetByStatus);
clearData.addEventListener("click", clear);