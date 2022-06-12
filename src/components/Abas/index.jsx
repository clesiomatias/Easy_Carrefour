import React, { memo, useContext, useState, useEffect } from "react";
import { LojasContext } from "../../services/provider";

import {
  WrapperTab,
  WrapperTabs,
  WrapperTabList,
  WrapperTabPanel,
  Cards,
  BarraDeTexto,
} from "../Abas/styleTab";
import Card from "../Card";

const Abas = () => {
  const { lojas } = useContext(LojasContext);
  const [loja, setLoja] = useState();
  useEffect(() => {
    if (lojas.loading) {
      setLoja(lojas.lojas);
    }
  }, [lojas]);
  const [ListaTabs, setListaTabs] = useState(<></>);
  const [ListaPanel, setListaPanel] = useState(<></>);
  useEffect(() => {
    if (!!loja) {
      setListaTabs(
        loja.map((item, index) => (
          <WrapperTabList key={index}>
            <WrapperTab>Loja {index + 1}</WrapperTab>
          </WrapperTabList>
        ))
      );
      setListaPanel(
        loja.map((item, index) => (
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
        ))
      );
    }
  }, [loja]);

  return (
    <WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <ListaTabs></ListaTabs>
      <ListaPanel></ListaPanel>
    </WrapperTabs>
  );
};
export default memo(Abas);
