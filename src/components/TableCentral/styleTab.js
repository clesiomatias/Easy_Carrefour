import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  flex-direction: row;
`;
export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
  overflow-x: scroll;
  white-space: nowrap;
`;
WrapperTabList.tabsRole = "TabList";
export const WrapperTab = styled(Tab)`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 8px;
  user-select: none;
  cursor: pointer;
  z-index: 99999;
  background-color: #fff;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, 0.5);
  }
  &.is-selected {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom: 1px solid white;
  }
`;
WrapperTab.tabsRole = "Tab";

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  border: 1px solid #ccc;
  box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.5);
  padding: 8px;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
WrapperTabPanel.tabsRole = "TabPanel";

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: auto;
  height: auto;
  overflow: hidden;
  align-items: center;
  flex-wrap: nowrap;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
export const BarraDeTexto = styled.div`
  background-color: #02458c;
  margin: 1rem 0 1rem 0;
  width: 100%;
  height: 5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Fredoka One";
  font-size: 2rem;
  @media (min-width: 361px) and (max-width: 767px) {
    line-height: 1.5rem;
    text-align: center;
    font-size: 1.5rem;
  }
  @media (max-width: 360px) {
    line-height: 1.5rem;
    text-align: center;
    font-size: 1rem;
  } ;
`;
