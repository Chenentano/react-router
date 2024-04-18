import {Link} from "react-router-dom";

export default function Navigation() {
    return <>
    <nav>
        <Link to={'/'}>Home</Link><br/>
        <Link to={'blog'}>Blog</Link><br/>
        <Link to={'contact'}>Kontakte</Link><br/>
    </nav>
        </>
}