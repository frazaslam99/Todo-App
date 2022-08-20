// export const incNumber = () => {
//     return {
//         type: 'INCREMENT',
//         payload: 2
//     }
// };

export const adduser = (data) => {
    return {

        type: 'ADD_FORM',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }


    }
}
export const edituser = (data) => {
    return {

        type:"EDIT_USER",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }


    }
}
export const deleteuser = (id) => {
    return {
        type: 'DELETE_User',
        id
    }
}

export const incNumber = (num) => {
    return {
        type: 'INCREMENT',
        payload: num
    }
}

export const decNumber = () => {
    return {
        type: 'DECREMENT'
    }
};

export const addtodo = (data) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }


    }
}
export const deletetodo = (id) => {
    return {
        type: 'DELETE_TODO',
        id
    }
}
export const removetodo = (num) => {
    return {
        type: 'REMOVE_TODO',
        payload: num
    }
}