import { Link } from "react-router-dom";

const BeerItem = (props) => {
    return (
        <div className="container_singleproduct">

            <div className="image_container">
                <img src={props.image} className="product_items"></img>
            </div>
            <div className="text_items_container">
                <h2>{props.name}</h2>
                <h3>{props.tagline}</h3>
                <p className="last_p">{props.producer}</p>
                <Link to={`/${props.id}`} state={props.allbeers} className="button_product">Details</Link>
            </div>

        </div>
    );
}

export default BeerItem;