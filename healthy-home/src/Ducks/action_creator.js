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

<<<<<<< HEAD
export const setHomePic = (home) => {
    return {
        type: 'set_home_pic',
        payload: home
    }
}

=======
>>>>>>> origin/dev
export const setTips = (tips) => {
    return {
        type: 'set_tips',
        payload: tips
    }
<<<<<<< HEAD
 }

 export const setRandom = (random) => {
=======
}

export const setRandom = (random) => {
>>>>>>> origin/dev
    return {
        type: 'set_random',
        payload: random
    }
<<<<<<< HEAD
 }
=======
}
>>>>>>> origin/dev
