import { LOADING, SUCCESS } from "../actions/productsActions";

const initialState = {
  availableProducts: [],
  allProducts: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case SUCCESS:
      const availableProducts = action.data.filter(
        (product) => product.outOfStock !== true
      );
      return {
        ...state,
        allProducts: action.data,
        loading: false,
        availableProducts: availableProducts,
      };
    default:
      return state;
  }
};
export default reducer;
