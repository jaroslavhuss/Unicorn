const reducer = (state, action) => {
    switch (action.type) {
      case "VYBER_SUROVINU":
        console.log(state);
        return {
          ...state,
          vybraneSuroviny: [...state.vybraneSuroviny,action.payload],
        };
        
      case "ZAPNI_VYPNI_PANEL_SUROVIN":
        return {
          ...state,
          zapniPanelSVyberemSurovin: action.payload,
        };
      case "SET_VYBRANE_SUROVINY":
        return {
          ...state,
          vybraneSuroviny: action.payload,
        };
      default:
        return state;
    }
  };

  export default reducer;