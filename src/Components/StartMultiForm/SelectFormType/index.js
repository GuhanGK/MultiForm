import React, { useState } from "react";
import MagnifyNeo from "../../../assets/images/magnifyNeo.png";
import { SelectMultiTypeWrap } from "./Style";

const SlectFrmType = ({setStep,setShowHomeLoanForm, showHomeLoanForm, setShowRefinanceLoanForm, showRefinanceLoanForm }) => {
    const handleHomeLoanButtonClick = () => {
        setShowHomeLoanForm(true);
        setShowRefinanceLoanForm(false);
        setStep(1)
    }

    const handleRefinanceLoanButtonClick = () => {
        setShowRefinanceLoanForm(true);
        setShowHomeLoanForm(false);
        setStep(1)
    }

    return (
        <>
            <SelectMultiTypeWrap>
                {/* {!showHomeLoanForm && !showRefinanceLoanForm && ( */}
                    <div className="start-multi-section">
                        <div className="multi-form-main-container">
                            <div className="main-form-img">
                                <img src={MagnifyNeo} alt="MagnifyNeo" />
                            </div>
                            <form
                                className="multi-form-first"
                            >
                                <div className="type-form-first-header">
                                    <p>What type of home loanare you looking for?</p>
                                </div>
                                {/* <br></br> */}
                                <div className="select-type-btn-sec">
                                    <button onClick={handleHomeLoanButtonClick}>New Home Loan</button>
                                    <button onClick={handleRefinanceLoanButtonClick}>Refinance a Home Loan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                {/* )} */}
            </SelectMultiTypeWrap>
            {/* {showHomeLoanForm && <StartMultiform />} */}
            {/* {showRefinanceLoanForm && <StartMultiform />} */}
        </>
    )
}
export default SlectFrmType;