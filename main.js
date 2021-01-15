'use strict'

const createBtn = document.querySelector("#create");
const createName = document.querySelector('#createName');
const createCat = document.querySelector('#createCategory');
const createStatus = document.querySelector('#createStatus');

const create = () => {
    const nameValue = createName.value;
    const statusValue = createStatus.value;
    const catValue = createCat.value;
    fetch(`https://petstore.swagger.io/v2/pet/`, {
        method: 'POST',
        body: JSON.stringify({
            "id": 0,
            "category": {
                "id": 1,
                "name": catValue
                },
            "name": nameValue,
            "photoUrls": [
                "string"
            ],
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
        .then(json => console.log(json))
        .catch(err => console.error("whoops"))
}


createBtn.addEventListener('click', create);