
import styles from './ScoreBoard.module.css';

export const ScoreBoard=(props)=>{
    
    return (
        <div className={styles.main}>
            <div className={styles.player}>
                <h3 className={styles.title}>Player 1 Score</h3>
                <div className={styles.line}></div>
                <p className={styles.score}>{props.player1Score}</p>
            </div>
            <div className={styles.horizantalLine}/>
            <div className={styles.player}>
                <h3 className={styles.title}>Player 2 Score</h3>
                <div className={styles.line}></div>
                <p className={styles.score}>{props.player2Score}</p>
            </div>
        </div>
    );
}