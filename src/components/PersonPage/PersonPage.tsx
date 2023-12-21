import styles from "./PersonPage.module.scss"
import {Link, useLocation,} from "react-router-dom";

export default function PersonPage() {
    // let navigate = useNavigate()

    const location = useLocation();
    const person = location.state.person

    return (
        <>
            <Link to="/" className={`${styles["person__link"]}`}>Назад к списку персон</Link>

            <section className={styles.person}>

                {/*<button onClick={() => navigate(-1)}>Назад к списку персон</button>*/}
                <h1 className={`subtitle ${styles["person__title"]}`}>{person.name}</h1>

                <ul key={person?.name} className={`${styles["person__list"]}`}>
                    {/*<p className={`${styles["person__item"]}`}>Имя персоны: {person?.name}</p>*/}
                    <li className={`${styles["person__item"]}`}><span className={styles["person__span"]}>Пол:</span> {person?.gender}</li>
                    <li className={`${styles["person__item"]}`}><span className={styles["person__span"]}>Год рождения:</span> {person?.birth_year}</li>
                    <li className={`${styles["person__item"]}`}><span className={styles["person__span"]}>Рост:</span> {person?.height}</li>
                    <li className={`${styles["person__item"]}`}><span className={styles["person__span"]}>Вес:</span> {person?.mass}</li>
                    <li className={`${styles["person__item"]}`}><span className={styles["person__span"]}>Цвет волос:</span> {person?.hair_color}</li>
                    <li className={`${styles["person__item"]}`}><span className={styles["person__span"]}>Цвет глаз:</span> {person?.eye_color}</li>
                    <li className={`${styles["person__item"]}`}><span className={styles["person__span"]}>Цвет кожи:</span> {person?.skin_color}</li>
                    <li className={`${styles["person__item"]}`}><span className={styles["person__span"]}>Родная планета:</span> {person?.homeworld}</li>
                    <li className={`${styles["person__item"]}`}><span className={styles["person__span"]}>Вид:</span> {person?.species}</li>
                    <li className={`${styles["person__item"]}`}><span className={styles["person__span"]}>URL:</span> {person?.url}</li>
                    <li className={`${styles["person__item"]}`}>
                        <ul className={`${styles["person__item"]}`}>
                            <span className={styles["person__span"]}>Фильмы:</span>
                            {
                                person?.films.map((item: string, index: number) => <li
                                    className={`${styles["person__subitem"]}`} key={`film-${index}`}
                                >{item}</li>)
                            }
                        </ul>
                    </li>
                    <li className={`${styles["person__item"]}`}>
                        <ul className={`${styles["person__item"]}`}>
                            <span className={styles["person__span"]}>Транспортные средства:</span>
                            {
                                person?.vehicles.map((item: string, index: number) => <li
                                    className={`${styles["person__subitem"]}`}
                                    key={`vehicles-${index}`}
                                >{item}</li>)
                            }
                        </ul>
                    </li>
                </ul>

            </section>
        </>
    )
}