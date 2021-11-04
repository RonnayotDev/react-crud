import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import { Tablelist } from "../components/Tablelist";

export const Home = () => {
  const [loadedContact, setLoadedContact] = useState([]);
  useEffect(() => {
    fetch("https://react-crud-58eae-default-rtdb.firebaseio.com/contacts.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const contacts = [];

        for (const key in data) {
          const contact = {
            id: key,
            ...data[key],
          };
          contacts.push(contact);
        }
        setLoadedContact(contacts);
      });
  }, []);

  const onDelete = (contact) => {
    if (window.confirm("Are you sure ?")) {
      fetch(
        `https://react-crud-58eae-default-rtdb.firebaseio.com/contacts/${contact.id}.json`,
        {
          method: "DELETE",
        }
      ).then((response) => {
        setLoadedContact(
          loadedContact.filter((val) => {
            return val.id !== contact.id;
          })
        );
      });
    }
  };
  return (
    <div className={classes.container}>
      <h1>Contact Users</h1>
      <div className={classes.overflow}>
      <table className={classes.tablewrap}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <Tablelist loadedContact={loadedContact} onDelete={onDelete} />
        </tbody>
      </table>
      </div>
    </div>
  );
};
