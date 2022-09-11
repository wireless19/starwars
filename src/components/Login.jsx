
import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


function Login() {
    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    async function onSubmitForm(values) {

        console.log(values);
        if (values) {
            navigate("/dashboard");
        }
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="logoContainer col-lg-3 col-md-3 col-sm-12">
                    <img className="logo" src="/img/logo.png" alt="logo" />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 formContainer">
                    <div className="container">
                        <div className="card">
                            <div className="card-body p-5">
                                <h4>Login</h4>
                                <p className="mb-5">Kindly enter your details to log in</p>

                                <form onSubmit={handleSubmit(onSubmitForm)}>
                                    <div className="mb-1">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" className={`form-control form-control-lg ${errors.emailuser && errors.emailuser.message ? "bocolor" : null}`}
                                            id="exampleInputEmail1"
                                            name="emailuser" {...register("emailuser",
                                                {
                                                    required: "*Please enter your email",
                                                    pattern: {
                                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                        message: "Please enter a valid email",
                                                    },
                                                }
                                            )}
                                            autoComplete="off"
                                            aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-2">
                                        <span className="errorcolor">{errors.emailuser && errors.emailuser.message}</span>
                                    </div>
                                    <br />

                                    <div className="mb-3">
                                        <label for="exampleInputPassword1" className="form-label">Password</label>
                                        <input type="password" className={`form-control form-control-lg ${errors.password && errors.password.message ? "bocolor" : null}`}
                                            id="exampleInputPassword1"
                                            name="password"
                                            {...register("password",
                                                {
                                                    required: "*Please enter your Password",

                                                    pattern: {
                                                        value: /([a-zA-Z]{3})+[0-9]{3}/,
                                                        message: "Password must contain letters and numbers only",
                                                    },
                                                })}
                                        />
                                        <span className="errorcolor">{errors.password && errors.password.message}</span><br />
                                    </div>

                                    <button type="submit" className="btn btn-lg buttonColor text-white w-100">Log in</button>
                                </form>

                                <div className="text-center pt-3">
                                    <p className="forgotp">Forgot your password?</p>
                                </div>
                                <div className="text-center pt-5">
                                    <p>
                                        <span>Privacy Policy</span> <span className="andText"> and </span>
                                        <span>Terms of services</span>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Login;