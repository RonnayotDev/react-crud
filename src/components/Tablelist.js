import React from "react";
import { Link } from "react-router-dom";
import classes from "./Tablelist.module.css";

export const Tablelist = (props) => {
  return (
    <>
      {props.loadedContact.map((contact, index) => {
        return (
          <tr key={index}>
            <th>{index + 1}</th>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.contact}</td>
            <td>
              <Link to={`/update/${contact.id}`}>
                <button className={classes.btnedit}>Edit</button>
              </Link>
              <button
                className={classes.btndelete}
                onClick={() => props.onDelete(contact)}
              >
                Delete
              </button>
              <Link to={`/view/${contact.id}`}>
                <button className={classes.btnview}>View</button>
              </Link>
            </td>
          </tr>
        );
      })}
    </>
  );
};
