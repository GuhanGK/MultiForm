import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { MultiFormWrap } from "./style";
import * as Yup from 'yup';
import { IoIosArrowBack } from 'react-icons/io';
import MagnifyNeo from "../../../assets/images/magnifyNeo.png";
import { useNavigate } from "react-router-dom";

const ProvideInfo = ({setStep, step}) => {
    const navigate = useNavigate();
    const signupSchemasss = Yup.object().shape({
        email: Yup.string()
            .email("Please enter a valid email")
            .required("Please enter your email."),
        
        firstName: Yup.string().required("Please enter first name.")
        .matches(/^[a-zA-Z\s]+$/, "Enter valid first name (only alphabets allowed)")
        .min(2, "Please enter at least 2 characters."),

    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchemasss),
    });

    const onSubmitHandler = (data) => {
        alert(JSON.stringify(data, null, 2));
        console.log("The ProvideIndo data =====>", data)
        setStep(step + 1)
    };
    
    return (
        <>
            <MultiFormWrap>
                <div className="start-multi-section">
                    <div className="multi-form-main-container">
                        <div className="main-form-img">
                            <img src={MagnifyNeo} alt="MagnifyNeo" />
                        </div>
                        <form onSubmit={handleSubmit(onSubmitHandler)} 
                            className="provide-multi-form-first"
                        >
                            <div className="multi-form-first-header">
                                <p>Provide information about the main applicant of the loan</p>
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
                            <div className="multi-first-btn provide-btn">
                                <button type="submit">Create Appointment</button>
                            </div> 
                            <br></br>
                            <div className="provideinfo-footer-con">
                                <p className="provide-hashching-broker">Connecting with a Hashching broker is free of charge and obligation-free.</p>
                                <p>Your data is safe with us. Don’t worry, no spam or selling it to other affiliates</p>
                                <p>We may send you relevant information on market trends,
                                    news and rates updates so you can make informed decisions.
                                    Access top rates and products from over 100+ lenders and growing</p>
                            </div>
                        </form>
                    </div>
                </div>
            </MultiFormWrap>
        </>
    );
};

export default ProvideInfo;