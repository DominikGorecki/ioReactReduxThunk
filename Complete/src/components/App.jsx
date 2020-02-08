import React, { useEffect, useState } from "react";
import { clickCounter, clickHi } from "../actions";
import { connect } from "react-redux";

const App = props => {
  const [enteredName, setEnteredName] = useState(null);
  return (
    <div>
      <button onClick={props.clickCounter}>{props.clickCount}</button>
      <div>
        <input
          type="text"
          onChange={e => setEnteredName(e.target.value)}
        ></input>
        <button onClick={() => props.clickHi(enteredName)}>Say Hi</button>
      </div>
      {props.hiName.name && <div>Hi {props.hiName.name}</div>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    clickCount: state.clickCounter,
    hiName: state.hiName
  };
};

export default connect(mapStateToProps, { clickCounter, clickHi })(App);
