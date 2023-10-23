import { useState, useEffect } from "react";
import { Logement } from "../../Models/entities";
import Product from "../Product";


export default function Products(){
    const [products, setProducts] = useState<Logement[]>([]);

    useEffect(()=>{
        fetch('./src/server/logements.json')
        .then((res) =>  res.json())
        .then((data => setProducts(data)))
        .catch(err => console.log(err))
    },[])


    return (
        <main className="main">
            {
                products.map((product, index) => ( 
                    <Product key={index} data={product} /> 
                ))
            }

        </main>
    )
}