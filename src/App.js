import React from "react";
import {Wrap} from "./components/wrap/Wrap";
import {Menu} from "./components/Menu/Menu";
import Catalog from "./components/Catalog/Catalog";


class App extends React.Component {
  // update = () => {
  //   this.forceUpdate()
  // }
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
