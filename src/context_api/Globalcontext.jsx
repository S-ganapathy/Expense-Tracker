import { createContext, useReducer } from "react";


const store_transaction = {
    values: []
};

export const GlobalContext = createContext();

// provider
export const GlobalProvider = ({ children }) => {

    const reduceFunc=(state,action)=>{
        switch(action.type){
            case "add":
                return{
                    ...state,
                    values:[action.payload,...state.values]
                }

            case "delete":
                return{
                    ...state,
                    values:state.values.filter(obj => obj.id !== action.payload)
                }
            default:
                return state;
        }
        
    }


    // Reducer
    const[state,dispatch]=useReducer(reduceFunc,store_transaction);

    

    return (<>

        <GlobalContext.Provider value={{ transfer: state.values,dispatch }}>
            {children}
        </GlobalContext.Provider>

    </>);
}