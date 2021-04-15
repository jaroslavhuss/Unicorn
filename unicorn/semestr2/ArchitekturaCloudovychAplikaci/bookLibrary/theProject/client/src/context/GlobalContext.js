import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";


const hlavniState = {
vybraneSuroviny:[],
zapniPanelSVyberemSurovin:false,
vyhledaneRecepty:[]
};

export const GlobalContext = createContext(hlavniState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalReducer, hlavniState);

  const zapnutiVypnutiPaneluSVyberemSuroviny = (bool) => {
    dispatch({
      type:"ZAPNI_VYPNI_PANEL_SUROVIN",
      payload:bool
    })
  }
  const vyberSurovinu = (surovina) => {
    dispatch({
      type:"VYBER_SUROVINU",
      payload:surovina
    })
  }

  const setVybraneSuroviny = (arr) => {
    dispatch({
      type:"SET_VYBRANE_SUROVINY",
      payload:arr
    })
  }

  const setVyhledaneRecepty = (arr) => {
    dispatch({
      type:"SET_VYHLEDANE_RECEPTY",
      payload:arr
    })
  }
  return (
    <GlobalContext.Provider
      value={{
      //Seznam vybraných surovin do receptu
      vybraneSuroviny:state.vybraneSuroviny,
      vyberSurovinu,//Funkce na přidání do statu
      setVybraneSuroviny,//Funkce na měnění statu
      
      zapniPanelSVyberemSurovin:state.zapniPanelSVyberemSurovin,//Vypne zapne přidání surovin
      zapnutiVypnutiPaneluSVyberemSuroviny,//Mění state
      
      vyhledaneRecepty:state.vyhledaneRecepty,
      setVyhledaneRecepty
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};