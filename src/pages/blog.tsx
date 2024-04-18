import {Link} from "react-router-dom";

export default function Blog(){
    return<>
        <h1>Mein Blog!</h1>
        <Link to={"/blog/12345"}>Blog Entry 1</Link><br/>
        <Link to={"/blog/12345678"}>Blog Entry 2</Link>
        </>
}