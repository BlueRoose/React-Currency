import { request } from "./createRequest";

export const getRates = async (base = "AED") => {
  const result = await request({
    url: `https://api.exchangerate.host/latest?base=${base}`,
  });

  return result;
};

export const convertRates = async (from = "USD", to = "USD", amount) => {
  const result = await request({
    url: `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`,
  });

  return result;
};
