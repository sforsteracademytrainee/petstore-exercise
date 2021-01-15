
'use strict'

const createBtn = document.querySelector("#create");
const createName = document.querySelector('#createName');
const createCat = document.querySelector('#createCategory');
const createStatus = document.querySelector('#createStatus');
const createImage = document.querySelector('#image')
const createFeedback = document.querySelector('#feedback')

const create = () => {
    const nameValue = createName.value;
    const statusValue = createStatus.value;
    const catValue = createCat.value;
    const imageURL = createImage.value;
    console.log(imageURL);
    let catID;
    switch(catValue){
        case("Dog"):
            catID = 1;
            break;
        case("Cat"):
            catID = 2;
            break;
        case("Rabbit"):
            catID = 3;
            break;
        case("Bird"):
            catID = 4;
            break;
    }
    fetch(`https://petstore.swagger.io/v2/pet/`, {
        method: 'POST',
        body: JSON.stringify({
            "id": 1,
            "category": {
                "id": catID,
                "name": catValue
                },
            "name": nameValue,
            "photoUrls": [imageURL],
            "tags": [
                {
                    "id": 0,
                    "name": "string"
                }
            ],
            "status": statusValue
        }),
        headers: {
            'Content-type': 'application/json; charset=utf8'
        }
    }).then(response => response.json())
        .then(json => console.log(json), output("Pet Created"))
        .catch(err => console.error("Data could not be updated"))
}

const output = (message) => {
    let p = document.createElement("p");
    let feedback = document.createTextNode(message);
    p.appendChild(feedback);
    createFeedback.appendChild(p);
}
createBtn.addEventListener('click', create);
