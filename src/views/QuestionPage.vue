<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import useAPI from '@/composables/useAPI'
import useColor from '@/composables/useColor'
import useScore from '@/composables/useScore'
import BaseTitle from '@/components/BaseTitle.vue'
import DifficultyChip from '@/components/DifficultyChip.vue'



const route = useRoute()
const colors = useColor()
const api = useAPI()
const question = ref(null)
const answers = ref([])
const { changeScore } = useScore()
onMounted(async () => {
  question.value = await api.getQuestion(route.params.id)
  answers.value.push({
    id: answers.value.length,
    correct: true,
    answer: question.value.correct_answer,
    points: question.value.difficulty = 'easy' ? 10 : question.value.difficulty = 'medium' ? 20 : 3

  })
  question.value.incorrect_answer.map((answer) => {
    answers.value.push({
    id: answers.value.length,
    correct: false,
    answer,
    point: -5,
    })
  })
</script>

<template>
  <div v-if="question" class="question-container">
    <BaseTitle>{{ question.category }} </BaseTitle>
    <p class="question">{{ question.question }}</p>

    <div class="answers">
      <div
        @click="changeScore(answer.points)"
        :class="colors.getColor(answer.id)"
        v-for="answer in answers"
        :key="answer.id"
        class="answer"
      >
        {{ answer.answer }}
      </div>
      <DifficultyChip :difficulty="question.difficulty" />
    </div>
  </div>

  <div v-else class="loading">Loading....</div>
</template>

<style lang="postcss" scoped>
.question-container {
  @apply h-full w-full flex-col items-center gap-8;

  & .question {
    @apply text-center text-2xl font-bold;
  }

  & .answers
  @apply w-full grid  flex-grow grid-cols-2 gap-8;
  & .answer {
    @apply  text-center flex items-center justify-center w-full  rounded-lg text-white text-4xl;
    &:hover {
      @apply cursor-pointer;
    }
  }
}
.loading {
  @apply flex justify-center items-center h-full w-full text-7xl;
}
</style>
