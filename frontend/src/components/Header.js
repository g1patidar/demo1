
import { Link } from "react-router-dom";
import emailicon from "../public/images/emailicon.png"
import { FaRegHeart   } from "react-icons/fa";
const Header=()=>{

    return(
        <>
            <div className="mainnavbar">
                <div className="uppernavbar">
                   <div className="emailicon"> <img height="10px" width="10px" src={emailicon}/></div>
                </div>
                <div className="lowernavbar">
                    <FaRegHeart />
                    <Link to="">
                        <span><img src={<emailicon/>}/> <span>email.com</span></span>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}

export default Header;