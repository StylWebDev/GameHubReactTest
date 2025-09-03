import {useParams} from "react-router";
import {useLoaderData} from "react-router";

export function Component() {
    const {id} = useParams();

    return (
        <>
            {'This is Game Component'}
        </>
    )
}