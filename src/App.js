import React from 'react';
import './App.css';
import Main from "./pages/Main";
import {MuiThemeProvider} from "@material-ui/core";
import PokedexTheme from "./style/PokedexTheme";
import Header from "./components/Header";

function App() {
    return (
        <main>
            <MuiThemeProvider theme={PokedexTheme}>
                <Header />
                <Main/>
            </MuiThemeProvider>
        </main>
    );
}

export default App;
