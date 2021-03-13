const INITIAL_STATE = {
    isSignedIn: null
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true };
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false };
        default:
            return state;
    };
}