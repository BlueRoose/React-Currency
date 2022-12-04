import styles from "./ConvertTo.module.scss";

function ConvertTo({ symbols, handleChangeTo, result }) {
  return (
    <div className={styles.convertForm}>
      <h3>
        To:
        <select
          defaultValue={"USD"}
          onChange={(event) => handleChangeTo(event.target.value)}
        >
          {symbols.map((symbol, index) => {
            return <option key={index}>{symbol}</option>;
          })}
        </select>
      </h3>
      <input type="text" readOnly defaultValue={result} />
    </div>
  );
}

export default ConvertTo;
