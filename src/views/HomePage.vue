<script setup>
import { onMounted, ref } from 'vue'
import useAPI from '@/composables/useAPI'

const api = useAPI()
const categories = ref([])


onMounted(async () => {
  categories.value = await api.getCategories()
})
</script>

<template>
  <div class="brand">
    <img class="logo" src="logo.svg" alt="logo" />
    <h1 class="title">Triviantastic</h1>
    <img class="logo" src="logo.svg" alt="logo" />
  </div>
  <div class="categories">
    <RouterLink
    :to="`/question/category/${category.id}`" 
    v-for="category in catergories" 
    :key="category.id" 
    class="category"
    >
    {{  category.name }}
    </RouterLink>
  </div>
  
</template>

<style lang="postcss" scoped>
.brand {
  @apply flex items-center justify-center gap-4;

  & .logo {
    @apply h-16 w-16;
  }

  & .title {
    @apply text-6xl font-thin tracking-widest text-slate-700 uppercase;
  }
}

.categories {
  @apply grid flex-grow grid-cols-4 gap-12;

  & .category {
    @apply text-center flex h-32  items-center justify-center rounded-lg border-4 border-green-500 py-4 font-bold uppercase text-slate-600 transition-colors duration-300;

    &:hover {
      @apply cursor-pointer border-red-500 bg-red-500 text-white;
    }
  }
}
</style>
