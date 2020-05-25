<template>
  <div>
      <p>Question:</p>
      <ul v-for="(question, index) in questions" :question="question" :key="index">
          <li>{{question.question}}</li>
          <p>Answer:</p>
          <li> {{question.correct_answer}} </li>
          <p>Incorrect answers: </p>
          <ul v-for="(qstn, index) in question.incorrect_answers" :key="index">
              <li>{{qstn}}</li>
          </ul>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'question-holder',
    props: ['questions'],
    // data(){
    //     return {
    //         questions: []
    //     }
    // }
}
</script>

<style>

</style>