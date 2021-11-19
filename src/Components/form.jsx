import React, { useState } from "react";


const Form = ({ handleForm }) => {
  const [userName, setUserName] = useState("");

  const handleOnChange = (event) => setUserName(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm(userName);
    setUserName("");
  };

  return (
    <div>
      <div className="continer">
        <div className="row  justify-content-center mx-auto offset ">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-2 mt-4">
              <input
                value={userName}
                onChange={handleOnChange}
                type="text"
                className="form-control"
                placeholder="Enter Git username"
                required
              />
              <div className="input-group-append">
                <button className="btn btn-primary">ADD</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
