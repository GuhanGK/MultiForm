import styled from "styled-components";

export const StartMultiWrap = styled.div`
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
    .main-form-img{
        img{
            width: 340px;
            height: 400px;
            position: absolute;
            margin-left: -18rem;
            margin-top: -4rem;
        }
    }

    
`;