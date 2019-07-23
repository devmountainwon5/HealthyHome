export const setUser = (users) => {
    return {
        type: 'set_user',
        payload: users
    }
}

export const setAddress = (address) => {
    return {
        type: 'set_address',
        payload: address
    }
}