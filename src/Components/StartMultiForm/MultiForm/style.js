import styled from "styled-components";

export const MultiFormWrap = styled.div`
    .start-multi-section{
        background-color: #38485a;
    }
    .multi-steps-startup-container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    .start-multi-section{
        background-color: #38485a;
    }
    .start-form-container{
        display: flex;
        justify-content: center;
        padding: 30px 10px;
    }
    .start-form-header-section{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form-container-backward{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        position: absolute;
        padding: 0px 10px;
        cursor: pointer;
        p{
            margin-bottom: 0rem;
            font: normal normal 700 18px/20px Montserrat, sans-serif;
            color: #fff;
        }
        .backward-icon{
            color: #fff;
        }
    }
    .start-form-header-logo{
        img{
            width: 192px;
            height: 50px;
        }
    }
    .steps-indicator-container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
    }
    .three-steps-indicator{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .three-main-forms-container{
        display: flex;
        justify-content: center;
    }

    .multi-form-main-container{
        display: flex;
        justify-content: center;
        padding-bottom: 8rem;
    }
    .multi-form-first{
        width: 450px;
        border: 1px solid #ff8a23;
        border-radius: 10px;
        padding: 30px 40px;
        background: #FFF;
    }
    .provide-multi-form-first{
        width: 550px;
        border: 1px solid #ff8a23;
        border-radius: 10px;
        padding: 30px 40px;
        background: #FFF;
    }
    .multi-form-first-header{
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        font: normal normal 500 25px/30px Montserrat, sans-serif;
        color: #333;
        margin-bottom: 2rem;
        span{
            font: normal normal 700 20px/30px Montserrat, sans-serif;
            color: #999;
            /* margin-bottom: 30px; */
        }
    }
    .multi-frm-label{
        font: normal normal 700 15px/20px Montserrat, sans-serif;
        color: #292929;
        margin-bottom: 10px;
    }
    .form-control-box{
        margin-bottom: 30px;
    }
    .select-time-picker select{   
    }
    .mutliform-input{
        border: 1px solid #808fa3;
        border-radius: 0.25rem;
        font-size: 16px;
        color: #333;
        height: 50px;
    }
    .current-interest-persentage{
        background: transparent;
        border: 1px solid rgb(128, 143, 163);
    }
    .mutliform-number-input{
        border: none;
        font-size: 16px;
        color: #333;
        height: 50px;
        padding-left: 4px;
    }
    .mutliform-input:focus{
        border: 1px solid #ced4da;
        box-shadow: none;
    }
    .mutliform-number-input:focus{
        border: none;
        box-shadow: none;
    }
    .multifrm-error-msg{
        font: normal normal normal 13px/20px Montserrat, sans-serif;
        color: red;
        margin-top: -1rem;
    }
    .multifrm-error-number{
        font: normal normal normal 13px/20px Montserrat, sans-serif;
        color: red;
        margin-top: 0rem;
    }
    .purpose-loan-box{
        width: 100%;
        height: 50px;
        border: 1px solid #808fa3;
        display: grid;
        grid-template-columns: 50% 50%;
        justify-content: space-around;
        border-radius: 0.25rem;
        cursor: pointer;
        .purpose-to-live{
            background-color: #ff8a23;
            border: 1px solid #ff8a23;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px 0px 0px 3px;
            p{
                font: normal normal 700 16px/20px Montserrat, sans-serif;
                margin-bottom: 0rem;
                color: #fff;
            }
        }
        .purpose-to-invert{
            background-color: #ff8a23;
            border: 1px solid #ff8a23;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 0px 3px 3px 0px;
            p{
                font: normal normal 700 16px/20px Montserrat, sans-serif;
                margin-bottom: 0rem;
                color: #fff;
            }
        }
        .purpose-live1{
            display: flex;
            justify-content: center;
            align-items: center;
            border-right: 1px solid #808fa3;
            p{
                font: normal normal normal 16px/20px Montserrat, sans-serif;
                margin-bottom: 0rem;
            }
            :hover{
                border-radius: 3px 0px 0px 3px;
                background: whitesmoke;
            }
        }
        .purpose-live2{
            display: flex;
            justify-content: center;
            align-items: center;
            border-left: 1px solid #808fa3;
            p{
                font: normal normal normal 16px/20px Montserrat, sans-serif;
                margin-bottom: 0rem;
            }
            :hover{
                border-radius: 0px 3px 3px 0px;
                background: whitesmoke;
            }
        }
    }
    .multi-first-btn{
        button{
            width: 100%;
            height: 50px;
            color: #fff;
            border-radius: 3px;
            background-color: #ff8a23;
            border: 1px solid #ff8a23;
            font-weight: 700;
            padding: 10px;
        }
    }
    .input-group-number-section{
        display: flex;
        justify-content: space-between;
        gap: 0.7rem;
    }
    .input-group-number{
        width: 100%;
        display: flex;
        align-items: center;
        border: 1px solid rgb(128, 143, 163);
        border-radius: 0.375rem;
    }
    .input-initail-text{
        padding-left: 10px;
        font: normal normal 500 16px/20px Montserrat, sans-serif;
    }
    .verify-number{
        height: 50px;
        gap: 0.6rem;
    }
    .verify-btn-box{
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font: normal normal 700 16px/20px Montserrat, sans-serif;
        color: #fff;
        border-radius: 3px !important;
        background-color: #ff8a23;
        border: 1px solid #ff8a23;
        cursor: pointer;
    }
    .second-footer-contents{
        display: flex;
    }
    .sec-footer-content{
        p{
            margin-bottom: 0rem;
            color: #292929;
            font: normal normal 400 14px/15px Montserrat, sans-serif;
            a{
                color: #ff8a23;
                text-decoration: underline;
            }
        }
        span{
            color: rgb(139, 139, 139);
            font: normal normal 400 11.2px/0px Montserrat, sans-serif;
        }
    }
    .provideinfo-footer-con{
        text-align: center;
        border-top: 1px solid rgba(0,0,0,.1);;
        p{
            color: #768599;
            font: normal normal 500 15px Montserrat, sans-serif;
        }
        .provide-hashching-broker{
            padding-top: 2rem;
            color: #768599;
            font: normal normal 500 15px Montserrat, sans-serif;
        }
    }
    .provide-btn{
        padding-bottom: 1rem;
        font: normal normal 600 18px/30px Montserrat, sans-serif;
    }

    /***********progress bar*************/
    .progress-steps-container {
        width: 100%;
    }

    .progress-step-bar {
        counter-reset: step;
    }
    .progress-step-bar li {
        list-style: none;
        display: inline-block;
        width: 30.33%;
        position: relative;
        text-align: center;
        cursor: pointer;
    }
    .progress-step-bar li:before {
        content: counter(step);
        counter-increment: step;
        width: 30px;
        height: 30px;
        line-height : 30px;
        border: 1px solid #ddd;
        border-radius: 100%;
        display: block;
        text-align: center;
        margin: 0 auto 10px auto;
        background-color: #fff;
    }
    .progress-step-bar li:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        background-color: #ddd;
        top: 15px;
        left: -50%;
        z-index : -1;
    }
    .progress-step-bar li:first-child:after {
        content: none;
    }
    .progress-step-bar li.active {
        color: green;
    }
    .progress-step-bar li.active:before {
        border-color: green;
    } 
    .progress-step-bar li.active + li:after {
        background-color: red;
    }
`;