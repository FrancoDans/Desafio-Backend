const express = require ("express");
const { fstat } = require("fs");
let arr = require("./prod")

const { Router } = express;

const router = new Router();

//GET
router.get("/productos", (req, res)=>{
        fs.readFile(arr, "utf-8", (err, data) => {
         if(err){
        throw "error al leer"
    }
        res.send(data);
        })
       
    })

//POST
    app.post("/productos", (req, res)=> {
        
     let obj = {
            name: req.body.name,
            lastName: req.body.lastName,
            id: 6,
        };
        
          arr.push(obj);
    
        res.send(obj)
    })

 //PUT

app.put("/productos/:id", (req, res)=>{
    let index= arr.findIndex( x => {
        return x.id == req.params.id
    })

    arr[index].producto = req.body.producto
    arr[index].precio = req.body.precio
    
        res.send("El producto de actualizo correctamente")
})


//DELETE

app.delete("/productos/:id", (req,res)=>{
    let newArr = arr.filter(x =>{
        return x.id != req.params.id

    })

    arr = newArr
})
module.exports = router