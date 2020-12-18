const initialState ={ 
emp: [],
isEdit:false,
id:0,
data:{}
};
  const empReducer = function (state = initialState, action) {
    switch (action.type) {
      case "EMP_ADD":
        return { ...state,  emp: [...state.emp, action.emp] }  ;
      case "EMP_EDIT_INIT":
        return { ...state,  isEdit: true, id:action.id,data:state.emp[action.id]  }  ;
      case "EMP_EDIT":{
          state.emp[state.id]=action.emp;
          return { ...state,   isEdit: false, id:'',data:{}  }  ;
    
      }
      case "CLEAR_EDIT":{
        return { ...state,   isEdit: false, id:'',data:{}  }  ;
      }
      case "EMP_DELETE":{
        return {
          emp: [
            ...state.emp.slice(0, action.id),
            ...state.emp.slice(action.id+ 1)
          ]
        }
     
    }

  
      default:
        return state;
    }
  };
  export default empReducer;