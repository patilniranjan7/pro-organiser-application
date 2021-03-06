import React from "react";
import axios from "axios";
import css from "./Home.module.css";
import {useState , useEffect} from "react";
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'

function Home() {
  const [hide, sethide] = useState(false);
  const [state, setstate] = useState([]);
  useEffect(() =>{
    axios
    .get(`https://pro-or.firebaseio.com/.json`)
    .then((res)=> {

                  setstate(res.data);  
                  if(!res.data)
                  sethide(true);  
                })
    
  },[]);
 console.log("state "+state);   
  
 function  getdata(){
   let name = [];
   let data ="";
   let k =0;

   for(let i in state){
         data= state[i].Name;  
                 name.push(
          <Card key={k} className={css.margin}>
          <Card.Text>
        <Link to={`/home/${i}`} key={i}>
          {data}
          </Link>
          </Card.Text>
          </Card>);
          k++;
   }
   return(name);
 }

  return (
          <>
          { hide? (<div><h3 className = {css.not}>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          You haven't created any boards. Kindly click on the 'Create Board'
        button in the navigation bar to create a board.
          </h3>
          </div>) :
       (<CardColumns>
          {getdata()}
       </CardColumns>)}
   </>
  
  );
}

export default Home;
