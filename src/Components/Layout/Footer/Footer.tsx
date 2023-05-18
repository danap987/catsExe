import "./Footer.css";
import { AiFillTwitterCircle, AiFillYoutube, AiFillFacebook} from "react-icons/ai";

function Footer(): JSX.Element {
    return (
        <div className="Footer center">
			<p>Stay in touch </p>
         <a href="https://twitter.com"> <AiFillTwitterCircle size="40px"/></a>
           <a href="https://www.youtube.com/watch?v=udr2rx_B99w"> <AiFillYoutube size="40px"/></a>
         <a href="https://mbasic.facebook.com">  <AiFillFacebook size="40px"/> </a> 

        </div>
    );
}

export default Footer;
