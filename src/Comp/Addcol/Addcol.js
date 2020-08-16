import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./Addcol.module.css";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


function Addcol(props){

  function addColumn() {
    var key = props.match.params.id;
    var ColumnName = document.getElementById("column_name").value;
    axios
      .post(
        `https://pro-or.firebaseio.com/${key}/ColumnList/.json`,
        {
          Column: ColumnName,
        }
      )
      .then(props.updateboard)
      .then(props.onHide());
  }
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.Heading}
        >
          Add Column
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Enter a column name</label>
            <input
              type="text"
              className="form-control"
              id="column_name"
              required
            />
          </div>
          <button
            type="button"
            id="CreateColumn"
            className="btn btn-primary"
            style={{ float: "right" }}
            onClick={() => addColumn()}
          >
            Add Column
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default withRouter (Addcol);