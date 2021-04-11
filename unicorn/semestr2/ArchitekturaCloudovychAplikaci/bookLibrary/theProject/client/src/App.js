import React from 'react';
import "./App.css";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Menu from "./components/menu";
import AddRecipe from "./Pages/AddRecipe";
const App = () => {
  return (
   <BrowserRouter>
   <Menu />
    <Switch>
      <Route exact path="/"  component={MainPage}/>
      <Route exact path="/add-recipe"  component={AddRecipe}/>
    </Switch>
   </BrowserRouter>
  )
}

export default App
