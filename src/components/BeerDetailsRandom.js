import { useEffect, useState } from "react"
import Pfeil from '../img/Back.png'
import { Link } from "react-router-dom";
import FooterBar from "./FooterBar";

const BeerDetailsRandom = () => {

    const [beers, setBeers] = useState("");

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/random`
        )
            .then(res => res.json())
            .then(json => {
                setBeers(json)
            })
    }, [])

    console.log(beers)


    return (
        <section className="detailsite">
            <article className="container_detailsite">
                <div>
                    <img src={beers.image_url} alt="" />
                </div>
                <div>
                    <h2>{beers.name}</h2>
                    <h3>{beers.tagline}</h3>
                    <p>first brewed:{beers.first_brewed}</p>
                    <p>Attenuation level:{beers.attenuation_level
                    }</p>
                    <p>{beers.description}</p>
                    <Link to={`/beerlist`} className="backPfeil"><img src={Pfeil} ></img></Link>
                </div>
            </article >
            <FooterBar />
        </section>
    );
}

export default BeerDetailsRandom;