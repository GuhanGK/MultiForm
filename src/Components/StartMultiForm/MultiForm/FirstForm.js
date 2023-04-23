import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, InputGroup } from "react-bootstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import { MultiFormWrap } from "./style";
import * as Yup from 'yup';
import MagnifyNeo from "../../../assets/images/magnifyNeo.png";
import { useNavigate } from "react-router-dom";

const SignupFormStep1 = ({ setPropertyInfo, selectRefinance }) => {
    const [purpose, setPurpose] = useState("tolive")
    const signupSchemass = Yup.object().shape({
        depositeamt: Yup.string().required("Please enter deposit amount."),

        estimatedamt: Yup.string()
            .required("Please enter property value."),
        householdIncome: Yup
            .string()
            .notOneOf(["Select"], "Please enter household income.")
            .required("Please enter household income."),

         ...(selectRefinance && {
            refinanceSelect: Yup
                .string()
                .notOneOf(["Other"], "Please enter household income.")
                .required("Please enter household income.")
        }),
         ...(selectRefinance && {
            curentrate: Yup
                .string()
                .required("Please enter rate.")
        })
            
            // .test("greaterThanDeposit", "Property value must be $50,000 greater than the deposit amount.", function(value) {
            //     const estimatedamt = parseInt(this.parent.estimatedamt) || 0; // Access depositamt from form data
            //     const propertyValue = parseInt(value);
            //     if (propertyValue && propertyValue <= estimatedamt + 50000) {
            //         return this.createError({ message: "Property value must be $50,000 greater than the deposit amount." });
            //     }
            //     return true;
            // }),

    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(signupSchemass),
    });

    const onSubmitHandler = (data) => {
        const hasErrors = hasPersonalInfoErrors;
        if (!hasErrors) {
            setPropertyInfo("ProvideInfo")
        }
        alert(JSON.stringify({ ...data, purpose }, null, 2));
        console.log("The PropertyInfo data =====>", ...data, purpose)
    };
    
    const hasPersonalInfoErrors = errors?.depositeamt || errors?.estimatedamt;
    
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
                                    <p>About the property</p>
                                </div>

                                <div className="form-control-box">
                                    <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Label className="multi-frm-label">How much is your household income?<span className="hashsymbol">*</span></Form.Label>
                                        <Form.Select
                                            aria-label="Default select example"
                                            className="mutliform-input"
                                            {...register("householdIncome")}
                                            placeholder="Select"
                                        >
                                            <option>Select</option>
                                            <option value="1">&lt; $50,000 </option>
                                            <option value="2">$50,000 - $100,000</option>
                                            <option value="3">$100,000 - $200,000</option>
                                            <option value="4">$200,000+</option>
                                        </Form.Select>
                                    </Form.Group>
                                    {errors?.householdIncome && <div className="multifrm-error-number">{errors?.householdIncome.message}</div>}
                                </div>
                                <div className="form-control-box">
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="multi-frm-label">Purpose of the loan<span className="hashsymbol">*</span></Form.Label>
                                        <div className="purpose-loan-box">
                                            <div className={purpose === "tolive" ? "purpose-to-live" : "purpose-live1"}
                                                onClick={() => setPurpose("tolive")}
                                            >
                                                <p>To Live In</p>
                                            </div>
                                            <div
                                                className={purpose === "toinvert" ? "purpose-to-invert" : "purpose-live2"}
                                                onClick={() => setPurpose("toinvert")}
                                            >
                                                <p>To Invert</p>
                                            </div>
                                        </div>
                                    </Form.Group>
                                </div>
                                <div className="form-control-box">
                                    {selectRefinance === "refinance" ? 
                                        <Form.Label className="multi-frm-label">Estimated Loan Amount</Form.Label>
                                        :<Form.Label className="multi-frm-label">How much deposit do you have?</Form.Label>
                                    }
                                    <div className="input-group-number-section">
                                        <div className="input-group-number">
                                            <div className="input-group-prepend">
                                                <span className="input-initail-text">$</span>
                                            </div>
                                            <Form.Control
                                                type="text"
                                                placeholder=""
                                                className={errors?.depositeamt ? "mutliform-number-input inputError" : "mutliform-number-input"}
                                                {...register('depositeamt')}
                                            />
                                        </div>
                                    </div>
                                    {errors?.depositeamt && <div className="multifrm-error-number">{errors?.depositeamt.message}</div>}
                                </div>
                                <div className="form-control-box">
                                    <Form.Label className="multi-frm-label">Estimated Property Value</Form.Label>
                                    <div className="input-group-number-section">
                                        <div className="input-group-number">
                                            <div className="input-group-prepend">
                                                <span className="input-initail-text">$</span>
                                            </div>
                                            <Form.Control
                                                type="text"
                                                placeholder=""
                                                className={errors?.depositeamt ? "mutliform-number-input inputError" : "mutliform-number-input"}
                                                {...register('estimatedamt')}
                                            />
                                        </div>
                                    </div>
                                    {errors?.estimatedamt && <div className="multifrm-error-number">{errors?.estimatedamt.message}</div>}
                                </div>
                                {selectRefinance === "refinance" &&
                                    <div className="form-control-box">
                                        <Form.Label className="multi-frm-label">Current Interest Rate</Form.Label>
                                            <InputGroup className="">
                                                <Form.Control aria-label="Amount (to the nearest dollar)"
                                                    className="mutliform-input"
                                                    {...register('curentrate')}
                                                />
                                                <InputGroup.Text className="current-interest-persentage">%</InputGroup.Text>
                                    </InputGroup>
                                    {errors?.curentrate && <div className="multifrm-error-number">{errors?.curentrate.message}</div>}
                                    </div>
                                }
                                {selectRefinance === "refinance" &&
                                    <div className="form-control-box">
                                        <Form.Group className="" controlId="formBasicEmail">
                                            <Form.Label className="multi-frm-label">Current Lender<span className="hashsymbol">*</span></Form.Label>
                                            <Form.Select
                                                aria-label="Default select example"
                                                className="mutliform-input"
                                                {...register("refinanceSelect")}
                                                placeholder="Select"
                                            >
                                                <option>Other</option>
                                                <option value="1">CBA</option>
                                                <option value="2">NAB</option>
                                                <option value="3">ANZ</option>
                                                <option value="4">Westpac</option>
                                                <option value="4">Other</option>
                                            </Form.Select>
                                        </Form.Group>
                                        {errors?.refinanceSelect && <div className="multifrm-error-number">{errors?.refinanceSelect.message}</div>}
                                    </div>
                                }
                                <div className="multi-first-btn">
                                    <button type="submit">Next</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
            </MultiFormWrap>
        </>
    );
};

export default SignupFormStep1;
