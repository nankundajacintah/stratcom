import React, { useState , useEffect} from "react";
import "./CSS/Login.css";
import {  Link, useHistory, useLocation} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Box, FormControl } from '@material-ui/core';
import * as Yup from 'yup'
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';





const Login = ()=>{
  const location =  useLocation();
  // to move back to the cartscrenn return <Redirect to={state?.from || '/'} />

  const history = useHistory();



  //login here

  
  //login here
      {/*signup details */ }
  const initialValues = {
    
    email: "",
    password: "",

  }
  const SignUpSchema = Yup.object().shape({
    
    email: Yup.string().email().required("Email is required"),
    password: Yup.string()
      .required("Password is required"),


  });
  const submitValues = (values, resetForm) => {
    //alert(JSON.stringify(values))
    const payload ={
      checkPassword:values.password,
      history
    }


    resetForm({values:""})
  }
  const [passwordType, setPasswordType] = useState(true)
  const [confirmPassword , setConfirmPassword] = useState(true)
  const changeVisibility = () => {
    alert('am changing')
    passwordType === 'password' ? setPasswordType('text') : setPasswordType('password')
  }
  {/*signup details */ }
    return (
         <div className="login">
      <div className="login__area">
        <div className="login__details">
          <div className="login__image">
            
            <div className="login__imageArea"
             style = {{
              backgroundSize: "cover",
              backgroundImage: `url(${'https://t3.ftcdn.net/jpg/01/22/49/12/240_F_122491286_MpvBYUY367LCCCLJ9pSppjJQpGSQEHVQ.jpg'})`,
              height: "50vh",
              width:"100%",
              opacity:0.8,
              borderRadius:"20px 20px 0 0px",
              zIndex:-1
              
             }}
            >
              <div className="login__imageAreaCreate">
                <Link to="/">
              
                </Link>
             
              <h2 style={{ color:"#fff" }}>Login</h2>


              </div>
            
              
            </div>

            
          </div>
          <div className="login__detail">
            
 {/*signup form */}
 <Formik
 validationSchema={SignUpSchema}
 initialValues={initialValues}
 onSubmit={(values, {resetForm}) => submitValues(values, resetForm)}
>
 {
   ({ errors, touched }) => (
     <Box>
         <Form className="app__formLogin">
        

       {/*email */}
       <FormControl className="login__email">
         <Field
           name="email"
           type="email"
           as={TextField}
           variant={!errors.email && touched.email ? "filled" : "outlined"}
           error={errors.email && touched.email}
           label="Email"
           placeholder="enter email"
           size="small"
            />
         {errors.email && touched.email &&
           <ErrorMessage name="email" component="span" className="error" />}
       </FormControl>

       <FormControl className="login__password">

         {/*password */}
         <Field
           name="password"
           as={TextField}
           label="Password"
           size="small"
           type={passwordType ? "password" : "text"}
           InputProps={{
             endAdornment: (
               <InputAdornment position="end">
                 <IconButton
                 size="small"
                   onClick={() => setPasswordType(!passwordType)}
                 >
                   {passwordType ? <VisibilityOff /> : <Visibility />
                   }
                 </IconButton>

               </InputAdornment>
             ),
           }}
           variant={!errors.password && touched.password ? "filled" : "outlined"}
           error={errors.password && touched.password}
           placeholder="enter password" />
         {errors.password && touched.password &&
           <ErrorMessage name="password" component="span" className="error" />}
       </FormControl>
       
         <FormControl className="login__button">
         <Button
           type="submit"
           variant="contained"
           color="primary">Login</Button>

       </FormControl>
        
        <div className="login__haveAccount">
        <h6>Dont Have  An account? 
          <Link to = "/jacinta/signup">
            <span>Register</span>
          </Link>
        </h6>



        </div>

        

     </Form>
       
      
     </Box>)
 }

</Formik>

{/*signup form */}

          </div>
        </div>
      </div>

    </div>


    )

}
export default Login