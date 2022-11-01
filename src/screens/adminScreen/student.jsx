import React from 'react';
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { checkUser, sendData ,getData } from "../../config/firebasemethod";

export default function Student() {

  let getstudentdata=() =>{
   getData(`student/${id}`).then((result)=>{
    console.log(result)
   }).catch((error)=>{
    console.log(error )
   })
  }

  useEffect(() => {
    checkUser()
      .then((res) => {
        console.log(res);
        if (true) {
          setUserId(res);
          getstudentdata();
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>Student</div>
  )
}
