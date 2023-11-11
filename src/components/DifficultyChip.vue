<script setup>
const props = defineProps({
  difficulty: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <p
class="difficulty" :class="props.difficulty = 'easy' ? 'bg-green-500' : props.difficulty = 'medium' ? 'bg-yellow-500' : 'bg-red-500'>
    {{ props.difficulty }}
  </p>
</template>

<style lang="postcss" scoped>
.difficulty {
  @apply absolute bottom-6 left-8 rounded-full py-2 px-4 text-small font-bold capitalize text-slate-700 text-white;
}
</style>
