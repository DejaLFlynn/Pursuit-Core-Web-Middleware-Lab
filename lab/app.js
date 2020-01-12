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

