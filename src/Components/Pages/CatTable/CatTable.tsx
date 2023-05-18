import { useEffect, useState } from "react";
import { CatModel } from "../../../MODELS/CATSMODEL";
import "./CatTable.css";
import notifyService from "../../../Services/NOTIFICATIONS";
import axios from "axios";


function CatTable(): JSX.Element {
    const url = "https://raw.githubusercontent.com/KobiShashs/CATS-JSON/main/cats.json";
    const [cats, setCats] = useState<CatModel[]>([]);
    const [filterCats, setFilterCats]= useState<string> (``);

    useEffect(() => {
        axios.get<CatModel[]>(url)
            .then(res =>{ setCats(res.data); notifyService.success('list of cats');})
            .catch(err =>{ console.log('Oppsy'); notifyService.error('something went wrong')});
    }, []);
    const header = ['Name', 'ID', 'Color', 'Weight','Birthday', 'Image'];
    return (
        <div className="CatTable displayList center">
            <div className="row">
<label className="row"> select by name:</label>
            <select name="selectedName" defaultValue="All "  
          onChange={event => setFilterCats(event.target.value)}>
            <option>All</option>
            {cats.map(c =><option key={'cat ' + c.id} >{c.name}</option>) }

          </select>

          </div>
			<table>
                <thead>
                    <tr>
                        {header.map(h => <th key={h}>{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {cats.filter(f => f.name.includes(filterCats)
                     || f.birthday.includes(filterCats) || filterCats === 'All').map(c => 
                    <tr key={c.name}>
                       { (c.name)?<td>{c.name}</td>: <td>N/A</td>}
                       { (c.id)?<td>{c.id}</td>: <td>N/A</td>}
                       { (c.color)?<td>{c.color}</td>: <td>N/A</td>}
                       { (c.weight)?<td>{c.weight}</td>: <td>N/A</td>}
                       { (c.birthday)?<td>{c.birthday}</td>: <td>N/A</td>}
                        <td>
                            <img src={c.image} alt={`no picture avaliable`} />
                        </td>
                    </tr>
                    )

                    }
                </tbody>
            </table>
        </div>
    );
}

export default CatTable;
