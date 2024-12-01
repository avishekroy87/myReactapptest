import { useRef, useState } from "react"

const App = () => {
    const fullnameRef = useRef()
    const ageRef = useRef()
    const emailRef = useRef()

    const [formValues, setFormValues] = useState([])

    const handleSubmit = (event) =>{
      event.preventDefault();
      const fname = fullnameRef.current.value
      const age = ageRef.current.value
      const email = emailRef.current.value

      setFormValues(...formValues, {fname: fname, age: age, email:email})
      console.log(fname,age,email)
    }




  return(
    <>
    <div>
      Name: {formValues.fname}
      <br/>
      Age: {formValues.age}
      <br/>
      Email: {formValues.email}
    </div>
      <form onSubmit={handleSubmit}>
      <p>
        Name: <input type="text" name="fullname" ref={fullnameRef} />
      </p>
      <p>
        Age: <input type="text" name="age" ref={ageRef} />
      </p>
      <p>
        Email: <input type="email" name="email" ref={emailRef} />
      </p>
      <button type="submit">Save</button>
    
    </form>
    </>
    )
    
 

}

export default App