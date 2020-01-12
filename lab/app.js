const express = require("express")
const cors = require("cors")
const port = 3000
const app = express()
app.use(cors())

const animalObject = 
{
    animals: ["zebra","dog","lion"],
    verdict: "",


}

const isAnimal =(req,res,next)=>{
        if(animalObject.animals.includes(req.params.animalid)){ 
            animalObject.verdict = "true"
             res.json(animalObject)
   }else{
    animalObject.verdict = "false"
        res.json(animalObject)
    }
next()
}
const isRandom=(req,res,next)=>{
    let floor = Number(req.params.floor)
    let ceil = Number(req.params.ceil)
    let num = generateSpread(floor,ceil)
    res.json({
        status: "success",
        range: [floor,ceil],
        numPicker: num
    })
    next()
}
const generateSpread = (floor,ceil)=>{
    let arr = []
    for(let i=floor; floor<ceil; i++){
        arr.push(i)
        floor++

    }
}



app.use("/animal/:animalid",isAnimal)

app.get("/animal",(req,res)=>{
res.json(animalObject)
})

app.get("/animal/:animalid",(req,res)=>{
    res.json("true")
    })





app.listen(port,()=>{
console.log("listening to",port)
})

