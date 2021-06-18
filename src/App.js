import React from "react";
import {Wrap} from "./components/wrap/Wrap";
import {Catalog} from "./components/Catalog/Catalog";
import {Menu} from "./components/Menu/Menu";

class App extends React.Component {
  update = () => {
    this.forceUpdate()
  }
  render() {
    return (
        <div className="App">
          <Menu />
          <Catalog />
        </div>
    );
  }
}

export default App;
