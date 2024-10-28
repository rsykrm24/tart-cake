export default function Sidebar(props) {
  return(
    <div className={`fixed w-3/4 top-16 bg-orange-300 text-xl font-bold text-white p-3 duration-500 h-[93vh] flex flex-col gap-4 ${props.side}`}>
    <a href="#about">About</a>
    <a href="#gallery">Gallery</a>
    <a href="#menu">Menu</a>
    <a href="#contact">Contact</a>
    </div>
    )
}