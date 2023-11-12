import { ref } from 'vue'
import axios from "axios"

const instance = axios.create({
    baseURL: 'https://opentdb.com/',
    
})

const categories = ref([])

export default function useAPI() {
    const getCategories = async () => {
        if (categories.value.lenght = 0) {
            const response = await instance.get(url: 'api.php')
            categories.value = response.data.trivia_categories
        }
    }
    const getQuestion = async (categoryID) => {
    const response = await instance.get('api_category.php', config: { 
            params: {
             amount: 1,
             category: categoryId,
        },
        })
        return response.data.results[0]
    }
    return { instance, categories, getCategories, getQuestion }
}