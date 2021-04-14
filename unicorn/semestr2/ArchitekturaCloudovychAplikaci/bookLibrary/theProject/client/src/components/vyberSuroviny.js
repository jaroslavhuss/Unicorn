import React, {useState, useContext, useEffect} from 'react'
import { BsFillXCircleFill } from "react-icons/bs";
import { GlobalContext } from '../context/GlobalContext';
const VyberSuroviny = ({suroviny,vybranesuroviny}) => {
    
const [seznamSurovin, setSeznamSurovin] = useState([])
const {zapnutiVypnutiPaneluSVyberemSuroviny,vyberSurovinu} = useContext(GlobalContext);
const [inputState, setInputState] = useState("");
useEffect(() => {
    const filtered = suroviny.filter( function( el ) {
        const vybraneSuroviny = vybranesuroviny.map((surovina) => {
            return surovina.name;
        })
        return vybraneSuroviny.indexOf( el.nazevSuroviny ) < 0;
      } );
    setSeznamSurovin(filtered);
    return () => {
        return false;
    }
}, [suroviny, vybranesuroviny]);

const hledejSuroviny = (e) => {
    const value = e.target.value;
    setInputState(value)
    const regExp = new RegExp(value,"gi");
    const search = suroviny.filter((item) => {
        return item.nazevSuroviny.match(regExp);
    })
   setSeznamSurovin(search);
}

const vymazZvoleneSurovinyZNabidky = (item) => {
    const cistaData = seznamSurovin.filter((polozka) => {
        return item.name !== polozka.nazevSuroviny
    })
    setSeznamSurovin(cistaData);
}
return (
        <div className="vyberSurovin">
            <div className="plocha">
                <div className="zavrit" onClick={
                    () => {
                      zapnutiVypnutiPaneluSVyberemSuroviny(false)  
                    }
                }><BsFillXCircleFill /></div>
                <div className="vyhledavaciPole"><input value={inputState} onInput={hledejSuroviny} type="text" placeholder={`Vyhledat suroviny (${seznamSurovin.length})`} /></div>
                <div className="suroviny">{seznamSurovin.map((surovina,index) => {
                    return(
                        <div onClick={() => {
                            const object = {
                                name:seznamSurovin[index].nazevSuroviny,
                                mnozstvi:0
                            }
                            vyberSurovinu(object);
                            vymazZvoleneSurovinyZNabidky(object)
                        
                        }} className="surovina" key={index}>{surovina.nazevSuroviny}</div>
                    )
                })}
                </div>
                <div className="btn">Požadovaná surovina v seznamu chybí?</div>
            </div>
        </div>
    )
}

export default VyberSuroviny
