import React, {useState} from 'react'
import img from "../assets/logo.png"
const Search = () => {
    const [searchField, setSearchField] = useState("");
    const submit = () => {
        console.log(searchField)
    }
    return (
        <form className="search-area" onSubmit={(e) => {
            e.preventDefault()
            submit();
        }}>
            <img width="300" src={img} alt="Official logo" />
            <input type="text" onInput={(e) => {
                setSearchField(e.target.value)
            }}/>
           <div className="btn-section">
               <input type="submit" className="vyhledat" value="Vyhledat Recept"/>
           </div>
        </form>
    )
}

export default Search
