import { useState } from "react";


const FormUseState = () => {

    let[formValue,setFormValue] =useState({fName:'',lName:'',password: '',email:'',phone: 0,city:'',gender:''})
    const receivedValue = (inputName,inputValue)=>{
  
        setFormValue(previousValue=>({
            ...previousValue,
            [inputName]:inputValue
            
        }))
        console.log(inputValue)

    }
    const fNameReceive =(e)=>receivedValue("fName",e.target.value)
    const lNameReceive =(e)=>receivedValue("lName",e.target.value)
    const password =(e)=>receivedValue("password",e.target.value)
    const email =(e)=>receivedValue("email",e.target.value)
    const phone =(e)=>receivedValue("phone",e.target.value)
    const city =(e)=>receivedValue("city",e.target.value)
    
   
    const formSubmit = (e)=>{
       e.preventDefault()
      console.log(JSON.stringify(formValue))
    }
    return (
        <div>
            <form onSubmit={formSubmit} className="form">
                <h1>Sign Up Form</h1>
                <br />
             
                <label htmlFor="fName">First Name:</label>
                <input type="text" placeholder="First Name" value={formValue.fName} onChange={fNameReceive}/><br /><br />
                <label htmlFor="lName">last Name:</label>
                <input type="text" placeholder="Last Name" value={formValue.lName} onChange={lNameReceive}/><br /><br />
                <label htmlFor="email">email:</label>
                <input type="email" placeholder="Email Address" value={formValue.email} onChange={email}/><br /><br />
                <label htmlFor="password">password:</label>
                <input type="password" placeholder="password" value={formValue.password} onChange={password}/><br /><br />
                <label htmlFor="phone">phone:</label>
                <input type="text" placeholder="phone number" value={formValue.phone} onChange={phone}/><br /><br />
                <label htmlFor="city">city:</label>
                <select value={formValue.city} onChange={city} >
                    <option value="">Choose your city</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Comilla">Comilla</option>
                </select><br /><br />
                <h3>Gender:</h3>
                <label htmlFor="Male">Male</label>
                <input checked={formValue.gender==="Male"} onChange={()=>{receivedValue("gender","Male")}} type="radio"  name="Male"/>
                <label htmlFor="Female">Female</label>
                <input checked={formValue.gender==="Female"} onChange={()=>{receivedValue("gender","Female")}} type="radio"   name="Female"/><br /><br /><br /><br />
                <input type="submit" value="Submit" className="form-btn"/>
                
            </form>
        </div>
    );
};

export default FormUseState;