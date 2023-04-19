import { Link } from "react-router-dom";
import allbeers from '../img/christin-hume-08tX2fsuSLg-unsplash.jpg'
import randombeers from '../img/proriat-hospitality-flENqflm6xU-unsplash.jpg'

const BeerOverview = (props) => {
    return (
        <section className="main_container_overview">
            <article >
                <div className="container_overview">
                    <Link to='/beerlist'><img src={allbeers} />
                        <h2>All Beers</h2>
                    </Link>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </article>

            <article>
                <div className="container_overview">
                    <Link to='/randombeer'><img src={randombeers} />
                        <h2>Random Beers</h2>
                    </Link >
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            </article>
        </section>
    );
}

export default BeerOverview;