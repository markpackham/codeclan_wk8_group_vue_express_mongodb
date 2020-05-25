<template>
  <div>
      <ul>
      <question-detail v-for="(question, index) in questions" :question="question" :key="index"></question-detail>
      </ul>
  </div>
</template>

<script>
import QuestionDetail from './QuestionDetail.vue'
export default {
    name: 'question-holder',
    props: ['questions'],
    data(){
        return {
            question: null
        }
    },
    components: {
      "question-detail": QuestionDetail
    }
}
</script>

<style>

</style>