export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";

export const loading = () => ({
  type: LOADING,
});

export const success = (products) => ({
  type: SUCCESS,
  data: products,
});
