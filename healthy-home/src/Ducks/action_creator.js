export const setUser = (user) => {
    return {
        type: 'set_user',
        payload: user
    }
}

export const setAddress = (address) => {
    return {
        type: 'set_address',
        payload: address
    }
}