const express = require ("express");
const app = express();

const port = 3003;

const productosRoutes = require("./arr");

app.use(express.json());
app.use("/api",productosRoutes);






app.listen(port, ()=>{
    console.log("server run on port " + port) ;
})
