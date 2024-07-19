import styles from "./ErrorLable.module.scss"

interface Props {
    value:string;
}

const ErrorLable = (props:Props) => {
    return(
        <span className={styles.errorContainer}>{props.value}</span>
    )
}

export default ErrorLable