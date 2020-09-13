const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 23
}

// Reducer (Pengupdate store, berupa function yang dapat merubah store)
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_AGE":
            return {
                ...state,
                age: state.age + 1
            }
        case "CHANGE_VALUE":
            return {
                ...state,
                value: state.value + action.newValue
            }
        default:
            return state
    }

}

// Store
const store = createStore(rootReducer)
console.log(store.getState());

// Subcription
store.subscribe(() => {
    console.log("store change", store.getState());
})

// Dispatching Action (Proses pemanggilan intruksi yang sediakan oleh Reducer)
store.dispatch({ type: "ADD_AGE" })
store.dispatch({ type: "CHANGE_VALUE", newValue: 20 })
console.log(store.getState());
