import styles from "./Pagination.module.scss"
import {IPagination} from "../../types/types";

export default function Pagination({
                                       changePageNo,
                                       amountOfData,
                                       dataPerPage,
                                       currentPage
                                   }: IPagination) {


    let numbers = [];
    for (let i = 1; i <= Math.ceil(amountOfData / dataPerPage); i++) {
        numbers.push(i);
    }

    return (
        <div className={styles.pagination}>
            {numbers && numbers.map((no) => {
                return (
                    <button
                        key={no}
                        onClick={() => {
                            changePageNo(no);
                        }}
                        className={no === currentPage ? `${styles.btn} ${styles["btn__active"]}` : `${styles.btn}`}
                    >{no}
                    </button>
                )
            })}
        </div>
    );
}
