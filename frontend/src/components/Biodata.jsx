import { useState } from "react"

export default function Biodata(props) {
  let [open, setOpen] = useState("top-4")
  return(
    <div className={`h-[90vh] rounded w-[92vw] fixed bg-orange-300 ${open} border-2 border-orange-400 left-3 duration-500 p-3`}>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Biodata</h1>
        <button onClick={() => setOpen("top-[-1050px]")} className="text-white font-bold text-2xl">X</button>
      </div>
      <form className="mt-5 flex flex-col gap-4" onSubmit={props.submit}>
        <input type="text" placeholder="Nama" className="rounded border-2 border-white bg-orange-300 px-3 py-1 text-white" value={props.name} onChange={props.changeName}/>
        <input type="text" placeholder="Phone" className="rounded border-2 border-white bg-orange-300 px-3 py-1 text-white" value={props.phone} onChange={props.changePhone}/>
        <button type="submit" className="rounded text-orange-300 bg-white px-3 py-1 font-bold">Lanjutkan Pembayaran </button>
      </form>
    </div>
    )
}

