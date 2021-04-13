import React, {useState, useContext, useEffect} from 'react'
import { BsFillXCircleFill } from "react-icons/bs";
import { GlobalContext } from '../context/GlobalContext';
const VyberSuroviny = ({suroviny}) => {
    
const [seznamSurovin, setSeznamSurovin] = useState([])
const {zapnutiVypnutiPaneluSVyberemSuroviny} = useContext(GlobalContext);
const [inputState, setInputState] = useState("");
useEffect(() => {
    setSeznamSurovin(suroviny);
    return () => {
        return false;
    }
}, [suroviny]);

const hledejSuroviny = (e) => {
    const value = e.target.value;
    setInputState(value)
    const regExp = new RegExp(value,"gi");
    const search = suroviny.filter((item) => {
        return item.nazevSuroviny.match(regExp);
    })
   setSeznamSurovin(search);
}
return (
        <div className="vyberSurovin">
            <div className="plocha">
                <div className="zavrit" onClick={
                    () => {
                      zapnutiVypnutiPaneluSVyberemSuroviny(false)  
                    }
                }><BsFillXCircleFill /></div>
                <div className="vyhledavaciPole"><input value={inputState} onInput={hledejSuroviny} type="text" placeholder="vyhledat surovinu"/></div>
                <div className="suroviny">{seznamSurovin.map((surovina,index) => {
                    return(
                        <div className="surovina" key={index}>{surovina.nazevSuroviny}</div>
                    )
                })}
                </div>
                <div className="btn">Požadovaná surovina v seznamu chybí?</div>
            </div>
        </div>
    )
}

export default VyberSuroviny
