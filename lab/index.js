document.addEventListener("DOMContentLoaded",()=>{
let button = document.querySelector("button")
let input = document.querySelector("input")
input.innerHTML = ""




const checkAnimal = async()=>{
    let res = await axios.get(`http://localhost:3000/animal/${input.value}`)

let h2 = document.createElement("h2")
h2.innerHTML = ""
h2.innerText = res.data.verdict

document.body.appendChild(h2)
console.log(res.data.verdict)
     
}

button.addEventListener("click", checkAnimal)
})

