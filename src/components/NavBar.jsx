
import { Link } from "react-router-dom"
export default function NavBar(){
    return(
        <>
        <ul>
            <li>
                <Link to="/">Main Page</Link>
            </li>
            <li>
                <Link to="/nails/new" className="">Add New Set</Link>
            </li>
        </ul>
        </>
    )

}