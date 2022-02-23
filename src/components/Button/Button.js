import styles from './Button.module.scss';

const Button = ({changeInterval, setTime} ) => {
    return (
      <div>
        <button className={styles.button} onClick={() => changeInterval(true)}>Start</button>
        <button className={styles.button} onClick={() => changeInterval(false)}>Stop</button>
        <button className={styles.button} onClick={() => setTime(0)}>Reset</button>
      </div>
    );
}

export default Button;
