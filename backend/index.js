import express from "express"
import cors from "cors"
import "dotenv/config"
import payment from "./payment/route.js"

let app = express()
app.use(cors())
app.use(express.json())
let port = process.env.PORT

app.use(payment)

app.use("*",(req,res) => {
  res.status(404).json({status:404,message:"Invalid Endpoint"})
})

app.listen(port,() => console.log(`Server is running on port ${port}`))