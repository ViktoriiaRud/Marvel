import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link, NavLink } from "react-router-dom";


const Page404 = () => {

    return (
        <div>
            <ErrorMessage/>

            <p>Page exist</p>
           <Link to="/">Back to main page</Link>
        </div>
    )
        
    
}


export default Page404; 

