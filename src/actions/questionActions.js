
export function fetchQuestions (score) {
    return (dispatch) => {
            console.log("Get_Questions");
            dispatch({type: "Get_Questions"});

            axios.get("public/data/questions.json")
                .then((response) => {
                    console.log("Receive_Questions");
                    dispatch({type: "Receive_Questions", payload: response.data});
                })
                .catch((err) => {
                    console.log("Get_Questions_Error");
                    dispatch({type: "Get_Questions_Error", payload: err});
                });
        };
}


let overallScore = 0;
export function answerQuestion (score) {
    let newScore = overallScore += score;
    return {
        score: newScore
    }
}