export default function Contact() {
  return (
    <div className="flex flex-col items-center mt-5" id="contact">
      <h1 className="text-2xl text-orange-300 font-bold text-center">Contact</h1>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <form className="flex flex-col items-center gap-3 mt-2">
        <input className="border-2 border-orange-300 px-2 rounded py-1" type="text" placeholder="Nama" />
        <input className="border-2 border-orange-300 px-2 rounded py-1" type="email" placeholder="Email" />
        <input className="border-2 border-orange-300 px-2 rounded py-1" type="text" placeholder="No telp" />
        <button type="submit" className="bg-orange-300 rounded font-bold w-full text-white py-1">Send</button>
      </form>
    </div>
    )
}