const defaultState = [
  { id: 1, title: "Велосипед", count: 5 },
  { id: 2, title: "Самокат", count: 4 },
  { id: 3, title: "Гантели", count: 7 },
  { id: 4, title: "Ракетки", count: 1 },
];

const ADD_COUNT_PRODUCT = "ADD_COUNT_PRODUCT";
const REMOVE_COUNT_PRODUCT = "REMOVE_COUNT_PRODUCT";
const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";

export const productReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_COUNT_PRODUCT:
      return state.map((elem) => {
        if (elem.id === action.payload) {
          elem.count = Math.min(elem.count + 1, 25);
        }
        return elem;
      });
    case REMOVE_COUNT_PRODUCT:
      return state
        .map((elem) => {
          if (elem.id === action.payload) {
            let newCount = Math.max(elem.count - 1);
            return newCount === 0 ? null : { ...elem, count: newCount };
          }
          return elem;
        })
        .filter(Boolean);

    case ADD_NEW_PRODUCT:
      let newProduct = {
        id: Date.now(),
        title: action.payload,
        count: 1,
      };
      return [...state, newProduct];
    default:
      return state;
  }
};

export const addCountAction = (payload) => ({
  type: ADD_COUNT_PRODUCT,
  payload,
});
export const removeCountAction = (payload) => ({
  type: REMOVE_COUNT_PRODUCT,
  payload,
});
export const addNewProductAction = (payload) => ({
  type: ADD_NEW_PRODUCT,
  payload,
});
