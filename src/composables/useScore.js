import { ref } from 'vue'

const score = ref (value: 0)

const userScore = () => {
    const changeScore = (value) => {
        score.value += value
    }
    return { score, changeScore }
} 

export default userScore