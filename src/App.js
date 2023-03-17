import logo from './logo.svg';
import './App.css';
import './component/usedtste/StateTutorial';
import { useState } from 'react';
import './min_project';
import  ReactDOM  from 'react-dom';

// // function App() {

// //       const [inputValue, nweChangeValue]= useState("laxmikant");
// //       console.log(inputValue);

// //       const onChange = (event) =>
// //       {
// //         const newVal = event.target.value;
// //         nweChangeValue(newVal)
// //       }
// //       // 

// //   return (
// //     <div className="App">
// //       <h1>{inputValue}</h1>
// //       <input type="text" value = {inputValue} onChange = {onChange} placeholder="Type Something..." ></input>
// //     </div>
// //   );
// // }

// // export default App;




// fot couter ++ ======================================


function App() {

  const [counter, newChangeValue] = useState(1);
  console.log(counter);

  const update_num = () =>
  { 
    newChangeValue(counter + 1);
  }

  const delete_num = () =>
  {
    newChangeValue(counter - 1);
  }
  
  // ========= new =======
  const fname = "Laxmiant";
  const lname = "Baviskar";
  // ==================


return (
<div className="App">
  <h1>{counter}</h1>
  {/* <input type="text" value = {inputValue} onClick = {onClick} placeholder="Type Something..." ></input> */}
  <button  onClick = {update_num} >Update</button>

  <button onClick={delete_num}>Delete</button><br />

  {/* // ========= new ======= */}
  <h1>first method {fname} {lname}</h1>
  <h1>Second method {fname + lname}</h1>
  <h1>Third method {fname + " " +lname}</h1>
  {/* Template literal */}
  <h1>Fourth method {`${fname} ${lname}`}</h1>  


  <h2>My Age is {10+9}</h2>
  {/* // ========= new ======= */}


</div>
);
}

// ================= greeting on the time changes =====================


// function App()
// {  
  
//   let currDate = new Date(2022, 5, 5, 20);
//   currDate = currDate.getHours();
  
//   let greeting = ' ';
  
//   const cssstyle  = {  };
  
//   if(currDate >= 1 && currDate < 12)
//   {
//       greeting = 'Good Morning';
//       cssstyle.color = 'green;'
//   }
//   else if (currDate >= 12 && currDate < 19)
//   {
//       greeting = 'Good Afternoon';
//       cssstyle.color = 'green'
//   }
//   else
//   {
//       greeting = 'Good Night';
//       cssstyle.color = 'Red';
//   }

   
//      ReactDOM.render(
         
//              <h1>Hello , <span style={cssstyle}> {greeting} </span> </h1>,
//              document.getElementById("root"),
         
//             //  <h1>Good to see you</h1>  
//      );

// };



export default App;

// // export default ReactDOM;

