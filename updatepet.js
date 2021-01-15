const output = document.querySelector("#output");

// user input boxes
const idBox = document.querySelector("#petId");
const nameBox = document.querySelector("#petName");
const statusBox = document.querySelector("#petStatus");


const getFields = () => {
    return [Number.parseInt(idBox.value), nameBox.value, statusBox.value];
}

const printOutput = (message) => {
    output.innerHTML = "";
    let p = document.createElement("p");
    let text = document.createTextNode(message);
    p.appendChild(text);
    output.appendChild(p);
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
            "Content-type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => {
        if (response.status === 200) { // on successful query
            return response.json();
        } else if (response.status === 400) {
            printOutput("Invalid pet ID.");
        } else if (response.status === 404) {
            printOutput("Pet not found.")
        } else if (response.status === 405) {
            printOutput("Validation exception.");
        }
    })
    .then((json) => printOutput("Successfully update pet of id " + json.id 
        + " with name " + json.name + " and status " + json.status))
}
