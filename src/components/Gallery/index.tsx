import { useState } from "react"
import chevron from '../../assets/chevron.svg';

export default function Gallery (props:{ gallery: string[] }){
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => { setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.gallery.length - 1 : prevIndex - 1)) };
    const goToNext = () => { setCurrentIndex((prevIndex) => (prevIndex === props.gallery.length - 1 ? 0 : prevIndex + 1)) };
    

    const galleryHTML = <>
        <img src={chevron} className="chevron-left" alt="flèche de gauche" onClick={goToPrevious} /> 
        <img src={chevron} className="chevron-right" alt="flèche de droit" onClick={goToNext} /> 
        <span className="gallery-counter"> {currentIndex + 1}/{props.gallery.length} </span>
    </>;

    return (
      <div className="gallery">

        { props.gallery.map((a, index)=> ( 
            <img
            key={"lodging-pic"+index}
            src={props.gallery[index]} 
            className={`gallery-image${ currentIndex === index ? " active" : "" } `} 
            alt={`Slide ${index + 1}`} /> 
        ))}

        { props.gallery.length > 1 ? galleryHTML  : "" }

      </div>
    )
  }