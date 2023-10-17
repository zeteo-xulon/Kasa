import { useState, useEffect } from "react";


export default function Products(){
    const [products, setProducts] = useState([]);
    let [ready, setReady] = useState<number>(0)

    useEffect(()=>{
        fetch('./src/server/logements.json')
        .then((res) =>  res.json())
        .then((data => setProducts(data)))
        .catch(err => console.log(err))

    },[])

    useEffect(()=>{
        setReady++
    }, [products])

    return (
        <main className="main">
            
        </main>
    )
}