import { AddCountryConst,DeleteCountryConst,GetTypeConst } from '../constants';



export function AddCountry(name) {
    const action={
        type: AddCountryConst,
        name
    }
    return action;
}

export const deleteCountry=(id)=>{
    return{
        type: DeleteCountryConst,
        id,
    }
}

export function GetType(text) {
    const action={
        type: GetTypeConst,
        text
    }
    return action;
}