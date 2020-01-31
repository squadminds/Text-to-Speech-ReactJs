export const simpleAction = () => (dispatch) => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "this.PaymentResponse.message"
  });
};
