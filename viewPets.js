const viewPets = document.querySelector("#viewPets");
const petID = document.querySelector("#petID");

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
                    console.log(json.data);
                })
        }
    })
    .catch(err => console.error(`Stop! ${err}`));
}

viewPets.addEventListener('click', viewPetByID);