import React, { useState } from "react";
import axios from "axios";


function Form(props) {
  const [inputs, setInputs] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const result = await axios.post('https://myportfolio-8hq0.onrender.com/addMessage', inputs);  //This server is rendering on render
        console.log(result);
    } catch (err) {
        console.log(err);
    }
};

  return (
    <div className="div" style={{ display: "flex", width: "180%" }}>
      <form className="form" onSubmit={handleSubmit}>
        <div className="names">
          <input
            name="fName"
            onChange={handleChange}
            value={inputs.fName}
            type="text"
            required
            placeholder="FIRST NAME*"
          />
          <input
            name="lName"
            onChange={handleChange}
            value={inputs.lName}
            type="text"
            placeholder="LAST NAME*"
            required
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <div className="mail">
          <input
            name="email"
            onChange={handleChange}
            value={inputs.email}
            type="text"
            required
            placeholder="EMAIL*"
          />
          <input
            type="tel"
            name="phone"
            onChange={handleChange}
            value={inputs.phone}
            placeholder="PHONE*"
            required
            style={{ marginLeft: "1rem" }}
          />
        </div>
        <div className="info">
          <input
            name="subject"
            onChange={handleChange}
            value={inputs.subject}
            type="text"
            required
            placeholder="SUBJECT*"
          />
          <textarea
            name="message"
            onChange={handleChange}
            value={inputs.message}
            placeholder="MESSAGE*"
            required
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div className="btns">
          <button className="form-btn close" onClick={props.closeForm}>
            CLOSE
          </button>
          <button className="form-btn send" type="submit" >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
