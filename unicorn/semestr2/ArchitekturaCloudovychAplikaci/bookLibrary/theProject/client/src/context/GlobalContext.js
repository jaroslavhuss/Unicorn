import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";


const hlavniState = {
vybraneSuroviny:[],
zapniPanelSVyberemSurovin:false,
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

  return (
    <GlobalContext.Provider
      value={{
      vybraneSuroviny:state.vybraneSuroviny,
      zapniPanelSVyberemSurovin:state.zapniPanelSVyberemSurovin,
      vyberSurovinu,
      zapnutiVypnutiPaneluSVyberemSuroviny
      
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};