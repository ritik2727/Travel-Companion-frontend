import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link, Redirect } from "react-router-dom";
import { EditUser, getCategory, getUser, updateCategory, updateUser } from "./apiAdmin";
import { Form, Button } from "react-bootstrap";
import Colors from "../core/Colors";
// {category: ["5cd0258f2793ec6e100bc191"], price: []}
// http://localhost:3000/admin/category/update/5cd0258f2793ec6e100bc191
const UpdateUser = ({ match }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    error: "",
    redirectToProfile: false,
    formData: "",
  });
  const [role, setRole] = useState(0);

  // destructure user and token from localStorage
  const { user, token } = isAuthenticated();

  const { name, email, error, redirectToProfile } = values;

  const init = (customerId) => {
    getUser(customerId, user._id, token).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        // populate the state
        setRole(data.role)
        setValues({
          ...values,
          name: data.name,
          email: data.email,
          role: data.role,
        });
      }
    });
  };

  useEffect(() => {
    init(match.params.customerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const submitCategoryForm = (e) => {
    e.preventDefault();
    // update with ? you should send category name otherwise what to update?
    const data = {
      name: name,
      email:email,
      role:role
    };
    console.log(data);
    EditUser(match.params.customerId, user._id, token,data).then(
      (data) => {
        if (data.error) {
          console.log(data.error)
          setValues({ ...values, error: data.error });

          setRole(data.role);
        } else {
          console.log(data.name)
          setValues({
            ...values,
            name: data.name,
            email:data.email,
            role:data.role,
            error: false,
            redirectToProfile: true,
          });
          setRole(data.role);
        }
      }
    );
  };
  const updateCategoryForm = () => (
    <div
      className="card p-3 my-4"
      style={{
        backgroundColor: "rgb(34 43 69)",
        borderBottom: "#F037A5",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))",
        boxShadow: "rgb(0 0 0 / 25%) 0px 3px 6px 0px",
        borderRadius: 15,
        overflow: "hidden",
        // marginTop:'2rem'
      }}
    >
      <h3 className="text-center" style={{ color: Colors.orange }}>
        Update User Form
      </h3>
      <form onSubmit={submitCategoryForm}>
        <div className="form-group">
          <label className="text" style={{ color: Colors.white }}>
            Name
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("name")}
            value={name}
            name="name"
            autoFocus
            required
          />
          <label className="text" style={{ color: Colors.white,marginTop:'1em' }}>
            Email
          </label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("email")}
            value={email}
            name="email"
            autoFocus
            required
          />
          {/* <input
            type="hidden"
            name="is_active"
            value={role}
            onChange={(e) => {
                console.log(e.target.value);
              setRole(e.target.value);
             
            }}
          />
          <input
            type="checkbox"
            name="is_active"
            value="1"
            onChange={(e) => setRole(e.target.value)}
          /> */}
          <Form.Group controlId="isadmin" style={{ marginBottom: "1em",marginTop:'1em'  }}>
            <Form.Check
              style={{ color: Colors.white }}
              type="checkbox"
              label="Is Admin"
              checked={role === 0 ? false : true}
              name="role"
              onChange={(e) => setRole(e.target.checked === true ? 1 : 0)}
              // onChange={handleChange("role")}
            ></Form.Check>
          </Form.Group>
        </div>
        <button
          className="btn "
          style={{ backgroundColor: Colors.orange, color: Colors.white }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );

  // const updateCategoryForm = () => (
  //     <div className="wrap-login100 p-l-85 p-r-85 p-t-55 p-b-55">
  //         <form className="mb-5" onSubmit={submitCategoryForm}>
  //             <span className="login100-form-title p-b-32 m-b-7">Update Category Form</span>
  //             <span className="txt1 p-b-11">Category Name</span>
  //             <br />
  //             <br />
  //             <div className="wrap-input100 validate-input m-b-36">
  //                 <input
  //                     onChange={handleChange('name')}
  //                     value={name}
  //                     className="input100"
  //                     type="text"
  //                     required
  //                     name="name"
  //                 />
  //             </div>
  //             <div className="w-size25">
  //                 <button type="submit" className="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4">
  //                     Save Changes
  //                 </button>
  //             </div>
  //         </form>
  //     </div>
  // );

  const showError = () => (
    <div
      className={"alert alert-danger my-3"}
      role="alert"
      style={{ display: error ? "" : "none" }}
    >
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      {error}
    </div>
  );

  const redirectUser = () => {
    if (redirectToProfile) {
      if (!error) {
        return <Redirect to="/admin/users" />;
      }
    }
  };

  const goBackBTN = () => {
    return (
      <div className="my-5 p-3 ">
        <Link
          to="/admin/users"
          className="text"
          style={{ color: Colors.realorange }}
        >
          Back To Admin Home
        </Link>
      </div>
    );
  };

  return (
    <Layout
      title={`Hi ${user.name}`}
      description={`This is Update Product Action Page`}
      className="container-fluid"
    >
      <div className="row">
        <div className="col-md-8 offset-md-2 m-b-250 mb-5">
          {showError()}
          {updateCategoryForm()}
          {goBackBTN()}
          {redirectUser()}
        </div>
      </div>
    </Layout>
  );
};

export default UpdateUser;
