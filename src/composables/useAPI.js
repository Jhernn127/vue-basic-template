import axios from "axios"

const instance = axios.create(config: {
    baseURL: 'https://opentdb.com/',
    
})

export default function useAPI() {
    const getCategories = async () => {
        const response = await instance.get('api_category.php')
        return response.data.trivia_categories
    }

    const getQuestion = async (categoryID) => {
        const response = await instance.get('api.php',
            params: {
            amount: 1,
            category: categoryId,
        },
        })
    }
    return { instance, getCategories }
}