import React, { Component } from "react";
import Routing from "./Routing";

import Navigation from "./Components/Navigation/navigationBar";

class App extends Component {
  render() {
    return (
      <div style={{ height: "100%" }}>
        <nav>
          <Navigation />
        </nav>
        <main style={{ marginTop: 60 }}>
          <Routing />
        </main>
      </div>
    );
  }
}

export default App;
