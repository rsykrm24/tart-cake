import express from "express"
import midtransClient from 'midtrans-client'
import { Parameter } from "../libs/Parameter.js"
import "dotenv/config"

let snap = new midtransClient.Snap({
        isProduction : false,
        serverKey : process.env.SERVER_KEY
  });

let route = express.Router()

route.post("/payment",(req,res) => {
  let auth = req.header("Authorization")
  if(auth !== "hehe") {
    res.status(500).json({status:500,message:"Invalid api key"})
  }
  let { id, amount, name, phone } = req.body
  snap.createTransaction(Parameter(id,amount,name,phone))
    .then((transaction)=>{
        res.status(200).json({status:200,data:transaction,message:"Data berhasil didapatkan"})
    })
    .catch(err => {
       res.status(404).json({status:404,message:"Data gagal didapatkan"})
    })
})

export default route