import { useEffect, useState } from "react";
import { CatModel } from "../../../MODELS/CATSMODEL";
import "./CatCard.css";
import axios from "axios";
import notifyService from "../../../Services/NOTIFICATIONS";
import Card from "./Card/Card";

function CatCard(): JSX.Element {

    const url = "https://raw.githubusercontent.com/KobiShashs/CATS-JSON/main/cats.json";
    const [cats, setCats] = useState<CatModel[]>([]);
    const [filterCats, setFilterCats]= useState<string> (``);

    useEffect(() => {
        axios.get<CatModel[]>(url)
            .then(res =>{ setCats(res.data); notifyService.success('list of cats');})
            .catch(err =>{ console.log('Oppsy'); notifyService.error('something went wrong')});
    }, []);
    return (
        <div className="CatCard">
            <h2> Cats cards</h2>
            <label>
    search by name or birthday:
<input type="search" 
          onChange={event => setFilterCats(event.target.value.toLowerCase())}></input>
          </label> 

            <div className="displayList">
                {
                    cats.filter(f => f.name.toLowerCase().includes(filterCats)
                     || f.birthday.toLowerCase().includes(filterCats) || filterCats === '').map(c =>
                        <Card key={'cat ' + c.id} cat={c} />
                    )

                }
            </div>

			
        </div>
    );
}

export default CatCard;
