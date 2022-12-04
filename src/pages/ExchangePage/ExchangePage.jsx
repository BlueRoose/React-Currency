import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import Wrapper from "../../components/Wrapper/Wrapper";
import styles from "./ExchangePage.module.scss";
import { getRates } from "../../api/rates";

function ExchangePage() {
  const [base, setBase] = useState("USD");
  const [symbols, setSymbols] = useState([]);
  const [rates, setRates] = useState({});
  const [favoritedRates, setFavoritedRates] = useState([]);

  useEffect(() => {
    getRates(base).then((items) => {
      setSymbols(Object.keys(items?.rates));
      setRates(items?.rates);
    });
  }, [setSymbols, setRates, base]);

  const handleChangeForm = (event) => {
    setBase(event.target.value);
  };

  const addToFavorited = (symbol) => {
    if (favoritedRates.find((item) => item === symbol)) {
      setFavoritedRates((prev) => prev.filter((item) => item !== symbol));
      setSymbols([...symbols, symbol].sort());
    } else {
      setFavoritedRates([...favoritedRates, symbol].sort());
      setSymbols((prev) => prev.filter((item) => item !== symbol));
    }
  };

  return (
    <Wrapper>
      <header className={styles.header}>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to="/convertpage"
        >
          <pre>Converter</pre>
        </Link>
        <h3>Current exchange rates</h3>
        <div className={styles.base}>
          <p>Base exchange rate:</p>
          <select
            value={"USD"}
            name="currencySelect"
            onChange={(event) => handleChangeForm(event)}
          >
            {symbols.map((symbol, index) => {
              return <option key={index}>{symbol}</option>;
            })}
          </select>
        </div>
      </header>
      <div className={styles.main}>
        <div className={styles.rates}>
          {favoritedRates.map((symbol, index) => {
            return (
              <Card
                key={index}
                base={base}
                symbol={symbol}
                rates={rates}
                addToFavorited={addToFavorited}
                onFavorites={true}
              />
            );
          })}
          {symbols.map((symbol, index) => {
            return (
              <Card
                key={index}
                base={base}
                symbol={symbol}
                rates={rates}
                addToFavorited={addToFavorited}
                onFavorites={false}
              />
            );
          })}
        </div>
        <div className={styles.info}>
          <img width={590} src="img/logo.jpg" alt="logo" />
        </div>
      </div>
    </Wrapper>
  );
}

export default ExchangePage;
