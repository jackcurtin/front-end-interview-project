import React from "react";
import { GlobalStyles } from "../components";
import "../components/navbar/Navbar.css";
import "./styles.css";

const App = ({ Component, pageProps }) => {
    return (
      <React.Fragment>
        {/* Font styles and basic CSS Reset */}
        <GlobalStyles />
        <Component {...pageProps} />
      </React.Fragment>
    );
};


export default App;
