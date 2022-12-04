import styles from "./ConvertFrom.module.scss";

function ConvertFrom({ symbols, handleChangeFrom, handleChangeAmount }) {
  return (
    <div className={styles.convertForm}>
      <h3>
        From:
        <select
          defaultValue={"USD"}
          onChange={(event) => handleChangeFrom(event.target.value)}
        >
          {symbols.map((symbol, index) => {
            return <option key={index}>{symbol}</option>;
          })}
        </select>
      </h3>
      <input
        type="text"
        onChange={(event) => handleChangeAmount(event.target.value)}
      />
    </div>
  );
}

export default ConvertFrom;
