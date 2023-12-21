import styles from "./PersonCard.module.scss"
import {Link} from "react-router-dom";
import * as React from "react";
import {IPerson,} from "../../types/types";
import backgroundImg from "./check-icon.svg"

export default function PersonCard({person}: { person: IPerson }) {
    const listStyle = {
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "15px",
        backgroundPosition: "0 8px"
    }

    return (
        <li
            key={person.name} className={styles["people__item"]}
            style={listStyle}
        >
            <Link
                to={`/people/${person.name}`}
                state={{person: person}}
                className={styles["people__link"]}
            >
                {person.name}
            </Link>
        </li>
    )
}