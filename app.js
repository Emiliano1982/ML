const express = require ("express")
const path = require ("path")
const app = express()
const port = 3030

app.use(express.static(path.join(__dirname,"public")))
/*app.use(express.static(path.resolve(__dirname,"public")))*/
app.get("/",(req,res) => res.sendFile(path.resolve(__dirname,"views","home.html")))

/*app.get("/",(req,res) => res.sendFile(path.join(__dirname,"views","index.html")))*/

app.listen(port,() => console.log(`El servidor fue levantado con exito el dia Miercoles a las 15:00hs en http://localhost:${port}`))