import styles from './Button.module.css';
export const Button = (props) => {
    return (
        <button className={styles.btn} type={props.type} onClick={props.onClick}>
            {props.text}
        </button>
    );
};
 