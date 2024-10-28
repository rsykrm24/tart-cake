import image from "../assets/OIP.jpeg"

export default function CartList(props) {
  return(
    <div className="flex gap-3 items-center text-white">
      <img src={image} className="w-2/5 rounded"/>
      <div className="w-full flex flex-col gap-5">
        <p>{props.nama}</p>
        <div className="flex justify-between items-center">
          <p>{props.quantity}</p>
          <p>Rp. {props.price}</p>
        </div>
        <p>Rp. {props.total}</p>
      </div>
    </div>
    )
}