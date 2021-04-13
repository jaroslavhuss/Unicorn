const reducer = (state, action) => {
    switch (action.type) {
      case "VYBER_SUROVINU":
        return {
          ...state,
          vybraneSuroviny: action.payload,
        };
      case "ZAPNI_VYPNI_PANEL_SUROVIN":
        return {
          ...state,
          zapniPanelSVyberemSurovin: action.payload,
        };
      default:
        return state;
    }
  };

  export default reducer;