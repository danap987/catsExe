import moment from "moment";
import { CatModel } from "../../../../MODELS/CATSMODEL";
import "./Card.css";

interface CatProps {
    cat: CatModel;
}

function Card(props: CatProps): JSX.Element {
    return (
        <div className="Card box">
           {props.cat.id && <p>ID: {props.cat.id}</p>}
           { props.cat.name && <p>Name: {props.cat.name}</p>}
           {props.cat.color && <p>Color: {props.cat.color}</p>}
           {props.cat.weight && <p>Weight: {props.cat.weight}</p>}
           {props.cat.birthday && <p>Birthday:{moment( props.cat.birthday).format('DD/MM/YY')}</p>}
           {props.cat.image && <img src= {props.cat.image} alt= {props.cat.name}/>}

        </div>
    );
}

export default Card;
