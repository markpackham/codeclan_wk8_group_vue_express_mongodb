<template>
  <div class="country-quiz">
      <ul>
      <question-detail v-for="(question, index) in questions" :key="index"></question-detail>
      </ul>
      <button v-on:click="handleClick">Next question</button>
      <div v-if="aQuestion">
      <p>{{aQuestion}}</p>
      <ul v-for="(qstn, index) in allAnswers" :key="index">
              <li><button>{{qstn}}</button></li>
        </ul>
      </div>
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
            allAnswers: []
        }
    },
    components: {
      "question-detail": QuestionDetail
    },
    methods: {
        handleClick() {
            let randomNum = Math.floor(Math.random() * this.questions.length + 1);
            this.aQuestion = this.questions[randomNum].question;
            // this.correctAnswer = this.questions[randomNum].correct_answer;
            this.allAnswers.splice(0, 1, this.questions[randomNum].correct_answer)
            this.allAnswers.splice(1, 1, this.questions[randomNum].incorrect_answers[0])
            this.allAnswers.splice(2, 1, this.questions[randomNum].incorrect_answers[1])
            this.allAnswers.splice(3, 1, this.questions[randomNum].incorrect_answers[2])
            this.allAnswers.sort()
        }
    }
}
</script>

<style>

</style>