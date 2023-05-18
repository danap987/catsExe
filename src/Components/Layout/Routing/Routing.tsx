import { Route, Routes } from "react-router-dom";
import CatCard from "../../Pages/CatCard/CatCard";
import "./Routing.css";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import CatTable from "../../Pages/CatTable/CatTable";
import P404 from "../../Pages/P404/P404";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<div className="Routing">
						<Routes>
                <Route path="/" element={<App/>}/>
                <Route path="home" element={<Home />}/>
                <Route index element={<Home />}/>
                <Route path="catCard" element={<CatCard/>}/>
                <Route path="catTable" element={<CatTable/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="*" element={<P404/>}/>
            </Routes>
        </div>
        </div>
    );
}

export default Routing;
