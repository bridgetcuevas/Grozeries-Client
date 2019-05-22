import React, { Component } from "react";
import Routing from "./Routing";
// import FooterPage from "./Components/Footer/footerPage";

import Navigation from "./Components/Navigation/navigationBar";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <nav>
          <Navigation />
        </nav>
        <div className="app-body">
          <main style={{ marginTop: 60 }}>
            <Routing />
          </main>
        </div>
        {/* <footer>
        <FooterPage />
        </footer> */}
      </div>
    );
  }
}

export default App;
