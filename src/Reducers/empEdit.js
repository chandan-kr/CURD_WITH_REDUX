const initialState = {
  isEdit:false,
  id:0,
  data:{}
};
  const empReducer = function (state = initialState, action) {
    switch (action.type) {
      case "EMP_ADD":
        return [ ...state,  action.emp ]   ;
      default:
        return state;
    }
  };
  export default empReducer;