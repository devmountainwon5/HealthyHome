export const setUser = (user) => {
    return {
        type: 'set_user',
        payload: user
    }
}

export const setQuiz = (questions) => {
    return {
        type: 'set_quizItems',
        payload: questions
    }
}
export const setAddress = (address) => {
    return {
        type: 'set_address',
        payload: address
    }
}
export const addSuggestedTodos = (todos) => {
    return {
        type: 'suggested_todos',
        payload: todos
    }
}
export const userTodos = (todos) => {
    return {
        type: 'user_todos',
        payload: todos
    }
}