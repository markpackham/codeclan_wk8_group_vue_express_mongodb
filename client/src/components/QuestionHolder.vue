<template>
  <div class="country-quiz">
      <ul>
      <question-detail v-for="(question, index) in questions" :key="index"></question-detail>
      </ul>
      <p v-on:click="handleClick">Next question</p>
      <p>{{aQuestion}}</p>
      <p>{{correctAnswer}}</p>
      <ul v-for="(qstn, index) in incorrectAnswers" :key="index">
              <li>{{qstn}}</li>
        </ul>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';
import QuestionDetail from './QuestionDetail.vue';

export default {
    name: 'question-holder',
    props: ['questions'],
    data(){
        return {
            aQuestion: "",
            correctAnswer: "",
            incorrectAnswers: []
        }
    },
    components: {
      "question-detail": QuestionDetail
    },
    methods: {
        handleClick() {
            let randomNum = Math.floor(Math.random() * this.questions.length + 1);
            this.aQuestion = this.questions[randomNum].question;
            this.correctAnswer = this.questions[randomNum].correct_answer;
            this.incorrectAnswers = this.questions[randomNum].incorrect_answers;
        }
    }
}
</script>

<style>

</style>