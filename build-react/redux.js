const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    value: 0,
    age: 23
}

// Reducer (Pengupdate store, berupa function yang dapat merubah store)
const rootReducer = (state = initialState, action) => {
    return state
}

// Store
const store = createStore(rootReducer)
console.log(store.getState());

// Dispatching Action (Proses pemanggilan intruksi yang sediakan oleh Reducer)


// Subcription