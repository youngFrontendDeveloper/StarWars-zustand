import {Link} from "react-router-dom";
import * as React from "react";
import {IPerson,} from "../../types/types";

export default function PersonCard({person}: { person: IPerson }) {

    return (
        <li key={person.name}>
            <Link
                to={`/people/${person.name}`}
                state={{person: person}}
            >
                {person.name}
            </Link>
        </li>
    )
}