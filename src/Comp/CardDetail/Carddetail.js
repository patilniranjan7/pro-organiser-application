import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import styles from "./css.module.css";
import axios from "axios";


function Carddetail(props){
 const [cardDetails, setCardDetails] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const boardid = props.boardid;
  const columnid = props.columnid;
  const cardid = props.cardid;

  useEffect(() => {
    axios
      .get(
        `https://pro-or.firebaseio.com/${boardid}/ColumnList/${columnid}.json`
      )
      .then((res) => setCardDetails(res.data), setIsLoading(false));
  }, [boardid, columnid]);

  return isLoading ? (
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
 
    </div>
  ) : (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.Heading}
        >
          {cardDetails?.Cards[cardid].Title}
          <p className={styles.SubHeading}>in {cardDetails?.Column}</p>
          <button type="button" className="btn btn-primary">
            Edit
          </button>
          &nbsp;
          <button type="button" className="btn btn-danger">
            Archive
          </button>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Description</h5>
        <input
          type="text"
          className="form-control"
          value={cardDetails?.Cards[cardid].Description}
          readOnly
        />
        <hr></hr>
        <h5>Members</h5>
        <p>
          <span className={styles.Members}>
            {cardDetails?.Cards[cardid].Members.split("-")[0]}
          </span>
        </p>
        <hr></hr>
        <h5>Due Date</h5>
        <input
          type="date"
          className="form-control"
          value={cardDetails?.Cards[cardid].Due_Date}
          readOnly
        />
      </Modal.Body>
    </Modal>
  );
}

export default Carddetail;