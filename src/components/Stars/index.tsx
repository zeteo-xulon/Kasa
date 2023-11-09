import { useState, useEffect } from 'react';
import starFull from '../../assets/star_full.svg';
import starEmpty from '../../assets/star_empty.svg';

export default function Stars (props : {rating: number}){
    const [starNumber, setStarNumber] = useState(0);

    useEffect(()=> { setStarNumber(props.rating) }, [props.rating])

    return(
        <div className="lodging-stars">
        {
            (()=> { 
                const stars = [];
                for(let i = 0; i < 5; i++){
                    stars.push(
                    <img
                    key={"star " + i}
                    src={i < Number(starNumber) ? starFull : starEmpty}
                    className="star"
                    alt={i < Number(starNumber) ? "étoile pleine" : "étoile vide"}
                  />
                  );
                }
                return stars;
            })()
        }
    </div>
    )
}