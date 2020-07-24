import React from 'react';
import Modal from "react-bootstrap/Modal";
import {useEffect, useState} from "react";
import Addcard from "../Addcard/Addcard";
import css from "../Addcol/Addcol.module.css";
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
//import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css";

function Addcol(props){
  var np = [];
  var name = "";
  var member = props.member;
  console.log(member);
  for(let i in props.data)
    console.log(props.data[i]);

  function Delete(){


  }
  function card(){
      for(let i in props.data){
               name = props.data[i].name;
               console.log(name);
              np.push(
                <div className = {css.box}>
                      <div className = { css.head}>
                            <h4 className = {css.name}>
                            {name}
                            </h4>
                            <div className = {css.right} onClick={Delete}><DeleteForeverRoundedIcon/></div>
                      </div>
                      <div className = { css.card}>
                          {<Addcard />}
                          
                      </div>
                </div>
              );
      }   
    return np;
  }
  
 
  return (<>
            <div className = {css.body}>
              {card()}
            </div>
         </>);
 
}


export default(Addcol);