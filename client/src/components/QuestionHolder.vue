<template>
  <div class="country-quiz">
      <h2>Country Quiz</h2>
      <button v-on:click="nextQuestion">Get a question</button>
      <div v-if="aQuestion">
      <p>{{decodeURIComponent(aQuestion)}}
        <span class='highlight-response' v-if='response'>{{response}}</span></p>
      <ul v-for="(answer, index) in allAnswers" :key="index">
              <li><button v-on:click="handleAnswer(answer)">{{decodeURIComponent(answer)}}</button></li>
        </ul>
      </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js';

export default {
    name: 'question-holder',
    props: ['questions'],
    data(){
        return {
            aQuestion: "",
            correctAnswer: '',
            allAnswers: [],
            answer: "",
            response: ""
        }
    },
    computed: {
    },
    methods: {
        nextQuestion() {
            this.response = ''
            let randomNum = Math.floor(Math.random() * this.questions.length + 1);
            this.aQuestion = this.questions[randomNum].question;
            this.correctAnswer = this.questions[randomNum].correct_answer;
            this.allAnswers.splice(0, 1, this.questions[randomNum].correct_answer)
            this.allAnswers.splice(1, 1, this.questions[randomNum].incorrect_answers[0])
            this.allAnswers.splice(2, 1, this.questions[randomNum].incorrect_answers[1])
            this.allAnswers.splice(3, 1, this.questions[randomNum].incorrect_answers[2])
            this.allAnswers.sort()
        },
        // handleAnswer(answer) {
        //     this.answer = answer
        //     eventBus.$emit('answer-selected', this.answer);
        //     console.log(this.answer)
        //     if(this.answer === this.correctAnswer){
        //         console.log("Yey you got it right!")
        //     }else{
        //         console.log("WRONG!!!")
        //     }
        // },
        handleAnswer(answer) {
            this.answer = answer
            console.log(this.answer)
            if(this.answer === this.correctAnswer){
                this.response = "CORRECT"
            }else{
                this.response = "That is INCORRECT"
            }
            console.log(this.answer)
            eventBus.$emit('answer-selected', this.answer);
        }
    },
    mounted(){

    }
}
</script>

<style>
@import "../assets/styles/quiz.css";
</style>