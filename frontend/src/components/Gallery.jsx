import GalleryList from "./GalleryList.jsx"

export default function Gallery() {
  return (
    <div className="pt-16" id="gallery">
      <h1 className="text-center text-2xl text-orange-300 font-bold">Gallery</h1>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <div className="mt-2 flex flex-col gap-3 items-center">
        <GalleryList list={1}/>
        <GalleryList list={2}/>
        <GalleryList list={3}/>
      </div>
    </div>
    )
}