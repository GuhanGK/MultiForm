import styled from "styled-components";

export const SelectMultiTypeWrap = styled.div`
    .start-multi-section{
        background-color: #38485a;
        height: 100vh;
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
    .type-form-first-header{
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        font: normal normal 500 25px/30px Montserrat, sans-serif;
        color: #333;
        margin-bottom: 2rem;
        p{
            margin-bottom: 0rem;
        }
        span{
            font: normal normal 700 20px/30px Montserrat, sans-serif;
            color: #999;
            /* margin-bottom: 30px; */
        }
    }
    .select-type-btn-sec{
        display: flex;
        flex-direction: column;
        justify-content: center;
        button{
            width: 360px;
            height: 69px;
            font-size: 18px;
            border-radius: 3px;
            background-color: #ff8a23;
            margin-bottom: 20px;
            padding: 23px 10px;
            line-height: normal;
            border: 1px solid #ff8a23;
            font-weight: 700;
            color: #ffffff;
        }
    }
`;