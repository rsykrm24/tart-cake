import { useState, useEffect } from 'react'
import axios from "axios"
import Navbar from "./components/Navbar.jsx"
import About from "./components/About.jsx"
import Menu from "./components/Menu.jsx"
import Image from "./components/Image.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Footer from "./components/Footer.jsx"
import Gallery from "./components/Gallery.jsx"
import Contact from "./components/Contact.jsx"
import Cart from "./components/Cart.jsx"
import image from "./assets/OIP.jpeg"
import CartList from "./components/CartList.jsx"
import Biodata from "./components/Biodata.jsx"

function App() {
  let [side, setSide] = useState("right-[-1000px]")
  let [cart, setCart] = useState("top-[-1000px]")
  let [quantitySatu, setQuantitySatu] = useState(parseInt(localStorage.getItem('quantitySatu')) || 0)
  let [quantityDua, setQuantityDua] = useState(parseInt(localStorage.getItem('quantityDua')) || 0)
  let [quantityTiga, setQuantityTiga] = useState(parseInt(localStorage.getItem('quantityTiga')) || 0)
  let [name, setName] = useState("")
  let [phone, setPhone] = useState("")
  let [amount,setAmount] = useState(0)
  
  useEffect(() => {
    localStorage.setItem('quantitySatu', quantitySatu)
  }, [quantitySatu])

  useEffect(() => {
    localStorage.setItem('quantityDua', quantityDua)
  }, [quantityDua])

  useEffect(() => {
    localStorage.setItem('quantityTiga', quantityTiga)
  }, [quantityTiga])
  useEffect(() => {
   let totalSatu = parseInt(localStorage.getItem('quantitySatu')) * 125000
   let totalDua = parseInt(localStorage.getItem('quantityDua')) * 150000
   let totalTiga = parseInt(localStorage.getItem('quantityTiga')) * 175000
   setAmount(totalSatu + totalDua + totalTiga)
  },[quantitySatu,quantityDua,quantityTiga])
  let dataCake = [{
    name: "Kue tart 1",
    image: image,
    price: 125000,
    quantity: quantitySatu
  }, {
    name: "Kue tart 2",
    image: image,
    price: 150000,
    quantity: quantityDua
  }, {
    name: "Kue tart 3",
    image: image,
    price: 175000,
    quantity: quantityTiga
  }]
  function cartSlide() {
    if(side == "right-0") {
      setSide("right-[-1000px]")
      setCart("top-4")
    }
    else {
      setCart("top-4")
    }
  }
  function submit(e) {
    e.preventDefault()
    let id = Math.round(Math.random()*60000)
    let dataUser = {
      nama:name, 
      phone:phone, 
      amount:amount, 
      id:id
    }
    axios.post(import.meta.env.VITE_PAYMENT,dataUser,{headers:{Authorization:"hehe"}})
    .then(res => {
      window.location.assign(res.data.data.redirect_url)
      localStorage.removeItem("quantitySatu")
      localStorage.removeItem("quantityDua")
      localStorage.removeItem("quantityTiga")
    })
  }
  return (
    <div className="scroll-smooth">
      <Navbar menu={() => (side == "right-[-1000px]") ? setSide("right-0") : setSide("right-[-1000px]")} cart={() => cartSlide()} />
      <Sidebar side={side}/>
      <Cart cart={cart} close={() => setCart("top-[-1000px]")} list={dataCake.filter(data => data.quantity > 0).map(data => <CartList quantity={data.quantity} price={data.price} nama={data.name} total={data.quantity * data.price}/>)} amount={amount} submit={() => (dataCake.filter(data => data.quantity > 0).length == 0) ? alert("Masukkan barang") : setCart("top-[-1050px]")}/>
      {
        (cart == "top-[-1050px]") ?       <Biodata name={name} changeName={e => setName(e.target.value)} phone={phone} changePhone={e => setPhone(e.target.value)} submit={submit}/> : <div></div>
      }
      <Image />
      <About />
      <Gallery />
      <Menu plusSatu={() => setQuantitySatu(quantitySatu + 1)} minusSatu={() => (quantitySatu == 0) ? setQuantitySatu(0) : setQuantitySatu(quantitySatu - 1)} quantitySatu={quantitySatu} plusDua={() => setQuantityDua(quantityDua + 1)} minusDua={() => (quantityDua == 0) ? setQuantityDua(0) : setQuantityDua(quantityDua - 1)} quantityDua={quantityDua} plusTiga={() => setQuantityTiga(quantityTiga + 1)} minusTiga={() => (quantityTiga == 0) ? setQuantityTiga(0) : setQuantityTiga(quantityTiga - 1)} quantityTiga={quantityTiga}/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App