import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import GameHome from './Game_home';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Findwell from './Findwell'



// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// const http = require("http");
// const cors = require("cors");
// app.use(cors());
// const dotenv = require('dotenv');

// const processTemp = require('./mongo');

// dotenv.config();


// app.use(express.json())
// mongoose.connect(process.env.MONGO_URL_N, ()=>console.log('DB connected'));

// const conn = mongoose.createConnection(
//     process.env.MONGO_URL_N, 
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//      }
//   )


// let ProcModel = conn.model('mytable', new mongoose.Schema({
//     person: {
//         type:String,
//         required:true
//     },
//     process: {
//       type:String,
//       required:true
//     },
//     part: {
//         type:String,
//         required:true
//     },         
//     time: {
//         type:String,
//         required:true
//     }        
// }));



// io.on("connection",(socket)=>{
//     //初始資料
//       ProcModel.find({person: id}).then(async (doc) => {
//             let messList = [];
//              let proData = pro.pop();
//         });

    
//     ProcModel.deleteMany({}).then(function(){
//         console.log("Message Data deleted"); // Success
//       }).catch(function(error){
//         console.log(error); // Failure
//     });
    
//     const messData = new messTemp({
//         person:data.author,
//         room: data.room,
//         author: data.author,
//         message: data.message,
//         time: data.time
//     })       
        
//         messData.save();    
// });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/story0" element={<GameHome />}/>
        <Route path="/story1-1" element={<Findwell/>}/>
      </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
