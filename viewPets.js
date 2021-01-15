const viewPets = document.querySelector("#viewPets");
const petID = document.querySelector("petID");

const viewPetByID = () =>
{
    fetch(`https://petstore.swagger.io/v2/pet/1`)
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
                    console.log("Pet Found");
                })
        }
    })
    .catch(err => console.error(`Stop! ${err}`));
}