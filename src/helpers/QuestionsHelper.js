export const loadQuestions = async (
    amount = 10, category = 9,
    difficulty = "easy",
    type = "multiple"
) => {
    //retrieve questions via fetch api
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`;

    // async await fetch api
    try {
        const res = await fetch(url);
        const { results } = await res.json();
        return convertQuestionsFromAPI(results)
    } catch (err) {
        console.err(err)
    }
}

const convertQuestionsFromAPI = (rawQuestions) => {
    //convert response to right format
    return rawQuestions.map(loadedquestion => {
        const formattedQuestion = {
            question: loadedquestion.question,
            answerChoices: [...loadedquestion.incorrect_answers]
        }

        formattedQuestion.answer = Math.floor(Math.random() * 4)

        formattedQuestion.answerChoices.splice(formattedQuestion.answer, 0, loadedquestion.correct_answer)

        return formattedQuestion;

    });
}