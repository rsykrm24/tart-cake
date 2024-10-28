import image from "../assets/OIP.jpeg"

export default function List(props) {
  return (
    <div className="border-2 border-orange-300 w-1/2 rounded scroll-smooth">
      <img src={image} className="rounded"/>
      <h1 className="text-center">Kue tart {props.kue}</h1>
      <p className="text-center">Rp {props.price}</p>
      <div className="flex justify-around">
        <button className="text-orange-300 text-lg" onClick={props.minus}>-</button>
        <p>{props.quantity}</p>
        <button className="text-orange-300 text-lg" onClick={props.plus}>+</button>
      </div>
    </div>
    )
}