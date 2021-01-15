'use strict'

const createBtn = document.querySelector("#create");
const createName = document.querySelector('#createName');
const createStatus = document.querySelector('#createStatus');

const create = () => {
    const nameValue = updateName.value;
    const statusValue = updateStatus.value;
    fetch(`https://petstore.swagger.io/v2/pet/`, {
        method: 'POST',
        body: JSON.stringify({
            "id": 0,
            "category": {
                "id": 1,
                "name": nameValue
                },
            "name": "doggie",
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