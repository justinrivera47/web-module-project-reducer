export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY";
export const CLEAR_MEMORY = "CLEAR_MEMORY";
export const MEMORY_SET = "MEMORY_SET";
export const TOTAL_MEMORY = "TOTAL_MEMORY";

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}

export const memorySet = (total) => {
    return({type:MEMORY_SET, payload:total})
}

export const memory = (mem) => {
    return({type:TOTAL_MEMORY, payload:mem})
}