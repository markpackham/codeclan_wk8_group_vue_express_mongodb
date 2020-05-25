<template>
  <div class="country-quiz">
      <ul>
      <question-detail v-for="(question, index) in questions" :key="index"></question-detail>
      </ul>
      <!-- :question="question" -->
      <p v-on:click="handleClick">Next question</p>
      <p>{{aQuestion}}</p>
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
            aQuestion: ""
        }
    },
    components: {
      "question-detail": QuestionDetail
    },
    methods: {
        handleClick() {
            let randomNum = Math.floor(Math.random() * this.questions.length + 1);
            this.aQuestion = this.questions[randomNum].question;
        }
    }
}
</script>

<style>

</style>