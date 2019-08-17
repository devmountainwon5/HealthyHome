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
export const setSuggestedTodos = (todos) => {
    return {
        type: 'suggested_todos',
        payload: todos
    }
}
export const setAllSuggestedTodos = (todos) => {
    return {
        type: 'all_suggested_todos',
        payload: todos
    }
}
export const setUserTodos = (todos) => {
    return {
        type: 'user_todos',
        payload: todos
    }
}

export const setUpcomingTodos = (todos) => {
    return {
        type: 'upcoming_todos',
        payload: todos
    }
}

export const setHomePic = (home) => {
    return {
        type: 'set_home_pic',
        payload: home
    }
}

export const setTips = (tips) => {
    return {
        type: 'set_tips',
        payload: tips
    }
 }

 export const setRandom = (random) => {
    return {
        type: 'set_random',
        payload: random
    }
 }
