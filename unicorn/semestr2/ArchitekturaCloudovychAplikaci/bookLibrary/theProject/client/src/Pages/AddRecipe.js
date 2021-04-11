import React, {useState} from 'react'
import {  BiReceipt, BiPencil,BiTime, BiAddToQueue, BiSave, BiImage, BiListPlus } from "react-icons/bi";
import { Editor } from "@tinymce/tinymce-react";

const AddRecipe = () => {
  const [editorState, seteditorState] = useState("")
    return (
       <div className="layout">
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
                            <input placeholder="12 minut například" type="text" name="popis"/>
                        </div>
                        <div className="card">
                            <label htmlFor="popis"><h3><BiImage/> Náhledový obrázek</h3></label>
                            <input placeholder="Umístěte externí odkaz" type="text" name="popis"/>
                        </div>
                        <div className="card">
                            <h3><BiListPlus/> Seznam použitých surovin</h3>
                            <br/>
                           <div className="btn btn-add-item"><BiAddToQueue /> Přidat surovinu</div>
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
