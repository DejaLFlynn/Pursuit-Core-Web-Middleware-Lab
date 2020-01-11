document.addEventListener("DOMContentLoaded",()=>{
let button = document.querySelector("button")
let input = document.querySelector("input")
let animal = input.value
const checkAnimal = async()=>{
    let res = await axios.get(`http://localhost:3000/animal/`)
   res.data.forEach(el=>{
    if(el === animal ){
        let div = document.querySelector("div")
        div.innerText = "true"
    }else {
        let div = document.querySelector("div")
        div.innerText = "false"
    }
   })
    
}
button.addEventListener("click", checkAnimal)

})

