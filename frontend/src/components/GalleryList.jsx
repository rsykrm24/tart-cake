import image from "../assets/OIP.jpeg"

export default function GalleryList(props) {
  return (
    <div className="border-2 border-orange-300 rounded w-2/4 text-center">
      <img src={image} />
      <p>Kue Tart {props.list}</p>
    </div>
    )
}