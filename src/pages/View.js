import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import classes from "./View.module.css";

export const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://react-crud-58eae-default-rtdb.firebaseio.com/contacts/${id}.json`
    )
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setUser(data)
    })
  },[id])

  return (
    <div className={classes.container}>
      <div className={classes.header}>
      <h2>User Contact Detail</h2>
      </div>
      <div className={classes.body}>
        <p><span>ID</span>: {id}</p>
        <p><span>Name</span>: {user.name}</p>
        <p><span>Email</span>: {user.email}</p>
        <p><span>Contact</span>: {user.contact}</p>
      </div>
      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};
