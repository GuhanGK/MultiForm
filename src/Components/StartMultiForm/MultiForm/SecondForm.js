import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { MultiFormWrap } from "./style";
import * as Yup from 'yup';
import MagnifyNeo from "../../../assets/images/magnifyNeo.png";

const SignupFormStep2 = ({ onSubmit, setStep, step, handleClick }) => {
    const signupSchemas = Yup.object().shape({
        firstName: Yup.string().required("Please enter first name.")
            .matches(/^[a-zA-Z\s]+$/, "Enter valid first name (only alphabets allowed)")
            .min(2, "Please enter at least 2 characters."),

        email: Yup.string()
            .email("Please enter a valid email")
            .required("Please enter your email."),
        
        number: Yup.string().required('Please enter mobile number.')
            .matches(/^\d+$/, 'Please enter a valid mobile number'),
        
        postcode: Yup.string().required("Please enter valid suburb or postcode"),

        scheduleTime: Yup.string().required("Please select time.").
            notOneOf(['Select Time'], "Please select time."),
        
        scheduleDate: Yup.string().required("Please select date.").
            notOneOf(['Select Date'], "Please select date."),

    });
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchemas),
    });

    const onSubmitHandler = (data) => {
        // onSubmit(data);
        setStep(step + 1)
        alert(JSON.stringify(data, null, 2));
    };

    const hasPersonalInfoErrors = errors?.firstName || errors?.email || errors?.number || errors?.postcode
        || errors?.scheduleTime || errors?.scheduleDate;

    return (
        <>
            <MultiFormWrap>
                <div className="start-multi-section">
                    <div className="multi-form-main-container">
                        <div className="main-form-img">
                            <img src={MagnifyNeo} alt="MagnifyNeo" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmitHandler)}
                            className="multi-form-first"
                        >
                            <div className="multi-form-first-header">
                                <p>Choose when you would like to be contacted</p>
                                <span>FREE Consultation</span>
                            </div>

                            <div className="form-control-box"> 
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="multi-frm-label">What is the best day to contact you?<span className="hashsymbol">*</span></Form.Label>
                                    <Form.Select aria-label="Default select example"
                                        className="mutliform-input"
                                        {...register("scheduleDate")}
                                    >
                                        <option>Select Date</option>
                                        <option value="1">&lt; $50,000 </option>
                                        <option value="2">$50,000 - $100,000</option>
                                        <option value="3">$100,000 - $200,000</option>
                                        <option value="4">$200,000+</option>
                                    </Form.Select>
                                </Form.Group>
                                {errors?.scheduleDate && <div className="multifrm-error-msg">{errors?.scheduleDate.message}</div>}
                            </div>
                            <div className="form-control-box select-time-picker">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="multi-frm-label">What is the best time?<span className="hashsymbol">*</span></Form.Label>
                                    <Form.Select aria-label="Default select example"
                                        className="mutliform-input"
                                        {...register("scheduleTime")}
                                    >
                                        <option>Select Time</option>
                                        <option value="1">08:00 AM-08:15 AM</option>
                                        <option value="2">08:15 AM-08:30 AM</option>
                                        <option value="3">08:30 AM-08:45 AM</option>
                                        <option value="4">08:45 AM-09:00 AM</option>
                                        <option value="5">09:00 AM-09:15 AM</option>
                                        <option value="6">09:15 AM-09:30 AM</option>
                                        <option value="7">09:30 AM-09:45 AM</option>
                                        <option value="8">09:45 AM-10:00 AM</option>
                                    </Form.Select>
                                </Form.Group>
                                {errors?.scheduleTime && <div className="multifrm-error-msg">{errors?.scheduleTime.message}</div>}
                            </div>
                            <div className="form-control-box">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="multi-frm-label">Your first name<span className="hashsymbol">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        className={errors?.firstName ? "mutliform-input inputError" : "mutliform-input"}
                                        {...register('firstName')}
                                    />
                                </Form.Group>
                                {errors?.firstName && <div className="multifrm-error-msg">{errors?.firstName.message}</div>}
                            </div>
                            <div className="form-control-box">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="multi-frm-label">Your email<span className="hashsymbol">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="example@example.com"
                                        className={errors?.email ? "mutliform-input inputError" : "mutliform-input"}
                                        {...register('email')}
                                    />
                                </Form.Group>
                                {errors?.email && <div className="multifrm-error-msg">{errors?.email.message}</div>}
                            </div>
                            <div className="form-control-box">
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="multi-frm-label">Your suburb/postcode<span className="hashsymbol">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your suburb or postcode"
                                        className={errors?.postcode ? "mutliform-input inputError" : "mutliform-input"}
                                        {...register('postcode')}
                                    />
                                </Form.Group>
                                {errors?.postcode && <div className="multifrm-error-msg">{errors?.postcode.message}</div>}
                            </div>
                            <div>
                                <Form.Label className="multi-frm-label">Your mobile number</Form.Label>
                                    <div className="input-group-number-section">
                                        <div className="input-group-number">
                                            <div className="input-group-prepend">
                                                <span className="input-initail-text">+61</span>
                                            </div>
                                            <Form.Control
                                                type="text"
                                                placeholder=""
                                                className={errors?.number ? "mutliform-number-input inputError" : "mutliform-number-input"}
                                                {...register('number')}
                                            />
                                        </div>
                                        <button className="verify-btn-box">
                                            Verify
                                        </button>
                                    </div>
                                        {errors?.number && <div className="multifrm-error-number">{errors?.number.message}</div>}
                                        {/* {isValid && <p variant="success">ABN is valid!</p>}
                                        {!isValid ? (
                                            <p className="text-danger">ABN is not valid!</p>
                                        ) : ""} */}
                            </div>
                            <br></br>
                            <div className="multi-second-footer">
                                <div className="second-footer-contents">
                                    <div>
                                        <Form.Check 
                                            type="checkbox"
                                            label=""
                                        />
                                    </div>
                                    <div className="sec-footer-content">   
                                        <p>I consent to receive special offers and marketing materials from Hashching. You can change this anytime from the settings page on your dashboard.</p>
                                        <span>(Don't worry, we will never give away or sell your details to 3rd parties.)</span>
                                    </div>
                                </div>
                                <br></br>
                                <div className="second-footer-contents">
                                    <div>
                                        <Form.Check 
                                            type="checkbox"
                                            label=""
                                        />
                                    </div>
                                    <div className="sec-footer-content">   
                                        <p>I agree to Hashching's <a href="#">Privacy Policy</a>  and
                                            <a href="#"> Terms of use.</a> Please arrange for a Hashching partner broker to  contact me.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="multi-first-btn">
                                <button type="submit">Confirm booking</button>
                            </div> 
                        </form>
                        
                    </div>
                </div>
            </MultiFormWrap>
        </>
    );
};

export default SignupFormStep2;