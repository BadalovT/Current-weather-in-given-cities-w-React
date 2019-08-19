
const AddCountryReducer = (action)=>{
    return{
        name: action.name,
        id: Math.random(),
    }
}

const removeCountry=(state,id)=>{
    var a =  state.filter(item=> item.id !== id)
    return a;
}


export default function Reducer(state=[],action) {
    let reducer = null;
    switch (action.type) {
        case "AddCountryConst":
            reducer = [...state,AddCountryReducer(action)];
            return(reducer)
        case "DeleteCountryConst":
            reducer = removeCountry(state,action.id)
            return reducer;
        default:
            return state;
    }
}