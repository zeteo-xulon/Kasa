import { useState } from "react"
import chevron from '../../assets/chevron.svg';

export default function Gallery (props:{ gallery: string[] }){
    const [currentIndex, setCurrentIndex] = useState(0);
    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.gallery.length - 1 : prevIndex - 1));
    };
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === props.gallery.length - 1 ? 0 : prevIndex + 1));
    };
  
    if (props.gallery.length <= 1) return <img src={props.gallery[0]} alt={`Slide ${currentIndex + 1}`} />;
    
    const galleryHTML = <>
        <img src={chevron} className="chevron-left" alt="flèche de gauche" onClick={goToPrevious} /> 
        <img src={chevron} className="chevron-right" alt="flèche de droit" onClick={goToNext} /> 
        <span className="gallery-counter"> {currentIndex + 1}/{props.gallery.length} </span>
    </>

    return (
      <div className="gallery">
        { props.gallery.map((im, index)=> ( 
            <img 
            src={props.gallery[currentIndex]} 
            className={`gallery-image${currentIndex === index ? " active" : ""} `} 
            alt={`Slide ${index + 1}`} /> 
        ))}
        { props.gallery.length > 0 ? galleryHTML  : "" }
      </div>
    );
  }