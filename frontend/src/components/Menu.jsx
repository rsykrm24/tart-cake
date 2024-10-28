import List from "./List.jsx"
import { useState } from "react"

export default function Menu(props) {
  return(
    <div id="menu">
      <h1 className="text-2xl text-orange-300 text-center pt-16 font-bold">Menu</h1>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
      <div className="flex flex-col mt-5 gap-4 items-center">
        <List kue={1} price={125000} plus={props.plusSatu} minus={props.minusSatu} quantity={props.quantitySatu} />
        <List kue={2} price={150000} plus={props.plusDua} minus={props.minusDua} quantity={props.quantityDua}/>
        <List kue={3} price={175000} plus={props.plusTiga} minus={props.minusTiga} quantity={props.quantityTiga}/>
      </div>
    </div>
    )
}