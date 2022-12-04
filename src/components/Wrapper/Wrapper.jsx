import styles from "./Wrapper.module.scss";

function Wrapper({ children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>{children}</div>
    </div>
  );
}

export default Wrapper;
