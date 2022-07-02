const name = document.getElementById("name")
const eyecolor = document.getElementById("eyecolor")
const birthyear = document.getElementById("birthyear")
const image = document.getElementById("image")
const species = document.getElementById("species")
const gender = document.getElementById("gender")
const height = document.getElementById("height")
const mass = document.getElementById("mass")

const button = document.querySelector(".getRandomcharacter")

    button.addEventListener("click", (e) => {
        e.preventDefault()
        name.innerHTML = '<em>Loading...</em>'
        eyecolor.innerHTML = '<em>Loading...</em>'
        birthyear.innerHTML = '<em>Loading...</em>'
        image.innerHTML = '<em>Loading...</em>'
        species.innerHTML = '<em>Loading...</em>'
        gender.innerHTML = '<em>Loading...</em>'
        mass.innerHTML = '<em>Loading...</em>'
        height.innerHTML = '<em>Loading...</em>'
        //character randomization
        const randomNumber = Math.ceil(Math.random() * 88)
        //fetching Api
        fetch(`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`)
        .then(response => response.json())
        .then(character => {
            console.log(character)
            name.innerHTML = character[`name`]
            eyecolor.innerHTML = character[`eyeColor`]
            birthyear.innerHTML = character[`born`]
            species.innerHTML = character[`species`]
            gender.innerHTML = character[`gender`]
            height.innerHTML = character[`height`]
            mass.innerHTML = character[`mass`]
            image.innerHTML = character[`image`]
        })
    })