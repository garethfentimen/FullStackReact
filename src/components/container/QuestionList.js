import React from "react";
import { connect } from "react-redux";

import { Question } from "./Question";
import * as questionActions from "../../actions/questionActions";

const mapStateToProps = function(state){
  return {
    fetched: state.fetched,
    questions: state.questions
  }
}

const mapDispatchToProps = function (dispatch) {
  return {
    questions: questionActions.fetchQuestions
  };
  //questions: questionActions.fetchQuestions(),
}

class QuestionList extends React.Component {
    // componentDidMount(props) {
    //     // Without redux : would set a state property in the constructor
    //     this.questions = questionActions.fetchQuestions();
    // }

    render() {
        if (!this.props.fetched)
        {
            return (
                <div><p>loading...</p></div>
            )
        }

        let questionsToRender = this.questions.map((question) => {
            <Question Description={question.Description}/>
        });

        return (
            {questionsToRender}
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);