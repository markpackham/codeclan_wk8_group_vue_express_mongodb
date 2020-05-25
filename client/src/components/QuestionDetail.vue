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
  </div>
</template>

<script>
export default {
    name: 'question-detail',
    props: ["question"]
}
</script>

<style>

</style>