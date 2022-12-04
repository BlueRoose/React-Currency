import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ConvertFrom from "../../components/ConvertFrom/ConvertFrom";
import ConvertTo from "../../components/ConvertTo/ConvertTo";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./ConvertPage.module.scss";
import { convertRates, getRates } from "../../api/rates";

function ConvertPage() {
  const [date, setDate] = useState("");
  const [symbols, setSymbols] = useState([]);
  const [params, setParams] = useState({});
  const [result, setResult] = useState();

  useEffect(() => {
    getRates().then((items) => {
      setSymbols(Object.keys(items?.rates));
      setDate(items?.date.split("-").reverse().join("."));
    });
  }, [setSymbols, setDate]);

  const handleChangeFrom = (event) => {
    setParams({ ...params, from: event });
  };

  const handleChangeTo = (event) => {
    setParams({ ...params, to: event });
  };

  const handleChangeAmount = (event) => {
    setParams({ ...params, amount: event });
  };

  const handleClick = () => {
    convertRates(params["from"], params["to"], params["amount"]).then(
      (responce) => {
        setResult(responce.result);
      }
    );
  };

  return (
    <Wrapper>
      <header className={styles.header}>
        <Link to="/exchangepage">
          <img
            src="img/back.png"
            width={32}
            height={32}
            alt="back"
            className={styles.back}
          />
        </Link>
        <h3>Converter</h3>
        <img
          src="img/sticker.png"
          width={32}
          height={32}
          alt="12devs"
          className={styles.reset}
        />
      </header>
      <div className={styles.main}>
        <div className={styles.forms}>
          <ConvertFrom
            symbols={symbols}
            handleChangeFrom={handleChangeFrom}
            handleChangeAmount={handleChangeAmount}
          />
          <img
            width={96}
            height={96}
            src="img/arrows.png"
            alt="arrows"
            onClick={handleClick}
          />
          <ConvertTo
            symbols={symbols}
            handleChangeTo={handleChangeTo}
            result={result}
          />
        </div>
        <div className={styles.text}>
          <h3>Курсы валют актуальны на {date}</h3>
          <img className={styles.logo} src="img/logo.jpg" alt="logo" />
        </div>
      </div>
    </Wrapper>
  );
}

export default ConvertPage;
