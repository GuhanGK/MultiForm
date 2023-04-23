import React, {useState} from "react";
import { IoIosArrowBack } from 'react-icons/io';
import logo from "../../assets/images/logo.png";
import MagnifyNeo from "../../assets/images/magnifyNeo.png";
import { BiCheck } from "react-icons/bi";
import { StartMultiWrap } from "./style";
import { useNavigate } from 'react-router-dom';
import SignupFormStep1 from "./MultiForm/FirstForm";
import SignupFormStep2 from "./MultiForm/SecondForm";
import ProvideInfo from "./MultiForm/ProvideInfo";
import styled from "styled-components";
import SlectFrmType from "./SelectFormType";

const StartMultiform = () => {

    const [showHomeLoanForm, setShowHomeLoanForm] = useState(false); 
    const [showRefinanceLoanForm, setShowRefinanceLoanForm] = useState(false);

    const navigate = useNavigate();
    const [step, setStep] = useState(0);
    const [propertyInfo, setPropertyInfo] = useState("PropertyInfo")
    const [formData, setFormData] = useState({});

    const onSubmitStep1 = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
        setStep(1);
        console.log("varuthu")
    };

    const onSubmitStep2 = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
        setStep(2);
    };

    const onSubmitStep3 = (data) => {
        setFormData((prevData) => ({ ...prevData, ...data }));
        setStep(3);
        console.log(formData); // do something with the form data
    };
  
    return (
        <>
            <StartMultiWrap>
                <div className="start-multi-section">
                    <div className="multi-steps-startup-container">
                        <div className="start-form-container">
                            <div className="start-form-header-section" onClick={() => navigate(-1)}>
                                <div className="form-container-backward">
                                    <IoIosArrowBack className="backward-icon"/>
                                    <p>back</p>
                                </div>
                                <div className="start-form-header-logo">
                                    <img src={logo} alt="logo" />
                                </div>
                            </div>
                        </div>
                        <ProgressStepsContainer step={step}>
                            <div className="main-step-progress">
                                <div className="progress-steps-container">
                                    <ul className="progress-step-bar">
                                        <li className={step === 1 || step === 2 ? "active" : ""}>
                                            {step === 1 || step === 2 ? (
                                                <BiCheck className="step-done-icon" />
                                            ) : (
                                                <div className="step-not-icon">
                                                    <p>1</p>
                                                </div>
                                            )}
                                            <p>Your enquiry</p>
                                        </li>
                                        <li className={step === 2 ? "active" : ""}>
                                            {step === 2 ? (
                                                <BiCheck className="step-done-icon" />
                                            ) : (
                                                <div className="step-not-icon">
                                                    <p>2</p>
                                                </div>
                                            )}
                                            <p className="">The property</p>
                                        </li>
                                        <li className={step === 3 ? "active" : ""}>
                                            {step === 3 ? (
                                                <BiCheck className="step-done-icon" />
                                            ) : (
                                                <div className="step-not-icon">
                                                    <p>3</p>
                                                </div>
                                            )}
                                            <p>Appointment</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </ProgressStepsContainer>
                        <div className="three-main-forms-container">
                            {!showHomeLoanForm && !showRefinanceLoanForm && (
                                <SlectFrmType
                                    setStep={setStep}
                                    setShowHomeLoanForm={setShowHomeLoanForm}
                                    showHomeLoanForm={showHomeLoanForm}
                                    setShowRefinanceLoanForm={setShowRefinanceLoanForm}
                                    showRefinanceLoanForm={showRefinanceLoanForm}
                                />
                            )}
                            {showHomeLoanForm &&
                                <>
                                    {step === 1 &&
                                        <>
                                            {propertyInfo === "PropertyInfo" ?
                                                <SignupFormStep1 handleClick={onSubmitStep1}
                                                    setPropertyInfo={setPropertyInfo}
                                                />
                                                : (
                                                    <ProvideInfo setStep={setStep} step={step} />
                                                )
                                            }
                                        </>
                                    }
                                    {step === 2 && (
                                        <SignupFormStep2 handleClick={onSubmitStep2} setStep={setStep} step={step} />
                                        // <></>
                                    )}
                                    {step === 3 && (
                                        // <SignupFormStep3 handleClick={onSubmitStep3} setStep={ setStep } step={step} />
                                        <></>
                                    )}
                                </>
                            }
                            {showRefinanceLoanForm &&
                                <>
                                    {step === 1 &&
                                        <>
                                            {propertyInfo === "PropertyInfo" ?
                                                <SignupFormStep1 handleClick={onSubmitStep1}
                                                    setPropertyInfo={setPropertyInfo}
                                                    selectRefinance="refinance"
                                                />
                                                : (
                                                    <ProvideInfo setStep={setStep} step={step} />
                                                )
                                            }
                                        </>
                                    }
                                    {step === 2 && (
                                        <SignupFormStep2 handleClick={onSubmitStep2} setStep={setStep} step={step} />
                                        // <></>
                                    )}
                                    {step === 3 && (
                                        // <SignupFormStep3 handleClick={onSubmitStep3} setStep={ setStep } step={step} />
                                        <></>
                                    )}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </StartMultiWrap>
        </>
    )
}
const ProgressStepsContainer = styled.div`
  /***********progress bar*************/
    .main-step-progress {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .progress-steps-container {
    width: 530px;
  }

  .progress-step-bar {
    counter-reset: ${(props) => props.step};
    margin-bottom: 0rem;
    padding-left: 2rem;
  }
  .progress-step-bar li {
    list-style: none;
    display: inline-block;
    width: 30.33%;
    position: relative;
    text-align: center;
    cursor: pointer;
    color: #ffffff;
  }
  .progress-step-bar li:before {
    content: ${(props) => props.step};
    counter-increment: ${(props) => props.step};
    line-height: 30px;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    background-color: green !important;
  }
  .progress-step-bar li:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #ddd;
    top: 15px;
    left: -50%;
    z-index: -1;
  }
  .progress-step-bar li:first-child:after {
    content: none;
  }
  .progress-step-bar li.active {
    color: #ffffff;
  }
  .progress-step-bar li.active:before {
    border-color: red;
    background: red;
  }
  .progress-step-bar li.active + li:after {
    background-color: blue;
  }
  .progress-line {
    position: absolute;
    bottom: -5px;
    left: 0;
    height: 3px;
    width: 33.33%;
    background-color: blue;
    transition: left 0.3s ease-in-out;
  }
    .progress-step-name{
        border: 1px solid #00ba2f;
        background-color: #00ba2f;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: #ffffff;
    }
    .step-done-icon{
        border: 1px solid #00ba2f;
        background-color: #00ba2f;
        width: 43px;
        height: 43px;
        border-radius: 50%;
        color: #ffffff;
    }
    .step-not-icon{
        display: flex;
        justify-content: center;
        p{
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #ff8a23;
            background-color: #ff8a23;
            width: 43px;
            height: 43px;
            border-radius: 50%;
            color: rgb(85,85,85);
            font: normal normal 600 30px/20px Montserrat, sans-serif;
            margin-bottom: 0rem;
        }
    }
`;
export default StartMultiform;