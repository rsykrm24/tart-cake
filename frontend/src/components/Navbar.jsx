import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar(props) {
  return(
    <div className="flex justify-between items-center p-4 bg-orange-300 text-white fixed w-full top-0">
      <a href="#" className="text-2xl font-bold">TartCake</a>
      <div className="flex gap-3">
        <button onClick={props.cart}><ShoppingCartIcon/></button>
        <button onClick={props.menu}><MenuIcon/></button>
      </div>
    </div>
    )
}

//import MenuOpenIcon from '@mui/icons-material/MenuOpen';