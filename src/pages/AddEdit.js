import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import classes from "./AddEdit.module.css";
import fireDb from "../firebase";

const initialState = {
  name: "",
  email: "",
  contact: "",
};
export const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { id } = useParams();
  const [data, setData] = useState({});
  const isAddMode = !id;

  const { name, email, contact } = state;

  const history = useHistory();

  useEffect(() => {
    const edited = async () => {
      const getAPI = await fetch(
        `https://react-crud-58eae-default-rtdb.firebaseio.com/contacts/${id}.json`
      );
      const response = await getAPI.json();
      setState(response);
    };
    if (!isAddMode) {
      edited();
    }
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !contact) {
      alert("Please provide value in each input field");
    } else {
      if (isAddMode) {
        alert("Contact Added Successfully");
        fetch(
          "https://react-crud-58eae-default-rtdb.firebaseio.com/contacts.json",
          {
            method: "POST",
            body: JSON.stringify(state),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } else {
        alert("Contact Updated Successfully");
        fetch(
          `https://react-crud-58eae-default-rtdb.firebaseio.com/contacts/${id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(state),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      }
      setTimeout(() => history.push("/"), 500);
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  return (
    <div className={classes.formwrapper}>
      <form onSubmit={handleSubmit}>
        <h2>{isAddMode ? "Add Contact" : "Update Contact"}</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name..."
          value={name}
          onChange={handleInputChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email..."
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          id="contact"
          name="contact"
          placeholder="Your Contact..."
          value={contact}
          onChange={handleInputChange}
        />
        <button type="submit">{isAddMode ? "Save" : "Update"}</button>
      </form>
    </div>
  );
};
