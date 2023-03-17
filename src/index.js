import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ------------------color change as time changes ------------ 

// let currDate = new Date(2022, 5, 5, 15);
// currDate = currDate.getHours();

// let greeting = " ";

// const cssstyle  = {};

// if(currDate >= 1 && currDate < 12)
// {
//     greeting = "Good Morning";
//     cssstyle.color = "green";
// }
// else if (currDate >= 12 && currDate < 19)
// {
//     greeting = "Good Afternoon";
//     cssstyle.color = "Orange";
// }
// else
// {
//     greeting = "Good Night";
//     cssstyle.color = "Red";
// }

// ReactDOM.render(
    
//         <h1>Hello , <span style={cssstyle}> {greeting} </span> </h1>,
//         document.getElementById("root"),
 
// );


// --------------------------------



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
