import { useEffect, useState } from "react"
import BeerItem from "./BeerItem";
import FooterBar from "./FooterBar";


const BeerList = () => {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers`
        )
            .then(res => res.json())
            .then(json => {
                setBeers(json)
            })
    })

    console.log(beers)

    return (
        <section className="body_beerlist">
            <article className="container_beers">
                {beers.map((elt, i) => {
                    return (
                        <div>
                            <BeerItem
                                key={i}
                                image={elt.image_url}
                                name={elt.name}
                                producer={elt.contributed_by}
                                tagline={elt.tagline}
                                id={elt._id}
                                allbeers={elt}
                            />
                            <hr />
                        </div>
                    )
                })}


            </article>
            <FooterBar />
        </section>

    );
}

export default BeerList;