import React, {useState, useContext} from 'react'
import {  BiReceipt, BiPencil,BiTime, BiAddToQueue, BiSave, BiImage, BiListPlus } from "react-icons/bi";
import { Editor } from "@tinymce/tinymce-react";
import VyberSurovin from "../components/vyberSuroviny";
import { GlobalContext } from '../context/GlobalContext';

const AddRecipe = () => {
    const {zapniPanelSVyberemSurovin,zapnutiVypnutiPaneluSVyberemSuroviny,vybraneSuroviny,setVybraneSuroviny} = useContext(GlobalContext);
  const [editorState, seteditorState] = useState("");
    const [suroviny, setSuroviny] = useState([]);
    const [nahledovyObrazek, setNahledovyObrazek] = useState("");
  const getVsechnySuroviny = async () => {
      zapnutiVypnutiPaneluSVyberemSuroviny(true);
   fetch("http://localhost:5000/get-suroviny").then((data) => {
       return data.json();
   }).then(({data}) => {
       setSuroviny(data);
   })
  }

  const menicMnozstvi = (e) => {
      const index = e.target.getAttribute("index");
      vybraneSuroviny[index].mnozstvi = parseInt(e.target.value);
      setVybraneSuroviny(vybraneSuroviny);
  }

  const smazZvolenouSurovinu = (e) => {
      const index = e.target.getAttribute("index");
      const ocisteneVybraneSuroviny = vybraneSuroviny.filter((item) => {
          return item.name !== vybraneSuroviny[index].name;
      })
      setVybraneSuroviny(ocisteneVybraneSuroviny);
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
                            <input placeholder="Použijte výstižné jméno pro recept" type="text" name="nazev-receptu"/>
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
                            <input style={{width:"50%"}} placeholder="12 minut například" type="text" name="popis"/>
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
                            <h3><BiListPlus/> Seznam použitých surovin</h3>
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
                    <div className="btn btn-save-item" onClick={() => {
                        console.log(editorState);
                    }}><BiSave /> Uložit recept</div>
               </div>
           </div>
       </div>
    )
}

export default AddRecipe
