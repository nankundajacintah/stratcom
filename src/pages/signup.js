import React, { useState, useEffect } from "react";
import "./CSS/SignUp.css";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Box, FormControl } from '@material-ui/core';
import * as Yup from 'yup'
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';



const SignUp = () => {

  //student or admin
  const [isStudent, setIsStudent] = useState(true)
  const [student, setStudent] = useState('student')


  {/*students */ }
  const studentsInitialValues = {
    studentNo: "",
    email: "",
    password: "",
    confirmPassword: ""
  }
  const SignUpStudentsSchema = Yup.object().shape({
    studentNo: Yup.string()
      .min(2, "name is too short")
      .required("student number is required"),

    email: Yup.string().email().required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/, 'password should contain both uppercase and lowercase letters')
      .min(5, "Password should 6 characters long "),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')

  });
  {/*students */ }

  {/*adminstrator */ }
  const adminInitialValues = {
    employeeID: "",
    adminEmail: "",
    adminPassword: "",
    adminConfirmPassword: ""
  }
  const SignUpAdminSchema = Yup.object().shape({
    employeeID: Yup.string()
      .min(2, "name is too short")
      .required("employee ID is required"),

    adminEmail: Yup.string().email().required("Email is required"),

    adminPassword: Yup.string()
      .required("Password is required")
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/, 'password should contain both uppercase and lowercase letters')
      .min(5, "Password should 6 characters long "),
    adminConfirmPassword: Yup.string()
      .oneOf([Yup.ref('adminPassword'), null], 'Passwords must match')

  });
  const submitAdminValues = (values, resetForm) => {


   alert('here in admin')
    resetForm({ values: "" })

  }
  {/*administrator */ }

  const submitStudentValues = (values, resetForm) => {

    alert('Here')

    resetForm({ values: "" })

  }
  const [passwordType, setPasswordType] = useState(true)
  const [confirmPassword, setConfirmPassword] = useState(true)

  const changeVisibility = () => {
    alert('am changing')
    passwordType === 'password' ? setPasswordType('text') : setPasswordType('password')
  }

  const handleRadioChange = (event) => {
    setStudent(event.target.value);
    if (event.target.value === 'student') {
      setIsStudent(true)

    }
    else {
      setIsStudent(false)
    }

  };

  //payment method



  {/*signup details */ }
  return (
    <div className="signup">
      <div className="signup__area">
        <div className="signup__details">
          <div className="signup__image">

            <div className="signup__imageArea"
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${'https://t4.ftcdn.net/jpg/00/81/44/13/240_F_81441382_VW6duAsU4TH2DLA78sgiQkiPDfHXpGwB.jpg'})`,
                height: "40vh",
                width: "100%",
                opacity: 0.8,
                borderRadius: "20px 20px 0 0px",
                zIndex: -1

              }}
            >
              <div className="signup__imageAreaCreate">


                <h2 style={{ color:"#fff" }}>Create An Account</h2>


              </div>

            </div>


          </div>
          <div className="signup__detail">
            {/*radio buttons */}
            <FormControl className="signup__phoneNumber">
              <RadioGroup aria-label="quiz" name="student" value={student} onChange={handleRadioChange}>
                <FormControlLabel value="student" control={<Radio />} label="Student" />
                <FormControlLabel value="admin" control={<Radio />} label="Administrator" />
              </RadioGroup>
              {/*radio buttons */}

            </FormControl>
            {/*radio buttons */}

            {/*signup form */}
            {
              isStudent ?
                (
                  <Formik
                    validationSchema={SignUpStudentsSchema}
                    initialValues={studentsInitialValues}
                    onSubmit={(values, { resetForm }) => submitStudentValues(values, resetForm)}
                  >
                    {
                      ({ errors, touched, isSubmitting }) => (
                        <Box>
                          <Form className="app__form">
                            {/*firstname */}
                            <FormControl className="signup__firstName">
                              <Field name="studentNo"
                                as={TextField}
                                fullWidth={true}
                                className="mobile__viewstudentNo"
                                variant={!errors.studentNo && touched.studentNo ? "filled" : "outlined"}
                                error={errors.studentNo && touched.studentNo}
                                placeholder="enter first Name"
                                size="small"
                                label="studentNo" />

                              {errors.studentNo && touched.studentNo &&
                                <ErrorMessage name="studentNo" component="span" className="error" />}


                            </FormControl>


                            {/*email */}
                            <FormControl className="signup__email">
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

                            <FormControl className="signup__password">

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
                            {/*confirm password */}

                            <FormControl className="signup__confirmPassword">
                              <Field
                                name="confirmPassword"
                                type={confirmPassword ? "password" : "text"}
                                size="small"
                                as={TextField}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        size="small"
                                        onClick={() => setConfirmPassword(!confirmPassword)}
                                      >
                                        {confirmPassword ? <VisibilityOff /> : <Visibility />
                                        }
                                      </IconButton>

                                    </InputAdornment>
                                  ),
                                }}
                                variant={!errors.confirmPassword && touched.confirmPassword ? "filled" : "outlined"}
                                error={errors.confirmPassword && touched.confirmPassword}
                                label="confirm Password"
                                placeholder="confirm password" />
                              {errors.confirmPassword && touched.confirmPassword &&
                                <ErrorMessage name="confirmPassword" component="span" className="error" />}
                            </FormControl>

                            <FormControl className="signup__button">
                              <Button
                                type="submit"
                                variant="contained"
                                disabled={isSubmitting}
                                color="primary"
                              >Register</Button>

                            </FormControl>

                            <div className="signup__haveAccount">
                              <h6>Already Have an Account?
                                <Link to="/jacinta/login">
                                  <span>login</span>
                                </Link>
                              </h6>



                            </div>


                          </Form>


                        </Box>)
                    }

                  </Formik>
                )

                : (
                  <Formik
                    validationSchema={SignUpAdminSchema}
                    initialValues={adminInitialValues}
                    onSubmit={(values, { resetForm }) => submitAdminValues(values, resetForm)}
                  >
                    {
                      ({ errors, touched, isSubmitting }) => (
                        <Box>
                          <Form className="app__form">
                            {/*firstname */}
                            <FormControl className="signup__firstName">
                              <Field name="employeeID"
                                as={TextField}
                                fullWidth={true}
                                className="mobile__viewemployeeID"
                                variant={!errors.employeeID && touched.employeeID ? "filled" : "outlined"}
                                error={errors.employeeID && touched.employeeID}
                                placeholder="enter employee id"
                                size="small"
                                label="employeeID" />

                              {errors.employeeID && touched.employeeID &&
                                <ErrorMessage name="employeeID" component="span" className="error" />}


                            </FormControl>


                            {/*email */}
                            <FormControl className="signup__email">
                              <Field
                                name="adminEmail"
                                type="adminEmail"
                                as={TextField}
                                variant={!errors.adminEmail && touched.adminEmail ? "filled" : "outlined"}
                                error={errors.adminEmail && touched.adminEmail}
                                label="adminEmail"
                                placeholder="enter adminEmail"
                                size="small"
                              />
                              {errors.adminEmail && touched.adminEmail &&
                                <ErrorMessage name="adminEmail" component="span" className="error" />}
                            </FormControl>

                            <FormControl className="signup__password">

                              {/*password */}
                              <Field
                                name="adminPassword"
                                as={TextField}
                                label="adminPassword"
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
                                variant={!errors.adminPassword && touched.adminPassword ? "filled" : "outlined"}
                                error={errors.adminPassword && touched.adminPassword}
                                placeholder="enter adminPassword" />
                              {errors.adminPassword && touched.adminPassword &&
                                <ErrorMessage name="adminPassword" component="span" className="error" />}
                            </FormControl>
                            {/*confirm password */}

                            <FormControl className="signup__confirmPassword">
                              <Field
                                name="adminConfirmPassword"
                                type={confirmPassword ? "password" : "text"}
                                size="small"
                                as={TextField}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <IconButton
                                        size="small"
                                        onClick={() => setConfirmPassword(!confirmPassword)}
                                      >
                                        {confirmPassword ? <VisibilityOff /> : <Visibility />
                                        }
                                      </IconButton>

                                    </InputAdornment>
                                  ),
                                }}
                                variant={!errors.adminConfirmPassword && touched.adminConfirmPassword ? "filled" : "outlined"}
                                error={errors.adminConfirmPassword && touched.adminConfirmPassword}
                                label="confirm Password"
                                placeholder="confirm password" />
                              {errors.adminConfirmPassword && touched.adminConfirmPassword &&
                                <ErrorMessage name="adminConfirmPassword" component="span" className="error" />}
                            </FormControl>

                            <FormControl className="signup__button">
                              <Button
                                type="submit"
                                variant="outlined"
                                disabled={isSubmitting}
                                color="primary"
                              >Register</Button>

                            </FormControl>

                            <div className="signup__haveAccount">
                              <h6>Already Have an Account?
                                <Link to="/jacinta/login">
                                  <span>login</span>
                                </Link>
                              </h6>



                            </div>


                          </Form>


                        </Box>)
                    }

                  </Formik>
                )


            }


            {/*signup form */}

          </div>
        </div>
      </div>

    </div>


  )

}
export default SignUp