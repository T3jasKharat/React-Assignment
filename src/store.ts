// src/store.ts

import { createStore } from 'redux';

// Define initial state
const initialState = {
  aiData: null,
};

// Define reducer function
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_AI_DATA':
      return { ...state, aiData: action.payload };
    default:
      return state;
  }
};

// Create Redux store
const store = createStore(reducer);

export default store;
