import { Link, useLocation } from "react-router-dom";
import Pfeil from '../img/Back.svg'
import FooterBar from "./FooterBar";

const BeerDetails = () => {

    const location = useLocation()
    console.log(location)

    return (
        <section className="detailsite">
            <article className="container_detailsite">
                <div>
                    <img src={location.state.image_url} alt="" />
                </div>
                <div>
                    <h2>{location.state.name}</h2>
                    <h3>{location.state.tagline}</h3>
                    <p>first brewed:{location.state.first_brewed}</p>
                    <p>Attenuation level:{location.state.attenuation_level
                    }</p>
                    <p>{location.state.description}</p>
                    <Link to={`/beerlist`} className="backPfeil"><img src={Pfeil} ></img></Link>
                </div>
            </article >
            <FooterBar />
        </section>
    );
}

export default BeerDetails
