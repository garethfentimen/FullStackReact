import React from "react";

import QuestionList from "../container/QuestionList";

export default class App extends React.Component {

  render() {
    return (
        <div className="container">
            <QuestionList />
        </div>
      );
  }
}