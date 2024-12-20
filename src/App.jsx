// import { useRef, useState } from "react"
// import useImageupload from "./hooks/useImageupload"

// const App = () => {
//     const fullnameRef = useRef()
//     const ageRef = useRef()
//     const emailRef = useRef()

//     const [formValues, setFormValues] = useState([])

//     const {imgUrl, fileinputRef, handleImageupload, clearimageUrl} = useImageupload();

//     const handleSubmit = (event) =>{
//       event.preventDefault();
//       const fname = fullnameRef.current.value
//       const age = ageRef.current.value
//       const email = emailRef.current.value
//       const testImge = 

//       setFormValues(...formValues, {fname: fname, age: age, email:email})
//       console.log(fname,age,email)
//     }

    

//     function counterReducer(state = initialState, action){

//       switch(action.type){
//           case 'INC':
//             return {...initialState, count:count + 1};
//           case 'DEC':
//           return {...initialState, count:count - 1};
//           case 'RES':
//           return {initialState};

//           default:
//             return state;

//       }
//     }

//     const initialState = {count:1};

//     const incrementact = {type: 'DEC'};

//     const statevalRed = counterReducer(initialState, incrementact);


//   return(
//     <>
//     {statevalRed}
//     <div>
//       Name: {formValues.fname}
//       <br/>
//       Age: {formValues.age}
//       <br/>
//       Email: {formValues.email}
//     </div>
//       <form onSubmit={handleSubmit}>
//       <p>
//         Name: <input type="text" name="fullname" ref={fullnameRef} />
//       </p>
//       <p>
//         Age: <input type="text" name="age" ref={ageRef} />
//       </p>
//       <p>
//         Email: <input type="email" name="email" ref={emailRef} />
//       </p>
//       <p>
//         Profile:
//         <input type="file" ref={fileinputRef} onChange={handleImageupload}/>
//         {
//           imgUrl && (<img src={imgUrl} style={{ width: '10px', height: '10px' }} />)
//         }
//       </p>
//       <button type="submit">Save</button>
    
//     </form>
//     </>
//     )
    
 

// }

// export default App

import { useReducer } from "react";
import  reducer from './Reducer'
import Person1 from "./components/Person1";
import Person2 from "./components/person2";

const initState = {count:0};

// const reducer = (state, action) => {
//   switch(action.type){
//     case 'increment':
//      return {count: state.count + 1}
//     case 'decrement':
//       return {count: state.count - 1}
//     default:
//         throw new Error();
//   }
// }

const App = () => {

  const [state, dispatchEvent] = useReducer(reducer, initState);
  return(
   <div>
    Counter{state.count}

    <button onClick={() => dispatchEvent({type: 'increment'})}>Increment</button>
    <button onClick={() => dispatchEvent({type: 'decrement'}) }>Decrement</button>

    <Person1 />
    <Person2 /> 
   </div>
  )
}


export default App;