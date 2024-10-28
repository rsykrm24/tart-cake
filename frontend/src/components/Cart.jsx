import CartList from "./CartList.jsx"

export default function Cart(props) {
  return(
    <div className={`h-[90vh] rounded w-[92vw] fixed bg-orange-300 ${props.cart} border-2 border-orange-400 left-3 duration-500 p-3 flex flex-col justify-between`}>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Cart</h1>
          <button onClick={props.close} className="text-white font-bold text-2xl">X</button>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {props.list}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-2xl text-white">Rp {props.amount}</h1>
        <button className="rounded bg-white w-full text-orange-300 font-bold py-1" onClick={props.submit}>Submit</button>
      </div>
    </div>
    )
}

