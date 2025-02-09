import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, CLEAR_MEMORY, MEMORY_SET, TOTAL_MEMORY } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: 0
            })

        case(CLEAR_MEMORY):
            return ({
                ...state,
                memory: 0
            })

        case(MEMORY_SET):
            return ({
                ...state,
                memory: action.payload
            })

        case(TOTAL_MEMORY):
            return ({
                ...state,
                total: calculateResult(state.total, action.payload, state.operation)
            })
            
        default:
            return state;
    }
}

export default reducer;