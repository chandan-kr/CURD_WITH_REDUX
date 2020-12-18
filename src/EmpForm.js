import React from "react";
import { Field, reduxForm } from "redux-form";
import { useSelector ,useDispatch} from "react-redux";
import { connect } from "react-redux";

let EmpForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const dispatch = useDispatch();

  const isEdit = useSelector((state) => state.empReducers.isEdit);
  const cancel = () => {
    dispatch({ type: "CLEAR_EDIT", id: '' });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="formDes">
        <div className="form-group fd">
          <div className="form-group">
            <label>First Name</label>
            <div>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <div>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email</label>
            <div>
              <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Sex</label>
            <div className="form-group">
              <label>
                <Field name="sex" component="input" type="radio" value="male" />{" "}
                Male
              </label>
              <label>
                <Field
                  name="sex"
                  component="input"
                  type="radio"
                  value="female"
                />{" "}
                Female
              </label>
            </div>
          </div>
        </div>

        <div className="form-group fd">
          <div>
            <label htmlFor="employed">Address</label>
          </div>
          <div>
            <label htmlFor="employed">Door No:</label>
            <div>
              <Field
                name="door_no"
                id="door_no"
                component="input"
                type="input"
              />
            </div>
          </div>
          <div>
            <label htmlFor="employed">Street</label>
            <div>
              <Field name="street" id="street" component="input" type="input" />
            </div>
          </div>
          <div>
            <label htmlFor="employed">City</label>
            <div>
              <Field name="city" id="city" component="input" type="input" />
            </div>
          </div>
          <div>
            <label htmlFor="employed">State</label>
            <div>
              <Field name="state" id="state" component="input" type="input" />
            </div>
          </div>
          <div>
            <label htmlFor="employed">ZipCode</label>
            <div>
              <Field name="zip" id="zip" component="input" type="input" />
            </div>
          </div>
          <div>
            <label>Address Type</label>
            <div>
              <label>
                <Field
                  name="address_type"
                  component="input"
                  type="radio"
                  value="office"
                />{" "}
                Office
              </label>
              <label>
                <Field
                  name="address_type"
                  component="input"
                  type="radio"
                  value="work"
                />{" "}
                Work
              </label>
              <label>
                <Field
                  name="address_type"
                  component="input"
                  type="radio"
                  value="other"
                />{" "}
                Other
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="btn btn-lg btn-primary mr-5"
          type="submit"
          disabled={pristine || submitting}
        >
          {isEdit ? "Update" : "Add"}
        </button>
        <button
          className="btn  btn-lg btn-warning"
          type="button"
          disabled={isEdit?'':( pristine || submitting)}
          onClick={!isEdit ? reset : cancel}
        >
         { isEdit ? 'Cancel' : 'Clear'}
        </button>
      </div>
    </form>
  );
};

EmpForm = reduxForm({
  form: "simple",
  enableReinitialize: true,
})(EmpForm);
EmpForm = connect(
  (state) => ({
    initialValues: state.empReducers.data,
  }),
  { load: (state) => state.empReducers.data }
)(EmpForm);

export default EmpForm;
