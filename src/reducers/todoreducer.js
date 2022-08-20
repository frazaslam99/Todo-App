

const initialState = {
    userform: [],
    list: []
}
const todoreducer = (state = initialState, action) => {
    switch (action.type) {


        case "ADD_TODO":

            const { id, data } = action.payload
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]

            }

        case "EDIT_USER":


            const updateuser = state.list.map((user) => {
                if (user.id == action.payload.id) {

                    return action.payload

                }

                return user;

            })
            return {
                ...state,
                list: updateuser
            }




        case "ADD_FORM":
            return {
                ...state,
                userform: [
                    ...state.userform,
                    // {
                    //     id: id,
                    //     data: data
                    // }
                    action.payload
                ]

            }

        case "DELETE_User":


            const newlistuser = state.userform.filter((elem) => {
                return action.id !== elem.id;
            });

            return {
                ...state,
                userform: newlistuser
            }

        case "DELETE_TODO":


            const newlist = state.list.filter((elem) => {
                return action.id !== elem.id;
            });

            return {
                ...state,
                list: newlist
            }



        default: return state;
    }
}
export default todoreducer;