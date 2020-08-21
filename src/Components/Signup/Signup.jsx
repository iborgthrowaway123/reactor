import React, { useState } from "react";
import Http from "../../Services/Http";
import Snackbar from "@material-ui/core/Snackbar";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import "./Signup.css";


const Signup = () => {
  const [state, setState] = useState({
    open: false,
    email: "",
    password: "",
  });

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  const doSignup = (event) => {
    event.preventDefault();
    const { email, password } = state;
    const url = "http://127.0.0.1:8080/api/users";
    Http.post(url, { email, password })
      .then((response) => {
        setState({ ...state, open: true, message: response.message });
        setTimeout(() => {
          setState({ ...state, open: false, message: "" });
        }, 6000);
      })
      .catch((error) => {
        setState({ ...state, open: true, message: error.message });
        setTimeout(() => {
          setState({ ...state, open: false, message: "" });
        }, 6000);
      });
  };

  const handleEmailChange = (event) => {
    setState({ ...state, email: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setState({ ...state, password: event.target.value });
  };

  const mystyle = {
    backgroundColor: "#eeeeee",
    padding: 20,
    margin: 107,
  };

  const words = {
    color: "red",
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
   <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="card" style={mystyle}>
         <div className="card-body">
            <h5><center>Register</center></h5>
            <Grid container direction ={"column"} spacing={5}>
               <Grid item>
                 <div>
                 <input name="email" className="signupemail"
                  value={state.email} 
                  type="email" 
                  placeholder="Email"
                  onChange={handleEmailChange} 
                  ref={register({ required: true , pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    }
                })} />
                 </div>
                <div>
                {errors.email && errors.email.type === "required" && <p style={words}>Required field</p>}
                  {errors.email && errors.email.type === "pattern"  && <p style={words}>Invalid email address</p>}
                </div>
               </Grid>
               <Grid item>
                 <div>
                  <input name="password" className="signuppassword"
                  type="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={handlePasswordChange} 
                  ref={register({ requried: true, minLength: 6 })} />
                  </div>
                  <div>
                  {errors.password && errors.password.type === "required" && <p style={words}>Required field</p>}
                  {errors.password && errors.password.type === "minLength" && <p style={words}>Minimum length of 6</p>}
                  </div>
               </Grid>
               <Grid item>
                  <div align="center">
                     <button type="submit" class="btn btn-primary">Sign up</button>
                  </div>
               </Grid>
            </Grid>
         </div>
      </div>
   </div>
   <Snackbar
      autoHideDuration={6000}
      open={state.open}
      message={state.message}
      />
</form>
);
};

export default Signup;