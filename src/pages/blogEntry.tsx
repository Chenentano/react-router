import {useParams} from "react-router-dom";

export default function BlogEntry(){

    const params = useParams();

    return<>
    <h1>My Blog Entry</h1>
        <p>Der Blog Entry ist: {params.id}</p>
    </>
}