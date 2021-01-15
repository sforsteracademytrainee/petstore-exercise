const viewPetsByID = document.querySelector("#viewPetsByID");
const petID = document.querySelector("#petID");
const pets = document.querySelector("#pets");
const status = document.querySelector("#status");
const viewPetsByStatus = document.querySelector("#viewPetsByStatus");


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
                    // for (let i = 0; i < json.length; i++)
                    // {
                    //     let p = document.createElement("p");
                    //     p.className = "pets";

                    //     let info = document.createTextNode(json[i].name);

                    //     p.appendChild(info);
                    //     pets.appendChild(p);
                    // }
                    
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