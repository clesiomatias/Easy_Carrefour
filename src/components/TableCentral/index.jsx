import React, { useContext, useEffect, useState, memo } from "react";
import { CepContext, LojasContext } from "../../services/provider";
import logoCarrefour from "../../images/logo.png";
import RingLoader from "react-spinners/RingLoader";
import { Card } from "../index";
import {
  CabecalhoWrapper,
  TipografiaCabecalho,
  TipografiaCabecalho2,
  LinkLogo,
  LoadingWrapper,
  Cards,
  Wrapper,
  BarraDeTexto,
} from "./style";
import {
  WrapperTab,
  WrapperTabs,
  WrapperTabList,
  WrapperTabPanel,
} from "./styleTab";

const TableCentral = () => {
  const { dadosCep } = useContext(CepContext);
  const { lojas, buscaLojas } = useContext(LojasContext);
  const [loja, setLoja] = useState();
  const cep = dadosCep.cep.replace("-", "");
  const [loading, setLoading] = useState(true);
  const listaDeTabLists = [];
  for (let i = 0; i < 31; i++) {
    listaDeTabLists.push(<WrapperTab>Loja {i + 1}</WrapperTab>);
  }
  useEffect(() => {
    if (!loja) {
      buscaLojas(cep);
    }
  }, []);
  useEffect(() => {
    if (lojas.loading) {
      setLoading(false);
      setLoja(lojas.lojas);
    }
  }, [lojas]);

  return (
    <Wrapper>
      <CabecalhoWrapper>
        <LinkLogo href="https://www.carrefour.com.br/" target="_blank">
          <img src={logoCarrefour} alt="logo carrefour" />
        </LinkLogo>
        <TipografiaCabecalho>Ola</TipografiaCabecalho>
        {!dadosCep.bairro ? (
          <TipografiaCabecalho2>
            Você está em {dadosCep.cidade}
            <br /> no estado de {dadosCep.uf}
          </TipografiaCabecalho2>
        ) : (
          <TipografiaCabecalho2>
            Você está no {dadosCep.bairro}, <br />
            em {dadosCep.cidade} no estado de {dadosCep.uf}
          </TipografiaCabecalho2>
        )}
      </CabecalhoWrapper>
      <LoadingWrapper>
        {loading ? (
          <>
            <h1>ESTAMOS BUSCANDO UM CARREFOUR PERTO DE VOCE ...</h1>
            <RingLoader size={80} color={"#123abc"} loading={loading} />
          </>
        ) : (
          <>
            <WrapperTabs
              selectedTabClassName="is-selected"
              selectedTabPanelClassName="is-selected"
            >
              <>
                <WrapperTabList>
                  {listaDeTabLists.map((item, index) => item)}
                </WrapperTabList>
                {loja.map((item, index) => (
                  <WrapperTabPanel key={index}>
                    {index == 0 ? (
                      <BarraDeTexto>
                        O Carrefour mais perto de você é a loja{" "}
                        {item.loja.charAt(0).toUpperCase() + item.loja.slice(1)}
                      </BarraDeTexto>
                    ) : (
                      <BarraDeTexto>
                        Você está vendo os produtos da loja{" "}
                        {item.loja.charAt(0).toUpperCase() + item.loja.slice(1)}
                      </BarraDeTexto>
                    )}
                    <Cards>
                      {item.produtos.map((ponto, id) => (
                        <Card
                          key={id}
                          img={ponto.urlImg}
                          imgAlt={ponto.imageText}
                          linkCompra={ponto.linkCompra}
                          titulo={ponto.nomeProduto}
                          preco={ponto.valor}
                        ></Card>
                      ))}
                    </Cards>
                  </WrapperTabPanel>
                ))}
              </>
            </WrapperTabs>
          </>
        )}
      </LoadingWrapper>
    </Wrapper>
  );
};

export default memo(TableCentral);
