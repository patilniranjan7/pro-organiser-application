import React, { useEffect, useState } from "react";
import axios from "axios";
import CSS from "./Demo.module.css";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import Addcolumn from "../../Comp/Addcol/Addcolumn"
// axios 
  //     .get(`https://pro-or.firebaseio.com/.json`)
// axios.delete(`https://pro-or.firebaseio.com/${store}.json`);
function Demo(props){
 const [addcolumn,setaddcolumn]= useState(false);
 const nam = props.match.params.np;
 const [addcol,setaddcol] = useState(false);
 //console.log(nam);
 const[board,setboard] = useState({});
 const [update,setupdate]=useState(0);


useEffect(() => {
  axios
      .get(`https://pro-or.firebaseio.com/${nam}.json`)
      .then((res)=>  
        {
         setboard(res.data);
         }) 
 
},[update]);

 function Delete(){
   axios.delete(`https://pro-or.firebaseio.com/${nam}.json`);
   // route to home
 }
 
 function set(){//visibility on/off
  
   if(addcol)
   setaddcol(false);
   else
   setaddcol(true);
 }

 function Addcol(){
   var name = document.getElementById("column_name").value;
   console.log("Col_name"+name);
   
   //let x = update++;
   if(name === ""){
          alert("Enter a column name");
   }
   else
   {
   axios
          .post(
            `https://pro-or.firebaseio.com/${nam}/Col/.json`,
            {
               name : name// column name 
            }
          );
      set();
    }  
    setupdate((n) =>n+1);
 }
  return(
  <>
    <div className={ CSS.body}>

       <Button variant="outline-danger" className = {CSS.btn} onClick = {Delete}>
         Delete Board
        </Button>
        <div className = {CSS.B_name}><h3>{board.name}</h3></div>
        <hr />
        <div className = {CSS.content}>
        {(board.Col)? 
            (<Addcolumn 
                  data={board.Col}
                  member={board.team}
                  update={()=>setupdate((n) => n+1)}
              />)
            :(<div></div>)
         }
        <div className={CSS.addcol} type="text" /*id="column_name" */onClick = {set}> 
                Add a column
        </div>
        </div>
          <div >
            <Modal className={CSS.Addcol} show={addcol}  onHide={set}>
                  <Modal.Header closeButton>
                    <div className={CSS.m_head}>Add column</div>
                  </Modal.Header>
                  <Modal.Body className={CSS.m_body}> 
                    <form >
                      <div className= {CSS.sugetion}>
                              Enter a column name :-
                       </div>
                        <input id = "column_name" />
                      
                       <div>
                        <Button className={CSS.btn1} id="CreateColumn" onClick={Addcol}>
                              Add Column   
                        </Button>
                        </div>
                    </form>
                  </Modal.Body>
            </Modal>
            </div>
    </div>                      
  </>
  );
}

export default Demo;


   