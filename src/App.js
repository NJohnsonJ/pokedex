import React from 'react';
import './App.css';
import Main from "./pages/Main";
import {MuiThemeProvider} from "@material-ui/core";
import PokedexTheme from "./style/PokedexTheme";
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <main>
            <MuiThemeProvider theme={PokedexTheme}>
                <BrowserRouter>
                    <Header />
                    <Main/>
                </BrowserRouter>
            </MuiThemeProvider>
        </main>
    );
}

export default App;
