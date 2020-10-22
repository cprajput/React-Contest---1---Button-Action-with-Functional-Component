import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  let [para, setpara] = useState("");
  return (
    <div id="main">
      {/* // Do not alter the main div */}
      <button
        id="click"
        onClick={() => {
          setpara(
            <p id="para">
              Hello, I've learnt to use the full-stack evaluation tool. This
              makes me so happy
            </p>
          );
        }}
      >
        Button
      </button>
      {para}
    </div>
  );
}

export default App;
