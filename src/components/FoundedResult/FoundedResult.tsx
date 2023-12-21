import styles from "./FoundedResult.module.scss";
import {Link} from "react-router-dom";
import {usePeopleStore} from "../../store/store";
import Loading from "../Loading/Loading";

export default function FoundedResult() {
    const {foundedPersons, isSearchLoading, searchErrors} = usePeopleStore();

    return (
        <section className={styles["search-result"]}>
            <h3 className={`${styles["search-result__title"]} subtitle`}>Результаты поиска:</h3>
            {
                isSearchLoading ? (<Loading />) :
                    searchErrors ? (<p>Errors: {searchErrors}</p>) :
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
            }
        </section>
    );
}