import { Link } from "react-router-dom";
import "./P404.css";

function P404(): JSX.Element {
    return (
        <div className="P404 center">

            <h1>Page is not found</h1>
            <h3>return to <Link to="home" >Home</Link> Page</h3>
			
            <iframe src="https://giphy.com/embed/C21GGDOpKT6Z4VuXyn"
             width="480"
              height="480" 
             
            //   class="giphy-embed" 
              allowFullScreen></iframe>
              {/* <p><a href="https://giphy.com/gifs/spaceshiptw-404-spaceshiphk-spaceship404-C21GGDOpKT6Z4VuXyn">via GIPHY</a></p> */}

        </div>
    );
}

export default P404;
