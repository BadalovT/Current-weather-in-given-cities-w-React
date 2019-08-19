


export default function Reducer(state=[],action) {
    let reducer = null;
    switch (action.type) {
        case "GetTypeConst":
                reducer = action.text
                return reducer;
        default:
            return state;
    }
}