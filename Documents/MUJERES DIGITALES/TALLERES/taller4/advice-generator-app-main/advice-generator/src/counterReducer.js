const ADVICE_API_URL = 'https://api.adviceslip.com/advice';

const initialState = {
  currentId: 0,
  fetchedRandomId: 0,
  apiUrl: ADVICE_API_URL,
};

const FETCH_NEXT_ADVICE = 'FETCH_NEXT_ADVICE';
const FETCH_PREVIOUS_ADVICE = 'FETCH_PREVIOUS_ADVICE';
const SET_RANDOM_ID = 'SET_RANDOM_ID';

const actions = {
  [FETCH_NEXT_ADVICE]: (state) => ({ ...state, currentId: state.fetchedRandomId + 1 }),
  [FETCH_PREVIOUS_ADVICE]: (state) => ({ ...state, currentId: state.fetchedRandomId - 1 }),
  [SET_RANDOM_ID]: (state, action) => ({ ...state, fetchedRandomId: action.payload }),
};

const adviceReducer = (state = initialState, action) => {
  const handler = actions[action.type];
  return handler ? handler(state, action) : state;
};

export { adviceReducer, FETCH_NEXT_ADVICE, FETCH_PREVIOUS_ADVICE, SET_RANDOM_ID, initialState }; 
