import styles from "./People.module.scss"
import React, {useCallback, useEffect, useState} from "react";
import {usePeopleStore} from "../../store/store";
import Loading from "../Loading/Loading";
import PersonCard from "../PersonCard/PersonCard";
import SearchForm from "../SearchForm/SearchForm";
import ReactPaginate from 'react-paginate';

export default function People() {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const [currentPage, setCurrentPage] = useState(0);
    const [dataPerPage] = useState(10);
    const {people, fetchPeople, count, isLoading, errors} = usePeopleStore();

    console.log(currentPage)
    console.log(people)

    const totalPages = Math.ceil(count / dataPerPage)

    const changePage = ({selected}: { selected: number }) => {
        setCurrentPage(selected);
    };

    useEffect(() => {

        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener("resize", handleWindowResize)

        return () => {
            window.removeEventListener("resize", handleWindowResize)
        }
    }, [windowSize])

    function getWindowSize() {
        const {innerWidth} = window;
        return {innerWidth};
    }

    useEffect(() => {
        fetchPeople(currentPage + 1)
    }, [fetchPeople, currentPage])

    return (
        <>
            <section className={styles.people}>
                <h1 className={`title ${styles["people__title"]}`}>Список персон из "Звездных войн"</h1>
                <SearchForm />
                {
                    isLoading ? (<Loading />) :
                        // errors ? (<p>Errors: {errors}</p>) :

                        <ul className={styles["people__list"]}>
                            {
                                people && people.map(person => {
                                    return (
                                        <PersonCard person={person} key={person.name} />
                                    )
                                })

                            }
                        </ul>

                }
            </section>
            <ReactPaginate
                breakLabel="..."
                marginPagesDisplayed={windowSize.innerWidth >= 768 ? 4 : 2}
                previousLabel={"<"}
                nextLabel={">"}
                pageCount={totalPages}
                onPageChange={changePage}
                renderOnZeroPageCount={null}
                containerClassName={styles.navigationButtons}
                previousLinkClassName={styles.previousButton}
                nextLinkClassName={styles.nextButton}
                disabledClassName={styles.navigationDisabled}
                activeClassName={styles.navigationActive}
            />
        </>
    )
}