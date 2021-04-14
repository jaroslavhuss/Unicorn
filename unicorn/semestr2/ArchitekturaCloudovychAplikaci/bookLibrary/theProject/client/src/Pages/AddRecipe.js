import React, {useState, useContext} from 'react'
import {  BiReceipt, BiPencil,BiTime, BiAddToQueue, BiSave, BiImage, BiListPlus } from "react-icons/bi";
import { Editor } from "@tinymce/tinymce-react";
import VyberSurovin from "../components/vyberSuroviny";
import { GlobalContext } from '../context/GlobalContext';

const AddRecipe = () => {
    /**
     * Globální staty a globální funkce (setry, getry)
     */
    const {
        zapniPanelSVyberemSurovin,
        zapnutiVypnutiPaneluSVyberemSuroviny,
        vybraneSuroviny,
        setVybraneSuroviny
    } = useContext(GlobalContext);
    /**
     * Staty které souvisí s uložením celého formuláře
     */
    const [nazevReceptu, setNazevReceptu] = useState(""); //Nadpis receptu, název receptu
    const [editorState, seteditorState] = useState(""); //Popis receptu, vrací HTML
    const [dobaPripravy, setDobaPripravy] = useState(""); //Doba přípravy state
    const [nahledovyObrazek, setNahledovyObrazek] = useState(""); //URL náhledového obrázku
    const [suroviny, setSuroviny] = useState([]); //Seznam všech surovin, použitých v receptu
    const [soucetGramaze, setSoucetGramaze] = useState(0);
    
    /**
     * @description Získá seznam jednotlivých surovin z databáze
     */
    const getVsechnySuroviny = async () => {
      zapnutiVypnutiPaneluSVyberemSuroviny(true);
   fetch("http://localhost:5000/get-suroviny").then((data) => {
       return data.json();
   }).then(({data}) => {
       setSuroviny(data);
   })
  }

  /**
   * 
   * @param array Pole objektů
   * @description Přepočítá sumu všech aktivně přidaných surovin
   */
  const prepocitejGramaz = (array) => {
    let sum = 0;
     array.forEach((item) => sum += +item.mnozstvi);
    setSoucetGramaze(sum);
}

/**
 * 
 * @param e event object
 * @description Umístí do globálního contextu nové množství určité suroviny
 */
  const menicMnozstvi = (e) => {
      //Aby nešlo jít na menší jak 1
      if(e.target.value && e.target.value > 0){
      const index = e.target.getAttribute("index");
      vybraneSuroviny[index].mnozstvi = parseInt(e.target.value);
      setVybraneSuroviny(vybraneSuroviny);
      prepocitejGramaz(vybraneSuroviny);
    }else{
        //Pokud je hodnota množství suroviny menší nebo rovno nule
        const index = e.target.getAttribute("index");
      vybraneSuroviny[index].mnozstvi = parseInt(0);
      setVybraneSuroviny(vybraneSuroviny);
      prepocitejGramaz(vybraneSuroviny);
    }
  }
 
  /**
   * @param e event objekt
   * @description smaze z globálního contextu (statu) zvolenou surovinu a přepočítá
   * @todo přepočítá to se zpožděním jednoho itemu, nevím proč, kurva!
   */
  const smazZvolenouSurovinu = (e) => {
      const index = e.target.getAttribute("index");
      const ocisteneVybraneSuroviny = vybraneSuroviny.filter((item) =>item.name !== vybraneSuroviny[index].name);
      setVybraneSuroviny(ocisteneVybraneSuroviny);
      prepocitejGramaz(vybraneSuroviny);
  }

  const ulozitReceptDoDatabaze = () => {
      const schemaObjektu = {
          nazevReceptu:nazevReceptu,
          popis:editorState,
          dobaPripravy:dobaPripravy,
          nahledovyObrazek:nahledovyObrazek,
          suroviny:vybraneSuroviny,
          soucetGramaze:soucetGramaze,
          fullText:(() => {
              let finalstring = `${nazevReceptu} ${editorState} ${dobaPripravy} `;
              suroviny.forEach((item) => {
                  finalstring += item.nazevSuroviny + " ";
              })
              return finalstring;
          })()
      }
      console.log(schemaObjektu);
  }
  
    return (
       <div className="layout">
          {zapniPanelSVyberemSurovin?<VyberSurovin vybranesuroviny={vybraneSuroviny} suroviny={suroviny}/>:<></>} 
           <div className="column" style={{
                  height:"90vh",
                   overflow: "scroll"
           }}>
             <div className="recipe-canvas">
                 <h1>Přidání receptu</h1>
                    <div className="add-recipe">
                        <div className="card">
                            <label htmlFor="nazev-receptu"><h3><BiReceipt/> Název receptu</h3></label>
                            <input placeholder="Použijte výstižné jméno pro recept" type="text" onInput={(e) => setNazevReceptu(e.target.value)}/>
                        </div>
                        <div className="card">
                            <label htmlFor="popis"><h3><BiPencil/> Popis</h3></label>
                            <Editor
                             apiKey="qcg2yi8kqw531kmg6ydhz6wuxylra4kcs6uw4r3ityltqcu5"
                        value={editorState}
                        init={{
                        height: 200,
                        menubar: false
                        }}
                        onEditorChange={seteditorState}
                    />
                        </div>
                        <div className="card">
                            <label htmlFor="popis"><h3><BiTime/> Doba přípravy</h3></label>
                            <input style={{width:"50%"}} placeholder="12 minut například" type="text" onInput={(e) => setDobaPripravy(e.target.value)}/>
                        </div>
                        <div className="card" style={{
                                backgroundImage:`url(${nahledovyObrazek})`,
                                backgroundSize:"contain",
                                backgroundRepeat:"no-repeat",
                                backgroundPosition:"right top",
                                
                            }}>
                            <label htmlFor="popis"><h3><BiImage/> Náhledový obrázek</h3></label>
                            <input onInput={(e) => {
                                setNahledovyObrazek(e.target.value);
                            }} placeholder="Umístěte externí odkaz" type="text" name="popis" value={nahledovyObrazek} style={{width:"50%"}}/>
                        </div>
                        <div className="card">
                            <h3><BiListPlus/> Seznam použitých surovin ({soucetGramaze}g)</h3>
                            <p>Všechny hodnoty zapistuje v gramech na jednu osobu!</p>
                            <br/>
                            <div className="vypisSuroviny">
                          {vybraneSuroviny.map(({name},index) => {
                              return(
                                  <div className="polozka" key={index}><strong>{name}(g):</strong><input key={index} onInput={menicMnozstvi} index={index}type="number" name={name} value={vybraneSuroviny[index].mnozstvi}/><div className="deleteThisItem" index={index} onClick={smazZvolenouSurovinu}>smazat</div></div>
                              )
                          })}
                          </div>
                           <div onClick={() => {
                               getVsechnySuroviny()
                           }} className="btn btn-add-item"><BiAddToQueue /> Přidat surovinu</div>
                        </div>
                    </div>
                    <div className="btn btn-save-item" onClick={ulozitReceptDoDatabaze}><BiSave /> Uložit recept</div>
               </div>
           </div>
       </div>
    )
}

export default AddRecipe
