import styles from "./FoundedResult.module.scss";
import {Link} from "react-router-dom";
import {usePeopleStore} from "../../store/store";

export default function FoundedResult({nothingFound}: { nothingFound: boolean }) {
    const {foundedPersons} = usePeopleStore();

    return (
        <div className={styles["search-result"]}>
            <h3>Результаты поиска:</h3>
            {
                foundedPersons.length > 0 ? (
                    <ol>
                        {
                            foundedPersons.map(item => {
                                return (

                                    <li key={`search-${item.name}`} className={styles["search-result__item"]}>
                                        <Link
                                            to={`/people/${item.name}`}
                                            state={{person: item}}
                                            className={styles["search-result__link"]}
                                        >
                                            {item.name}
                                        </Link>
                                    </li>

                                );
                            })
                        }
                    </ol>
                ) : <p>По Вашему запросу ничего не найдено</p>
                // ) : nothingFound && <p>По Вашему запросу ничего не найдено</p>
            }
        </div>
    );
}