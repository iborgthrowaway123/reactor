import React, { useState } from "react";
import "./Account.css";
import Http from "../../Services/Http";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

const Account = () => {
    const [state, setState] = useState({
        open: false,
        device: "",
        sex: "",
        age: "",
        ethnicity: "",
        height: "",
        nationality: "",
        languages: "",
        education: "",
        profession: "",
        handedness: "",
        phealth: "",
        mhealth: "",
      });
    
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
    
      const handleDeviceChange = (event) => {
        setState({ ...state, device: event.target.value });
      };
      const handleSexChange = (event) => {
        setState({ ...state, sex: event.target.value });
      };
      const handleAgeChange = (event) => {
        setState({ ...state, age: event.target.value });
      };
      const handleEthnicityChange = (event) => {
        setState({ ...state, ethnicity: event.target.value });
      };
      const handleHeightChange = (event) => {
        setState({ ...state, height: event.target.value });
      };
      const handleNationalityChange = (event) => {
        setState({ ...state, nationality: event.target.value });
      };
      const handleLanguagesChange = (event) => {
        setState({ ...state, languages: event.target.value });
      };
      const handleEducationChange = (event) => {
        setState({ ...state, education: event.target.value });
      };
      const handleProfessionChange = (event) => {
        setState({ ...state, profession: event.target.value });
      };
      const handleHandednessChange = (event) => {
        setState({ ...state, handedness: event.target.value });
      };
      const handlePhealthChange = (event) => {
        setState({ ...state, phealth: event.target.value });
      };
      const handleMhealthChange = (event) => {
        setState({ ...state, mhealth: event.target.value });
      };
      

      const mystyle = {
        backgroundColor: "#eeeeee",
        padding: 20,
        margin: 107,
      };
      const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(2),
            width: 200,
          },
        },
      }));
      const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
   <div className="d-flex flex-column align-items-center justify-content-center">
      <div className="card" style={mystyle}>
         <div className="card-body">
            <h5>Please help us by answering the following questions:</h5>
            <div>
               <TextField
                  id="outlined-password-input"
                  label="Device"
                  autoComplete="current-password"
                  variant="outlined"
                  value={state.device}
                  onChange={handleDeviceChange}
                  />
               <TextField
                  id="outlined-select-currency"
                  select
                  label="Sex"
                  value={state.sex}
                  onChange={handleSexChange}
                  variant="outlined"
                  >
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="transgender">Transgender</option>
                  <option value="other">Other</option>
               </TextField>
               <TextField
                  id="outlined-password-input"
                  label="Age"
                  autoComplete="current-password"
                  variant="outlined"
                  value={state.age}
                  onChange={handleAgeChange}
                  />
            </div>
            <div>
               <TextField
                  id="outlined-select-currency"
                  select
                  label="Ethnicity"
                  value={state.ethnicity}
                  onChange={handleEthnicityChange}
                  variant="outlined"
                  >
                  <option value="White">White</option>
                  <option value="Hispanic or Latino">Hispanic or Latino</option>
                  <option value="Asian or Pacific Islander">Asian or Pacific Islander</option>
                  <option value="Native American or American Indian">Native American or American Indian</option>
                  <option value="Black or African American">Black or African American</option>
                  <option value="Other">Other</option>
               </TextField>
               <TextField
                  id="outlined-password-input"
                  label="Height"
                  autoComplete="current-password"
                  variant="outlined"
                  value={state.height}
                  onChange={handleHeightChange}
                  />
               <TextField
                  id="outlined-password-input"
                  label="Nationality"
                  autoComplete="current-password"
                  variant="outlined"
                  value={state.nationality}
                  onChange={handleNationalityChange}
                  />
            </div>
            <div>
               <TextField
                  id="outlined-password-input"
                  label="Languages Spoken"
                  autoComplete="current-password"
                  variant="outlined"
                  value={state.languages}
                  onChange={handleLanguagesChange}
                  />
               <TextField
                  id="outlined-select-currency"
                  select
                  label="Education"
                  value={state.education}
                  onChange={handleEducationChange}
                  variant="outlined"
                  >
                  <option value="No schooling completed">No schooling completed</option>
                  <option value="Nursery school to 8th grade">Nursery school to 8th grade</option>
                  <option value="Some high school, no diploma">Some high school, no diploma</option>
                  <option value="High school graduate, diploma or the equivalent (for example: GED)">High school graduate, diploma or the equivalent (for example: GED)</option>
                  <option value="Some college credit, no degree">Some college credit, no degree</option>
                  <option value="Trade/technical/vocational training">Trade/technical/vocational training</option>
                  <option value="Associate degree">Associate degree</option>
                  <option value="Bachelor’s degree">Bachelor’s degree</option>
                  <option value="Master’s degree">Master’s degree</option>
                  <option value="Professional degree">Professional degree</option>
                  <option value="Doctorate degree">Doctorate degree</option>
                  <option value="other">Other</option>
               </TextField>
               <TextField
                  id="outlined-password-input"
                  label="Profession"
                  autoComplete="current-password"
                  variant="outlined"
                  value={state.profession}
                  onChange={handleProfessionChange}
                  />
            </div>
            <div>
               <TextField
                  id="outlined-select-currency"
                  select
                  label="Handedness"
                  value={state.handedness}
                  onChange={handleHandednessChange}
                  variant="outlined"
                  >
                  <option value="Right">Right</option>
                  <option value="Left">Left</option>
                  <option value="Ambidextrous">Ambidextrous</option>
               </TextField>
               <TextField
                  id="outlined-select-currency"
                  select
                  label="Physical Health"
                  value={state.phealth}
                  onChange={handlePhealthChange}
                  variant="outlined"
                  >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Somewhat poor">Somewhat poor</option>
                  <option value="Extremely poor">Extremely poor</option>
               </TextField>
               <TextField
                  id="outlined-select-currency"
                  select
                  label="Mental Health"
                  value={state.mhealth}
                  onChange={handleMhealthChange}
                  variant="outlined"
                  >
                  <option value="Excellent">Excellent</option>
                  <option value="Good">Good</option>
                  <option value="Average">Average</option>
                  <option value="Somewhat poor">Somewhat poor</option>
                  <option value="Extremely poor">Extremely poor</option>
               </TextField>
            </div>
         </div>
      </div>
   </div>
</form>
);
};




export default Account;
