<template>
  <div class="country-quiz">
      <button v-on:click="nextQuestion">Next question</button>
      <div v-if="aQuestion">
      <p>{{aQuestion}}</p>
      <ul v-for="(answer, index) in allAnswers" :key="index">
              <li><button v-on:click="handleAnswer(answer)">{{answer}}</button></li>
        </ul>
        <span class='highlight-correct' v-if='answer'>CORRECT!</span>
        <span class='highlight-incorrect' v-if='!answer'>WRONG DUMBASS!</span>
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
            answer: ""
        }
    },
    computed: {
        // answerStyle: function() {
        //     if (this.answer == this.correctAnswer) {return "highlight-correct"}
        //     else {return "highlight-incorrect"}
        // }
    },
    methods: {
        nextQuestion() {
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
                this.answer = true
            }else{
                this.answer = false
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
.highlight-correct{
    background-color: #48FF1B;
    color: black;
    border: 3px solid #48FF1B;
}
.highlight-incorrect{
    background-color: #FF2525;
    color: black;
    border: 3px solid #FF2525;
}
</style>