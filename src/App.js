import React from "react";
import {Wrap} from "./components/wrap/Wrap";

class App extends React.Component {
  update = () => {
    this.forceUpdate()
  }
  render() {
    return (
      <div className="App">
        <Wrap update={this.update}/>
      </div>
    );
  }
}

export default App;
