import styles from "./Button.module.scss"

export default function Button({text, btnClass, func}: { text: string, btnClass: string, func: () => void }) {
    return (
        <button className={`${styles.button} ${styles[btnClass]}`} onClick={func}>
            {text}
        </button>
    )
}