import React, { useState, useContext, memo } from "react";
import frente from "../../images/frente.png";
import lado from "../../images/lado.png";
import lado2 from "../../images/lado2.png";
import logoCarrefour from "../../images/logo.png";
import { apiValidaCep } from "../../services/api";
import { CepContext } from "../../services/provider";
import { Navigate } from "react-router-dom";

import {
  CaixaDireita,
  CaixaCentro,
  CaixaDeCep,
  CaixaEsquerda,
  LinkLogo,
  Wrapper,
  WrapperCentral,
  Titulo,
  T1,
  T2,
  T3,
  InputCep,
  BtnBusca,
} from "./style";

function HoverCentral() {
  const { validador, dadosEndereco } = useContext(CepContext);
  const [cep, setCep] = useState("");
  const [dados, setDados] = useState({
    erro: null,
    cep: null,
    bairro: null,
    cidade: null,
    uf: null,
  });

  const validaCep = async (e) => {
    let Icep = cep.replace("-", "");
    await apiValidaCep
      .get(`/${Icep}/json`)
      .then((response) => response)
      .then((data) => {
        if (data.data.erro) {
          alert("cep invalido");
          return <Navigate to={"/"} />;
        } else {
          setDados({
            cep: data.data.cep,
            bairro: data.data.bairro,
            cidade: data.data.localidade,
            uf: data.data.uf,
          });
          validador(true);
          dadosEndereco(dados);
        }
      });
  };

  return (
    <>
      <Wrapper>
        <Titulo>EASY CARREFOUR</Titulo>
        <WrapperCentral>
          <T1>Encontre uma </T1>
          <T2>loja Carrefour</T2>
          <T3>perto de você! </T3>
          <LinkLogo href="https://www.carrefour.com.br/" target="_blank">
            <img src={logoCarrefour} alt="logo carrefour" />
          </LinkLogo>
          <CaixaEsquerda src={lado} alt="imagem de lado esquerdo da caixa" />
          <CaixaCentro src={frente} alt="imagem de frente da caixa" />
          <CaixaDireita src={lado2} alt="imagem de lado direito da caixa" />
        </WrapperCentral>
        <CaixaDeCep onSubmit={cep.includes("_") ? "" : validaCep(cep)}>
          <InputCep
            mask="99999-999"
            placeholder="Insira seu cep aqui!"
            value={cep}
            onChange={(e) => {
              setCep(e.target.value);
            }}
          />
          <BtnBusca type="submit">Buscar</BtnBusca>
        </CaixaDeCep>
      </Wrapper>
    </>
  );
}
export default memo(HoverCentral);
