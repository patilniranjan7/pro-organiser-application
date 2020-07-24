import React from "react";
import css from "./Css.module.css";
import axios from "axios";
import {useState} from "react"

function CreateBoard() {
  const [val,setval]=useState(false);
  const [val1,setval1]= useState(false);
  function fake(){
     return val1?(<div className={css.center} > <button className={css.color} >fill all data </button></div>):(<div></div>);
  }
 function np(){

   return val?(<div className={css.center} > <button className={css.btn} className={css.color} >Card Added</button></div>):(<div></div>);
 }
  function pushdata(e) {
    var name = document.getElementById("name").value;
    var team = document.getElementById("team").value;
    var type = document.getElementById("type").value;
    console.log(name, team, type);
    if(name === ''|| team === '' || type === '')
    {
      setval1(true);
      setval(false);
    }
    else{
      axios
    .post(`https://pro-or.firebaseio.com/.json`, {
      name: name,
      team: team,
      type: type,
    });
     setval1(false);
     setval(true);
    }
      e.preventDefault();
  }
  return (
    <div className={css.btn}>
      <h2 className={css.head}> Create a Board</h2>

      <form className={css.main} onSubmit={(e) => pushdata(e)}>
        <div>
          <label className={css.name}>Enter a name for your board</label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Agile sprint board "
            className={css.name1}
          />
        </div>

        <div>
          <label className={css.name}>Add your team members</label>
          <input
            type="text"
            id="team"
            placeholder="Add your team (separated by commas) "
            className={css.name1}
          />
        </div>

        <div>
          <label className={css.name}>Enter the type of your board</label>
          <input
            type="text"
            id="type"
            placeholder="e.g. Agile sprint board "
            className={css.name1}
          />
        </div>
        <div >
          <button className={css.btn} type="submit">Create</button>
        </div>
          {np()}
          {fake()}
      </form>
    </div>
  );
}

export default CreateBoard;
