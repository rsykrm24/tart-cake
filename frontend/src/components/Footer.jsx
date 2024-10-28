import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <div className="bg-orange-300 text-white mt-5 p-3">
      <ul className="flex justify-around">
        <li><a href="https://facebook.com"><FacebookIcon/></a></li>
        <li><a href="https://instagram.com"><InstagramIcon/></a></li>
        <li><a href="https://x.com"><XIcon/></a></li>
      </ul>
      <div className="mt-3">
        <p className="font-bold text-sm">Created by hehe</p>
      </div>
    </div>
    )
}