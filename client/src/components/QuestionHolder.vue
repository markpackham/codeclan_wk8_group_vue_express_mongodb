<template>
  <div>
      <p>Question:</p>
      <ul v-for="(question, index) in questions" :question="question" :key="index">
          <li>{{question.question}}</li>
          <li> {{question.correct_answer}} </li>
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