const initialState = {
    chatData: null
}

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type){
        case 'chatData':
            return {
                ...state, chatData: payload.data
            }
            break;
        default:
            return state;
    }
}