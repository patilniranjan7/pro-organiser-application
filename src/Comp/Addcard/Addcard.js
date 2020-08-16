import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./Addcard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Addcard(props){
 function addCardHandler() {
    const { columnid } = props;
    const { boardid } = props;
    const {mem} = props;
     var title = document.getElementById("title").value;
    var members = document.getElementById("team").value;
    var description = document.getElementById("description").value;
    var duedate = document.getElementById("due_date").value;
    console.log(mem);
    if (
      title === "" ||
      members === "" ||
      description === "" ||
      duedate === ""
    ) {
      alert("Please fill all fields!");
    } else {
      axios
        .post(
          `https://pro-or.firebaseio.com/${boardid}/ColumnList/${columnid}/Cards/.json`,
          {
            Title: title,
            Members: members,
            Description: description,
            Due_Date: duedate,
          }
        )
        .then(props.updateboard)
        .then(props.onHide());
    }
  }

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.Heading}
        >
          Add Card
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">
              Enter a title for your task
            </label>
            <input
              type="text"
              id="title"
              className="form-control"
              placeholder="e.g. Add a new icon"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">
              Choose members for this task (select multiple,if needed)
            </label>
                          <select className="form-control" id="team" multiple>
              <option>NP-Niranjan Patil</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">
              Add the description for your task
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Add your description here"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlInput1">
              Select due-date for this task
            </label>
            <input
              type="date"
              className="form-control"
              id="due_date"
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addCardHandler()}
          >
            Add Card
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}



export default Addcard;