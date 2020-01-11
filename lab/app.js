const express = require("express")
const cors = require("cors")
const port = 3000
const app = express()
app.use(cors())

const animalObject = ["zebra","lion" ,"dog"]




const isAnimal =(req,res,next)=>{
        if(animalObject.includes(req.params.animalid)){ 
            console.log("test")
   }else{
        res.json("false")
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

