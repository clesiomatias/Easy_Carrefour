import axios from "axios";

const apiValidaCep = axios.create({
  baseURL: "https://viacep.com.br/ws",
});
const apiBuscaLoja = axios.create({
  baseURL: " https://easy-carrefour-api.herokuapp.com/",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/json;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
  },
});

export { apiValidaCep, apiBuscaLoja };
