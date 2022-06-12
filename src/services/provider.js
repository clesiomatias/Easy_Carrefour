import React, { createContext, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiBuscaLoja } from "./api";

export const CepContext = createContext();

export const CepProvider = ({ children }) => {
  const navigate = useNavigate();
  const [dadosCep, setDadosCep] = useState({});
  const [cepValido, setCepValido] = useState();
  const validador = (valor) => {
    setCepValido(valor);
  };
  const dadosEndereco = (dados) => {
    setDadosCep(dados);
    if (cepValido) {
      navigate("/prod");
    }
  };
  return (
    <CepContext.Provider
      value={{
        preenchido: cepValido && !!dadosCep,
        dadosCep,
        cepValido,
        validador,
        dadosEndereco,
      }}
    >
      {children}
    </CepContext.Provider>
  );
};

export const LojasContext = createContext();
export const LojasProvider = ({ children }) => {
  const [lojas, setLojas] = useState({
    loading: false,
    lojas: [],
  });

  const buscaLojas = async (cep) => {
    setLojas((prevstate) => ({
      loading: !prevstate.loading,
    }));
    apiBuscaLoja
      .get(`/${cep}/`)
      .then((response) => response.data)
      .then((data) => {
        setLojas((prevstate) => ({
          ...prevstate,
          lojas: data,
        }));
      })

      .finally(() => {
        setLojas((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const contextValue = {
    lojas,
    buscaLojas: useCallback((cep) => buscaLojas(cep), []),
  };
  return (
    <LojasContext.Provider value={contextValue}>
      {children}
    </LojasContext.Provider>
  );
};
