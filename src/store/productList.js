const PRODUCT_LIST_INIT = "PRODUCT_LIST_INIT";
const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
const PRODUCT_LIST_ERROR = "PRODUCT_LIST_ERROR";
const initialState = {
  loading: false,
  data: [],
  loadError: null,
};

const productListInit = () => ({
  type: PRODUCT_LIST_INIT,
});

const productListSuccess = (payload) => ({
  type: PRODUCT_LIST_SUCCESS,
  payload,
});
const productListError = (payload) => ({
  type: PRODUCT_LIST_ERROR,
  payload,
});

export const loadProduct = (category) => {
  return async (dispatch, state) => {
    const { loading } = state;

    if (loading) {
      return;
    }
    try {
      dispatch(productListInit());
      const res = await await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await res.json();
      dispatch(productListSuccess(data));
    } catch (err) {
        dispatch(productListError(err))
    }
  };
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case PRODUCT_LIST_INIT: return {
            ...state,
            loading: true,
            data: [],
            loadError: null,
        };
        case PRODUCT_LIST_SUCCESS: return {
            ...state,
            loading: false,
            data: action.payload,
            loadError: null
        };
        case PRODUCT_LIST_ERROR: return {
            ...state,
            loading: true,
            data: [],
            loadError: action.payload
        };
        default:
            return state;
    }
}

export default reducer;