document.addEventListener("DOMContentLoaded", () => {
    fetchImages(); fetchBreeds()
})

function fetchImages () {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then( (r) => r.json() )
    .then((json) => (json.message.forEach(dog => {
        addImage(dog)
    })))}


function addImage(data) {
   let container = document.querySelector("#dog-image-container")
    let img = document.createElement("img")
        img.src = data
        container.append(img)
}

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then((r) => r.json())
    .then((json) => Object.keys(json.message).forEach(breed => {
        appendBreed(breed)
    }))
}

function appendBreed(breed) {
    let ul = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    li.addEventListener('click', changeColor)
    li.innerText = breed 
    let dropDown = document.querySelector('#breed-dropdown')
    ul.appendChild(li)
    dropDown.addEventListener('change', () => {
        if(li.innerText[0] === dropDown.value) {
            // li.innerText = ""
            ul.appendChild(li)
        }
        else {
            li.remove()
        }
    })
}

function changeColor(event) {
    event.target.style.color = "red"
}