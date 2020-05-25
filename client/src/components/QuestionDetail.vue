<template>
  <div>
      <!-- <ul>
          <p>Question:</p>
          <li>{{question.question}}</li>
          <p>Answer:</p>
          <li> {{question.correct_answer}} </li>
          <p>Incorrect answers: </p>
          <ul v-for="(qstn, index) in question.incorrect_answers" :key="index">
              <li>{{qstn}}</li>
          </ul>
          <br>
      </ul> -->





      <!-- <ul v-for="(qstn, index) in allAnswers" :key="index">
              <li><button>{{qstn}}</button></li>
        </ul> -->
  </div>
</template>

<script>
export default {
    // name: 'question-detail',
    // props: ["question"]
}


 // let correctAnswer = this.questions[randomNum].correct_answer;
            // let incorrectAnswer1 = this.questions[randomNum].incorrect_answers[0];
            // let incorrectAnswer2 = this.questions[randomNum].incorrect_answers[1];
            // let incorrectAnswer3 = this.questions[randomNum].incorrect_answers[2];

            // allAnswers.push(incorrectAnswer1);
            // allAnswers.push(incorrectAnswer2);
            // allAnswers.push(incorrectAnswer3);
            // allAnswers.push(correctAnswer);
</script>

<style>

</style>