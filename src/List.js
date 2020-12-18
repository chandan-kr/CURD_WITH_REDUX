import React from "react";
import {useDispatch, useSelector } from "react-redux";
import Address from './address';


const List = (props) => {

  const emp = useSelector((state) => state.empReducers.emp);
  const isEdit = useSelector((state) => state.empReducers.isEdit);
  const listData =
    emp.length > 0 &&
    emp.map((item,index) => (
      <tr className="line">
        <td>{index+1}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.sex}</td>
        <td>{<Address data={{door_no:item.door_no, street:item.street,  city: item.city, state: item.state, zip:item.zip}} /> }</td>
    <td><button className="btn btn-primary" disabled={isEdit?'disabled':''} onClick={()=>edit(index)}>Edit</button> <button className="btn btn-danger"  disabled={isEdit?'disabled':''} onClick={()=>del(index)}>Delete</button></td>
      </tr>
    ));
    const dispatch = useDispatch();

    const edit = (id) => {
      dispatch({ type: "EMP_EDIT_INIT", id: id });
    };
    const del = (id) => {
        dispatch({ type: "EMP_DELETE", id: id });
      };
  return <>
   {emp.length > 0 && <>
   <h2>List</h2>
   <table style={{width:'100%'}}>
   <tr>
        <td>S.No</td>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Email</td>
        <td>gender</td>
        <td>Address</td>
        <td>Actions</td>
      </tr>
      {listData}
    </table></>  }
  </>;
};
export default List;
