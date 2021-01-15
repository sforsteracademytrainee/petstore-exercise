const output = document.querySelector("#output");

// user input boxes
const idBox = document.querySelector("#petId");
const nameBox = document.querySelector("#petName");
const statusBox = document.querySelector("#petStatus");


const getFields = () => {
    return [Number.parseInt(idBox.value), nameBox.value, statusBox.value];
}

const updatePet = () => {
    let [id, name, status] = getFields();

    
    //console.log(id, name, status);
    fetch("https://petstore.swagger.io/v2/pet", {
        method: "PUT",
        body: JSON.stringify({
            "id": id,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": name,
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                  "id": 0,
                  "name": "string"
                }
            ],
            "status": status
        }),
        headers: {
            "Content-type": "application-json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    })
}
